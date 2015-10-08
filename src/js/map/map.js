'use strict';

angular.module('travel.MapCtrl', ['travel.HolidayPlanService'])
    .controller('MapCtrl', function($scope, HolidayPlanService) {
        $scope.data = HolidayPlanService.getDayPlan(0);

        HolidayPlanService.getMapPath(0).then(function(path) {
        	$scope.path = path;
        });
       
    });
