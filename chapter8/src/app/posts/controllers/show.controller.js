(function() {
  'use strict';

  angular
    .module('chapter8')
    .controller('ShowController', ShowController);

  /** @ngInject */
  function ShowController($scope, $routeParams, Post, AuthService){
    $scope.user = AuthService.currentUser();
    $scope.id = $routeParams.id;

    $scope.post = Post.get({ id: $scope.id });
  }
})();
