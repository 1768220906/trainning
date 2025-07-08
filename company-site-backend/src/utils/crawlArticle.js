// crawlArticle.js
const axios = require("axios");
const cheerio = require("cheerio");


/**
 * 提取文章正文、标题和发布时间等内容
 * @param {string} url 新闻详情页 URL
 */
async function getArticleContent(url) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(html);

    // 标题选择器集合
    const title =
      $("h1").first().text().trim() ||
      $("title").text().trim() ||
      $("meta[property='og:title']").attr("content") ||
      "";

    // 发布时间选择器集合（有些是 time 标签）
    const pubTime =
      $("time").attr("datetime") ||
      $("meta[property='article:published_time']").attr("content") ||
      $("span.date").text().trim() ||
      "";

    // 正文选择器集合（尽量多些通用容器）
    const content =
      $("article").text().trim() ||
      $(".article-content").text().trim() ||
      $(".article-body").text().trim() ||
      $(".content").text().trim() ||
      $("#main-content").text().trim() ||
      "";

    if (!content) {
      console.warn(`⚠️ 未提取到正文内容: ${url}`);
    }

    return {
      url,
      title,
      pubTime,
      content,
    };
  } catch (err) {
    console.error(`❌ 抓取失败: ${url} - ${err.message}`);
    return null;
  }
}

module.exports = {
  getArticleContent,
};
