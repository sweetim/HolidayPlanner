'use strict';

angular.module('travel', [
    'ngMaterial',
    'ui.router',
    'travel.ContentCtrl',
    'googleMapDirective'
]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('Main', {
            url: '/:day',
            templateUrl: 'js/content/content.html',
            controller: 'ContentCtrl'
    });
});
