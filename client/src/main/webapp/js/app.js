var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule','ngAnimate', 'toaster'])
app.constant("SERVER_ADDRESS", "http://localhost:8080/roommanagement/");
app.run(['$rootScope', '$state',function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event,next,current) {
    	console.log("Route changed");
    });
}]);
