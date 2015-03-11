var crypto = require('crypto');
var data_layer = require('../data_layer');

var encrypt = function(username, password){
  var salt = username.split("").reverse().join("")
  var p = crypto.createHash('sha256').update(username+salt).digest("hex");
  return p;
}

exports.register_user = function(_username,_password,res){
  data_layer.User.find({where:{username:_username}}).then(
    function(user){
      if(!user){
        console.log('not found');
        data_layer.User.max('id').then(function(max) {
          if(isNaN(max)){
            max = 0;
          }
            data_layer.User.create({
              id:max+1,
              username: _username,
              password:encrypt(_username,_password)
            }).then(function(){
              res.send({status:"created"});
            })
        })
      }
      else{
        res.send({status:"exists"});
      }
    }
  )
}

exports.login = function(_username,_password,res){
  data_layer.User.find({where:{username:_username, password:encrypt(_username,_password)}}).then(
    function(user){
      if(user){
        res.send({status:"valid"});
      }
      else{
        res.send({status:"invalid"})
      }
    }
  )
}

exports.get_chat_rooms = function(res){
  data_layer.Chat_Room.findAll().then(function(chat_rooms){
    res.send(chat_rooms);
  })
}
exports.create_chat_room = function(_roomname,_password,res){
  data_layer.Chat_Room.find({where:{roomname:_roomname}}).then(
    function(Room){
      if(!Room){
        console.log('not found');
        data_layer.Chat_room.max('id').then(function(max) {
          if(isNaN(max)){
            max = 0;
          }
            data_layer.Chat_room.create({
              id:max+1,
              username:_roomname,
              password:(password != '' ? encrypt(_roomname,_password) : ''
            }).then(function(){
              res.send({status:"created"});
            })
        })
      }
      else{
        res.send({status:"exists"});
      }
    }
  )
}
