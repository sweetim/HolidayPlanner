'use strict';

angular.module(
	'travel.ContentCtrl', [
		'travel.HolidayPlanService', 
		'ColorService'
	]).controller('ContentCtrl', function($scope, $stateParams, HolidayPlanService, ColorService) {
       var day = $stateParams.day || 0;

        HolidayPlanService.getPathInfo(day).then(function(info) {
	 		$scope.origin = HolidayPlanService.getDayPlan(day).origin;
        	$scope.originInfo = {
        		color: ColorService[0],
        		info: info[0]
        	};

        	var waypoints = HolidayPlanService.getDayPlan(day).waypoints;

        	var waypointsInfo = info.slice(1, info.length - 1).map(function(item, i) {
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
        		color: ColorService[info.length - 1],
        		info: info[info.length - 1]
        	};
        });
    });
