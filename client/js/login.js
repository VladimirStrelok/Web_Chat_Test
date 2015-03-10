angular.module('Web-Chat.login', [])
.controller('LoginCtrl', ['$scope', '$http', function($scope, $http){

  $scope.login = function(){
    if($scope.username && $scope.password){
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
  }
  $scope.register = function(){
    if($scope.username && $scope.password){
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
  }
}]);
