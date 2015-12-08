
 

app.controller('createUserController',function($scope,$location){
	$scope.register=function()
	{
		if($scope.password != $scope.confirmPassword)
		{
			
			alert("Password Mismatched");
		}
		else
		{
		alert("Registered successfully");
		$location.path("/home");
		}
		//$http.post('/home', {msg:'hello word!'});
	}
	$scope.cancel=function()
	{
		alert("Cancelled successfully");
		$location.path("/home");
	}

});

// app.directive("firstname", function () {
//     return {
//         restrict: "A",
//         require: "?ngModel",
//         link: function (scope, element, attributes, ngModel) {
//             ngModel.$validators.firstname = function (modelValue) {
//                 if (password==confirmPassword) {
//                     return true;
//                 }
//                 else return false;
//             };
//         }
//     };
// });


app.directive('wjValidationError', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctl) {
      scope.$watch(attrs['wjValidationError'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
      });
    }
  };
});