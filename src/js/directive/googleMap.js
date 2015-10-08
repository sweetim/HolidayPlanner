'use strict';

angular.module('googleMapDirective', ['ColorService'])
.directive('googleMap', function(ColorService) {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			path: '='
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

			var map;

			scope.$watch('data', function(newValue) {
				if (newValue) {
					map = new google.maps.Map(element[0], {
						center: newValue.origin.location,
						zoom: 10
					});

					generateHolidayMarker(newValue, map);
				}
			});

			scope.$watch('path', function(newValue) {
				if (newValue) {
					newValue.forEach(function(path, i) {
						var directionsDisplay = new google.maps.DirectionsRenderer({
							suppressMarkers: true,
							polylineOptions: {
								strokeColor: ColorService[i],
								strokeWeight: 5
							}
						});

						directionsDisplay.setMap(map);
						directionsDisplay.setDirections(path);
					});
				}
			});
		}
	};
});
