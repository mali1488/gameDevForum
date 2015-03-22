angular.module('Measures')

.controller('GamedevCtrl', ['Forum','$scope', function(Forum,$scope){
	$scope.latest = [];

	Forum.getLatest().success(function(data) {
		var obj = jQuery.parseJSON(data);
		$scope.$apply(function() {
			$scope.latest = [obj.item];
			var length = $scope.latest[0].reply.length;
			if (length > 250) {
				$scope.latest[0].reply = $scope.latest[0].reply.substring(0,250) + '...';
			}
		});

	});
}]);