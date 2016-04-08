App.controller('IndexController',function($scope, Post){
  $scope.posts = [];

  $scope.posts = Post.query();
  console.log($scope.posts);
});
