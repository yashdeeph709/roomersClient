(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster','$rootScope', function($scope,$http,SERVER_ADDRESS,toaster,$rootScope){
		refresh();
		$scope.confirm=function(id){
			toaster.pop("warning","Message","views/toast.html",2000,'template');
			$rootScope.$on('ok', function (event, data) {
				console.log("I got the event");
				$scope.deleteUser(id);
			});
		}

		$scope.deleteUser=function(id){
			$http.delete(SERVER_ADDRESS+"users/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5>User Deleted Successfully!</h5>', 2000, 'trustedHtml');
			}).success(function(){
				refresh();
			}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});;
		}
		function refresh(){
			console.log("refresh called and request fired!");
			$http.get(SERVER_ADDRESS+"users").success(function(data){
				$scope.users=data;
			}).error(function(data){
				console.log(data);
			});
		}
	}]);
})();