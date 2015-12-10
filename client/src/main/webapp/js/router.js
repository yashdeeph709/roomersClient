var app=angular.module("RoomApp");

app.config(function($stateProvider,$urlRouterProvider,$httpProvider){
	$stateProvider.state('displayUsers',{
		url:'/displayUsers',
		templateUrl:'views/displayUsers.html'
	});
	$stateProvider.state('createRoom',{
		url:'/createRoom',
		templateUrl:'views/createRoom.html'
	});
	$stateProvider.state('createUser',{
		url:'/createUser',
		templateUrl:'views/createUser.html'
	});
	$stateProvider.state('viewRoom',{
		url:'/viewRoom',
		templateUrl:'views/viewRoom.html'
	});
	$httpProvider.interceptors.push('authInterceptor');
	$urlRouterProvider.otherwise('/displayUsers');
});
