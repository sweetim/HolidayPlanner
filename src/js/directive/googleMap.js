'use strict';

angular.module('googleMapDirective', [])
	.directive('googleMap', function() {
		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			template: '<div flex></div>',
			replace: true,
			link: function(scope, element, attrs) {
                var map = new google.maps.Map(element[0], {
                   center: {
                       lat: 38.12313,
                       lng: 140.12332
                   },
                   zoom: 10
               });
			}
		};
	});
