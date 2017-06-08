import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class ProductsController{
    constructor(Products){
        this.Products = Products
    }

  getAll() {
    return this.Products.findAll({})
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }
}


export default ProductsController;