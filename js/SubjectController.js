angular.module('Measures')

.controller('SubjectCtrl', ['Forum','$cookieStore','$scope','$rootScope', function(Forum, $cookieStore,$scope,$rootScope){	

	$scope.replies = [];
	$scope.subjects = [];

	$scope.slide = false;
	$scope.subject = $cookieStore.get('choice');
	$scope.val = "";
	$scope.Subsubject = "";
	$scope.showSubsubject = false;
	$scope.user = 'RandomUser';

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

	$scope.addSubject = function(subsubject) {
		if (subsubject === undefined) {
			console.log("cant add empty subject");
		} else {
			Forum.insertSubject(subsubject.toLowerCase(),$scope.subject.toLowerCase());
			Forum.getSubjects($scope.subject).success( function(data) {
				var obj = jQuery.parseJSON(data);
				$scope.$apply(function() {
				$scope.subjects = obj.item;
				});
			});
		}
	}

	$scope.slideC = function() {
		if($scope.slide === true) {
			$scope.slide = false;
		} else {
			$scope.slide = true;
		}
	}
	
	$scope.newReply = function(reply) {
		Forum.insertReply($scope.user,$scope.subject.toLowerCase(),$scope.Subsubject.toLowerCase(), reply);
		// TODO make call to Forum to add the replie to database
		var reply = {user:$scope.user, reply: reply, date:10,time:10};
		//$scope.replies.push(reply);
		//$scope.val = "";
		Forum.getForum($scope.subject,$scope.Subsubject).success( function(data) {
			var obj = jQuery.parseJSON(data);
			$scope.$apply(function() {
				$scope.replies = obj.item;
			});

		});
	}

}]); 