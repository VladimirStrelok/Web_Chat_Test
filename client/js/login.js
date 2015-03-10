angular.module('Web-Chat.login', [])
.controller('LoginCtrl', ['$scope', '$http','$state', function($scope, $http,$state){

  $scope.login = function(){
    if($scope.username && $scope.password){
      $http.post(
        "/login",
        {username:$scope.username, password:$scope.password}
      ).success(
        function(data)
        {
          if(data.status == "valid")
            $state.go("chat");
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
