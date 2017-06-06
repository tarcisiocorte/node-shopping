import ProductsController from '../controllers/products'

export default(app, Products) => {

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
}