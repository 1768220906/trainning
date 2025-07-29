
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    image: '/images/t-shirt.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 89.99,
    image: '/images/jeans.jpg',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'Hoodie',
    price: 59.99,
    image: '/images/hoodie.jpg',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Sneakers',
    price: 129.99,
    image: '/images/sneakers.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Backpack',
    price: 49.99,
    image: '/images/backpack.jpg',
    sizes: ['One Size'],
  },
  {
    id: 6,
    name: 'Beanie',
    price: 19.99,
    image: '/images/beanie.jpg',
    sizes: ['One Size'],
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: 79.99,
    image: '/images/sunglasses.jpg',
    sizes: ['One Size'],
  },
  {
    id: 8,
    name: 'Watch',
    price: 199.99,
    image: '/images/watch.jpg',
    sizes: ['One Size'],
  },
  {
    id: 9,
    name: 'Dress Shirt',
    price: 69.99,
    image: '/images/dress-shirt.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 10,
    name: 'Socks',
    price: 9.99,
    image: '/images/socks.jpg',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 11,
    name: 'Jacket',
    price: 149.99,
    image: '/images/jacket.jpg',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 12,
    name: 'Shorts',
    price: 39.99,
    image: '/images/shorts.jpg',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 13,
    name: 'Cap',
    price: 24.99,
    image: '/images/cap.jpg',
    sizes: ['One Size'],
  },
  {
    id: 14,
    name: 'Belt',
    price: 34.99,
    image: '/images/belt.jpg',
    sizes: ['One Size'],
  },
  {
    id: 15,
    name: 'Scarf',
    price: 29.99,
    image: '/images/scarf.jpg',
    sizes: ['One Size'],
  },
  {
    id: 16,
    name: 'Gloves',
    price: 19.99,
    image: '/images/gloves.jpg',
    sizes: ['S', 'M', 'L'],
  },
];
