'use strict';

// client/app/products/products.controller.js

angular.module('meanstackApp')
  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products;
  });
