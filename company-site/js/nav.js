const logo = document.querySelector(".logo");

function reload() {
  window.location.reload();
}

logo.addEventListener("click", reload);

const navs = document.querySelectorAll(".nav .item");

// 清楚所有 nav 的 active 类
function clearNavActive() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}

// 给所有nav添加点击事件
function addNavClick() {
  navs.forEach((nav) => {
    nav.addEventListener("click", () => {
      clearNavActive();
      nav.classList.add("active");
    });
  });
}
addNavClick();
