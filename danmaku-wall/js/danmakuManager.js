class DanmakuManager {
  constructor(canvas, video, danmakus) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.video = video;
    this.allDanmakus = danmakus;
    this.activeDanmakus = [];
    this.frameLoop = this.frameLoop.bind(this);
  }

  start() {
    requestAnimationFrame(this.frameLoop);
  }

  frameLoop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const currentTime = this.video.currentTime;

    // 加入新弹幕
    this.allDanmakus.forEach((d) => {
      if (!d.added && currentTime >= d.time) {
        this.activeDanmakus.push(
          new Danmaku(d.text, d.time, this.canvas.width, this.canvas.height)
        );
        d.added = true;
      }
    });

    // 更新&绘制
    this.activeDanmakus.forEach((d) => {
      d.update();
      d.draw(this.ctx);
    });

    requestAnimationFrame(this.frameLoop);
  }

  //   添加新的弹幕到列表
  addDanmaku(danmaku) {
    const { text, time } = danmaku;
    if (!text || typeof time !== 'number') {
      console.error("Invalid danmaku format");
      return;
    }
    this.allDanmakus.push({ text, time, added: false });
  }
}
