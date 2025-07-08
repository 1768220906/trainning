const express = require("express");
const { asyncHandler } = require("../middleware/asyncHandler");
const { getNews } = require("../services/newsService");

const router = express.Router();

router.get(
  "/list",
  [],
  asyncHandler(async (req, res) => {
    const page = Number.parseInt(req.query.page) || 1;
    const pageSize = Number.parseInt(req.query.pageSize) || 10;

    // 可选参数支持前端传入
    const country = req.query.country || "uc";
    const category = req.query.category || "general";
    const lang = req.query.lang || "zh";
    const q = req.query.q;

    const result = await getNews({
      country,
      category,
      lang,
      q,
    });

    const articles = result.data.articles || [];

    const total = result.data.totalArticles || articles.length;

    // 手动分页
    const startIndex = (page - 1) * pageSize;
    const paginated = articles.slice(startIndex, startIndex + pageSize);

    res.status(200).json({
      success: true,
      data: paginated,
      links: {
        total,
        current: page,
        pageSize,
      },
    });
  })
);

module.exports = router;
