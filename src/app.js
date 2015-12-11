/*
 * App dependencies require
 */
require('angular');
require('ui-router'); //ui.router for routing 
require('ng-dialog'); //ngDialog for modal window
require('angular-mocks'); //ngMockE2E for backend simulation
require('angular-local-storage'); //LocalStorageModule for local storage

/*
 * App modules as dependencies for main app
 */
//Products app require
require('./modules/products/products-app');
//Reviews app require
require('./modules/reviews/reviews-app');

//Main catalog app
var app = angular.module('catalogApp', ['ui.router','ngDialog', 'ngMockE2E', 'productsApp', 'reviewsApp']);
//Config require
app.config(require('./config.js'));
//Define our fake backend
app.run(require('./backend.js'));