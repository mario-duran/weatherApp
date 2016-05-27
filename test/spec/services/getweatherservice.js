'use strict';

describe('Service: getWeatherService', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var getWeatherService;
  beforeEach(inject(function (_getWeatherService_) {
    getWeatherService = _getWeatherService_;
  }));

  it('should do something', function () {
    expect(!!getWeatherService).toBe(true);
  });

});
