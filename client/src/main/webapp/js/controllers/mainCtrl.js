(function(){
var app=angular.module("RoomApp");
app.controller('mainCtrl',['$scope','$state','toaster',function($scope,$state,toaster){
    $scope.isAuthenticated=function(){
        return localStorage.getItem("Token")!=null?true:false;   
    }
    $scope.logout=function(){
        localStorage.removeItem("Token");
        $state.go("home");
    }
}]);
})()