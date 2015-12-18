(function(){
	var app=angular.module("RoomModule")
	
	app.controller('showBookingsCtrl',['$scope','$http','SERVER_ADDRESS','$state','toaster','$rootScope',function($scope,$http,SERVER_ADDRESS,$state,toaster,$rootScope){
		refresh();
		function refresh(){
			$http.get(SERVER_ADDRESS+"booking/").success(function(data){
				$scope.bookings=data;
			}).error(function(data){
				//console.log("refresh called");
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
		$scope.reject=function(id){
			$http.delete(SERVER_ADDRESS+"booking/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5> Booking Cancelled successfully!</h5>', 3000, 'trustedHtml');
				refresh();
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
	}]);	
})();
