App.controller('ShowController',function($scope, $routeParams, Post){
  $scope.id = $routeParams.id;

  $scope.post = Post.get({ id: $scope.id });
  console.log($scope.post);
});
