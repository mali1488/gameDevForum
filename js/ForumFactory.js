angular.module('Measures')
.factory('Forum', function ProductsFactory($http){
	var dbUrl = "http://localhost:8000/GameDev/db/db.php";
	return {
		getForum: function(forum, subject) {
			return 	$.get(dbUrl + "?forum=" + forum + "&subforum=" + subject);
		},
		getSubjects: function(choice) {
			return 	$.get(dbUrl + "?subject="+ choice);
		},
		getLatest: function() {
			return $.get(dbUrl + "?latest=latestreply");
		},
		insertReply: function(user, subject, subsubject, reply) {
			return $.get(dbUrl + "?insertReply=" +  reply + "&subject=" + subject + "&subsubject=" + subsubject + "&user=" + user);;
		},
		insertSubject: function(subject, category) {			
			console.log(subject);
			console.log(category);
			return $.get(dbUrl + "?newSubject=" + subject + "&category=" + category);
		}
	}
});