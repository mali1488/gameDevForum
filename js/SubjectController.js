angular.module('Measures')

.controller('SubjectCtrl', ['$cookieStore','$scope','$rootScope', function($cookieStore,$scope,$rootScope){
	// TODO: Hardcoded information for testing interface design. Change this to factory call
	$scope.subjects = [{subject: "Objective-c", numSubs: 10, latest: 'Matio at 10.10.12 14:45'}, 
	{subject: "Swift",numSubs: 10, latest: 'Matio at 01.10.12 14:14'}, 
	{subject: "C++",numSubs: 10, latest: 'newUser at 12.10.12 15:45'}, 
	{subject: "Erlang",numSubs: 10, latest: 'Matio at 05.10.12 13:45'},
	{subject: "Unreal engine",numSubs: 10, latest: 'Matio at 05.10.12 13:45'},
	{subject: "Unity",numSubs: 10, latest: 'Matio at 05.10.12 13:45'}];
	
	// TODO: Hardcoded information for testing interface design. Change this to factory call
	$scope.replies = [
		{reply: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user: 'Beer', time: '2014:12:12'},
		{reply: 'No dont do that stfu!!!', user: 'anonymous', time: '2014:12:15'},
		{reply: 'LOL ;D !!!', user: 'johndowns', time: '2014:12:16'}];

	$scope.slide = false;

	$scope.subject = $cookieStore.get('choice');
	$scope.val = "";

	console.log("choice: ",$scope.subject);
	$scope.Subsubject = "";
	$scope.showSubsubject = false;

	$scope.changeForum = function(subject) {
		$scope.Subsubject = subject;
		$scope.showSubsubject = true;
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
		$scope.val = "";
	}

}]); 