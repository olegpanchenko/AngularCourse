(function() {
  'use strict';

  angular
    .module('chapter8')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $routeParams, $location, $filter, $base64, $http, $log, AuthService, User){
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
          var user = res.data;
          user.password = $scope.password;
          AuthService.login(user);
          $location.path("/");
        }, function(res){
          $log.log(res);
        });
      }
    };
  }

})();
