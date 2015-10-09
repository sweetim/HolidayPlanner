'use strict';

angular.module(
	'travel.ContentCtrl', [
		'travel.HolidayPlanService', 
		'ColorService'
	]).controller('ContentCtrl', function($scope, $stateParams, $state, HolidayPlanService, ColorService) {
       var day = $stateParams.day || 0;

       $scope.dayIndex = day;
       $scope.data = HolidayPlanService.getDayPlan(day);
       $scope.dayLength = HolidayPlanService.getAllPlan();

       $scope.changeDay = function(index) {
            $state.go('Main', {
                day: index
            });
       }

        HolidayPlanService.getPathInfo(day).then(function(info) {
            $scope.path = info.path;

	 		$scope.origin = HolidayPlanService.getDayPlan(day).origin;
        	$scope.originInfo = {
        		color: ColorService[0],
        		info: info.pathInfo[0]
        	};

        	var waypoints = HolidayPlanService.getDayPlan(day).waypoints;

        	var waypointsInfo = info.pathInfo.slice(1, info.pathInfo.length - 1).map(function(item, i) {
        		return {
        			color: ColorService[i + 1],
        			info: item
        		};
        	});

        	var allWaypoints = waypoints.reduce((a, b, i) => {
				return (i >= waypointsInfo.length) ? a.concat(b) : a.concat(b).concat(waypointsInfo[i])
			}, [])

        	$scope.waypoints = allWaypoints;

	        $scope.destination = HolidayPlanService.getDayPlan(day).destination;
        	$scope.destinationInfo = {
        		color: ColorService[info.pathInfo.length - 1],
        		info: info.pathInfo[info.pathInfo.length - 1]
        	};
        });
    });
