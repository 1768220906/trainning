const data = [
  {
    image: "./asset/banner/home.jpg",
    alt: "slide1",
    title: "开启互联网+ 从我们开始",
    subtitle: "域名主机，网站建设，云服务器，企业邮箱一站式解决",
  },
  {
    image: "./asset/banner/about.jpg",
    alt: "slide1",
    title: "关于我们",
    subtitle:
      "企业构建互联网信息技术服务平台，领先技术变革，提升产业效率，致力于使能软件企业引领发展，服务制造企业转型升级，为政企客户提供“多快好省”的信息技术服务。",
  },
  {
    image: "./asset/banner/news.jpg",
    alt: "slide1",
    title: "新闻中心",
    subtitle:
      "几乎所有的伟大成就，都是团队集体协作追求远大目标的结果。这些团队的领导者挑选了团队的成员，并激励他们追求自己不敢想象的成就。",
  },
];

const carousel = document.querySelector(".carousel"); // 获取carousel元素

const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");

// 获取轮播元素
let slides = null; // 获取所有slides
let dots = null; // 获取所有dots

// 自动轮播
const autoSlideInterval = 5000; // 自动轮播间隔时间
const slideCount = data.length; // 轮播图片count
let currentSlide = 0;
let timer = null;

const radius = 8;
const circumference = 2 * Math.PI * radius;

// 设置进度
function setProgress(circle, percent) {
  const offset = circumference * (1 - percent);
  circle.style.strokeDashoffset = offset;
}

// 开始进度动画
function startProgress(circle) {
  if (!circle) return;

  const duration = autoSlideInterval;
  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const percent = Math.min(elapsed / duration, 1);
    setProgress(circle, percent);

    if (percent < 1) {
      circle._progressAnim = requestAnimationFrame(animate);
    }
  }

  circle._progressAnim = requestAnimationFrame(animate);
}

// 停止进度动画
function stopProgress(circle) {
  if (circle?._progressAnim) {
    cancelAnimationFrame(circle._progressAnim);
    circle._progressAnim = null;
  }
}

// 重置所有进度
function resetAllProgress() {
  dots.forEach((dot) => {
    const circle = dot.querySelector(".progress-ring-fill");
    stopProgress(circle);
    setProgress(circle, 0);
  });
}

// 创建slide元素
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

// 创建dot元素
function createDotElement(index, slideElement) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // 添加小圆环 SVG
  dot.innerHTML = `
    <svg class="progress-ring" width="20" height="20">
      <circle
        class="progress-ring-bg"
        cx="10"
        cy="10"
        r="8"
        stroke-width="2"
        fill="transparent"
      />
      <circle
        class="progress-ring-fill"
        cx="10"
        cy="10"
        r="8"
        stroke-width="2"
        fill="transparent"
      />
    </svg>
  `;

  dot.addEventListener("click", () => {
    clearActive();
    slideElement.classList.add("active");
    dot.classList.add("active");
    currentSlide = index;
    resetAllProgress(); // 重置所有进度
    startProgress(dot.querySelector(".progress-ring-fill")); // 当前 dot 圆环开始进度
  });

  return dot;
}

// 创建slide和dot元素
function createSlide() {
  const slidesFragment = document.createDocumentFragment();
  const dotsFragment = document.createDocumentFragment();

  data.forEach((slide, index) => {
    const slideElement = createSlideElement(slide);
    const dotElement = createDotElement(index, slideElement);

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

// 开启自动轮播
function startAutoSlide() {
  timer = setTimeout(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    clearActive();
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    resetAllProgress();
    startProgress(dots[currentSlide].querySelector(".progress-ring-fill"));
    startAutoSlide();
  }, autoSlideInterval);
}

// 停止自动轮播
function stopAutoSlide() {
  clearTimeout(timer);
  stopProgress(dots[currentSlide].querySelector(".progress-ring-fill"));
}

// 给carousel添加鼠标移入移出事件
function addCarouselEvent() {
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);
}

// 清楚active类
function clearActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}

// 获取轮播元素
function getSlideElements() {
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
}
// 初始化
function init() {
  createSlide();
  startProgress(dots[0].querySelector(".progress-ring-fill"));
  startAutoSlide();
  getSlideElements();
  addCarouselEvent();
  startAutoSlide();
}

init();
