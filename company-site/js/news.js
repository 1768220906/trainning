const baseUrl = "http://localhost:8080/"; //本地
// const baseUrl = "/api/";   // prod

// 新闻请求
async function fetchNewsList(params = {}) {
  const url = baseUrl + "api/news/list";
  const urlParams = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${urlParams}`;
  const res = await fetch(fullUrl);
  const data = await res.json();
  return Promise.resolve(data);
}

// 模板
const newsItemTemplate = (item) => {
  return `
 <div
    class="flex flex-col sm:gap-7 gap-4 w-full cursor-pointer"
    id="news"
    >
      <div class="aspect-news-box overflow-hidden">
        <img
          class="w-full h-full object-cover hover:scale-110"
          src="${item.image}"
          alt=""
        />
      </div>
      <div
        class="font-semibold leading-6 sm:text-xl sm:leading-7 text-[#353535] hover:underline"
        >
        ${item.title}
      </div>
      <div class="text-sm sm:leading-7 leading-6 multiline-ellipsis">
        ${item.description}
      </div>
  </div>
 `;
};

const newsListContent = document.querySelector("#news-list-content");

// 重新渲染列表
function renderList(listData) {
  newsListContent.replaceChildren();
  const listFragment = document.createDocumentFragment();
  listData.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.innerHTML = newsItemTemplate(item);
    // 给所有新闻添加上点击事件
    newsItem.addEventListener("click", () => {
      newsListContainer.classList.add("hidden");
      newsDetailContainer.classList.remove("hidden");
    });
    listFragment.appendChild(newsItem);
  });
  newsListContent.appendChild(listFragment);
}

async function renderNewsList() {
  const params = {
    page: currentPage,
    pageSize,
  };
  const data = await fetchNewsList(params);
  totalPages = data.links.total;
  currentPage = data.links.current;
  pageSize = data.links.pageSize;
  renderList(data.data);
  renderPages();
}

renderNewsList();
