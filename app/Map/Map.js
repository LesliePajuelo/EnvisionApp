'use strict';

angular.module('myApp.Map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Map', {
    templateUrl: 'Map/Map.html',
    controller: 'MapCtrl'
  });
}])

.controller('MapCtrl', [function() {

}]);