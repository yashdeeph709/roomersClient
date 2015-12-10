(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl', function($scope,$http,SERVER_ADDRESS,$state){
		$http.get(SERVER_ADDRESS+"getRooms").success(function(data){
			console.log(data);
			$scope.rooms=data.data;
		});
		$scope.editRoom=function(id){
			console.log(id);
			$state.go("updateRoom",{"id":id});
		}
	});	
})();
