import ProductsController from '../../../controllers/products';

describe('Controller: Products',() => {
    describe('Get all Products: getAll()',() => {
        it('shoud return a list of products',() => {
            const Products = {
                findAll: td.function(),
            };

            const expectedResponse = [{
                id: 1,
                name: 'Test Product',
                price: 380.09,
                created_at: '2016-08-06T23:55:36.692Z',
                updated_at: '2016-08-06T23:55:36.692Z',
            }];

      td.when(Products.findAll({})).thenResolve(expectedResponse);

      const productsController = new ProductsController(Products);
      return productsController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
        });
    });





});