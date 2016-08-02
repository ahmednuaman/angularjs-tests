'use strict';

describe('Directive: someLink', function () {
  beforeEach(module('angularjsTestsApp'));

  var element,
      scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile('<some-link been-clicked="beenClicked"></some-link>')(scope)
  }));

  it('should have link', inject(function () {
    scope.beenClicked = 'No :(';
    scope.$apply();

    expect(element.text()).toContain('Click me!');
    expect(element.text()).toContain('No :(');
  }));

  it('should change the text once the link is clicked', inject(function () {
    element.find('a').triggerHandler('click');
    
    expect(element.text()).toContain('Yes :)');
  }));
});
