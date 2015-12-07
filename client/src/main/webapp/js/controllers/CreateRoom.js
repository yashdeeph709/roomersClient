app.controller('CreateRoomController', function($scope,$http) {
  $scope.createRoom= function() {
        
        //console.log($scope.NewRoom);

        var request = {
 					method: 'POST',
 					url: 'http://localhost:8080/createRoom',
 					data:{
 						roomName: $scope.roomName,
 						roomCity: $scope.roomCity,
 						roomLocation: $scope.roomLocation,
 						roomBlock: $scope.roomBlock,
 						roomAddress: $scope.roomAddress,
 						roomCapacity: $scope.roomCapacity,
 						roomTables: $scope.roomTables,
 						roomMachines: $scope.roomMachines,
 						roomScreen: $scope.roomScreen,
 						roomBoard: $scope.roomBoard,
 						roomChart: $scope.roomChart,
 						roomProjector: $scope.roomProjector,
 						roomInternet: $scope.roomInternet
 					}
				}

				console.log("BC");
		/*$http.post(request.url,request.data).success(function(data)
          {
                        console.log("Success : " + data);
                });*/
		/*$http(req).then(function(){...}, function(){...});*/
      };
});