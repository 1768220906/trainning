const canvas = document.querySelector("#danmaku-canvas"); // 获取画布元素
const video = document.querySelector("#video"); // 获取视频元素

const danmakuInput = document.querySelector("#danmaku-input"); // 获取弹幕输入框
const danmakuButton = document.querySelector("#send-danmaku"); // 获取弹幕发送按钮
const danmakuSwitch = document.querySelector("#danmaku-switch"); // 获取弹幕开关
const danmakuCount = document.querySelector(".danmaku-count")

const manager = new DanmakuManager(canvas, video, danmakuList); // 创建弹幕管理器

// 初始化
function init() {
  video.addEventListener("play", () => manager.start());
  video.addEventListener("pause", () => manager.pause());
  video.addEventListener("ended", () => manager.reset());
  danmakuCount.textContent = danmakuList.length
}

// 添加弹幕
function addDanmaku() {
  const text = danmakuInput.value.trim();
  const time = video.currentTime;

  if (text) {
    manager.addDanmaku({ text, time });
    danmakuInput.value = ""; // 清空输入框
  } else {
    alert("弹幕内容不能为空");
  }
}

// 绑定按钮点击事件
danmakuButton.addEventListener("click", addDanmaku);
// 绑定回车键事件
danmakuInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addDanmaku();
  }
});

// 切换弹幕开关
danmakuSwitch.addEventListener("change", (event) => {
  if (event.target.checked) {
    manager.open();
  } else {
    manager.close();
  }
});

// 页面加载时初始化
window.addEventListener("load", init);
