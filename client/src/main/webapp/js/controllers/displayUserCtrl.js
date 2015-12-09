(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http', function($scope,$http,SERVERADDRESS){
		$http.get("http://127.0.0.1:8080/getUsers").success(function(data){
			$scope.users=data;
		});
		$scope.deleteUser=function(id){
			console.log(id);
			$http.get(SERVERADDRESS+"delete/"+id).success(function(data){
				alert("User Deleted Successfully!");
			});
			$http.get(SERVERADDRESS+"getUsers").success(function(data){
				$scope.users=data;
			});
		}
	}]);
})();