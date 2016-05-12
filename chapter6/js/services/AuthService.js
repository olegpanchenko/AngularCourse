App.factory( 'AuthService', function($window, $q, $base64, $http) {
  var currentUser;

  return {
    init: function() {
      if ($window.sessionStorage["currentUser"]) {
        currentUser = JSON.parse($window.sessionStorage["currentUser"]);
        $http.defaults.headers.common["Authorization"] = 'Basic ' + $base64.encode( currentUser.username + ':' + currentUser.password );
      }
    },
    login: function(user) {
      currentUser = user;
      $http.defaults.headers.common["Authorization"] = 'Basic ' + $base64.encode( currentUser.username + ':' + currentUser.password );
      $window.sessionStorage["currentUser"] = JSON.stringify(currentUser);
    },
    logout: function() {
      currentUser = null;
      $window.sessionStorage.removeItem("currentUser");
    },
    isLoggedIn: function() {
      return !!currentUser;
    },
    currentUser: function() {
      return currentUser;
    },
    isAuthenticated: function () {
      if ( this.isLoggedIn() ) {
        return $q.when(this.currentUser());
      } else {
        return $q.reject({ authenticated: false });
      }
    }
  };
});
