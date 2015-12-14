var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule','ngAnimate', 'toaster'])
app.constant("SERVER_ADDRESS", "http://localhost:8080/roommanagement/");
app.run(['$rootScope', '$location', function ($rootScope, $location) {
}]);
