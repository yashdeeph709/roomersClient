(function(){
	var app=angular.module("UserModule");
	
	app.controller('createUserCtrl',function($scope,$location,SERVER_ADDRESS){
		
		
		$scope.register=function(form)
		{
			var params={
					name:$scope.name,
					email:$scope.email,
					password: $scope.password
			};
			$http.post(SERVER_ADDRESS+"/register",params).success(function(data){
					alert(data);
		});
			if($scope.password != $scope.confirmPassword)
			{
				alert("Password Mismatched");
			}else{
				alert("Registered successfully");
				$location.path("/home");
			}
		}
		$scope.cancel=function()
		{
			alert("Cancelled successfully");
			$location.path("/home");
		}
	});
})();

