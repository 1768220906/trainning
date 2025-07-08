const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const newsRoutes = require("./routes/news");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const env = process.env.NODE_ENV || "dev";

require("dotenv").config({
  path: `.env.${env}`, // 如 .env.dev、.env.prod、.env.test
});

const app = express();
const PORT = process.env.PORT || 8080;

const whitelist = [
  "http://127.0.0.1:3000",
  process.env.FRONTEND_URL_dev,
];

// 安全中间件
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// 请求限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// 基础中间件
app.use(compression());
app.use(morgan("combined"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 健康检查
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API 路由
app.use("/api/news", newsRoutes);

// 错误处理中间件
app.use(notFound);
app.use(errorHandler);

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
