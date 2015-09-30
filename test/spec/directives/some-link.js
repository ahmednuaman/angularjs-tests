'use strict';

describe('Directive: someLink', function () {
  beforeEach(module('angularjsTestsApp'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have link', inject(function ($compile) {
    expect(element.text()).toContain('Click me!');
    expect(element.text()).toContain('No :(');
  }));

  it('should change the text once the link is clicked', inject(function ($compile) {
    expect(element.text()).toContain('Yes :)');
  }));
});
