(function(){
	var app=angular.module("UserModule");
	app.controller("loginCtrl",function($scope,$http,SERVER_ADDRESS,$state,toaster){
		console.log("loginCtrl loaded!")
		
		$scope.login=function(){
			$http.post(SERVER_ADDRESS+"login",{email:$scope.email,password:$scope.password}).success(function(data){
				if(data.dataOne!=null){
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
				       toaster.pop('warning', "Message", '<h5>Username or Password Incorrect</h5>', 3000, 'trustedHtml');
				}
			});
		}
	});
})();