var app = angular.module('computerApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({redirectTo: '/main'});

  }])

  .controller('MainCtrl', ['$scope', function($scope) {
    console.log($scope);
  }]);