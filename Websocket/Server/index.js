/*
So this is how the flow of code will be- the socket on client(which is currently coonected to the server socket) will send the message to the socket on server.
This socket on server will receive the message, and then send the message to the socket on client, whcih was supossed to receive the message(this is also
connected to the server socket). 

Technically speaking,
So we are first connecting the client socket with the server socket. Then the client socket creates a room and sends the room name to the server socket, 
through which the server socket connects to the same room. 
Same process happens with the second client socket which is to receive the message.
Now the client socket1 emits a message that is listened by the server socket. This server socket now emits to the client sockets present in the room, but this
message won't be received to the socket that had emitted the message to the server socket. Hence, only client socket2 will receive the message.

*/ 
const express= require("express");
const app= express();
const http= require("http");
const cors= require("cors");  //Requiring cors is very essential for socket else there'll be lots of bugs encountering
const port= 3001;
const {Server}= require("socket.io");
app.use(cors());

const server= http.createServer(app);

const io= new Server(server,{
    cors:{
        origin: "http://localhost:5173", //fill the react port number
    }
});

io.on("connection", function(socket){  //"connection" is an event listener. When a connection gets established, this function gets called out
    console.log("User connected :",socket.id);   //Once the server socket connects to the client socket, the socket id of the server socket gets logged

    socket.on("join_room", function(data){   //Whenever some socket emits with join_room event listener, this function works
        socket.join(data);   //So this is an inbuilt function which helps the individual socket join the room with room-name 'data'. Now the client has joined the room
        console.log("User with ID ",socket.id," joined room ",data);
    })

    socket.on("send_message", function(data){   //Receives message from client socket1
        socket.to(data.room).emit("receive_message",data);  //Now transfers the message to client socket2, which was to receive the message
    })

    socket.on("disconnect", function(){  //This is the disconnect event listener
        console.log("User Disconnected", socket.id);    //Once the client disconnects, the socket id of the sevrer socket gets logged
    });
});


server.listen(port, ()=>{
    console.log("Server is running on port number ",port);
});