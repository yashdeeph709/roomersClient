(function(){
	var app=angular.module("RoomModule");

	app.filter('utc',function() {
    return function(date) {
      if(angular.isNumber(date)) {
        date = new Date(date);
      }
      if(date!=null){
      return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  	  }else{
  	  	return null;
  	  }
    }   
  	});

	app.controller('checkAvailableCtrl',['$scope','$http','SERVER_ADDRESS','$stateParams','toaster',function($scope,$http,SERVER_ADDRESS,$stateParams,toaster) {
		$scope.roomName="Fariba";
		console.log("check loaded")
		$http.get(SERVER_ADDRESS+"/room").success(function(data){
				$scope.rooms=data;
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		

		function getMonday(d) {
			  var day = d.getDay(),
			      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
			  return new Date(d.setDate(diff));
			}
		var newDate = new Date();
		newDate.setFullYear(2014);
		newDate.setMonth(10);
		newDate.setDate(01);
		
		var date = getMonday(new Date());
		//2015-12-14T11:00Z

		$scope.date1 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date2 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date3 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date4 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date5 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date6 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		date.setDate(date.getDate()+1);
		$scope.date7 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
		
		var date = getMonday(new Date());
	//$http.get(SERVER_ADDRESS+"availability/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"T"+"00:00:00").success(function(data){
		refresh();
	$scope.refresh=refresh;	
	function refresh(){		
		console.log("called by room change")
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+09+":30Z"+"/"+$scope.roomName).success(function(data){
				$scope.bookings1=data;
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+10+":30Z"+"/"+$scope.roomName).success(function(data){
				$scope.bookings2=data;
			}).error(function(data){
				toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+11+":30Z"+"/"+$scope.roomName).success(function(data){
				$scope.bookings3=data;
			}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+12+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings4=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+13+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings5=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+14+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings6=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+15+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings7=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+16+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings8=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+17+":30Z"+"/"+$scope.roomName).success(function(data){
			$scope.bookings9=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});
		
		$http.get(SERVER_ADDRESS+"availabilities/"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T"+17+":30Z"+"/"+$scope.roomName).success(function(data){
				$scope.bookings9=data;
		}).error(function(data){
			toaster.pop('warning', "Message", '<h5> Server Error!</h5>', 1000, 'trustedHtml');
		});	
		}
		$scope.book=function(){
			console.log("booked!"+$scope.roomid)
		}
	}]);

})();
