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

    describe('Get one Product: getById()', () =>{
        it('should return a Product', () =>{
            const Products = {
                findOne: td.function(),
            };

            const expectedResponse = [{
            id: 1,
            name: 'Test Product',
            price: 174.84,
            created_at: '2016-08-06T23:55:36.692Z',
            updated_at: '2016-08-06T23:55:36.692Z',}];

            td.when(Products.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

            const productsController = new ProductsController(Products);
            return productsController.getById({ id: 1 })
                .then(response => expect(response.data).to.be.eql(expectedResponse));

        });
    });


    describe('Create a product: create()', () => {
        it('should create a product', () => {
        const Products = {
            create: td.function(),
        };

        const requestBody = {
            name: 'Test Product',
        };

        const expectedResponse = [{
            id: 1,
            name: 'Test Product',
            price: 235.75,
            created_at: '2016-08-06T23:55:36.692Z',
            updated_at: '2016-08-06T23:55:36.692Z',
        }];

        td.when(Products.create(requestBody)).thenResolve(expectedResponse);

        const productsController = new ProductsController(Products);
        return productsController.create(requestBody)
            .then(response => {
            expect(response.data).to.be.eql(expectedResponse);
            expect(response.statusCode).to.be.eql(201);
            });
        });
    });

describe('Update a product: update()', () => {
    it('should update an existing product', () => {
      const Products = {
        update: td.function(),
      };
      const requestBody = {
        id: 1,
        name: 'Test Product Updated',
      };
      const expectedResponse = [{
        id: 1,
        name: 'Test Product Updated',
        price: 768.91,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-10T23:55:36.692Z',
      }];

      td.when(Products.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const productsController = new ProductsController(Products);
      return productsController.update(requestBody, { id: 1 })
        .then((response) => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Delete a product: delete()', () => {
    it('should delete an existing product', () => {
      const Products = {
        destroy: td.function(),
      };
      const expectedResponse = {};

      td.when(Products.destroy({ where: { id: 1 } })).thenResolve(expectedResponse);

      const productsController = new ProductsController(Products);
      return productsController.delete({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});