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
	$stateProvider.state('createRoom',{
		url:'/createRoom',
		templateUrl:'views/createRoom.html'
	});
	$stateProvider.state('createUser',{
		url:'/createUser',
		templateUrl:'views/createUser.html'
	});

	$urlRouterProvider.otherwise('/home');
});