angular.module('Measures')

.controller('RequirementsCtrl', ['$scope', function($scope){
	$scope.subjects = [{subject: "Functional", numSubs: 10, latest: 'Matio at 10.10.12 14:45'}, 
	{subject: "Non-functional",numSubs: 10, latest: 'Matio at 01.10.12 14:14'}];
}]); 