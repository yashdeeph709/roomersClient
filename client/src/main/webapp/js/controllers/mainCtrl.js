(function(){
var app=angular.module("RoomApp");
app.controller('mainCtrl',['$scope','$state','toaster','$log','$rootScope',function($scope,$state,toaster,$log,$rootScope){
	if(localStorage.getItem("Token")){
		$scope.username=JSON.parse(localStorage.getItem("Token")).name;
	}
    $scope.isAuthenticated=function(){
        return localStorage.getItem("Token")!=null?true:false;   
    }
    $scope.logout=function(){
        localStorage.removeItem("Token");
        $state.go("home");
    }
}]);
})()
