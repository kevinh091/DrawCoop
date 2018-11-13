
// Using express
const express = require('express');
//    /usr/local/lib/node_modules   use this on depolyment

// get web application
const app = express() ;
// { socket.id : { room : 'roomname', name : 'user's name' , location : 'user's location' } }
const room_dict = {}  ;


// listen to connections on port 3001 for client connections.
const server = app.listen(3001,() => {
	// print port after set up
	var port = server.address().port;
	console.log('listening on port '+port);
});

// use public folder
app.use(express.static('public'));

// For eventhandler
const io = require('socket.io')(server);

// When client is connected to Server
io.sockets.on('connection', function(socket) {
		// Client ID
		console.log("new client: "+socket.id);
		// When draw event is heard, broadcast it to every connected socket
		
		socket.on('draw',
			data=>{
				if(!room_dict[socket.id])
					return;
				io.to(room_dict[socket.id].room).emit('draw',data);
			}
		);
		
		socket.on('clear',
			data=>{
				if(!room_dict[socket.id])
					return;
				io.to(room_dict[socket.id].room).emit('clear',data);
			}
		);
		
		socket.on('join_room',
			roomname=>{
				// join room and add to data structure
				socket.join(roomname);
				room_dict[socket.id] = {room: roomname, name: 'Guest' , location: 'NY'};
				
				console.log("room joined " + roomname + " Room Size " + io.sockets.adapter.rooms[roomname].length);
			}
		);
		
		socket.on('location',
			location=>{
				if(room_dict[socket.id])
				room_dict[socket.id].location = location;
			}
		);
		
		socket.on('change_name',
			(newName)=>{
				if(!room_dict[socket.id])
					return;	
				// get clients in the user's current room
				let clients = io.sockets.adapter.rooms[room_dict[socket.id].room];

				// change name in DS
				let oldName = room_dict[socket.id].name;
				room_dict[socket.id].name = newName;

				// broadcast name and location to room
				io.to(room_dict[socket.id].room).emit('change_name',
					Object.keys(clients.sockets).map(
						cli => [room_dict[cli].name, room_dict[cli].location]
						)
					);

				console.log("Name Changed From " + oldName + " To " + newName);
			
			}
		);

		socket.on('disconnect', function() {
			if(!room_dict[socket.id])
				return;	
			// If the room exists in data structure
			if(room_dict[socket.id] && io.sockets.adapter.rooms[room_dict[socket.id].room]){
			
				// get room name and size
				let roomName = room_dict[socket.id].room;
				let roomSize = io.sockets.adapter.rooms[roomName].length;

				// leave and delete from data structure
				socket.leave(roomName);
				delete room_dict[socket.id];

	      		console.log("Client has disconnected room " + roomName + ", Room Size " + roomSize);
   			}
   		});
	}
);
