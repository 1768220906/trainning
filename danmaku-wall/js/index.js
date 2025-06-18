const canvas = document.getElementById("danmaku-canvas"); // 获取画布元素
const video = document.getElementById("video"); // 获取视频元素

const danmakuInput = document.getElementById("danmaku-input"); // 获取弹幕输入框
const danmakuButton = document.getElementById("send-danmaku"); // 获取弹幕发送按钮

const danmakuList = [
  { time: 1, text: "第一条弹幕" },
  { time: 3, text: "你好啊" },
  { time: 5, text: "Canvas弹幕真帅！" },
];
const manager = new DanmakuManager(canvas, video, danmakuList); // 创建弹幕管理器
// 初始化
function init() {
  video.addEventListener("play", () => manager.start());
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

// 页面加载时初始化
window.addEventListener("load", init);
