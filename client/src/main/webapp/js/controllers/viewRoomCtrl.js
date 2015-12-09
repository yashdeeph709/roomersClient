(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl', function($scope,$http,SERVERADDRESS){
		$http.get(SERVERADDRESS+"getRooms").success(function(data){
			$scope.rooms=data;
		});
	});	
})();
