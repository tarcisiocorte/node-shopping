import bodyParser from 'body-parser';
import express from 'express';
import config from './config/config';
import datasource from './config/datasource';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());

const Books = app.datasource.models.Books;
const Products = app.datasource.models.Products;

app.route('/books')
    .get((req, res) => {
      Books.findAll()
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .post((req, res) => {
      Books.create(req.body)
        .then(result => res.json(result))
        .catch(() => res.status(412));
    });

app.route('/books/:id')
    .get((req, res) => {
      Books.findOne({ where: req.params })
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .put((req, res) => {
      Books.update(req.body, { where: req.params })
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .delete((req, res) => {
      Books.destroy({ where: req.params })
            .then(() => res.sendStatus(204))
            .catch(() => res.status(412));
    });

app.route('/products')
    .get((req, res) => {
      Products.findAll()
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .post((req, res) => {
      Products.create(req.body)
        .then(result => res.json(result))
        .catch(() => res.status(412));
    });

app.route('/products/:id')
    .get((req, res) => {
      Products.findOne({ where: req.params })
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .put((req, res) => {
      Products.update(req.body, { where: req.params })
        .then(result => res.json(result))
        .catch(() => res.status(412));
    })
    .delete((req, res) => {
      Products.destroy({ where: req.params })
            .then(() => res.sendStatus(204))
            .catch(() => res.status(412));
    });  

export default app;
