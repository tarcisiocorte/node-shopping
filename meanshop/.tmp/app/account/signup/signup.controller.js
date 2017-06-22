'use strict';

angular.module('meanshopApp').controller('SignupCtrl', function ($scope, Auth, $state, $window) {
  $scope.user = {};
  $scope.errors = {};

  $scope.register = function (form) {
    $scope.submitted = true;

    if (form.$valid) {
      Auth.createUser({
        name: $scope.user.name,
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function () {
        // Account created, redirect to home
        $state.go('main');
      })['catch'](function (err) {
        err = err.data;
        $scope.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, function (error, field) {
          form[field].$setValidity('mongoose', false);
          $scope.errors[field] = error.message;
        });
      });
    }
  };

  $scope.loginOauth = function (provider) {
    $window.location.href = '/auth/' + provider;
  };
});
//# sourceMappingURL=signup.controller.js.map
