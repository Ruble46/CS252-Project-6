var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var fullUrl = "hi";

app.get('/', function(req, res){
  fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    	var temp = fullUrl.split("?");
	msg = temp[1] + ": " + msg;
	io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
