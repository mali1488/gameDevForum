angular.module('Measures')

.controller('ProgrammingCtrl', ['$scope', function($scope){
	$scope.subjects = [{subject: "Objective-c", numSubs: 10, latest: 'Matio at 10.10.12 14:45'}, 
	{subject: "Swift",numSubs: 10, latest: 'Matio at 01.10.12 14:14'}, 
	{subject: "C++",numSubs: 10, latest: 'newUser at 12.10.12 15:45'}, 
	{subject: "Erlang",numSubs: 10, latest: 'Matio at 05.10.12 13:45'},
	{subject: "Unreal engine",numSubs: 10, latest: 'Matio at 05.10.12 13:45'},
	{subject: "Unity",numSubs: 10, latest: 'Matio at 05.10.12 13:45'}];
}]);