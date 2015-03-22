angular.module('Measures')
.factory('Forum', function ProductsFactory($http){
	var dbUrl = "http://localhost:8000/GameDev/db/db.php";
	return {
		getForum: function(forum, subject) {
			console.log("....." + dbUrl + "?forum=" + forum + "&subforum=" + subject + ".....");
			return 	$.get(dbUrl + "?forum=" + forum + "&subforum=" + subject);
				
		},
		getSubjects: function(choice) {
			console.log('choice: ', choice);
			switch(choice) {
				case 'Other':
					return 	$.get(dbUrl + "?subject=other");
					break;
				case 'Programming':
					return 	$.get(dbUrl + "?subject=programming");
					break;
				case 'Requirements':
					return 	$.get(dbUrl + "?subject=requirements");
					break;
				case 'Gameideas':
					return 	$.get(dbUrl + "?subject=gameideas");
					break;			
				default:
					console.log("Wrong argument to FACTORY in getsubjects");
					break;
			}
		},
		getLatest: function() {
			return $.get(dbUrl + "?latest=latestreply");
		}
	}
});