var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule','ngAnimate', 'toaster'])

app.constant("SERVER_ADDRESS", "http://localhost:8080/RoomManagement/");
app.controller('mainCtrl',function($scope,toaster){
	toaster.pop('success', "title", "text");
});
