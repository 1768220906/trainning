const logo = document.querySelector(".logo");

function reload() {
  window.location.reload();
}

logo.addEventListener("click", reload);

const navs = document.querySelectorAll(".nav .item");
const navContents = document.querySelectorAll("#nav-content");

// 清除所有 nav 的 active 类
function clearNavActive() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}

// 清除所有 navContent 的 active 类
function clearNavContentCurrent() {
  navContents.forEach((navContent) => {
    navContent.classList.remove("show");
  });
}

// 给所有nav添加点击事件
function addNavClick() {
  navs.forEach((nav, index) => {
    nav.addEventListener("click", (event) => {
      clearNavActive();
      clearNavContentCurrent();
      nav.classList.add("active");
      navContents[index].classList.add("show");

      // 地图初始化
      if(event.target.dataset.target.includes("about")){
        initMap();
      }

    });
  });
}

addNavClick();
