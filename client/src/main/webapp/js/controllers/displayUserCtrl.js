(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster', function($scope,$http,SERVER_ADDRESS,toaster){
		refresh();
		$scope.confirm=function(id){
			if(confirm("do you want to delete this user")==true){
/*			toaster.pop({
				title:'warning',
				body:"Message Are you sure you want to delete this user<br><button class='btn btn-info' ng-click=''></button>",
				onHideCallback: function () {
					console.log("on hide called");
						$scope.delete(id);
		                toaster.pop({
		                    title: 'Message',
		                    body: 'User Deleted Successfully'
		                });
			      },
			      bodyOutputType: 'trustedHtml'
			  });
*/			$scope.deleteUser(id);
		}else{
		}
		}

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