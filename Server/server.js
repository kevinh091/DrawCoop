var clients = [];

// Using express
var express = require('express');
//    /usr/local/lib/node_modules   use this on depolyment

// get web application
var app = express();
var user_room = {};
var room_people = {};

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
				var room = user_room[socket.id];
				var people = room_people[room];
				if(people){
					for(var i = 0; i < people.length; i++){
						people[i].emit('draw', data);
					}
				}else{
					socket.emit('draw', data);
				}
				//socket.emit('draw', data);
				//socket.broadcast.emit('draw', data);
			}
		);
		socket.on('join_room',
			function(data){
				user_room[socket.id] = data;
				if(!room_people[data]){
					room_people[data] = [socket];
				}else{
					room_people[data].push(socket);
				}
				console.log("room joined " + data +" Room Size " + room_people[data].length);
			}
		);
		// When client disconnect.
		socket.on('disconnect', function() {
			var room = user_room[socket.id];
			delete user_room[socket.id];
			if(!room_people[room]){
				return;
			}
			var people = room_people[room];
			for(var i = 0; i < people.length; i++){
				if(people[i].id == socket.id){
					people.splice(i, 1);
				}
			}
      		console.log("Client has disconnected");
      		console.log("room left " + room + " Room Size " + people.length);
   		});
	}
);