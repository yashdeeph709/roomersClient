(function(){
	var app=angular.module("RoomModule")
	
	app.controller('viewRoomCtrl',['$scope','$http','SERVER_ADDRESS','$state','toaster',function($scope,$http,SERVER_ADDRESS,$state,toaster){
		$http.get(SERVER_ADDRESS+"getRooms").success(function(data){
			$scope.rooms=data.data;
		}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
		});;
		$scope.editRoom=function(id){
			$state.go("profileAdmin.updateRoom",{"id":id});
		}
		$scope.deleteRoom=function(name){
			$http.get(SERVER_ADDRESS+"deleteRoom/"+name).success(function(data){
				toaster.pop('success', "Message", '<h5> Room Deleted Successfully!</h5>', 3000, 'trustedHtml');
			}).success(function(){
				refresh();
			}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
		function refresh(){
			$http.get(SERVER_ADDRESS+"getRooms").success(function(data){
				$scope.rooms=data.data;
			}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
	}]);	
})();
