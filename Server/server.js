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
			data=>{
				let room = user_room[socket.id];
				let people = room_people[room];
				if(people){
					for(let i = 0; i < people.length; i++){
						people[i].id.emit('draw', data);
					}
				}else{
					socket.emit('draw', data);
				}
				//socket.emit('draw', data);
				//socket.broadcast.emit('draw', data);
			}
		);
		socket.on('clear',
			data=>{
				let room = user_room[socket.id];
				let people = room_people[room];
				if(people){
					for(let i = 0; i < people.length; i++){
						people[i].id.emit('clear', data);
					}
				}else{
					socket.emit('clear', data);
				}
				//socket.emit('draw', data);
				//socket.broadcast.emit('draw', data);
			}
		);
		socket.on('join_room',
			data=>{
				user_room[socket.id] = data;
				let people = room_people[data];
				if(!room_people[data]){
					room_people[data] = [{id:socket, nickname:'Guest',location:''}];
				}else{
					room_people[data].push({id:socket, nickname:'Guest',location:''});
				}
				//socket.emit('change_name',people.map(x =>x.nickname));
				console.log("room joined " + data +" Room Size " + room_people[data].length);
			}
		);
		socket.on('location',
			location=>{
				let people = room_people[ user_room[socket.id] ];   //[{}]
				let targetUser = people.filter(personX=> personX.id.id===socket.id);
				targetUser[0].location = location;
			}
		)
		socket.on('change_name',
			(newName)=>{
				newName=newName.substring(0,17);
				let people = room_people[ user_room[socket.id] ];   //[{}]
				let targetUser = people.filter(personX=> personX.id.id===socket.id);
				targetUser[0].nickname = newName;
				for(let i = 0; i < people.length; i++){   //user type == {}
					people[i].id.emit('change_name',people.map(x =>[x.nickname,x.location]));
				}
			}
		);
		// When client disconnect.
		socket.on('disconnect', function() {
			let room = user_room[socket.id];
			delete user_room[socket.id];
			if(!room_people[room]){
				return;
			}
			let people = room_people[room];
			for(let i = 0; i < people.length; i++){
				if(people[i].id.id == socket.id){
					people.splice(i, 1);
				}
			}
			for(let i = 0; i < people.length; i++){   //user type == {}
					people[i].id.emit('change_name',people.map(x =>[x.nickname,x.location]));
				}
      		console.log("Client has disconnected");
      		console.log("room left " + room + " Room Size " + people.length);
   		});
	}
);