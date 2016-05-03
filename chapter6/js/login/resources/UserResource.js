App.factory('User', function($resource) {
  return $resource('http://angular.codeforges.com/api/wp-json/wp/v2/users/:id'); // Note the full endpoint address
});
