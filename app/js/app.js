'use strict';

angular.module('myApp', 
	['myApp.controllers','myApp.filters']).
 config(['$routeProvider', function($routeProvider) {
   $routeProvider.when('/GetTopMovies', {templateUrl: 'partials/TopMovieList.html',controller: 'GetTopListController'});
   $routeProvider.when('/ViewMovieDetail', {templateUrl: 'partials/DetailedView.html',controller: 'DetailedViewController'});
   $routeProvider.otherwise({redirectTo: '/index.html'});
 }]); 

