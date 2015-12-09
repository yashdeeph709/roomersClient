var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule'])

app.constant("SERVER_ADDRESS", "http://localhost:8090/RoomManagement");
app.controller('mainCtrl',function($scope){

});