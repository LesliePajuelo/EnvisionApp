'use strict';

angular.module('myApp.Table', ['ngRoute', 'smart-table'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/table', {
    templateUrl: 'Table/table.html',
    controller: 'filterCtrl'
  });
}]).controller('filterCtrl', ['$scope', '$filter', function ($scope, filter) {
  $scope.sortType = "AREA_NAME";
  $scope.sortRevers = false;
  $scope.searchLocation="";



  //http://lorenzofox3.github.io/smart-table-website/
    // scope.predicates = ['Areaname', 'Rent50_3'];
    // scope.selectedPredicate = scope.predicates[0];
}]).controller("PostsCtrl", function($scope, $http) {
  //Pulling in housing data, incomplete
  $http.get('assets/joinedData.json').
    success(function(data) {
      $scope.posts = data;

    }).
    error(function(data) {
      // log error
    });

});