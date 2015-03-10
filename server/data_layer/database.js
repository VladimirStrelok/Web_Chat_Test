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

exports.User = database.define('User', {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  password: Sequelize.CHAR(128),
},{
  tableName:"user",
  timestamps: false,
});
