# API Documentation

This document provides a detailed description of the API endpoints for the shopping cart backend.

## Base URL

The base URL for all API endpoints is `http://localhost:3000/api`.

## Authentication

No authentication is required to use this API.

---

## Products API

### GET /api/products

Retrieves a list of available products. Supports filtering, sorting, and pagination.

**Query Parameters:**

| Parameter  | Type   | Description                                                                                             | Example             |
| :--------- | :----- | :------------------------------------------------------------------------------------------------------ | :------------------ |
| `page`     | number | The page number for pagination (default: 1).                                                            | `/api/products?page=2` |
| `pageSize` | number | The number of products per page (default: 10).                                                          | `/api/products?pageSize=5` |
| `size`     | string | Filters products by available size (e.g., "S", "M", "L", "XL").                                         | `/api/products?size=M` |
| `sort`     | string | Sorts products by price. Possible values: `asc` (ascending) or `desc` (descending).                      | `/api/products?sort=asc` |

**Example `curl` request:**

```bash
curl "http://localhost:3000/api/products?page=1&pageSize=5&sort=desc"
```

**Example Response:**

```json
{
  "total": 16,
  "page": 1,
  "pageSize": 5,
  "products": [
    {
      "id": 5,
      "name": "Stylish Jeans",
      "price": 89.99,
      "image": "/images/jeans.jpg",
      "sizes": ["S", "M", "L"]
    },
    {
      "id": 8,
      "name": "Leather Belt",
      "price": 79.99,
      "image": "/images/belt.jpg",
      "sizes": ["M", "L"]
    },
    {
      "id": 12,
      "name": "Luxury Watch",
      "price": 75.99,
      "image": "/images/watch.jpg",
      "sizes": ["L", "XL"]
    },
    {
      "id": 9,
      "name": "Warm Scarf",
      "price": 69.99,
      "image": "/images/scarf.jpg",
      "sizes": ["S", "M"]
    },
    {
      "id": 2,
      "name": "Cozy Hoodie",
      "price": 59.99,
      "image": "/images/hoodie.jpg",
      "sizes": ["S", "M", "L"]
    }
  ]
}
```

---

## Cart API

### GET /api/cart

Retrieves all items currently in the shopping cart.

**Example `curl` request:**

```bash
curl http://localhost:3000/api/cart
```

**Example Response:**

```json
[
  {
    "id": 1,
    "name": "Classic T-Shirt",
    "price": 29.99,
    "image": "http://localhost:8080/images/t-shirt.jpg",
    "sizes": ["S", "M", "L", "XL"],
    "quantity": 2,
    "selectedSize": "M"
  },
  {
    "id": 3,
    "name": "Hoodie",
    "price": 59.99,
    "image": "http://localhost:8080/images/hoodie.jpg",
    "sizes": ["M", "L", "XL"],
    "quantity": 1,
    "selectedSize": "L"
  }
]
```

### POST /api/cart/add

Adds a product to the shopping cart. If the product is already in the cart, its quantity is incremented.

**Request Body:**

| Parameter   | Type   | Description                         |
| :---------- | :----- | :---------------------------------- |
| `productId` | number | The ID of the product to add.       |
| `selectedSize` | string | The selected size of the product (e.g., "S", "M", "L", "XL"). |

**Example `curl` request:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"productId": 1, "selectedSize": "M"}' http://localhost:3000/api/cart/add
```

**Example Response:**

```json
{
  "message": "Product added to cart"
}
```

### POST /api/cart/modify

Modifies the quantity of a specific product in the shopping cart.

**Request Body:**

| Parameter   | Type   | Description                                  |
| :---------- | :----- | :------------------------------------------- |
| `productId` | number | The ID of the product to modify.             |
| `quantity`     | number | The new quantity for the specified product.  |
| `selectedSize` | string | The selected size of the product (e.g., "S", "M", "L", "XL"). |

**Example `curl` request:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"productId": 1, "quantity": 5, "selectedSize": "M"}' http://localhost:3000/api/cart/modify
```

**Example Response:**

```json
{
  "message": "Cart modified"
}
```

### POST /api/cart/delete

Deletes a specific product from the shopping cart.

**Request Body:**

| Parameter   | Type   | Description                           |
| :---------- | :----- | :------------------------------------ |
| `productId` | number | The ID of the product to delete.      |
| `selectedSize` | string | The selected size of the product (e.g., "S", "M", "L", "XL"). |

**Example `curl` request:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"productId": 1, "selectedSize": "M"}' http://localhost:3000/api/cart/delete
```

**Example Response:**

```json
{
  "message": "Product deleted from cart"
}
```

### POST /api/cart/clear

Removes all items from the shopping cart.

**Example `curl` request:**

```bash
curl -X POST http://localhost:3000/api/cart/clear
```

**Example Response:**

```json
{
  "message": "Cart cleared"
}
```
