// 页面跳转
function jumpTo(url) {
  if (url) {
    window.open(url, "_self");
  }
}

// 锚点跳转
function jumpToAnchor(anchor) {
  if (anchor) {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("锚点元素不存在:", anchor);
    }
  }
}

// 刷新页面
function refreshPage() {
  window.location.reload();
}

// 为每个跳转元素添加点击事件
const links = document.querySelectorAll(".link"); // 获取跳转元素
links.forEach((link) => {
  link.addEventListener("click", function () {
    console.log(this);

    // 获取元素的 data-src 属性
    if (!this.getAttribute("data-src")) {
      console.warn("跳转元素缺少 data-src 属性");
      return;
    }
    const url = this.getAttribute("data-src");
    jumpTo(url);
  });
});

// 为刷新按钮添加点击事件
const refreshButton = document.querySelector("#refresh"); // 获取刷新按钮
if (refreshButton) {
  refreshButton.addEventListener("click", function () {
    refreshPage();
  });
}

// 为锚点链接添加点击事件
const anchorLinks = document.querySelectorAll(".anchor"); // 获取锚点链接
anchorLinks.forEach((anchorLink) => {
  anchorLink.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止默认行为
    if (!this.getAttribute("data-anchor")) {
      console.warn("锚点链接缺少 data-anchor 属性");
      return;
    }
    const idSelect = this.getAttribute("data-anchor");
    const anchor = `#${idSelect}`; // 构建锚点选择器
    jumpToAnchor(anchor);
  });
});
