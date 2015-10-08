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
			function generateHolidayMarker(holidayPlan, map) {
				function generateMarker(position, title, link, icon) {
					var infoWindow = generateInfoWindow(title, link);

					var marker = new google.maps.Marker({
						position: position,
						map: map,
						title: title,
						icon: icon
					});

					marker.addListener('click', function() {
						infoWindow.open(map, marker);
					});

					return marker;
				}

				function generateInfoWindow(title, link) {
					var infoHtml = '<a href="' + link + '" target="_blank">' + title + '</a>';

					return new google.maps.InfoWindow({
						content: infoHtml
					});
				}

				var allMarkers = [];

				allMarkers.push(generateMarker(
					holidayPlan.origin.location,
					holidayPlan.origin.name,
					holidayPlan.origin.link,
					'img/landing.png'
				));

				allMarkers.push(generateMarker(
					holidayPlan.destination.location,
					holidayPlan.destination.name,
					holidayPlan.destination.link,
					'img/hotel.png'
				));

				allMarkers.push(holidayPlan.waypoints.map(function(item) {
					return generateMarker(
						item.location,
						item.name,
						item.link,
						'img/poi.png'
					);
				}));
			}

			scope.$watch('data', function(newValue) {
				if (newValue) {
					var map = new google.maps.Map(element[0], {
						center: newValue.origin.location,
						zoom: 10
					});

					generateHolidayMarker(newValue, map);
				}
			});
		}
	};
});
