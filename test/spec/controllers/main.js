'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('angularjsTestsApp'));

  var MainCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
