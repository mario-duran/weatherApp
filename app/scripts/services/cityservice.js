'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.cityService
 * @description
 * # cityService
 * Service in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .service('cityService', function () {
    this.city = "Chicago, Il";
    this.metrics = "C";
  });
