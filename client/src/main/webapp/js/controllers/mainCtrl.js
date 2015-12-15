(function(){
var app=angular.module("RoomApp");
app.controller('mainCtrl',['$scope','$state','toaster','$log','$rootScope','$state',function($scope,$state,toaster,$log,$rootScope,$state){
	if(localStorage.getItem("Token")){
		$scope.username=JSON.parse(localStorage.getItem("Token")).name;
	}
    $scope.isAuthenticated=function(){
    }
    $scope.logout=function(){
        Auth.logout();
        $state.go("home");
    }
  
}]);
})()
