angular.module('Measures')
.factory('User',function UserFactory($http){
	var dbUrl = "http://localhost:8000/GameDev/db/db.php";
	return {
		authenticateUser: function(user) {
			console.log("user in factory: ",user);
			return $.get(dbUrl + "?user=" + user.name + "&password=" + user.password);
		}
	}
});