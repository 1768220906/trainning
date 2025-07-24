// request.js
// 创建 axios 实例
const service = axios.create({
  baseURL: "https://api.github.com", // ✅ 可根据环境变量配置
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 👉 可以添加 token 等信息
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data, status } = response;
    
    // ✅ 统一处理响应数据

    if (status !== 200) {
      alert(`请求错误：${status}错误:${data.message}`);
    }

    return data;
  },
  (error) => {
    // ✅ 统一处理错误
    if (error.response) {
      console.error("响应错误：", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("无响应返回：", error.request);
    } else {
      console.error("请求出错：", error.message);
    }
    return Promise.reject(error);
  }
);

// 封装请求方法
const request = {
  get: function (url, params = {}) {
    return service.get(url, { params });
  },

  post: function (url, data = {}) {
    return service.post(url, data);
  },

  put: function (url, data = {}) {
    return service.put(url, data);
  },

  delete: function (url) {
    return service.delete(url);
  },
};
