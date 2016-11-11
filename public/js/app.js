var app = angular.module('myApp', []);

app.controller('AppCtrl',['$scope', function($scope) {
  $scope.test = 'Hello World';
}]);
