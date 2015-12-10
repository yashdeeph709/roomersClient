(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl', function($scope,$http,SERVER_ADDRESS){
		$http.get(SERVER_ADDRESS+"getRooms").success(function(data){
			console.log(data);
			$scope.rooms=data.data;
		});
		$scope.deleteRoom=function(name){
			$http.get("http://127.0.0.1:8080/RoomManagement/deleteRoom/"+name).success(function(data){
				alert("Room Deleted Successfully!");
			});
			$http.get("http://127.0.0.1:8080/RoomManagement/getRooms").success(function(data){
				$scope.rooms=data.data;
			});
		}
	});	
})();
