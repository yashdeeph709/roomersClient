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
	$stateProvider.state('updateRoom',{
		url:'/updateRoom/:id',
		templateUrl:'views/updateRoom.html'
	});

	$httpProvider.interceptors.push('authInterceptor');
	$urlRouterProvider.otherwise('/displayUsers');
});
app.factory('authInterceptor',function(){
	return{
	request:function(config){
	var token=JSON.parse(localStorage.getItem("admin"));
		if(config.url.indexOf("RoomManagement")==-1){
			return config;
		}
		if(config.url.indexOf("getAdmin")!=-1){
			return config;
		}
		if(config.url.indexOf("getUser")!=-1 && config.url.indexOf("getUsers")==-1){
			return config;
		}
		if(config.url.indexOf("getSubAdmin")!=-1){
			return config;
		}

		if(token){
	 		token=token.message;
	 	//	console.log(config.url+"/"+token);
//	 		config.url=config.url+"/"+token;
	 		config.headers.authToken=token;
	 	}
	 	return config;
	},
	response:function(response){
		return response;
	}
};
});