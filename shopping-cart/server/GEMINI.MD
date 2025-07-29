# 🛒 项目背景与目标
- 项目类型：商城购物车后端模拟项目。
- 项目目的：为前端项目提供mock功能
- 接口功能：支持分页、尺寸筛选、价格排序、购物车持久化、数量增减、删除与结算提示。

# 📦 数据模型规范
- 商品格式如下：
  ```json
  {
    "id": 1,
    "name": "Classic T-Shirt",
    "price": 29.99,
    "image": "/images/t-shirt.jpg",
    "sizes": ["S", "M", "L", "XL"]
  }

- 价格必须保留两位小数（应避免 JavaScript 浮点错误）
- 商品数量超过 16 条数据以触发分页
- 型号有四种类型 "S", "M", "L", "XL"

# 🧩 接口说明

- `GET /api/products`  支持分页参数 `page`, `pageSize`；支持按 `size` 筛选（前端控制）；支持按价格升序 `sort=asc` 和降序 `sort=desc` 排序。
- `GET /api/cart` 返回购物车列表，支持分页 `page`, `pageSize`
- `POST /api/cart/add` 接收 `productId`，添加到购物车
- `POST /api/cart/modify` 接收 `productId` `count`，修改购物车中对应商品数量
- `POST /api/cart/delete` 接收 `productId`，删除购物车中对应商品
- `POST /api/cart/clear` 清空购物车所有内容

# 🚀 开发技术与实践建议

- 使用 Node.js + Express 模拟数据接口（RESTful）。
- 商品数据在服务端用 JSON mock；自动生成至少 16 条不同 `price`, `sizes` 的条目。
- 价格计算建议使用 `Number((value).toFixed(2))` 保持两位小数。
- 后端可使用 `express.json()` 处理请求体。
- 可结合 `fs` 读写模拟持久化购物车

# 🧭 Gemini CLI 行为指导

- **先生成开发计划**，列出接口及 mock 数据结构，不立即执行改变，等待用户确认。
- 使用 checkpointing 模式，每次接口生成或代码变更后需 `git commit` 并可 `/restore` 回滚。
- 不得直接删除未 commit 的内容。
- 每个接口生成完毕后，先提供示例 curl 或 fetch 请求，再等待确认通信测试。

# ⚙️ 项目结构参考

```yaml
/server
  /data
    mockProducts.json
    cartData.json
  /routes
    products.ts
    cart.ts
  index.ts
/package.json
/tsconfig.json

```

- `products.ts` 实现商品接口逻辑，`cart.ts` 实现购物车相关接口。
- `mockProducts.json` 初始化时生成数据，程序启动时加载。

🧠 常用启动命令

```yaml
npm install
npm run dev       # 启动服务端 mock server（TypeScript）
npm run start     # 编译并启动正式模式
```

