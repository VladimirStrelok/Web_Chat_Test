'use strict';


// Declare app level module which depends on filters, and services
angular.module('Web-Chat', [
  'ui.router',
  'Web-Chat.login',
  'Web-Chat.chat',
  'btford.socket-io'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
    $stateProvider.state('login', {
      url: "/",
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    })
    .state('chat',{
        url:"/chat",
        templateUrl: "partials/chat.html",
        controller: "ChatCtrl"
    })
}).
factory('socket', function (socketFactory) {
  return socketFactory();
});
