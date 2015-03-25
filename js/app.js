'use strict';

angular.module('Measures', ['ngAnimate','pascalprecht.translate','ngCookies','ngRoute', 'ngResource','ngDragDrop', 'ui.bootstrap.modal',
	'ui.bootstrap.accordion','ui.bootstrap','template/accordion/accordion-group.html','template/accordion/accordion.html'])

.config(['$routeProvider',  '$translateProvider', function($routeProvider,$translateProvider) { 
  $translateProvider.translations('en', {
    WELCOME_MESSAGE: 'Welcome to GameDev', WELCOME_INFO : 'Press the menu icon in the top right to see the different forums.', LATEST: 'Latest reply:',
    SETTINGS: 'Settings and contacts',
    GAMEIDEAS: 'Game ideas',
    PROGRAMMING: 'Programming',
    OTHER: 'Other',
    REQUIREMENTS: 'Requirements',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    LOGIN: 'Login'
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
  when('/login',{
    templateUrl : 'views/login/index.html',
    controller : 'LoginCtrl'
  }).
  otherwise(
  {
    redirectTo: '/gameDev'
  }); 

}]);

