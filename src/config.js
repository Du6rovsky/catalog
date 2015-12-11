var config = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

  $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: '/build/modules/products/partials/_products.html',
        controller : 'productsCtrl'
      })
      .state('details', {
        parent: 'products',
        url: '/id:id',
        onEnter: ['ngDialog', function(ngDialog) {
            ngDialog.open({ 
                templateUrl: '/build/modules/products/partials/_details.html',
                controller : 'productsCtrl',
                closeByDocument : false
            });
        }],
        controller : 'productsCtrl'
      })
      .state('reviews', {
        url: '/reviews',
        templateUrl: '/build/modules/reviews/partials/_reviews.html',
        controller : 'reviewsCtrl'
      })
      $urlRouterProvider.otherwise("/products");

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

};

module.exports = config;
