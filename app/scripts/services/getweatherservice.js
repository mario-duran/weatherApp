'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.getWeatherService
 * @description
 * # getWeatherService
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('getWeatherService', function ($resource) {
    this.getWeather = function(APIKey, city, days, unitsFormat) {
      var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
      return weatherAPI.get({APPID: APIKey, q: city, mode:'json', units:unitsFormat, cnt: days});
  };
});
