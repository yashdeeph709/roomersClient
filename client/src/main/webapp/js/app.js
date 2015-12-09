var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule'])

app.constant("SERVER_ADDRESS", "http://localhost:8080/RoomManagement/");
app.controller('mainCtrl',function($scope){

});
app.run(function($http,SERVER_ADDRESS){
	$http.get(SERVER_ADDRESS+"getAdmin").success(function(data){
		localStorage.setItem("admin",JSON.stringify(data));
	});
});
