var app = angular.module('computerApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      }).
      when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      }).
      otherwise({redirectTo: '/main'});

  }])

  .controller('MainCtrl', ['$scope', function($scope) {
    console.log('changed');
  }])

  .controller('ContactCtrl', ['$scope', function($scope) {
    console.log('contact');
  }])

  .controller('ServicesCtrl', ['$scope', function($scope) {
    console.log('services');
  }]);