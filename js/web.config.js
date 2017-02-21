var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('!');
    
	$routeProvider 
	.when("/", {
		templateUrl: '../admin/dashboard.html',
		controller: 'dashboardController'
	})
    
    .when('/dashboard', {
		templateUrl: '../admin/dashboard.html',
		controller: 'dashboardController'
	})
    
    .when('/adddata', {
		templateUrl: '../admin/adddata.html',
		controller: 'adddataController'
	})
});


