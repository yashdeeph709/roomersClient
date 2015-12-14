(function(){
	var app=angular.module("RoomModule");

	app.controller('checkAvailableCtrl',['$scope','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$http,SERVER_ADDRESS,$stateParams,toaster) {
		
	$http.get(SERVER_ADDRESS+"rooms").success(function(data){
				$scope.rooms=data;
			}).error(function(data){
				toaster.pop('error', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});;
		$scope.book=function(){
			console.log("booked!")
		}
	}]);

})();
