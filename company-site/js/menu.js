// doms
const menuButton = document.querySelector("#menuButton");
const drawer = document.querySelector("#drawer");
const closeButton = document.querySelector("#closeDrawer");

console.log(menuButton, closeButton);

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
