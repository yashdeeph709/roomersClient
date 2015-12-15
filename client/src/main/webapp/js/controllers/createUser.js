(function(){
	var app=angular.module("UserModule");
	app.controller('createUserCtrl',['$scope','$state','SERVER_ADDRESS','$http','toaster',function($scope,$state,SERVER_ADDRESS,$http,toaster){		
		$scope.register=function()
		{
			if($scope.password != $scope.confirmPassword)
			{
				toaster.pop('warning', "Message", '<h5>Password Mismatched!</h5>', 1000, 'trustedHtml');
			}else{
				var params={	name:$scope.name,  	email:$scope.email, password: $scope.password };
				$http.post(SERVER_ADDRESS+"user",params).success(function(data,config){
					console.log(data);
					if(config==201){
						toaster.pop('warning', "Message", '<h5>New User Create with name'+params.name+'!</h5>', 1000, 'trustedHtml');
					}else{
						toaster.pop('warning', "Message", '<h5>User Already Exists!</h5>', 1000, 'trustedHtml');				
					}
				}).
				error(function(data){
					toaster.pop('error', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
				});
			}
			$scope.name="";
			$scope.email="";
			$scope.password="";
			$scope.confirmPassword="";
		}
		$scope.cancel=function()
		{
			toaster.pop('warning', "Message", '<h5>User Creation Cancelled!</h5>', 1000, 'trustedHtml');
			$state.go("profileAdmin.displayUsers");
		}
		$scope.checkAvailability=function(){
			$http.get(SERVER_ADDRESS+'/')
			console.log($scope.name);
		}
	}]);
})();

