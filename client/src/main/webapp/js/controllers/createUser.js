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
				$http.post(SERVER_ADDRESS+"users",params).success(function(data,config){
					console.log(data);
					if(config==201){
						toaster.pop('success', "Message", '<h5>New User Create with name'+params.name+'!</h5>', 3000, 'trustedHtml');
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

