(function(){
var app=angular.module("RoomApp");
app.controller('mainCtrl',['$scope','$state','toaster','$log','$rootScope','$state',function($scope,$state,toaster,$log,$rootScope,$state){
	if(localStorage.getItem("Token")){
		$scope.username=JSON.parse(localStorage.getItem("Token")).name;
	}
    
    $scope.isAuthenticated=function(){
    if(localStorage.getItem("Token")){
        $scope.username=JSON.parse(localStorage.getItem("Token")).name;
    }
    	return localStorage.getItem("Token")?true:false;
    }
    $scope.logout=function(){
        console.log(":Logout")
        localStorage.removeItem("Token");
    }
    $scope.$watch($scope.isAuthenticated, function (value, oldValue) {
        if(!value && oldValue) {
          $state.go('home');
        }
    }, true);
}]);
})()
