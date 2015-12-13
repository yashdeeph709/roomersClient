(function(){
var app=angular.module("RoomApp")
app.factory('authInterceptor',function(){
		return{
		request:function(config){
			var token=JSON.parse(localStorage.getItem("Token"));
			if(config.url.indexOf("roommanagement")==-1){
				return config;
			}
			if(token){
		 		token=token.id;
		 		config.headers.authToken=token;
		 	}
		 	return config;
		},
		response:function(response){
			return response;
		}
	};
	});	
})();