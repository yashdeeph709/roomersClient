(function(){
	var app=angular.module("RoomModule");

	app.controller('createRoomCtrl', function($scope,$http,SERVERADDRESS) {
	  $scope.createRoom= function() {
	 	  if($scope.roomInternet==null){
			  $scope.roomInternet = "false";
	 	  }
	 	  var request = {
	 					method: 'POST',
	 					url: SERVERADDRESS+'createRoom',
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
			.success(function(data){alert(data.message);})
			.error(function(data){alert(data);});
	      };
	    $scope.show=function(){
	    	$http.get(SERVERADDRESS+"availRoomName/"+$scope.roomName)
	    	.success(function(data){
		    	if(data.status==="false"){
		    		$scope.avail=true;
		    	}
		    	else{
		    		$scope.avail=false;
		    	}
	    	}).error(function(data){
	    		
	    		alert(data);
	    	});
	    }
	    	
	});
})();
