const express = require("express")
const { asyncHandler } = require("../middleware/asyncHandler")
const { authenticate } = require("../middleware/authMiddleware")

const router = express.Router()

// 模拟用户数据库
const users = []

// 获取当前用户信息
router.get(
  "/me",
  authenticate,
  asyncHandler(async (req, res) => {
    const user = users.find((user) => user.id === req.user.userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
        },
      },
    })
  }),
)

// 获取所有用户（需要认证）
router.get(
  "/",
  authenticate,
  asyncHandler(async (req, res) => {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const paginatedUsers = users.slice(startIndex, endIndex).map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
    }))

    res.json({
      success: true,
      data: {
        users: paginatedUsers,
        pagination: {
          page,
          limit,
          total: users.length,
          pages: Math.ceil(users.length / limit),
        },
      },
    })
  }),
)

module.exports = router
