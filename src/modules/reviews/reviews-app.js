//Reviews app
var app = angular.module('reviewsApp', ['LocalStorageModule']);
//Reviews app controller require
app.controller('reviewsCtrl', require('./reviews-controller'));
//Filter for reverse ng-repeat  - last is first
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});