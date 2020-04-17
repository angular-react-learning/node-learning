import express from "express";
import path from "path";
import http from "http";
import socketio from "socket.io";

const application = express();
const socketUsers = {};

application.use(express.static(path.join(__dirname, "public")))

const server = http.createServer(application).listen(3003, () => {
    console.log("server started at 3003");
})

const SocketInstance = socketio.listen(server);

SocketInstance.sockets.on("connection", (socket) => {
    var list = SocketInstance.sockets.sockets;
    var user = Object.keys(list);

    socket.on("signin", (name) => {
        socketUsers[socket] = { name : name }
        socket.emit("userloggedin", user)
    })

    socket.on("chat", (message) => {
        socket.emit("chat", { sendBy : socketUsers[socket], message })
        socket.broadcast.emit("chat", { sentBy : socketUsers[socket], message })
    })

})