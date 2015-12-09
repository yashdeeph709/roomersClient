(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http', function($scope,$http,SERVER_ADDRESS){
		$http.get("http://127.0.0.1:8080/getUsers").success(function(data){
			$scope.users=data;
		});
		$scope.deleteUser=function(id){
			console.log(id);
			$http.get(SERVER_ADDRESS+"delete/"+id).success(function(data){
				alert("User Deleted Successfully!");
			});
			$http.get(SERVER_ADDRESS+"getUsers").success(function(data){
				$scope.users=data;
			});
		}
	}]);
})();