var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.$watch('selected',function(newValue, oldValue){

    if ( newValue == 'light' ) {

      $http.get('data/lightside.json').
        success(function(data, status, headers, config) {

          $scope.data = data;
        }).
        error(function(data, status, headers, config) {
          // log error

        });

    }

    if ( newValue == 'dark' ){

      $http.get('data/darkside.json').
        success(function(data, status, headers, config) {

          $scope.data = data;
        }).
        error(function(data, status, headers, config) {
          // log error

        });


    }

  });



}]);
