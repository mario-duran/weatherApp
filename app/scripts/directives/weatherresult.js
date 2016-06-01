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
           restrict: 'E',
           templateUrl: 'views/weatherResult.html',
           scope: {
               weatherDay: '=',
               converToDate: '&',
               dateFormat: '@'
           }
       };
  });
