'use strict';

angular.module('travel.MapCtrl', ['travel.HolidayPlanService'])
    .controller('MapCtrl', function($scope, HolidayPlanService) {
        $scope.data = HolidayPlanService.getDayPlan(0);
    });
