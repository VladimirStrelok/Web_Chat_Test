var Sequelize = require('sequelize');

var database = new Sequelize('web_client', 'krieger', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
  //,logging:false
});

exports.User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  username: Sequelize.STRING,
  password: Sequelize.CHAR(128),
},{
  timestamps: false
});

exports.Chat_Room = database.define("chat_room",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  roomname: Sequelize.STRING,
  password: Sequelize.CHAR(128)
},{
  timestamps:false
});

//exports.Chat_Room.hasOne(exports.User,{as:"created_by"});
