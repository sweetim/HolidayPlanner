'use strict';

angular.module('travel', [
    'ngMaterial',
    'ui.router',
    'travel.MapCtrl',
    'travel.ContentCtrl',
    'googleMapDirective'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Main', {
        url: '/',
        views: {
            map: {
                templateUrl: 'js/map/map.html',
                controller: 'MapCtrl'
            },
            content: {
                templateUrl: 'js/content/content.html',
                controller: 'ContentCtrl'
            }
        }
    });
});


// var map = new google.maps.Map(document.getElementById('map'), {
//     center: holidayPlan[0].origin.location,
//     zoom: 10
// });

function generateHolidayMarker(holidayPlan) {
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

// generateHolidayMarker(holidayPlan[0]);
