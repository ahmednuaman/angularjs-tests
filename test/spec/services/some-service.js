'use strict';

describe('Service: someService', function () {
  beforeEach(module('angularjsTestsApp'));

  var someService,
      $httpBackend;

  beforeEach(inject(function($injector, _someService_) {
    $httpBackend = $injector.get('$httpBackend');
    someService = _someService_;
  }));

  it('should have a get method', function () {

  });

  it('should make a GET call to /some-url', function () {
    someService.get('foo', 'bar');
  });
});
