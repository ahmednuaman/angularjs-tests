'use strict';

var SomeService = function ($http) {
  this.$http = $http;
};

SomeService.prototype.get = function (foo, bar) {
  return this.$http.get('/some-url', {
    params: {
      foo: foo,
      bar: bar
    }
  });
};

angular.module('angularjsTestsApp')
  .service('someService', SomeService);
