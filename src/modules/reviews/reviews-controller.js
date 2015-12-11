//Reviews app controller
'use strict';
var reviewsCtrl = function($scope, localStorageService, $http) {
	/*
	 * Init reviews value
	 */
	function update() {
		$http.get('/reviews').success(function(data){
			$scope.reviews = data;
		});
	};
	update();

	/*
	 * Default input value
	 */
	$scope.author='';
	$scope.review='';

	//Create review
	$scope.create = function(author, review) {
		//Get current date
		function newDate() {
			var d = new Date();
			var day = d.getDate();
			if(day<10){
				day = "0"+day;
			}
			var month = d.getMonth() + 1;
			if(month<10){
				month = "0"+month;
			}
			var year = d.getFullYear();
			var hour = d.getHours();
			if(hour<10){
				hour = "0"+hour;
			}
			var minute = d.getMinutes();
			if(minute<10){
				minute = "0"+minute;
			}
			var date = day + "/" + month + "/" + year + " " + hour + ":" + minute;
			return date;
		}

		$http.post('/reviews', {
			date : newDate(),
			author : author,
			review : review
		}).success(function() {
	    	update();
	    });

		//Reset input value date
		$scope.author='';
		$scope.review='';
	}
}
module.exports = reviewsCtrl;