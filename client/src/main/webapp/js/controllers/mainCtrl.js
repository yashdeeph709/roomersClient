(function(){
var app=angular.module("RoomApp");
app.controller('mainCtrl',['$scope','$state','toaster','$log','$rootScope',function($scope,$state,toaster,$log,$rootScope){
	$rootScope.$on("$locationChangeStart", function(event, next, current) { 
		if(next=="http://127.0.0.1:8081/#/home" && localStorage.getItem("Token")!=null){
        	$log.info("location changing to:" + next); 
        	next=current;
    	}
      });
    $scope.isAuthenticated=function(){
        return localStorage.getItem("Token")!=null?true:false;   
    }
    $scope.logout=function(){
        localStorage.removeItem("Token");
        $state.go("home");
    }
}]);
})()