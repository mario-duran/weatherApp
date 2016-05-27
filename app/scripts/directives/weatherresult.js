'use strict';

/**
 * @ngdoc directive
 * @name weatherAppApp.directive:weatherResult
 * @description
 * # weatherResult
 */
angular.module('weatherAppApp')
  .directive('weatherResult', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the weatherResult directive');
      }
    };
  });
