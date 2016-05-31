'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, cityService, getWeatherService) {
      $scope.city = cityService.city;
      $scope.APIKey = '8b2b94b5c687d1f6f704994875529a27';
      $scope.days = $routeParams.days || 1;
      $scope.convertToF = function(degC) {
          return degC;
      }

      $scope.converToDate = function(dt) {
          return new Date(dt * 1000);
      }


      $scope.results = getWeatherService.getWeather($scope.APIKey, $scope.city, $scope.days);

      console.log($scope.results);
  });
