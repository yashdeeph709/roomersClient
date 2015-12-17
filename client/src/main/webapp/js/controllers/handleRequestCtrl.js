(function(){
	var app=angular.module("UserModule");
	app.controller("HandleRequestCtrl",['$scope','$http','SERVER_ADDRESS','$state','toaster',function($scope,$http,SERVER_ADDRESS,$state,toaster){
		refresh();
		$scope.accept=function(booking){
			$http.put(SERVER_ADDRESS+"booking",booking)
			.success(function(data){
			       toaster.pop('warning', "Message", '<h5>Accepted successfully</h5>', 2000, 'trustedHtml');
			}).error(function(data,error){
			       toaster.pop('warning', "Message", '<h5>Cannot be Accepted</h5>', 2000, 'trustedHtml');
			});

		}	
		$scope.reject=function(booking){
			$http.put(SERVER_ADDRESS+"booking/cancel",booking)
			.success(function(data){
			       toaster.pop('warning', "Message", '<h5>Cancelled Successfully</h5>', 2000, 'trustedHtml');				
			}).error(function(data,error){
			       toaster.pop('warning', "Message", '<h5>Cannot be Cancelled Incorrect</h5>', 2000, 'trustedHtml');
			});
		}	
		function refresh(){
		$http.get(SERVER_ADDRESS+"booking/request")
		.success(function(data){
			$scope.bookings=data;
		}).error(function(data,error){
		       toaster.pop('warning', "Message", '<h5>Server Error!</h5>', 2000, 'trustedHtml');
		});

		}
	}]);
})();