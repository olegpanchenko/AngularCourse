(function() {
  'use strict';

  angular
    .module('chapter8')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, $log, AuthService) {
    AuthService.init();

    // $rootScope.$on("$routeChangeSuccess", function(currentUser) {
    //   $log.log(currentUser);
    // });

    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
      if (eventObj.authenticated === false) {
        $location.path("/login");
      }
    });
  }

})();
