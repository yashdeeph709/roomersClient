var app=angular.module("RoomApp");

app.controller('displayUserCtrl', ['$scope','$http', function($scope,$http){
	
	$http.get("http://127.0.0.1:8080/getUsers").success(function(data){
		$scope.users=data;
	});
}])