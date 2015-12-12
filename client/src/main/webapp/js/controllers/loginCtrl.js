(function(){
	var app=angular.module("UserModule");
	app.controller("loginCtrl",['$scope','$http','SERVER_ADDRESS','$state','toaster',function($scope,$http,SERVER_ADDRESS,$state,toaster){
		$scope.login=function(){
			$http.post(SERVER_ADDRESS+"login",{email:$scope.email,password:$scope.password})
			.success(function(data){
					localStorage.setItem("Token",JSON.stringify(data));
					if(data.rights===0){
						$state.go("profileAdmin.displayUsers");
					}else{
						if(data.rights===1){
							$state.go("profileAdmin.displayUsers");
						}else{
							$state.go("profile");
						}
					}				
			}).error(function(data,error){
				if(error==401){
				       toaster.pop('warning', "Message", '<h5>username and password incorrect</h5>', 1000, 'trustedHtml');
				}else{
				       toaster.pop('error', "Message", '<h5>Server Error</h5>', 1000, 'trustedHtml');
				}
			});
		}
	}]);
})();