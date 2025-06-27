const logo = document.querySelector("#logo");

function reload() {
  window.location.reload();
}

logo.addEventListener("click", reload);

const navs = document.querySelectorAll("#nav");
const navContents = document.querySelectorAll("#nav-content");

// 清除所有 nav 的 active 类
function clearNavActive() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}

// 给所有的添加上 hidden 类
function clearNavContentCurrent() {
  navContents.forEach((navContent) => {
    navContent.classList.add("hidden");
  });
}

// 给所有nav添加点击事件
function addNavClick() {
  console.log(navs);
  
  navs.forEach((nav, index) => {
    nav.addEventListener("click", (event) => {
      clearNavActive();
      clearNavContentCurrent();
      navContents[index].classList.remove("hidden");
      nav.classList.add("active");

      // 地图初始化
      if (event.target.dataset.target.includes("about")) {
        initMap();
      }
    });
  });
}

addNavClick();

function initEvent() {

}
