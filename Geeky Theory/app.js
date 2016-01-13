var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server);

// server.listen(8080);
server.listen(process.env.PORT, process.env.IP);

app.get('/', (req, res) => res.sendfile(__dirname + '/index.html'));

io.sockets.on('connection', socket => {
    // Evento con el mjs que queramos: sendMessage
    socket.on('sendMessage', data => {
        io.sockets.emit('newMessage', {msg: data});
    });
});

console.log(__dirname);