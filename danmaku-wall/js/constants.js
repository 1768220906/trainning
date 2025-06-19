const danmakuList = [
  { time: 0.5, text: "来了来了~" },
  { time: 1.2, text: "开场好酷" },
  { time: 2.0, text: "小哥哥加油！" },
  { time: 2.8, text: "我要学这个技能！" },
  { time: 3.3, text: "高能预警⚠️" },
  { time: 4.1, text: "太精彩了！！" },
  { time: 4.6, text: "谁懂啊，这也太强了吧" },
  { time: 5.0, text: "前排打卡！" },
  { time: 5.7, text: "弹幕护体" },
  { time: 6.2, text: "冲冲冲" },
  { time: 6.5, text: "给我狠狠冲！" },
  { time: 7.0, text: "这一段爱了爱了" },
  { time: 7.4, text: "笑死我了哈哈哈" },
  { time: 8.0, text: "我要截图这帧" },
  { time: 8.5, text: "兄弟们冲啊！" },
  { time: 9.0, text: "封神操作！" },
  { time: 9.3, text: "我看了三遍还想看" },
  { time: 10.0, text: "太帅了叭！" },
  { time: 10.6, text: "音乐也超好听" },
  { time: 11.1, text: "稳住，我们能赢" },
  { time: 11.9, text: "谁在教练我不说" },
  { time: 12.3, text: "弹幕刷起来！" },
  { time: 13.0, text: "这段太震撼了" },
  { time: 13.8, text: "已经爱上这个作品" },
  { time: 14.5, text: "再看一遍不过分吧？" }
];

const minFontsize = 16; // 最小字体大小
const maxFontsize = 36; // 最大字体大小

const marginTop = 20; // 顶部边距

// 画布高度
const canvasWidth = 800; // 画布宽度
const canvasHeight = 450; // 画布高度

// 弹幕区域
const danmakuArea = canvasHeight * 0.68 - marginTop; // 弹幕区域高度

// 轨道
const trackHeight = maxFontsize + 6; // 每条轨道高度
const trackCount = Math.floor(danmakuArea / trackHeight);
