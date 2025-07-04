const data = [
  {
    image: "./asset/banner/home.jpg",
    alt: "slide1",
    title: "开启互联网+ 从我们开始",
    subtitle: "域名主机，网站建设，云服务器，企业邮箱一站式解决",
  },
  {
    image: "./asset/banner/about.jpg",
    alt: "slide2",
    title: "关于我们",
    subtitle:
      "企业构建互联网信息技术服务平台，领先技术变革，提升产业效率，致力于使能软件企业引领发展，服务制造企业转型升级，为政企客户提供“多快好省”的信息技术服务。",
  },
  {
    image: "./asset/banner/news.jpg",
    alt: "slide3",
    title: "新闻中心",
    subtitle:
      "几乎所有的伟大成就，都是团队集体协作追求远大目标的结果。这些团队的领导者挑选了团队的成员，并激励他们追求自己不敢想象的成就。",
  },
];

const carousel = document.querySelector(".carousel");
const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");

let slides = null;
let dots = null;
let circles = null;
let circlesBg = null;

const autoSlideInterval = 5000;
let currentSlide = 0;

const radius = 8;
const circumference = 2 * Math.PI * radius;

let animStartTime = null;
let rafId = null;
let paused = false;

// 设置圆环进度
function setProgress(circle, percent) {
  const offset = circumference * (1 - percent);
  circle.style.strokeDashoffset = offset;
}

// 清除所有 active 类和进度
function clearActive() {
  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  circles.forEach((c) => {
    c.r.baseVal.value = 5;
    setProgress(c, 0);
  });
  circlesBg.forEach((c) => {
    c.r.baseVal.value = 5;
  });
}
// 切换到指定 slide
function goToSlide(index) {
  clearActive();
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
  circles[currentSlide].r.baseVal.value = 8;
  circlesBg[currentSlide].r.baseVal.value = 8;
}

// 动画帧循环控制
function animate(now) {
  if (paused) {
    rafId = requestAnimationFrame(animate);
    return;
  }

  if (!animStartTime) animStartTime = now;
  const elapsed = now - animStartTime;
  const percent = Math.min(elapsed / autoSlideInterval, 1);

  setProgress(circles[currentSlide], percent);

  if (elapsed >= autoSlideInterval) {
    const nextIndex = (currentSlide + 1) % data.length;
    goToSlide(nextIndex);
    animStartTime = now;
  }

  rafId = requestAnimationFrame(animate);
}

// 创建 slide 元素
function createSlideElement(slide) {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");

  const img = document.createElement("img");
  img.src = slide.image;
  img.alt = slide.alt;

  const description = document.createElement("div");
  description.classList.add("description", "text-shadow");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = slide.title;

  const subtitle = document.createElement("div");
  subtitle.classList.add("subtitle");
  subtitle.textContent = slide.subtitle;

  description.appendChild(title);
  description.appendChild(subtitle);
  slideElement.appendChild(img);
  slideElement.appendChild(description);

  return slideElement;
}

// 创建 dot 元素
function createDotElement(index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.innerHTML = `
    <svg class="progress-ring" width="20" height="20">
      <circle class="progress-ring-bg" cx="10" cy="10" r="5" stroke-width="2" fill="transparent"/>
      <circle class="progress-ring-fill" cx="10" cy="10" r="5" stroke-width="2" fill="transparent"/>
    </svg>
  `;
  if (index === 0) {
    dot.innerHTML = `
    <svg class="progress-ring" width="20" height="20">
      <circle class="progress-ring-bg" cx="10" cy="10" r="8" stroke-width="2" fill="transparent"/>
      <circle class="progress-ring-fill" cx="10" cy="10" r="8" stroke-width="2" fill="transparent"/>
    </svg>
  `;
  }

  dot.addEventListener("click", () => {
    animStartTime = null;
    goToSlide(index);
  });

  return dot;
}

// 初始化所有 slides 和 dots
function createSlidesAndDots() {
  const slidesFragment = document.createDocumentFragment();
  const dotsFragment = document.createDocumentFragment();

  data.forEach((slide, index) => {
    const slideElement = createSlideElement(slide);
    const dotElement = createDotElement(index);

    if (index === 0) {
      slideElement.classList.add("active");
      dotElement.classList.add("active");
    }

    slidesFragment.appendChild(slideElement);
    dotsFragment.appendChild(dotElement);
  });

  slidesContainer.appendChild(slidesFragment);
  dotsContainer.appendChild(dotsFragment);
}

// 获取元素引用
function getElements() {
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  circles = document.querySelectorAll(".progress-ring-fill");
  circlesBg = document.querySelectorAll(".progress-ring-bg");

  circles.forEach((circle) => {
    circle.style.strokeDasharray = `${circumference}`;
    setProgress(circle, 0);
  });
}

// 鼠标悬停暂停动画
function addCarouselEvent() {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    return;
  }

  carousel.addEventListener("mouseenter", () => {
    paused = true;
  });

  carousel.addEventListener("mouseleave", () => {
    if (paused) {
      paused = false;
      animStartTime = null; // 重新计时
    }
  });
}

// 初始化
function init() {
  createSlidesAndDots();
  getElements();
  addCarouselEvent();
  rafId = requestAnimationFrame(animate);
}

init();
