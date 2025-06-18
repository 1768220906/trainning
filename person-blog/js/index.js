// 动态添加主体数据
const mainContent = document.querySelector(".main-content"); // 获取主体内容容器

async function renderMainContent() {
  // 创建片段
  const fragment = document.createDocumentFragment();

  // 检查主体内容容器是否存在
  if (!mainContent) {
    console.error("主体内容容器不存在");
    return;
  }

  // 获取数据
  const res = await fetch("/asset/json/data.json");
  if (!res.ok) {
    console.error("数据加载失败:", res.statusText);
    return;
  }

  const data = await res.json();
  if (!data || Array.isArray(data) === false || data.length === 0) {
    console.error("数据格式错误或为空");
    return;
  }
  console.log("数据加载成功:", data);
  // 动态渲染
  mainContent.innerHTML = ""; // 清空现有内容

  data.forEach((mainItemData) => {
    const mainItem = document.createElement("div");
    mainItem.classList.add("main-item");

    mainItem.id = mainItemData.id; // 设置 id 属性

    const mainItemTitle = document.createElement("div");
    mainItemTitle.classList.add("item-title");
    mainItemTitle.textContent = mainItemData.title; // 设置标题内容
    const mainItemContent = document.createElement("div");
    mainItemContent.classList.add("item-content");

    mainItemData.items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item-content-item");
      itemElement.classList.add("link"); // 添加 link 类以便跳转
      itemElement.setAttribute("data-src", item.link); // 设置跳转链接

      // 图片
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("item-image");

      const imgElement = document.createElement("img");
      imgElement.src = item.image; // 设置图片路径
      imgElement.alt = item.alt; // 设置图片 alt 属性
      imgElement.title = item.title; // 设置图片 title 属性

      imgContainer.appendChild(imgElement); // 将图片添加到容器中

      // 描述
      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("item-description");
      descriptionElement.textContent = item.description; // 设置描述内容

      itemElement.appendChild(imgContainer); // 将图片容器添加到主体项中
      itemElement.appendChild(descriptionElement); // 将描述添加到主体项中

      mainItemContent.appendChild(itemElement); // 将主体项添加到内容容器中
    });

    // 将标题添加到主体项中
    mainItem.appendChild(mainItemTitle);
    // 将内容容器添加到主体项中
    mainItem.appendChild(mainItemContent);

    // 将主体项添加到片段中
    fragment.appendChild(mainItem);
  });

  // 将片段添加到主体内容容器中
  mainContent.appendChild(fragment);
}

// 初始化函数
async function init() {
  await renderMainContent(); // 渲染主体内容
  addEventListeners(); // 添加事件监听器
}

init()  