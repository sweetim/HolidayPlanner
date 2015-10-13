'use strict';

angular.module('WeatherService', [])
	.factory('WeatherService', function($q, $http) {
		function getAPIUrl(lat, lng) {
			return 'http://api.openweathermap.org/data/2.5/forecast/daily?' + 
				'lat=' + lat + '&' +
				'lon=' + lng +
				'&cnt=10&units=metric&APPID=21910296d962d169fbef61257eebed26';
		}

		return {
			getWeatherIcon: function(id) {
				return 'http://openweathermap.org/img/w/' + id + '.png';
			},
			getTemperature: function(lat, lng) {
				var defer = $q.defer();

				$http.get(getAPIUrl(lat, lng))
					.success(function(res) {
						defer.resolve(res);
					})
					.error(function(status) {
						console.log(status)
					});

				return defer.promise;
			}
		};
	});