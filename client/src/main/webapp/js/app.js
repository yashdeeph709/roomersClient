var app = angular.module("RoomApp", ['ui.bootstrap', 'ui.router','RoomModule','UserModule','ngAnimate', 'toaster','angular.filter'])
app.constant("SERVER_ADDRESS", "http://localhost:8080/roommanagement/");
app.run(['$rootScope','$state',function ($rootScope,$state) {
    $rootScope.$on('$stateChangeStart', function (event,toState, toParams, fromState, fromParams) {
//        console.log(toState.name);
        if (localStorage.getItem('Token') && toState.name==="home") {
            console.log('Your are loggedIn you cannot go to home');
            event.preventDefault();
            if(fromState.name!=''){
                $state.go(fromState.name);
            }else{
                if(JSON.parse(localStorage.getItem('Token')).rights!=0){
                  $state.go('profileUser.checkAvailableRooms');  
                }else{
                  $state.go('profileAdmin.displayUsers');
                }
            }
        }
        if (!localStorage.getItem('Token') && toState.name!=="home") {
            console.log('You are loggedOut you cannot go to '+toState.name);
            event.preventDefault();
            $state.go('home');
        }
    });
}]);
app.filter("greaterThan",function() {
    return function (input, check) {
        console.log(input);
        console.log(check);
        console.log(input >= check);
      return input >= check;
    };
});