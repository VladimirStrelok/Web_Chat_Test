var express = require('express');
var fs = require('fs');
var https = require('https');
var http = require('http');
var socket = require('socket.io');
var bodyParser = require('body-parser');
var library = require('./library');


var secure_port = 443;
var secure_app = express();
var secure_server = https.createServer(
  {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
  },
  secure_app
);
var io = socket(secure_server);

secure_app.use(express.static("../client"));
secure_app.use(bodyParser.json());

secure_app.post('/login', function (req, res) {
  library.login(req.body.username, req.body.password,res)
})

secure_app.post('/register', function (req, res) {
  library.register_user(req.body.username, req.body.password,res)
})

io.on('connection', function (socket) {
  console.log("Connection from: " + socket.handshake.address)
   socket.on('disconnect', function() {
     console.log("Closed connection from: "+socket.handshake.address)
   });
});

secure_server.listen(secure_port);
console.log("HTTPS server listening on "+secure_port);


var unsecure_port = 80;
var unsecure_app = express();
var unsecure_server = http.createServer(unsecure_app);

unsecure_app.use(function(req, res, next) {
  if(!req.secure) {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
});

unsecure_server.listen(unsecure_port);
console.log("HTTP server listening on "+unsecure_port);
