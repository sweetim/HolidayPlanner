'use strict';

angular.module('travel.MapCtrl', ['travel.HolidayPlanService'])
    .controller('MapCtrl', function($scope, $stateParams, HolidayPlanService) {
        var day = $stateParams.day || 0;

        $scope.data = HolidayPlanService.getDayPlan(day);

        HolidayPlanService.getMapPath(day).then(function(path) {
        	$scope.path = path;
        });       
    });
