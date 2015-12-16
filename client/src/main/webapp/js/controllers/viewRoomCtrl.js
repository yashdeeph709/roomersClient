(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl',['$scope','$http','SERVER_ADDRESS','$state','toaster','$rootScope',function($scope,$http,SERVER_ADDRESS,$state,toaster,$rootScope){
		$scope.range=parseInt(0);
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
		$scope.next=function(){
			$scope.range+=parseInt(2);
			refresh();
			console.log("next called")
		}
		$scope.previous=function(){
			$scope.range-=parseInt(2);
			refresh();
			console.log("previous called")
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
				//toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
		function refresh(){
			$http.get(SERVER_ADDRESS+"room/"+$scope.range+"/10").success(function(data){
				$scope.rooms=data;
			}).error(function(data){
				console.log("refresh called");
				$scope.rooms=data;
				//toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
	}]);	
})();
