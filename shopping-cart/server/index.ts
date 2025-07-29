
import express from 'express';
import productsRouter from './routes/products';
import cartRouter from './routes/cart';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api', productsRouter);
app.use('/api', cartRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
