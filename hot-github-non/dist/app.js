const { useEffect } = React;
const { createRoot } = ReactDOM;

const params = {
  q: "stars:>1", // 查询条件：star > 1
  sort: "stars", // 按 star 排序
  order: "desc", // 降序
  type: "Repositories", // 限定为仓库
  page: 1, // 第 1 页
  per_page: 10, // 每页 10 条
};

// 定义组件
function App() {
  useEffect(() => {
    request.get("search/repositories", params).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Hello World</div>;
}

// 渲染组件
createRoot(document.getElementById("root")).render(<App />);
