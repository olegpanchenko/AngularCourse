(function() {
  'use strict';

  angular
    .module('chapter8')
    .controller('CreateController', CreateController);

  /** @ngInject */
  function CreateController($scope, $location, Post, AuthService){
    $scope.user = AuthService.currentUser();

    $scope.save = function() {
      Post.save({title: $scope.title, content: $scope.content, status: 'publish'}, function(){
        $location.path("/");
      });
    }
  }
})();
