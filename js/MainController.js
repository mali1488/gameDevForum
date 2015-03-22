angular.module('Measures')

.controller('MainCtrl',['$cookieStore','$translate','$rootScope', '$scope', function($cookieStore,$translate,$scope, $rootScope) {
	$rootScope.toggle = true;
	$scope.isCollapsed = true;
	$translate.use('en');

	$.post("http://localhost:8000/Measures/db/db.php",{ forum: 'music'}, 
		function(data) {
			var obj = jQuery.parseJSON(data);
			console.log('data respone: ',obj.item);
	});
	$.post("http://localhost:8000/Measures/db/db.php",{ forum: 'games'}, 
		function(data) {
			var obj = jQuery.parseJSON(data);
			console.log('data respone: ',obj.item);
	});

	$.get("http://localhost:8000/Measures/db/db.php?forum=other", 
		function(data) {
			var obj = jQuery.parseJSON(data);
			console.log('data respone: ',obj.item);
	});

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