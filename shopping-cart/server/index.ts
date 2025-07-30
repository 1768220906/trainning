
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products';
import cartRouter from './routes/cart';

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const app = express();
const port = 8080;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', productsRouter);
app.use('/api', cartRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
