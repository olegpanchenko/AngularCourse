App.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: 'js/posts/partials/index.html',
    controller: 'IndexController'
  })
  .when('/posts/:id', {
    templateUrl: 'js/posts/partials/show.html',
    controller: 'ShowController'
  })
  .otherwise('/');

});
