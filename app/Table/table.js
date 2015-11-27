'use strict';

angular.module('myApp.Table', ['ngRoute', 'smart-table'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/table', {
    templateUrl: 'Table/table.html',
    controller: 'filterCtrl'
  });
}]).controller('filterCtrl', ['$scope', '$filter', '$timeout', function ($scope, filter) {
  $scope.sortType = "AREA_NAME";
  $scope.sortRevers = false;
  $scope.searchLocation="";



  //http://lorenzofox3.github.io/smart-table-website/
    // scope.predicates = ['Areaname', 'Rent50_3'];
    // scope.selectedPredicate = scope.predicates[0];
}]).controller("PostsCtrl", function($scope, $http, $timeout) {
  //Pulling in housing data, incomplete
  $http.get('assets/joinedData.json').
    success(function(data) {
      $scope.posts = data;

    }).
    error(function(data) {
      // log error
    });

    $scope.popSlider = {min:5000, max:13000000}

}).filter('population', function($timeout){
  var delayedFilter = function(){
  
  console.log('timeout');
  
  return function(posts, greaterThan, lessThan){
    posts = posts.filter(function(post){
    return posts.pop2010 > greaterThan && posts.pop2010 < lessThan;
    });
    
    return posts;
  }; 
};

  $timeout(function(){
    delayedFilter()
  }, 3000)

  return delayedFilter();
});