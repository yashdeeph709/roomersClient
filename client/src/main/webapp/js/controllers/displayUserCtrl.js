(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster', function($scope,$http,SERVER_ADDRESS,toaster){
		refresh();
		$scope.deleteUser=function(id){
			$http.get(SERVER_ADDRESS+"delete/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5>User Deleted Successfully!</h5>', 3000, 'trustedHtml');
			}).success(function(){
				refresh();
			}).error(function(data){toaster.pop('error', "Message", '<h5> Server Error!</h5>', 3000, 'trustedHtml');
			});;
		}
		function refresh(){
			$http.get(SERVER_ADDRESS+"getUsers").success(function(data){
				$scope.users=data.data;
			});
		}
	}]);
})();