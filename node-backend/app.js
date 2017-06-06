import bodyParser from 'body-parser';
import express from 'express';
import config from './config/config';
import datasource from './config/datasource';

import booksRouter from './routes/books';
import productsRouter from './routes/products';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());


const Books = app.datasource.models.Books;
const Products = app.datasource.models.Products;
booksRouter(app, Books);
productsRouter(app, Products);

export default app;
