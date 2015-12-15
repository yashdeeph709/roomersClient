(function(){
	var app=angular.module("UserModule");
	app.controller("loginCtrl",['$scope','$http','SERVER_ADDRESS','$state','toaster',function($scope,$http,SERVER_ADDRESS,$state,toaster){
		$scope.login=function(){
			$http.post(SERVER_ADDRESS+"login",{email:$scope.email,password:$scope.password})
			.success(function(data){
					localStorage.setItem("Token",JSON.stringify(data));
					switch(data.rights){
						case 0:
						$state.go("profileAdmin.displayUsers");
						break;
						case 2:
						$state.go("profileUser.checkAvailableRooms");
						break;
					}
			}).error(function(data,error){
				if(error==401){
				       toaster.pop('warning', "Message", '<h5>username and password incorrect</h5>', 2000, 'trustedHtml');
				}else{
				       toaster.pop('warning', "Message", '<h5>Server Error</h5>', 2000, 'trustedHtml');
				}
			});
		}
	}]);
})();