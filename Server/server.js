var clients = [];

// Using express
var express = require('express');
//    /usr/local/lib/node_modules   use this on depolyment

// get web application
var app = express();

// listen to connections on port 3001 for client connections.
var server = app.listen(3001,() => {
	// print port after set up
	var port = server.address().port;
	console.log('listening on port '+port);
});

// use public folder
app.use(express.static('public'));

// For eventhandler
var io = require('socket.io')(server);

// When client is connected to Server
io.sockets.on('connection', function(socket) {
		// Client ID
		console.log("new client: "+socket.id);
		// When draw event is heard, broadcast it to every connected socket
		socket.on('draw',
			function(data){
				socket.broadcast.emit('draw', data);
			}
		);
		// When client disconnect.
		socket.on('disconnect', function() {
      		console.log("Client has disconnected");
   		});
	}
);