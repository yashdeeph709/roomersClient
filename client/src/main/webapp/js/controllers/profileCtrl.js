(function(){
	var app=angular.module("UserModule");
	app.controller("profileCtrl",function($scope){
		$scope.isSubAdmin=function(){
			var user=JSON.parse(localStorage.getItem('Token'));
			if(!user){
				return false;
			}
			console.log("isSubAdmin")
			console.log(user.rights!=1?false:true);
			return user.rights!=1?false:true;
		}	
	});
})();