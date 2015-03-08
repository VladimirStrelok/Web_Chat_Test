angular.module('Web-Chat.login', [])
.controller('LoginCtrl', ['$scope', '$http', function($scope, $http){

  $scope.login = function(){
    $http.post(
      "/login",
      {username:$scope.username, password:$scope.password}
    ).success(
      function(data)
      {
        console.log(data)
      }
    );
  }
  $scope.register = function(){
    $http.post(
      "/register",
      {username:$scope.username, password:$scope.password}
    ).success(
      function(data)
      {
        console.log(data)
      }
    );
  }

}]);
