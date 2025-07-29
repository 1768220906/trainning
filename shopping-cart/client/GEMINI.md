# 🛒 项目概览
- 目标：实现一个响应式商城购物车项目（React 18 + Vite + TypeScript）。
- 页面要求：支持不同屏幕尺寸布局。
- 动画表现：包括 loading 骨架动画、商品 hover 动画。

# 📦 功能需求
- 商品列表必须至少展示 **16 个商品**。
- 商品数据需通过 **mock** 获取（本地模拟，不调用真实 API）。
- 商品支持“尺寸筛选”功能，在前端可筛选不同尺寸。
- 支持根据价格进行排序（正序 / 倒序），在前端处理。
- 每个商品必须有多个尺码选项（如 S/M/L）。
- 价格需保留两位小数（注意 JS 浮点数计算精度）。
- 商品 hover 时需有动画效果（如抬起、阴影）。
- 添加到购物车前必须先选择尺寸。
- 刷新页面时，购物车内容要持久化保持（例如使用 localStorage）。
- 购物车页支持增减数量、删除商品。
- 购物车结算价格要实时计算并更新。
- 点击“结算”按钮时要弹出提示确认。

# 🧭 技术栈与实现建议
- React 18 + Vite + TypeScript。
- 使用全局状态管理（推荐：Zustand / Redux Toolkit / Context API + useReducer）。
- 状态持久化建议使用 `zustand/middleware` 或 Redux 中间件，或者 localStorage 联动状态同步。
- 推荐用 dayjs 或 toFixed 实现价格两位小数处理与展示。
- loading 骨架动画可使用 CSS/SVG 或 UI 组件库（如 Ant Design skeleton）。
- Hover 交互建议用 CSS 过渡或动画组件库实现平滑效果。
- 响应式布局建议使用 Flexbox / CSS Grid + Media Queries。

# 🧪 开发流程与交互规范
1. 任何任务都需要先生成开发“计划”，并等待用户确认。
2. 所有代码操作需使用 Git commit，并开启 checkpoint 模式确保可回滚。
3. 任何结算确认操作需明确提示（如 toast 或 modal）。
4. 不要自动删除未 commit 的内容，避免意外丢失。
5. 先设计 mock 数据结构再生成页面列表组件，逐步构建功能。

# 📂 项目结构建议

- /src
  - /components
    - ProductCard.tsx
    - LoadingSkeleton.tsx
  - /pages
    - HomePage.tsx
    - CartPage.tsx
  - /store
    - cart.ts
    - products.ts
  - /utils
    - price.ts
    - mockData.ts
    - index.tsx
  - App.tsx

# ⚙️ 常用命令

```bash
npm install     # 安装依赖
npm run dev     # 启动开发服务
npm run build   # 打包生产代码
```