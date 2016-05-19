(function() {
  'use strict';

  angular
    .module('chapter8')
    .factory('Post', Post);

  /** @ngInject */
  function Post($resource) {
    return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id'); // Note the full endpoint address
  }
})();
