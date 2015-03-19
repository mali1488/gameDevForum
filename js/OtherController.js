angular.module('Measures')

.controller('OtherCtrl', ['$scope', function($scope){
	$scope.subjects = [{subject: "Partey", numSubs: 10, latest: 'Matio at 10.10.12 14:45'}, 
	{subject: "Music",numSubs: 10, latest: 'Matio at 01.10.12 14:14'}, 
	{subject: "Funny clips",numSubs: 10, latest: 'newUser at 12.10.12 15:45'}, 
	{subject: "Random",numSubs: 10, latest: 'Matio at 05.10.12 13:45'}];
}]);