'use strict';

angular.module('travel.MapCtrl', ['travel.HolidayPlanService'])
    .controller('MapCtrl', function($scope, HolidayPlanService) {
        $scope.data = HolidayPlanService.getDayPlan(0);
        $scope.path = HolidayPlanService.getPath(0);
    });
