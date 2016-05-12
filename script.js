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

  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/services.json').then(function(res) {
      $scope.services = res.data;
    });
  }])

  .controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/locations.json').then(function(res) {
      $scope.locations = res.data;
    });
  }])

  .controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/services.json').then(function(res) {
      $scope.services = res.data;
    });
  }]);