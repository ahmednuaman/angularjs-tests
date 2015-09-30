'use strict';

angular.module('angularjsTestsApp')
  .directive('someLink', function () {
    return {
      template: '<div><a ng-click="clicked()">Click me!</a> <span>{{beenClicked}}</span></div>',
      restrict: 'E',
      scope: {
        beenClicked: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.clicked = function () {
          scope.beenClicked = 'Yes :)';
        };
      }
    };
  });
