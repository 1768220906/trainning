const fs = require("fs")
const path = require("path")

// 确保日志目录存在
const logDir = path.join(__dirname, "../logs")
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

const logger = {
  info: (message, meta = {}) => {
    const logEntry = {
      level: "INFO",
      timestamp: new Date().toISOString(),
      message,
      meta,
    }
    console.log(JSON.stringify(logEntry))

    // 写入文件
    fs.appendFileSync(path.join(logDir, "app.log"), JSON.stringify(logEntry) + "\n")
  },

  error: (message, error = {}) => {
    const logEntry = {
      level: "ERROR",
      timestamp: new Date().toISOString(),
      message,
      error: error.stack || error,
    }
    console.error(JSON.stringify(logEntry))

    // 写入文件
    fs.appendFileSync(path.join(logDir, "error.log"), JSON.stringify(logEntry) + "\n")
  },

  warn: (message, meta = {}) => {
    const logEntry = {
      level: "WARN",
      timestamp: new Date().toISOString(),
      message,
      meta,
    }
    console.warn(JSON.stringify(logEntry))

    // 写入文件
    fs.appendFileSync(path.join(logDir, "app.log"), JSON.stringify(logEntry) + "\n")
  },
}

module.exports = logger
