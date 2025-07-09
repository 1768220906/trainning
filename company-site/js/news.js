const baseUrl =
  window.API_BASE_URL === "__API_BASE_URL__"
    ? "http://localhost:8080/"
    : window.API_BASE_URL; //本地
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
    data-uuid="${item.uuid}"
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

// 新闻详情请求
async function fetchNewsDetail(id) {
  const url = baseUrl + "api/news/detail";
  const fullUrl = `${url}?id=${id}`;
  const res = await fetch(fullUrl);
  const data = await res.json();
  return Promise.resolve(data);
}

const detailtContenTemplates = [
  {
    type: "image",
    render: (value) => {
      return `
        <div class="w-full sm:h-165 h-60 sm:mb-14 mb-6">
          <img
            class="w-full h-full object-cover"
            src="${value}"
            />
        </div>
      `;
    },
  },
  {
    type: "title",
    render: (value) => {
      return `
        <div
          class="sm:text-[36px] sm:leading-7 leading-6 font-semibold text-center mt-5 px-5 sm:px-0"
          >
          <span>${value}</span>
        </div>
      `;
    },
  },
  {
    type: "source",
    render: (value) => {
      return `
        <div
          class="text-[12px] sm:text-xl sm:leading-7 leading-4 text-center my-8 text-[#B1B1B1]"
          >
          <span>${value}</span>
        </div>
      `;
    },
  },
  {
    type: "small-title",
    render: (value) => {
      return `
        <div class="leading-7 font-semibold text-sm sm:text-xl">
          <span>${value}</span>
        </div>
      `;
    },
  },
  {
    type: "paragraph",
    render: (value) => {
      return `
        <div class="text-sm sm:leading-7 leading-6 text-indent-28px">
          <span>${value}</span>
        </div>
      `;
    },
  },
  {
    type: "anchor",
    render: (value) => {
      return `
        <div class="text-sm sm:leading-7 leading-6 text-indent-28px my-7">
          <span> ${value} </span>
        </div>
      `;
    },
  },
];

// 渲染新闻详情
async function renderNewsDetail(id) {
  const data = await fetchNewsDetail(id);
  const detailContent = document.querySelector("#news-detail-content");
  detailContent.replaceChildren();
  const detailFragment = document.createDocumentFragment();
  data.data.forEach((item) => {
    const template = detailtContenTemplates.find((t) => t.type === item.type);
    if (template) {
      const content = template.render(item.value);
      const contentElement = document.createElement("div");
      contentElement.innerHTML = content;
      detailFragment.appendChild(contentElement);
    }
  });
  detailContent.appendChild(detailFragment);
}

const newsListContent = document.querySelector("#news-list-content");

// 重新渲染列表
function renderList(listData) {
  newsListContent.replaceChildren();
  const listFragment = document.createDocumentFragment();
  listData.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.innerHTML = newsItemTemplate(item);
    // 给所有新闻添加上点击事件
    newsItem.addEventListener("click", (e) => {
      navigateTo(`/news/detail?id=${item.uuid}`);
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
  totalPages = parseInt(data.links.total / pageSize);
  currentPage = data.links.current;
  pageSize = data.links.pageSize;
  renderList(data.data);
  renderPages();
}
