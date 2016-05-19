(function() {
  'use strict';

  angular
    .module('chapter8')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/login', {
      templateUrl: 'app/login/views/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      templateUrl: 'app/login/views/login.html',
      controller: function($location, AuthService){
        AuthService.logout();
        $location.path("/login");
      }
    })
    .when('/', {
      templateUrl: 'app/posts/views/index.html',
      controller: 'IndexController',
      resolve: {
        auth: ["AuthService", function(AuthService) {
          return AuthService.isAuthenticated();
        }]
      }
    })
    .when('/posts/new', {
      templateUrl: 'app/posts/views/form.html',
      controller: 'CreateController',
      resolve: {
        auth: ["AuthService", function(AuthService) {
          return AuthService.isAuthenticated();
        }]
      }
    })
    .when('/posts/:id', {
      templateUrl: 'app/posts/views/show.html',
      controller: 'ShowController',
      resolve: {
        auth: ["AuthService", function(AuthService) {
          return AuthService.isAuthenticated();
        }]
      }
    })
    .when('/posts/:id/edit', {
      templateUrl: 'app/posts/views/form.html',
      controller: 'UpdateController',
      resolve: {
        auth: ["AuthService", function(AuthService) {
          return AuthService.isAuthenticated();
        }]
      }
    })
    .otherwise('/');
  }

})();
