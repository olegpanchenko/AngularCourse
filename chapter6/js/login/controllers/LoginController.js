App.controller('LoginController',function($scope, $location, AuthService, User, $http, $base64){

  $scope.users = User.query();

  $scope.login = function() {
    var filteredUsers = $scope.users.filter(function(x) {
      return x.name == $scope.userName;
    });
    if ( filteredUsers.length ) {
      var url = 'http://angular.codeforges.com/api/wp-json/wp/v2/users/'+filteredUsers[0].id;
      $http({
        method: 'POST',
        url: url,
        headers: {
          Authorization: 'Basic ' + $base64.encode( $scope.userName + ':' + $scope.password )
        }
      }).then(function(res){
        AuthService.login(res.data);
        $location.path("/");
      }, function(res){
        console.log(res);
      });
    }
  };

});
