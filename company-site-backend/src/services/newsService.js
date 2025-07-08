const axios = require("axios");
const { getArticleContent } = require("../utils/crawlArticle");

const BASE_URL = "https://gnews.io/api/v4/top-headlines";

// 默认参数
const DEFAULT_PARAMS = {
  lang: "zh",
  country: "cn",
  category: "general",
  page: 1,
  pageSize: 10,
};

/**
 * 获取新闻列表（支持分页和筛选参数）
 * @param {Object} options - 查询参数
 * @param {number} options.page - 页码
 * @param {number} options.pageSize - 每页数量
 * @param {string} options.country - 国家代码（如 cn, us）
 * @param {string} options.category - 新闻分类（如 general, business, sports）
 * @param {string} options.lang - 语言代码（如 en, zh）
 * @param {string} options.q - 关键词（可选）
 * @returns {Promise<{status: number, data: object}>}
 */
async function getNews(options = {}) {
  const apikey = process.env.NEWS_API_KEY;

  if (!apikey) {
    throw new Error("NEWS_API_KEY not found in environment variables.");
  }

  const params = {
    ...DEFAULT_PARAMS,
    ...options,
    apikey,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    // 报错时打印有用信息
    console.error("GNews API 请求失败:", {
      status: err.response?.status,
      message: err.response?.data?.message || err.message,
    });

    throw new Error(
      err.response?.data?.message ||
        `Failed to fetch news from GNews API: ${err.message}`
    );
  }
}

// 获取新闻详情
async function getNewsDetail(URL) {
  const content = await getArticleContent(URL);
  return { content };
}

module.exports = {
  getNews,
  getNewsDetail
};
