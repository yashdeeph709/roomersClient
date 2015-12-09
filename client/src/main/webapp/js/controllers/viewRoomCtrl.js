var app=angular.module("RoomApp")

app.controller('viewRoomCtrl', function($scope,$http){
	
	$http.get("http://127.0.0.1:8080/getRooms").success(function(data){
		$scope.rooms=data;
	});
	
	/*****viewRoomCtrl.js****************/
	
});