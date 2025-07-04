const express = require("express");
const { asyncHandler } = require("../middleware/asyncHandler");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();
const axios = require("axios");

// token
const apikey = "90f0a1588539d52bc1f9246895e2e95d";
const category = "general";
const country = "cn";
const lang = "zh";

const url = "https://gnews.io/api/v4/top-headlines";

// 获取新闻函数
function getNews() {
  return axios.get(url, {
    params: {
      apikey,
      lang,
      country,
      category,
    },
  });
}

// 获取新闻列表
router.get(
  "/list",
  [],
  asyncHandler(async (req, res) => {
    const page = Number.parseInt(req.query.page) || 1;
    const pageSize = Number.parseInt(req.query.pageSize) || 10;

    const result = await getNews(page, pageSize);
    if (result.status !== 200) {
      return res.status(500).json({
        success: false,
        message: "Failed to get news list",
      });
    }

    const total = result.data.totalArticles;
    const articles = result.data.articles;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const data = articles.slice(startIndex, endIndex);

    res.status(200).json({
      success: true,
      data: data,
      links: {
        total,
        current: page,
        pageSize,
      },
    });
  })
);

module.exports = router;
