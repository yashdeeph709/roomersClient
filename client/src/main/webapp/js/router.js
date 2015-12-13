var app=angular.module("RoomApp");

app.config(function($stateProvider,$urlRouterProvider,$httpProvider){
	
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/login.html'
	});


	$stateProvider.state('profileAdmin',{
		url: '/profileAdmin',
		templateUrl:'views/profileAdmin.html'
	});

	$stateProvider.state('profileAdmin.displayUsers',{
		url:'/displayUsers',
		templateUrl:'views/displayUsers.html'
	});
	$stateProvider.state('profileAdmin.createRoom',{
		url:'/createRoom',
		templateUrl:'views/createRoom.html'
	});
	$stateProvider.state('profileAdmin.createUser',{
		url:'/createUser',
		templateUrl:'views/createUser.html'
	});
	$stateProvider.state('profileAdmin.viewRoom',{
		url:'/viewRoom',
		templateUrl:'views/viewRoom.html'
	});
	$stateProvider.state('profileAdmin.updateRoom',{
		url:'/room/:id',
		templateUrl:'views/updateRoom.html'
	});
	$stateProvider.state('profileUser',{
		url:'/profile',
		templateUrl:'views/profile.html'
	});
	$stateProvider.state('profileUser.checkAvailableRooms',{
		url:'/checkAvailableRooms',
		templateUrl:'views/checkAvailbleRooms.html'
	});


	$httpProvider.interceptors.push('authInterceptor');
	$urlRouterProvider.otherwise('/home');
});
