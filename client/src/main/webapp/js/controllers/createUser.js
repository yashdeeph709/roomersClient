app.controller('createUserController',function($scope,$location){
	$scope.register=function(form)
	{
		if($scope.password != $scope.confirmPassword)//$scope.confirmPassword)
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


app.directive('passwordValidation', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                if (/[A-Z]/.test(ngModelValue)) {
                    ctrl.$setValidity('uppercaseValidator', true);
                } else {
                    ctrl.$setValidity('uppercaseValidator', false);
                }
                if (/[0-9]/.test(ngModelValue)) {
                    ctrl.$setValidity('numberValidator', true);
                } else {
                    ctrl.$setValidity('numberValidator', false);
                }
                if (ngModelValue.length >= 6) {
                    ctrl.$setValidity('sixCharactersValidator', true);
                } else {
                    ctrl.$setValidity('sixCharactersValidator', false);
                }
                return ngModelValue;
            }
            ctrl.$parsers.push(customValidator);
        }
    };
});


