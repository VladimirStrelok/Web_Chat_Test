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
