(function(){
	var app=angular.module("UserModule");
	
	app.controller('createUserCtrl',function($scope,$location,SERVERADDRESS){
		$scope.register=function(form)
		{
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

