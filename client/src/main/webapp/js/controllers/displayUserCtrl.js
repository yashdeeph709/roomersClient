(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster','$rootScope', function($scope,$http,SERVER_ADDRESS,toaster,$rootScope){
		$scope.range=parseInt(0);
		refresh();
		$scope.confirm=function(id){
			toaster.pop("warning","Message","views/toast.html",2000000000,'template');
			$rootScope.$on('ok', function (event, data) {
				console.log("I got the event");
				$scope.deleteUser(id);
			});
		}
		$scope.deleteUser=function(id){
			$http.delete(SERVER_ADDRESS+"user/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5>User Deleted Successfully!</h5>', 2000, 'trustedHtml');
				refresh();
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 2000, 'trustedHtml');
			});;
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

		function refresh(){
			console.log("refresh called and request fired!");
			$http.get(SERVER_ADDRESS+"user/"+$scope.range+"/2").success(function(data){
				$scope.users=data;
			}).error(function(data){
				console.log(data);
			});
		}
	}]);
})();