App.controller('CreateController',function($scope, $location, Post, AuthService){
  $scope.user = AuthService.currentUser();

  $scope.save = function() {
    Post.save({title: $scope.title, content: $scope.content, status: 'publish'}, function(){
      $location.path("/");
    });
  }
});
