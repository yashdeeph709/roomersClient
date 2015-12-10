(function(){
	angular.module("RoomApp").factory('authInterceptor',function(){
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
		 		console.log(config.url+"/"+token);
//		 		config.url=config.url+"/"+token;
		 		config.headers.authToken=token;
		 	}
		 	return config;
		},
		response:function(response){
			return response;
		}
	};
	});	
})
