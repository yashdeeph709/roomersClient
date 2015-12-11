(function(){
	var app=angular.module("UserModule");
	app.controller('createUserCtrl',['$scope','$location','SERVER_ADDRESS','$http','toaster',function($scope,$location,SERVER_ADDRESS,$http,toaster){		
		$scope.register=function()
		{
			if($scope.password != $scope.confirmPassword)
			{
				toaster.pop('warning', "Message", '<h5>Password Mismatched!</h5>', 3000, 'trustedHtml');
			}else{
				var params={	name:$scope.name,  	email:$scope.email, password: $scope.password };
				$http.post(SERVER_ADDRESS+"/register",params).success(function(data){
					if(data.status.trim()!="false"){
						toaster.pop('success', "Message", '<h5>'+data.message+'!</h5>', 3000, 'trustedHtml');
					}else{
						toaster.pop('warning', "Message", '<h5>User Already Exists!</h5>', 3000, 'trustedHtml');				
					}
				}).
				error(function(data){
					toaster.pop('error', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
				});
			}
		}
		$scope.cancel=function()
		{
			toaster.pop('error', "Message", '<h5>User Creation Cancelled!</h5>', 3000, 'trustedHtml');
			$location.path("/home");
		}
	}]);
})();

