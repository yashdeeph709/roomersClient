(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl', function($scope,$http,SERVER_ADDRESS){
		$http.get(SERVER_ADDRESS+"getRooms").success(function(data){
			$scope.rooms=data;
		});
	});	
})();
