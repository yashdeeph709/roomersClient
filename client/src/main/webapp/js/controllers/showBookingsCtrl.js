(function(){
	var app=angular.module("RoomModule")
	
	app.controller('showBookingsCtrl',['$scope','$http','SERVER_ADDRESS','$state','toaster','$rootScope',function($scope,$http,SERVER_ADDRESS,$state,toaster,$rootScope){
		$scope.range=parseInt(0);
		refresh();
		$scope.tables=[0,1,2,3,4,5,6,7,8,9];
		$scope.machines=[0,1,2,3,4,5,6,7,8,9];
		$scope.screens=[0,1,2,3,4,5,6,7,8,9];
		$scope.capacities=[0,1,2,3,4,5,6,7,8,9];

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
			$http.get(SERVER_ADDRESS+"room/"+$scope.range+"/2").success(function(data){
				$scope.rooms=data;
			}).error(function(data){
				console.log("refresh called");
				$scope.rooms=data;
				//toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
	}]);	
})();
