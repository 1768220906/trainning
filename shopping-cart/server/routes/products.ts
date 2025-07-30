
import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const productsPath = path.join(__dirname, '../data/mockProducts.json');

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

router.get('/products', (req: Request, res: Response) => {
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading products data' });
    }

    let products: Product[] = JSON.parse(data);

    const imageBaseUrl = process.env.IMAGE_BASE_URL || '';

    // Add full image URL
    products = products.map(product => ({
      ...product,
      image: `${imageBaseUrl}${product.image}`,
    }));

    // Size filtering
    const size = req.query.size as string;
    if (size) {
      products = products.filter(p => p.sizes.includes(size));
    }

    // Sorting
    const sort = req.query.sort as string;
    if (sort === 'asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      products.sort((a, b) => b.price - a.price);
    }

    // Pagination
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);

    res.json({
      total: products.length,
      page,
      pageSize,
      products: paginatedProducts,
    });
  });
});

export default router;
