'use strict';

angular.module('travel.ContentCtrl', ['travel.HolidayPlanService'])
    .controller('ContentCtrl', function($scope, HolidayPlanService) {
        $scope.origin = HolidayPlanService.getDayPlan(0).origin;
        $scope.waypoints = HolidayPlanService.getDayPlan(0).waypoints;
        $scope.destination = HolidayPlanService.getDayPlan(0).destination;
    });
