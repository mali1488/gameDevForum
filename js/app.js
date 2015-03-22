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
    templateUrl : 'views/forum/index.html',
    controller : 'SubjectCtrl'
  }).
  when('/programming',{
    templateUrl : 'views/forum/index.html',
    controller: 'SubjectCtrl'
  }).
  when('/requirements',{
    templateUrl : 'views/forum/index.html',
    controller : 'SubjectCtrl'
  }).
  when('/other',{
    templateUrl : 'views/forum/index.html',
    controller: 'SubjectCtrl'
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

