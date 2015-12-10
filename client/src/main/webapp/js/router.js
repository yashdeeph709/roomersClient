var app=angular.module("RoomApp");

app.config(function($stateProvider,$urlRouterProvider,$httpProvider){
	
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
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/login.html'
	});
	$stateProvider.state('profile',{
		url:'/profile',
		templateUrl:'views/profile.html'
	});
	$stateProvider.state('profileAdmin',{
		url: '/profileAdmin',
		templateUrl:'views/profileAdmin.html'
	});

	$httpProvider.interceptors.push('authInterceptor');
	$urlRouterProvider.otherwise('/home');
});
app.factory('authInterceptor',function(){
		return{
		request:function(config){
			var token=JSON.parse(localStorage.getItem("Token"));
			if(config.url.indexOf("RoomManagement")==-1){
				return config;
			}
			if(config.url.indexOf("getAdmin")!=-1){
				return config;
			}
			if(config.url.indexOf("login")!=-1){
				return config;
			}
			if(config.url.indexOf("getUser")!=-1 && config.url.indexOf("getUsers")==-1){
				return config;
			}
			if(config.url.indexOf("getSubAdmin")!=-1){
				return config;
			}
			if(token){
				console.log(token.id);
		 		token=token.id;
		 		config.headers.authToken=token;
		 		console.log(config)
		 	}
		 	return config;
		},
		response:function(response){
			return response;
		}
	};
	});	
