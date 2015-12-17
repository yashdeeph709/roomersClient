(function(){
	var app=angular.module("UserModule");
	app.controller("profileCtrl",function($scope){
		$scope.isSubAdmin=function(){
			var user=JSON.parse(localStorage.getItem('Token'));
			if(!user){
				return false;
			}
			return user.rights!=1?false:true;
		}	
	});
})();