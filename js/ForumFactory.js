angular.module('Measures')
.factory('Forum', function ProductsFactory($http){
	var dbUrl = "http://localhost:8000/GameDev/db/db.php";
	return {
		getForum: function(choice) {
			console.log('choice: ', choice);
			switch(choice) {
				case 'Other':
					return 	$.get(dbUrl + "?forum=other");
					break;
				case 'Programming':
					return 	$.get(dbUrl + "?forum=programming");
					break;
				case 'Requirements':
					return 	$.get(dbUrl + "?forum=requirements");
					break;
				case 'Gameideas':
					return 	$.get(dbUrl + "?forum=gameideas");
					break;			
				default:
					console.log("Wrong argument to FACTORY");
					break;
			}
		},
		getLatest: function() {
			return $.get(dbUrl + "?latest=latestreply");
		}
	}
});