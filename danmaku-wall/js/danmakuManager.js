class DanmakuManager {
  constructor(canvas, video, danmakus) {
    this.status = "show"; // 弹幕状态
    this.ctx = canvas.getContext("2d");
    this.video = video;
    this.allDanmakus = danmakus;
    this.activeDanmakus = [];
    this.frameLoop = this.frameLoop.bind(this);
    this.animationId = null;

    this.tracks = new Array(trackCount).fill(false); // false 表示空闲
  }

  start() {
    if (this.animationId) return; // 防止重复启动
    this.animationId = requestAnimationFrame(this.frameLoop);
  }

  frameLoop() {
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    const currentTime = this.video.currentTime;

    // 加入新弹幕
    this.allDanmakus.forEach((d) => {
      if (!d.added && currentTime >= d.time) {
        const trackIndex = Math.floor(Math.random() * trackCount);

        this.activeDanmakus.push(new Danmaku(d.text, d.time, trackIndex));
        d.added = true;
      }
    });

    // 更新&绘制
    this.activeDanmakus.forEach((d) => {
      d.update(currentTime);
      d.draw(this.ctx);
    });

    this.filterActiveDanmakus();

    if (this.status === "hide") {
      this.ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 清除画布
    }

    this.animationId = requestAnimationFrame(this.frameLoop);
  }

  // 剔除结束的弹幕
  filterActiveDanmakus() {
    this.activeDanmakus = this.activeDanmakus.filter((d) => {
      if (d.x > 0) {
        return true;
      }
      return false;
    });
  }

  //   添加新的弹幕到列表
  addDanmaku(danmaku) {
    const { text, time } = danmaku;
    if (!text || typeof time !== "number") {
      console.error("Invalid danmaku format");
      return;
    }
    this.allDanmakus.push({ text, time, added: false });
  }

  // 暂停弹幕
  pause() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  // 关闭弹幕
  close() {
    this.status = "hide";
  }

  // 开启弹幕
  open() {
    this.status = "show";
  }

  // 重置弹幕
  reset() {
    this.activeDanmakus = [];
    this.allDanmakus.forEach((d) => (d.added = false));
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
