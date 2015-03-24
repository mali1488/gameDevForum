angular.module('Measures')

.controller('MainCtrl',['$cookieStore','$translate','$rootScope', '$scope', function($cookieStore,$translate,$scope, $rootScope) {
	$rootScope.toggle = true;
	$scope.isCollapsed = true;
	$translate.use('en');

	$scope.toggleNav = function() {
		if($rootScope.toggle === true) {
			$rootScope.toggle = false;
		} else {
			$rootScope.toggle = true;
		}
	}

	$scope.setForum = function(choice) {
		$cookieStore.put('choice',choice);
	}	
	
}]);