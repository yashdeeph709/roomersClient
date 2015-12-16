(function(){
	var app=angular.module("RoomModule");

	app.controller('updateRoomCtrl',['$scope','$state','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$state,$http,SERVER_ADDRESS,$stateParams,toaster) {
		
	$http.get(SERVER_ADDRESS+"room/"+$stateParams.id)
	.success(function(data){
				$scope.roomName=data.roomName;
				$scope.roomCity=data.roomCity;
				$scope.roomLocation=data.roomLocation;
				$scope.roomBlock=data.roomBlock;
				$scope.roomAddress=data.roomAddress;
				$scope.roomCapacity=parseInt(data.roomCapacity);
				$scope.roomTables=parseInt(data.roomTables);
				$scope.roomMachines=parseInt(data.roomMachines);
				$scope.roomScreen=parseInt(data.roomScreen);
				$scope.roomBoard=parseInt(data.roomBoard);
				$scope.roomChart=parseInt(data.roomChart);
				$scope.roomProjector=parseInt(data.roomProjector);
				$scope.roomInternet=parseInt(data.roomInternet);
	}).error(function(data){
		toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
	});;
		
	$scope.updateRoom= function() {
	 	  var request = {
	 					url: SERVER_ADDRESS+'room/',
	 					data:{
	 						id:$stateParams.id,
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
			$http.put(request.url,request.data)
			.success(function(data){
				toaster.pop('warning', "Message", '<h5> Room Updated Successfully!</h5>', 1000, 'trustedHtml');
			})
			$state.go("profileAdmin.viewRoom")
	    };
	$scope.cancel=function(){
		toaster.pop('warning','Message','<h5>Room Updation cancelled</h5>',2000,'trustedHtml');
		$state.go("profileAdmin.viewRoom")
	}	    
	    
/*	    $scope.show=function(){
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
*/	    	

	}]);

})();
