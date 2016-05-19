(function() {
  'use strict';

  angular
    .module('chapter8')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope, Post, AuthService){
    $scope.user = AuthService.currentUser();
    $scope.posts = [];

    $scope.posts = Post.query();
  }
})();
