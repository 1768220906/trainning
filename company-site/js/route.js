// ===== 路由配置 =====
const routes = [
  {
    id: "home",
    path: "/home",
    doms: () => document.querySelector("#home"),
  },
  {
    id: "about",
    path: "/about",
    doms: () => document.querySelector("#about"),
  },
  {
    id: "news",
    path: "/news",
    doms: () => document.querySelector("#news"),
    children: [
      {
        id: "news-list",
        path: "/news/list",
        doms: () => document.querySelector("#news-list"),
      },
      {
        id: "news-detail",
        path: "/news/detail",
        doms: () => document.querySelector("#news-detail"),
      },
    ],
  },
];

// ===== 基础 DOM =====
const logo = document.querySelector("#logo");
const menuButton = document.querySelector("#menuButton");
const drawer = document.querySelector("#drawer");
const closeButton = document.querySelector("#closeDrawer");

const menuLinks = document.querySelectorAll(".menu-item");
const navs = document.querySelectorAll("#nav");

// ===== LOGO 点击刷新 =====
logo.addEventListener("click", () => window.location.reload());

// ===== 抽屉菜单开关 =====
menuButton.addEventListener("click", () => {
  drawer.classList.remove("translate-x-full");
});
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  drawer.classList.add("translate-x-full");
});

// ===== 清除所有状态和隐藏所有 doms =====
function hideAllRouteDoms(routeList = routes) {
  for (const route of routeList) {
    const el = route.doms?.();
    if (el) el.classList.add("hidden");

    if (route.children) hideAllRouteDoms(route.children);
  }
}

function clearAllActive() {
  navs.forEach((nav) => nav.classList.remove("active"));
  menuLinks.forEach((link) => link.classList.remove("text-[#ff350d]"));
}

// ===== 匹配路径对应的 route =====
function findRouteByPath(path, routeList = routes) {
  for (const route of routeList) {
    if (route.path === path) return route;
    if (route.children) {
      const child = findRouteByPath(path, route.children);
      if (child) return child;
    }
  }
  return null;
}

// ===== 获取从根到当前路由的完整链 =====
function getRouteChainByPath(path, routeList = routes, chain = []) {
  for (const route of routeList) {
    const newChain = [...chain, route];
    if (route.path === path) return newChain;
    if (route.children) {
      const result = getRouteChainByPath(path, route.children, newChain);
      if (result) return result;
    }
  }
  return null;
}

// ===== 页面切换（主逻辑） =====
function switchPageByPath({ path, query = {}, fromMenu = false }) {
  // 查找当前路由
  const route = findRouteByPath(path);
  if (route && route.children && route.children.length > 0) {
    // 有子路由且访问的是父路由路径，跳转到第一个子路由
    if (path === route.path) {
      const firstChildPath = route.children[0].path;
      window.location.hash = `#${firstChildPath}`;
      return;
    }
  }

  // 设置 hash，如果当前 hash 不一致
  const { path: currentHash } = parseHash();
  if (path !== currentHash) {
    // 拼接 query 字符串
    const queryString = Object.entries(query)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    const newHash = `${path}${queryString ? `?${queryString}` : ""}`;
    window.location.hash = newHash;
    return;
  }

  clearAllActive();
  hideAllRouteDoms();

  const routeChain = getRouteChainByPath(path);
  if (!routeChain) return switchPageByPath({ path: "/home" }); // fallback

  // 依次显示父级和子级 DOM
  for (const r of routeChain) {
    const el = r.doms?.();
    if (el) el.classList.remove("hidden");
  }

  // 激活菜单 & nav
  menuLinks.forEach((link) => {
    if (path.includes(link.dataset.target)) {
      link.classList.add("text-[#ff350d]");
    }
  });
  navs.forEach((nav) => {
    if (path.includes(nav.dataset.target)) {
      nav.classList.add("active");
    }
  });

  if (fromMenu) {
    drawer.classList.add("translate-x-full");
  }

  if (path.includes("about")) {
    initMap();
  }

  if (path.includes("news/list")) {
    renderNewsList();
  }

  if (path.includes("news/detail")) {
    renderNewsDetail(query.id);
  }
}

// ===== 解析 Hash 路径 =====
function parseHash() {
  const hash = location.hash.replace(/^#/, "") || "/home";
  const [path, queryString] = hash.split("?");
  const query = {};

  if (queryString) {
    queryString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      query[decodeURIComponent(key)] = decodeURIComponent(value || "");
    });
  }

  return { path, query };
}

// ===== Hash 路由监听处理 =====
function handleHashChange() {
  const { path, query } = parseHash();

  switchPageByPath({ path, query });
}

// ===== 点击绑定事件 =====
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const path = link.dataset.target;
    switchPageByPath({ path, fromMenu: true });
  });
});

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    const path = nav.dataset.target;
    switchPageByPath({ path });
  });
});

// ===== 路由跳转 =====
function navigateTo(path) {
  switchPageByPath({ path });
}

// ===== 初始化监听 =====
window.addEventListener("DOMContentLoaded", handleHashChange);
window.addEventListener("hashchange", handleHashChange);
