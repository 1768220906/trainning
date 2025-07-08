// 数据库配置示例
// 根据你选择的数据库类型，取消注释相应的配置

// MongoDB with Mongoose
/*
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
*/

// PostgreSQL with pg
/*
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
*/

// MySQL with mysql2
/*
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
*/

console.log("Database configuration loaded")
