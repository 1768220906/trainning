# Node.js Backend Project

一个功能完整的 Node.js 后台项目模板，包含用户认证、API 路由、错误处理等常用功能。

## 功能特性

- ✅ Express.js 服务器
- ✅ 用户认证 (JWT)
- ✅ 密码加密 (bcrypt)
- ✅ 输入验证
- ✅ 错误处理中间件
- ✅ 请求限制
- ✅ 安全中间件 (helmet, cors)
- ✅ 日志记录
- ✅ 健康检查端点
- ✅ 环境变量配置

## 快速开始

### 1. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 2. 环境配置

复制 `.env.example` 到 `.env` 并配置你的环境变量：

\`\`\`bash
cp .env.example .env
\`\`\`

### 3. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

### 4. 启动生产服务器

\`\`\`bash
npm start
\`\`\`

## API 端点

### 认证相关

- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录

### 用户相关

- `GET /api/users/me` - 获取当前用户信息 (需要认证)
- `GET /api/users` - 获取用户列表 (需要认证)

### 系统

- `GET /health` - 健康检查

## 项目结构

\`\`\`
src/
├── app.js              # 应用入口
├── routes/             # 路由文件
│   ├── auth.js         # 认证路由
│   └── users.js        # 用户路由
├── middleware/         # 中间件
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── asyncHandler.js
├── config/             # 配置文件
│   └── database.js     # 数据库配置
├── utils/              # 工具函数
│   └── logger.js       # 日志工具
└── logs/               # 日志文件目录
\`\`\`

## 使用示例

### 注册用户

\`\`\`bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "张三",
    "email": "zhangsan@example.com",
    "password": "123456"
  }'
\`\`\`

### 登录

\`\`\`bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "zhangsan@example.com",
    "password": "123456"
  }'
\`\`\`

### 获取用户信息

\`\`\`bash
curl -X GET http://localhost:3000/api/users/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
\`\`\`

## 开发命令

- `npm run dev` - 启动开发服务器 (使用 nodemon)
- `npm start` - 启动生产服务器
- `npm test` - 运行测试
- `npm run lint` - 代码检查
- `npm run lint:fix` - 自动修复代码问题

## 数据库集成

项目支持多种数据库，在 `src/config/database.js` 中取消注释相应的配置：

- MongoDB (使用 Mongoose)
- PostgreSQL (使用 pg)
- MySQL (使用 mysql2)

## 部署

1. 设置生产环境变量
2. 安装生产依赖：`npm ci --only=production`
3. 启动应用：`npm start`

## 许可证

MIT
