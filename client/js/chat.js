angular.module('Web-Chat.chat', [
  'btford.socket-io'
]).
controller('ChatCtrl', function($scope, $http,$state,socket){

  $scope.chats = [];

  $http.get(
    "/chat_rooms"
  ).success(
    function(data)
    {
      $scope.chats = data;
    }
  );




  $scope.createChatRoom = function(){
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
    socket.emit('add_chat_room',{chat:"134"});
  }
  socket.on('new_chat_room', function(msg){
    console.log(msg);
  });
});
