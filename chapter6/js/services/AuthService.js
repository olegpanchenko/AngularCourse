App.factory( 'AuthService', function($window, $q) {
  var currentUser;

  return {
    init: function() {
      if ($window.sessionStorage["currentUser"]) {
        currentUser = JSON.parse($window.sessionStorage["currentUser"]);
      }
    },
    login: function(user) {
      currentUser = user;
      $window.sessionStorage["currentUser"] = JSON.stringify(currentUser);
    },
    logout: function() {
      currentUser = null;
      $window.sessionStorage["currentUser"] = null;
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
