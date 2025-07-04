// doms
const menuButton = document.querySelector("#menuButton");
const drawer = document.querySelector("#drawer");
const closeButton = document.querySelector("#closeDrawer");

// 给点击事件
function addMenuClick() {
  menuButton.addEventListener("click", () => {
    drawer.classList.remove("translate-x-full");
  });
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawer.classList.add("translate-x-full");
  });
}

addMenuClick();

const menuLinks = document.querySelectorAll(".menu-item");

// 清楚菜单项激活状态
function clearMenuActive() {
  menuLinks.forEach((link) => {
    link.classList.remove("text-[#ff350d]");
  });
}

// 给菜单项点击事件
function addMenuLinkClick() {
  menuLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {      
      clearMenuActive();
      clearNavContentCurrent();
      
      navContents[index].classList.remove("hidden");
      menuLinks[index].classList.add("text-[#ff350d]");
      drawer.classList.add("translate-x-full");

      // 地图初始化
      if (event.target.dataset.target.includes("about")) {
        initMap();
      }

      // 回到列表页
      newsDetailContainer.classList.add("hidden");
      newsListContainer.classList.remove("hidden");
    });
  });
}

addMenuLinkClick();
