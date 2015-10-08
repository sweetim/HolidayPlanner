'use strict';

angular.module('travel', [
    'ngMaterial',
    'ui.router',
    'travel.MapCtrl',
    'travel.ContentCtrl',
    'googleMapDirective'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('Main', {
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
