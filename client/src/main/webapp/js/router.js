var app=angular.module("RoomApp");

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home.html'
	});
	$stateProvider.state('displayUsers',{
		url:'/displayUsers',
		templateUrl:'views/displayusers.html'
	});
	$stateProvider.state('CreateRoom',{
		url:'/CreateRoom',
		templateUrl:'views/CreateRoom.html'
	});
	$urlRouterProvider.otherwise('/displayUsers');
});