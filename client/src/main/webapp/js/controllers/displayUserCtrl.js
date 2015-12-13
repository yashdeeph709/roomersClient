(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster', function($scope,$http,SERVER_ADDRESS,toaster){
		refresh();
		$scope.confirm=function(id){
			if(confirm("do you want to delete this user")==true){
				$scope.deleteUser(id);
			}else{
			
			}
		}

		$scope.deleteUser=function(id){
			$http.delete(SERVER_ADDRESS+"users/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5>User Deleted Successfully!</h5>', 1000, 'trustedHtml');
			}).success(function(){
				refresh();
			}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
			});;
		}
		function refresh(){
			console.log("refresh called and request fired!");
			$http.get(SERVER_ADDRESS+"users").success(function(data){
				console.log(data);
				$scope.users=data;
			}).error(function(data){
				console.log(data);
			});
		}
	}]);
})();