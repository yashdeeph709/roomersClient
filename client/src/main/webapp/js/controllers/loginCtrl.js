(function(){
	var app=angular.module("UserModule");
	app.controller("loginCtrl",['$scope','$http','SERVER_ADDRESS','$state','toaster',function($scope,$http,SERVER_ADDRESS,$state,toaster){
		$scope.login=function(){
			$http.post(SERVER_ADDRESS+"login",{email:$scope.email,password:$scope.password})
			.success(function(data){
				console.log(data.status!=="failed");
				if(data.status!=="failed"){
					console.log(data.status);
					localStorage.setItem("Token",JSON.stringify(data.dataOne));
					if(data.dataOne.rights==="0.0"){
						$state.go("profileAdmin.displayUsers");
					}else{
						if(data.dataOne.rights==="1.0"){
							$state.go("profileAdmin.displayUsers");
						}else{
							$state.go("profile");
						}
					}
				}else{
				       toaster.pop('warning', "Message", '<h5>Username or Password Incorrect</h5>', 0, 'trustedHtml');
				}
			}).error(function(){
				       toaster.pop('error', "Message", '<h5>Server Error</h5>', 3000, 'trustedHtml');
			});
		}
	}]);
})();