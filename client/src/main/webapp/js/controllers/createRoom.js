(function(){
	var app=angular.module("RoomModule");

	app.controller('createRoomCtrl',['$scope','$http','SERVER_ADDRESS','toaster',function($scope,$http,SERVER_ADDRESS,toaster) {
	  $scope.createRoom= function() {
	 	  if($scope.roomInternet==null){
			  $scope.roomInternet = "false";
	 	  }
	 	  var request = {
	 					method: 'POST',
	 					url: SERVER_ADDRESS+'rooms',
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
			$http.post(request.url,request.data)
			.success(function(data){toaster.pop('success', "Message", '<h5>'+$scope.roomName+' Room Created Successfully!</h5>', 1000, 'trustedHtml');
			})
			.error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});
	 	  	$scope.roomName="";
			$scope.roomCity="";
			$scope.roomLocation="";
			$scope.roomBlock="";
			$scope.roomAddress="";
			$scope.roomCapacity="";
			$scope.roomTables="";
			$scope.roomMachines="";
			$scope.roomScreen="";
			$scope.roomBoard="";
			$scope.roomChart="";
			$scope.roomProjector="";
			$scope.roomInternet="";
	      };
	}]);
})();
