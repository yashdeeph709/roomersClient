(function(){
	var app=angular.module("UserModule");
	
	app.controller('displayUserCtrl', ['$scope','$http','SERVER_ADDRESS','toaster','$rootScope', function($scope,$http,SERVER_ADDRESS,toaster,$rootScope){
	 
	 $scope.curPage = 0;
	 $scope.pageSize = 5;
	 $scope.numberOfPages=0;


	 $http.get(SERVER_ADDRESS+'/user')
	 .success(function(data){
	 	$scope.numberOfPages=data.length;
    	refresh();
	 });
	 $scope.previous=function(){
	 	$scope.curPage=$scope.curPage-1;
	 	refresh();
	 }
	 $scope.next=function(){
		 $scope.curPage=$scope.curPage+1;	
		 refresh();
	 }
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
		$scope.makeAdmin=function(id){
			$http.put(SERVER_ADDRESS+"rights/"+id).success(function(data){
				toaster.pop('warning', "Message", '<h5>User is Sub Admin Now Successfully!</h5>', 000, 'trustedHtml');
				refresh();
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 000, 'trustedHtml');
			});;

		}
		$scope.deleteAdmin=function(id){
			$http.delete(SERVER_ADDRESS+"rights/"+id).success(function(data){
				//type, title, body, timeout, bodyOutputType, clickHandler, toasterId, showCloseButton, toastId, onHideCallback
				toaster.pop('warning', "Message", '<h5>Sub Admin is User Now Successfully!</h5>', 4000, 'trustedHtml');
				refresh();
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 4000, 'trustedHtml');
			});;

		}
		function refresh(){
//			console.log("refresh called and request fired!");
			$http.get(SERVER_ADDRESS+"user/"+$scope.curPage*$scope.pageSize+"/"+$scope.pageSize).success(function(data){
				for(var i=0;i<data.length;i++){
					if(data[i].name=="Shruti"){
						if (i > -1) {
 						   data.splice(i, 1);
						}
					}
				}
				$scope.users=data;
			}).error(function(data){
				toaster.pop('warning','Message','<h5> Server Error!</h5',2000);
				console.log(data);
			});
		}

	}]);
})();