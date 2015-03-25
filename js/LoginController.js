angular.module('Measures')

.controller('LoginCtrl', ['User','$location','$cookieStore','$scope', function(User,$location,$cookieStore,$scope) {
	$scope.message = "Login";

	$scope.authenticate = function(user) {
		console.log(user);
		User.authenticateUser(user).success(function(data){
			console.log("data in callback: ", data);
			if (data.search('success') != -1) {
				console.log("user may enter ");
			} else {
				console.log('wrong username of password');
			} 
		});
		$cookieStore.put('user',user);
		$location.path('/gameDev');
	}
}]);