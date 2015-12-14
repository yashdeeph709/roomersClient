(function(){
	angular.module("RoomApp").controller('abcctrl',function($rootScope){
		console.log("abc loaded!@");
		this.ok=function(){
			$rootScope.$emit("ok");
			console.log("ok called");
			
		}
		this.cancel=function(){
			$rootScope.$emit("cancel");
			console.log("cancel called");
		}
	});

})();
