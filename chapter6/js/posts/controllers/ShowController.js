App.controller('ShowController',function($scope, $routeParams, Post, AuthService){
  $scope.user = AuthService.currentUser();
  $scope.id = $routeParams.id;

  $scope.post = Post.get({ id: $scope.id });
});
