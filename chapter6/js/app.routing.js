App.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/login', {
    templateUrl: 'js/login/partials/login.html',
    controller: 'LoginController'
  })
  .when('/logout', {
    templateUrl: 'js/login/partials/login.html',
    controller: function($location, AuthService){
      AuthService.logout();
      $location.path("/login");
    }
  })
  .when('/', {
    templateUrl: 'js/posts/partials/index.html',
    controller: 'IndexController',
    resolve: {
      auth: ["AuthService", function(AuthService) {
        AuthService.isAuthenticated()
      }]
    }
  })
  .when('/posts/:id', {
    templateUrl: 'js/posts/partials/show.html',
    controller: 'ShowController',
    resolve: {
      auth: ["AuthService", function(AuthService) {
        AuthService.isAuthenticated()
      }]
    }
  })
  .otherwise('/');

});
