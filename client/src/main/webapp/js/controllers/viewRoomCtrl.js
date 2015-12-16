(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl',['$scope','$http','SERVER_ADDRESS','$state','toaster','$rootScope',function($scope,$http,SERVER_ADDRESS,$state,toaster,$rootScope){
		
	 $scope.curPage = 0;
	 $scope.pageSize = 5;
	 $scope.numberOfPages=0;
	 $http.get(SERVER_ADDRESS+'/room')
	 .success(function(data){
	 	console.log(data.length);
	 	$scope.numberOfPages=data.length;
	 });
	 $scope.previous=function(){
	 	$scope.curPage=$scope.curPage-1;
	 	refresh();
	 }
	 $scope.next=function(){
		 $scope.curPage=$scope.curPage+1;	
		 refresh();
	 }
	refresh();
		
		$scope.tables=[];
		$scope.machines=[];
		$scope.screens=[];
		$scope.capacities=[];
		$scope.projectors=[];

		$scope.filter={
			roomCapacity:0,
			roomTables:0,
			roomMachines:0,
			roomScreen:0,
			roomProjector:0
		}

		for(var i=1;i<100;i++){
			$scope.tables.push(i);
			$scope.machines.push(i);
			$scope.screens.push(i);
			$scope.capacities.push(i);
			$scope.projectors.push(i);
		}
		$scope.editRoom=function(id){
			$state.go("profileAdmin.updateRoom",{"id":id});
		}
		$scope.confirm=function(id){
			toaster.pop("warning","Message","views/toast.html",50000,'template');
			$rootScope.$on('ok', function (event, data) {
				console.log("I got the event");
				$scope.deleteRoom(id);
			});
		}





		$scope.greaterThanCapacity = function(current,b,values){
			return current.roomCapacity>=$scope.filter.roomCapacity?true:false;
		}	
		$scope.greaterThanMachines = function(current,b,values){
			return current.roomMachines>=$scope.filter.roomMachines?true:false;
		}	
		$scope.greaterThanTables = function(current,b,values){
			return current.roomTables>=$scope.filter.roomTables?true:false;
		}	
		$scope.greaterThanProjectors = function(current,b,values){
			return current.roomProjector>=$scope.filter.roomProjector?true:false;
		}	
		$scope.greaterThanScreens = function(current,b,values){
			return current.roomScreens>=$scope.filter.roomScreens?true:false;
		}	














		
		$scope.deleteRoom=function(name){
			$http.delete(SERVER_ADDRESS+"room/"+name).success(function(data){
				toaster.pop('warning', "Message", '<h5> Room Deleted Successfully!</h5>', 3000, 'trustedHtml');
			}).success(function(){
				refresh();
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
		
		

		function refresh(){
			$http.get(SERVER_ADDRESS+"room/"+$scope.curPage*$scope.pageSize+"/"+$scope.pageSize).success(function(data){
				console.log("refresh called")
				$scope.rooms=data;
			}).error(function(data){
				console.log("error refresh called");
				//toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}






	}]);	
})();
