class Danmaku {
  minFontsize = 16; // 最小字体大小
  maxFontsize = 36; // 最大字体大小

  constructor(text, time, canvasWidth, canvasHeight) {
    this.text = text;
    this.time = time;
    this.x = canvasWidth;
    this.y = Math.random() * (canvasHeight - 30) + 20; // 避免超出顶部和底部
    this.speed = 2; // 弹幕速度
    this.color = this.getRandomFontColor(); // 随机颜色
    this.opacity = 1;
    this.canvasWidth = canvasWidth;
    this.fontfamily = "sans-serif";
    this.fontSize = this.getRandomFontSize(this.minFontsize, this.maxFontsize);
  }

  getRandomFontSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomFontColor() {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }

  update() {
    this.x -= this.speed;
    if (this.x < -300) this.opacity = 0;
  }

  draw(ctx) {
    ctx.font = `${this.fontSize}px ${this.fontfamily}`;
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fillText(this.text, this.x, this.y);
    ctx.globalAlpha = 1;
  }
}
