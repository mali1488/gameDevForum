angular.module('Measures')

.controller('GamedevCtrl', ['Forum','$scope', function(Forum,$scope){
	$scope.message = "Gamedev hello! wf";
	$scope.latest = [];

	Forum.getLatest().success(function(data) {
		var obj = jQuery.parseJSON(data);
		$scope.$apply(function() {
			$scope.latest = [obj.item];
		});

	});
}]);