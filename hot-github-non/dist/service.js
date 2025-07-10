// GitHub 热门项目 API 请求服务
async function getHotProjects(params = {}) {
  return await request.get("/search/repositories", params);
}

// GitHub 用户信息 API 请求服务
async function getUserInfo({ username = "" }) {
  return await request.get(`/users/${username}`);
}
