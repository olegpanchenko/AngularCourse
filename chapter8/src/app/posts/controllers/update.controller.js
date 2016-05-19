(function() {
  'use strict';

  angular
    .module('chapter8')
    .controller('UpdateController', UpdateController);

  /** @ngInject */
  function UpdateController($scope, $routeParams, $location, Post, AuthService){
    $scope.user = AuthService.currentUser();
    $scope.id = $routeParams.id;

    $scope.post = Post.get({ id: $scope.id }, function(){
      $scope.title = $scope.post.title.rendered;
      $scope.content = $scope.post.content.rendered;
    });

    $scope.save = function() {
      Post.save({id: $scope.id}, {title: $scope.title, content: $scope.content}, function(){
        $location.path("/");
      });
    }
  }
})();
