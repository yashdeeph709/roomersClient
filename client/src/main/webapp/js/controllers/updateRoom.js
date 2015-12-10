(function(){
	var app=angular.module("RoomModule");

	app.controller('updateRoomCtrl', function($scope,$http,SERVER_ADDRESS,$stateParams) {
		
		console.log("*************"+$stateParams.id);
	$http.get("http://127.0.0.1:8080/RoomManagement/getRequiredRoom/"+$stateParams.id).success(function(data){
				$scope.roomName=data.dataOne.roomName;
				$scope.roomCity=data.dataOne.roomCity;
				$scope.roomLocation=data.dataOne.roomLocation;
				$scope.roomBlock=data.dataOne.roomBlock;
				$scope.roomAddress=data.dataOne.roomAddress;
				$scope.roomCapacity=parseInt(data.dataOne.roomCapacity);
				$scope.roomTables=parseInt(data.dataOne.roomTables);
				$scope.roomMachines=parseInt(data.dataOne.roomMachines);
				$scope.roomScreen=parseInt(data.dataOne.roomScreen);
				$scope.roomBoard=parseInt(data.dataOne.roomBoard);
				$scope.roomChart=parseInt(data.dataOne.roomChart);
				$scope.roomProjector=parseInt(data.dataOne.roomProjector);
				$scope.roomInternet=parseInt(data.dataOne.roomInternet);
	
		console.log(typeof(parseInt(data.dataOne.roomCapacity)));
		console.log(data.data);
		console.log($scope.roomName=data.dataOne.roomName);
	});
		
	
	  $scope.updateRoom= function() {
		  console.log("updateRoom")
		  
		  
	 	  var request = {
	 					method: 'POST',
	 					url: SERVER_ADDRESS+'updateRoom',
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
	 	 alert("Room Updated successfully");
	    };
	    
	    
	    $scope.show=function(){
	    	$http.get(SERVER_ADDRESS+"availRoomName/"+$scope.roomName)
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
