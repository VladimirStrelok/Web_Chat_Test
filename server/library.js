var crypto = require('crypto');

exports.encrypt = function(username, password){
  var salt = username.split("").reverse().join("")
  var p = crypto.createHash('sha256').update(username+salt).digest("hex");
  return p;
}
