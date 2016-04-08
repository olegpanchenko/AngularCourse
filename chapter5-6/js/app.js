var App = angular.module('myApp',['ngRoute', 'ngResource']);

App.filter('trusted',
  function($sce) {
    return function(ss) {
      return $sce.trustAsHtml(ss)
    };
  }
)
