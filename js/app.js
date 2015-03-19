'use strict';

angular.module('Measures', ['ngAnimate','pascalprecht.translate','ngCookies','ngRoute', 'ngResource','ngDragDrop', 'ui.bootstrap.modal',
	'ui.bootstrap.accordion','ui.bootstrap','template/accordion/accordion-group.html','template/accordion/accordion.html'])

.config(['$routeProvider',  '$translateProvider', function($routeProvider,$translateProvider) { 
  $translateProvider.translations('en', {
    WELCOME_MESSAGE: 'Welcome to GameDev', WELCOME_INFO : 'Press the button left of the header to se forums',
    SETTINGS: 'Settings and contacts',
    GAMEIDEAS: 'Game ideas',
    PROGRAMMING: 'Programming',
    OTHER: 'Other',
    REQUIREMENTS: 'Requirements'
  }),

  $routeProvider.when('/gameDev',					  
  {
  	templateUrl : 'views/gameDev/index.html',
  	controller: 'GamedevCtrl'
  }).
  when('/gameIdeas',{
    templateUrl : 'views/gameIdeas/index.html',
    controller : 'GameideaCtrl'
  }).
  when('/programming',{
    templateUrl : 'views/programming/index.html',
    controller: 'ProgrammingCtrl'
  }).
  when('/requirements',{
    templateUrl : 'views/requirements/index.html',
    controller : 'RequirementsCtrl'
  }).
  when('/other',{
    templateUrl : 'views/other/index.html',
    controller: 'OtherCtrl'
  }).
  when('/settings',{
    templateUrl : 'views/settings/index.html',
    controller : 'SettingsCtrl'
  }).
  otherwise(
  {
    redirectTo: '/gameDev'
  }); 

}]);

