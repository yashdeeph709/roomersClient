(function(){
	var app=angular.module("RoomModule");

	app.controller('checkAvailableCtrl',['$scope','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$http,SERVER_ADDRESS,$stateParams,toaster) {
		
	$http.get(SERVER_ADDRESS+"room").success(function(data){
				$scope.rooms=data;
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});;
		$scope.book=function(){
			console.log("booked!"+$scope.roomid)
		}
				function getMonday(d) {
			  var day = d.getDay(),
			      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
			  return new Date(d.setDate(diff));
			}
		var newDate = new Date();
		newDate.setFullYear(2014);
		newDate.setMonth(10);
		newDate.setDate(01);
		
		var date = getMonday(new Date());
		//2015-10-06T10:27:56

		$scope.date1 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date2 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date3 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date4 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date5 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date6 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date7 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		
		console.log($scope.date1);
	//$http.get(SERVER_ADDRESS+"availability/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"T"+"00:00:00").success(function(data){
	$http.get(SERVER_ADDRESS+"availabilities/2015-12-16T11:00Z").success(function(data){
				$scope.bookings=data;
				console.log($scope.bookings);
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});;
		$scope.book=function(){
			console.log("booked!"+$scope.roomid)
		}
	}]);

})();
