var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule','ngAnimate', 'toaster'])
app.constant("SERVER_ADDRESS", "http://localhost:8080/roommanagement/");
app.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event) {
    	console.log("router chaged")
        if (localStorage.getItem("Token")==null) {
            console.log('DENY');
            event.preventDefault();
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
            $location.path('/home');
        }
    });
}]);