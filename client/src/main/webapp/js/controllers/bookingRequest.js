(function(){
	var app=angular.module("RoomModule");

	app.controller('bookingRequestCtrl',['$scope','$state','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$state,$http,SERVER_ADDRESS,$stateParams,toaster) {
		console.log($stateParams);

	$http.get(SERVER_ADDRESS+'room').success(function(data){
		$scope.rooms=data;
	});
	$scope.requestRoom= function() {
		var user=JSON.parse(localStorage.getItem('Token'));
		console.log(user.id);
	 	  var request = {
	 					url: SERVER_ADDRESS+'booking/'+$scope.roomid,
	 					data:{
	 							  "startDate": $scope.startDate,
	 							  "endDate": $scope.endDate,
	 							  "status": "REQUESTED",
	 							  "requestee":user.id,
	 							  "subject":  $scope.subject,
	 							  "category":  $scope.category
	 					}
					}
			$http.post(request.url,request.data)
			.success(function(data){
				toaster.pop('warning','Message','Room request added!',3000,'trustedHtml');
			}).error(function(error){
				toaster.pop('warning','Message','Room not available',3000,'trustedHtml');
			})
	    };
    
	}]);

})();
