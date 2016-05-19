(function() {
  'use strict';

  angular
    .module('chapter8')
    .factory('User', User);

  /** @ngInject */
  function User($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/users/:id'); // Note the full endpoint address
  }
})();
