angular.module('Measures')

.controller('SubjectCtrl', ['$location','Forum','$cookieStore','$scope','$rootScope', function($location,Forum, $cookieStore,$scope,$rootScope){	

	$scope.replies = [];
	$scope.subjects = [];

	$scope.slide = false;
	$scope.subject = $cookieStore.get('choice');
	$scope.val = "";
	$scope.Subsubject = "";
	$scope.showSubsubject = false;

	$scope.user = $cookieStore.get('user');

	if ($scope.user === undefined) {
		$location.path('/login');
	}

	Forum.getSubjects($scope.subject).success( function(data) {
		var obj = jQuery.parseJSON(data);
		$scope.$apply(function() {
			$scope.subjects = obj.item;
		});
	});
	
	
	$scope.assingLatestReplies = function() {
		Forum.getLatestForumReplies().success( function(data) {
			//console.log("DATA LATEST REPLY: ",data);
			var obj = jQuery.parseJSON(data);
			var replies = obj.item;
			var length = $scope.subjects.length;
			for(var i = 0 ; i < length; i++) {
				var lengthTwo = replies.length;
				for(var j = 0; j < lengthTwo; j++) {
					var str = $scope.subjects[i].subject.toLowerCase();
					if (str.search(replies[j].subsubject) != -1) {
						//console.log(str);
						//console.log(replies[j].subsubject)
						$scope.$apply( function() {
							$scope.subjects[i].latest = replies[j];
							//console.log($scope.subjects[i])
						});
						//console.log(replies[j].reply);
					} else {
						//console.log('noHit');
					}
					//console.log("------------");
				}
			}	
		});
	}
	$scope.assingLatestReplies();


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
		if (reply === undefined) {
			console.log("cant add empty reply");
		} else {
			Forum.insertReply($scope.user.name,$scope.subject.toLowerCase(),$scope.Subsubject.toLowerCase(), reply);
			Forum.getForum($scope.subject,$scope.Subsubject).success( function(data) {
				var obj = jQuery.parseJSON(data);
				$scope.$apply(function() {
					$scope.replies = obj.item;
				});

			});
		}
	}

}]); 