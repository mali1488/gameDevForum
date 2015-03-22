angular.module('Measures')

.controller('SubjectCtrl', ['Forum','$cookieStore','$scope','$rootScope', function(Forum, $cookieStore,$scope,$rootScope){	

	$scope.replies = [];
	$scope.subjects = [];

	$scope.slide = false;
	$scope.subject = $cookieStore.get('choice');
	$scope.val = "";
	$scope.Subsubject = "";
	$scope.showSubsubject = false;


	Forum.getSubjects($scope.subject).success( function(data) {
		var obj = jQuery.parseJSON(data);
		$scope.$apply(function() {
			$scope.subjects = obj.item;
		});
	});

	$scope.changeForum = function(subject) {
		$scope.Subsubject = subject;
		$scope.showSubsubject = true;
		Forum.getForum($scope.subject,subject).success( function(data) {
			var obj = jQuery.parseJSON(data);
			$scope.$apply(function() {
				$scope.replies = obj.item;
			});

		});
	}

	$scope.slideC = function() {
		console.log("slide");
		if($scope.slide === true) {
			$scope.slide = false;
		} else {
			$scope.slide = true;
		}
	}
	
	$scope.newReply = function(val) {
		console.log(val);
		var reply = {reply: val, user: 'Cain', time: '666'};
		$scope.replies.push(reply);
		// TODO make call to Forum to add the replie to database
		$scope.val = "";
	}

}]); 