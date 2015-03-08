'use strict';


// Declare app level module which depends on filters, and services
angular.module('Web-Chat', [
  'ui.router',
  'Web-Chat.login'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
    $stateProvider.state('login', {
      url: "/",
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    })
    .state('books',{
        url:"/books",
        templateUrl: "partials/chat.html"
    })
});
