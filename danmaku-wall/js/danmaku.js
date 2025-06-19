class Danmaku {
  constructor(text, time, trackIndex = 0) {
    this.text = text;
    this.time = time;
    this.x = canvasWidth;
    this.y = trackIndex * trackHeight + marginTop; // 避免超出顶部和底部
    this.speed = 100; // 弹幕速度
    this.color = this.getRandomFontColor(); // 随机颜色
    this.opacity = 1;
    this.fontfamily = "sans-serif";
    this.fontSize = this.getRandomFontSize(minFontsize, maxFontsize);

    this.trackIndex = trackIndex; // 轨道索引
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

  update(currentTime) {
    this.x = canvasWidth - this.speed * (currentTime - this.time); // 更新弹幕位置

    // 如果弹幕超出画布，则将其移除
    if (this.x < 0) {
      this.opacity = 0; // 设置透明度为0，表示弹幕已消失
    }
  }

  draw(ctx) {
    ctx.font = `${this.fontSize}px ${this.fontfamily}`;
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fillText(this.text, this.x, this.y);
    ctx.globalAlpha = 1;
  }
}
