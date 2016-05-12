var app = angular.module('computerApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .otherwise({redirectTo: '/main'});

  }])

  .controller('MainCtrl', [function() {
    console.log('This is the MainCtrl');
  }]);