(function(){
	var app=angular.module("RoomModule");

	app.controller('updateRoomCtrl',['$scope','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$http,SERVER_ADDRESS,$stateParams,toaster) {
		
	$http.get(SERVER_ADDRESS+"getRequiredRoom/"+$stateParams.id)
	.success(function(data){
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
	});
		
	$scope.updateRoom= function() {
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
			.success(function(data){toaster.pop('success', "Message", '<h5>'+data.message+' Room Updated Successfully!</h5>', 3000, 'trustedHtml');})
			.error(function(data){toaster.pop('error', "Message", '<h5>Room Not updated </h5>', 3000, 'trustedHtml');});
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
	    	

	}]);

})();
