describe('Routes Products', () => {
  const Products = app.datasource.models.Products;
  const defaultProducts = {
    id: 1,
    name: 'Default Product',
    price: 230.50,
    descrition: 'this is a test product...it should work'
  };

    beforeEach((done) => {
        Products
        .destroy({ where: {} })
        .then(() => Products.create(defaultProducts))
        .then(() => {
            done();
        });
    });

    describe('Routes GET /Products', () => {
        it('should return a list of Products', (done) => {
            request
                .get('/products')
                .end((err, res)=>{
                  
                  console.log('produto zzzzzz: ' + res.body);

                    expect(res.body[0].id).to.be.eql(defaultProducts.id);
                    expect(res.body[0].name).to.be.eql(defaultProducts.name);
                    //expect(res.body[0].price).to.be.eql(defaultProducts.price);                        
                //console.log('---- res.body[0].price: ' + res.body[0].price);
                done(err);   
            });
        });
    });

  describe('Route GET /products/{id}', () => {
    it('should return a product', (done) => {
      request
            .get('/products/1')
            .end((err, res) => {
              expect(res.body.id).to.be.eql(defaultProducts.id);
              expect(res.body.name).to.be.eql(defaultProducts.name);
              done(err);
            });
    });
  });

  describe('Route POST /products', () => {
    it('should create a product', (done) => {
      const newProduct = {
        id: 2,
        name: 'New Product',
        price: 180.80
      };

      request
            .post('/products')
            .send(newProduct)
            .end((err, res) => {
              expect(res.body.id).to.be.eql(newProduct.id);
              expect(res.body.name).to.be.eql(newProduct.name);

              done(err);
            });
    });
  });

  describe('Route PUT /products/{id}', () => {
    it('should update a product', (done) => {
      const updatedProduct = {
        id: 1,
        name: 'Updated Product',
      };

      request
            .put('/products/1')
            .send(updatedProduct)
            .end((err, res) => {
              console.log('RESPONSE', res.body);

              expect(res.body).to.be.eql([1]);

              done(err);
            });
    });
  });

  describe('Route delete /products/{id}', () => {
    it('delete a product', (done) => {
      request
            .delete('/products/1')
            .end((err, res) => {
              expect(res.statusCode).to.be.eql(204);

              done(err);
            });
    });
  });
});
