
import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const cartPath = path.join(__dirname, '../data/cartData.json');
const productsPath = path.join(__dirname, '../data/mockProducts.json');

interface CartItem {
  productId: number;
  count: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

// Helper to read data
const readData = (filePath: string, callback: (err: NodeJS.ErrnoException | null, data: any) => void) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return callback(err, null);
    callback(null, JSON.parse(data));
  });
};

// Helper to write data
const writeData = (filePath: string, data: any, callback: (err: NodeJS.ErrnoException | null) => void) => {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', callback);
};

router.get('/cart', (req: Request, res: Response) => {
  readData(cartPath, (err, cartItems: CartItem[]) => {
    if (err) return res.status(500).json({ message: 'Error reading cart data' });
    res.json(cartItems);
  });
});

router.post('/cart/add', (req: Request, res: Response) => {
  const { productId } = req.body;
  readData(cartPath, (err, cartItems: CartItem[]) => {
    if (err) return res.status(500).json({ message: 'Error reading cart data' });

    const existingItem = cartItems.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.count++;
    } else {
      cartItems.push({ productId, count: 1 });
    }

    writeData(cartPath, cartItems, (err) => {
      if (err) return res.status(500).json({ message: 'Error writing cart data' });
      res.status(201).json({ message: 'Product added to cart' });
    });
  });
});

router.post('/cart/modify', (req: Request, res: Response) => {
  const { productId, count } = req.body;
  readData(cartPath, (err, cartItems: CartItem[]) => {
    if (err) return res.status(500).json({ message: 'Error reading cart data' });

    const item = cartItems.find(item => item.productId === productId);
    if (item) {
      item.count = count;
      writeData(cartPath, cartItems, (err) => {
        if (err) return res.status(500).json({ message: 'Error writing cart data' });
        res.json({ message: 'Cart modified' });
      });
    } else {
      res.status(404).json({ message: 'Product not in cart' });
    }
  });
});

router.post('/cart/delete', (req: Request, res: Response) => {
  const { productId } = req.body;
  readData(cartPath, (err, cartItems: CartItem[]) => {
    if (err) return res.status(500).json({ message: 'Error reading cart data' });

    const updatedCart = cartItems.filter(item => item.productId !== productId);

    writeData(cartPath, updatedCart, (err) => {
      if (err) return res.status(500).json({ message: 'Error writing cart data' });
      res.json({ message: 'Product deleted from cart' });
    });
  });
});

router.post('/cart/clear', (req: Request, res: Response) => {
  writeData(cartPath, [], (err) => {
    if (err) return res.status(500).json({ message: 'Error clearing cart' });
    res.json({ message: 'Cart cleared' });
  });
});

export default router;
