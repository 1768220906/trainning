const pageSizeSelect = document.getElementById("pageSize");
const pageNumbersContainer = document.getElementById("pageNumbers");
const gotoInput = document.getElementById("gotoInput");

let currentPage = 1;
let totalPages = 100; // 假设总页数是100
let pageSize = 8; // 默认每页显示10条

function renderPages() {
  pageNumbersContainer.innerHTML = "";

  const createBtn = (
    label,
    page,
    disabled = false,
    active = false,
    isNumber = true
  ) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    if (disabled) btn.disabled = true;
    if (active) btn.classList.add("active");
    if (isNumber) btn.classList.add("number");
    btn.onclick = () => {
      if (!disabled) {
        currentPage = page;
        renderNewsList();
      }
    };
    return btn;
  };

  // 上一页
  pageNumbersContainer.appendChild(
    createBtn("＜", currentPage - 1, currentPage === 1, false, false)
  );

  // 页码展示
  const maxPageButtons = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxPageButtons - 1);

  if (end - start < maxPageButtons - 1) {
    start = Math.max(1, end - maxPageButtons + 1);
  }

  for (let i = start; i <= end; i++) {
    pageNumbersContainer.appendChild(createBtn(i, i, false, i === currentPage));
  }

  // 省略号 + 最后一页
  if (end < totalPages) {
    const dots = document.createElement("span");
    dots.textContent = "…";
    pageNumbersContainer.appendChild(dots);
    pageNumbersContainer.appendChild(
      createBtn(totalPages, totalPages)
    );
  }

  // 下一页
  pageNumbersContainer.appendChild(
    createBtn("＞", currentPage + 1, currentPage === totalPages, false, false)
  );
}

// 跳转功能
gotoInput.addEventListener("change", () => {
  const value = parseInt(gotoInput.value);
  if (!isNaN(value) && value >= 1 && value <= totalPages) {
    currentPage = value;
    renderNewsList();
  }
});

// 条数选择功能（这里暂时只打印）
pageSizeSelect.addEventListener("change", () => {
  pageSize = pageSizeSelect.value;
  renderNewsList();
});


