var App = angular.module('myApp',['ngRoute', 'ngResource', 'base64', 'ngSanitize', 'ngAnimate']);

App.run(["$rootScope", "$location", "AuthService", function($rootScope, $location, AuthService) {
  AuthService.init();

  $rootScope.$on("$routeChangeSuccess", function(currentUser) {
    console.log(currentUser);
  });

  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $location.path("/login");
    }
  });
}]);
