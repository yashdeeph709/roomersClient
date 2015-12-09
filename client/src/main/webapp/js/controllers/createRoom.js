app.controller('CreateRoomController', function($scope,$http,$window) {
  $scope.createRoom= function() {
        
	  if($scope.roomInternet==null)
		  $scope.roomInternet = "false";
	  
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
        
		$http.post(request.url,request.data).success(function(data)
          {
                        console.log("Success : " + data.status +" "+ data.message);
                        $window.alert(data.message);
        
          });
        
      };
      
      $scope.ctr=0;
    $scope.show=function(){
    	
    	$http.get("http://127.0.0.1:8080/availRoomName/"+$scope.roomName).success(function(data){
		//	alert("User Deleted Successfully!");
		
    	if(data.status==="false"){
    		$scope.avail=true;
    	}
    	else{
    			$scope.avail=false;
    	}
    	console.log($scope.roomName);
    	});
    }
    	
});
