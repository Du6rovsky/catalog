//Products app controller
'use strict';
var productsCtrl = function($scope, $http, $filter, $stateParams) {
	/*
	 * Get products list data
	 */
	$http.get('/products').success(function(data){
		var items = data;
		angular.forEach(items, function(value, key) {
			value.id = parseInt(value.id);
			value.price = parseFloat(value.price);
			value.issueDate = new Date(value.issueDate);
		});
		$scope.products = items;
	});

	/*
	 * Sorting table data
	 */
	var orderBy = $filter('orderBy');

	$scope.sort = function(predicate) {
		$scope.predicate = predicate;
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.products = orderBy($scope.products, predicate, $scope.reverse);
	};

	/*
	 * Check details id page
	 */
	$scope.getId = function() {
		$scope.detId = $stateParams.id;
		$scope.detId = parseInt($scope.detId);
	}

}
module.exports = productsCtrl;