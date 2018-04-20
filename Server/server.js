var clients = [];


var express = require('express');

var app = express();

var server = app.listen(3001,listen);

function listen(){
	console.log('YES1');
	var port = server.address().port;
	console.log('listening on port '+port);
}

app.use(express.static('public'));

var io = require('socket.io')(server);

io.sockets.on('connection',
	function(socket){
		console.log("new client: "+socket.id);

		socket.on('draw',
			function(data){
				socket.emit('draw', data);
				socket.broadcast.emit('draw', data);
			}
		);
		socket.on('disconnect', function() {
      		console.log("Client has disconnected");
   		});
	}
);