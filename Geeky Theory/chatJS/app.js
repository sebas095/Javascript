var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server),
    nicknames = {};

// server.listen(8080);
server.listen(process.env.PORT, process.env.IP);

app.get('/', (req, res) => res.sendfile(__dirname + '/index.html'));

// SOCKETS
io.sockets.on('connection', socket => {
    // Evento con el msj que queramos: sendMessage
    socket.on('sendMessage', data => {
        io.sockets.emit('newMessage', {msg: data, nick: socket.nickname});
    });

    socket.on('newUser', (data, callback) => {
        if (data in nicknames) {
            callback(false);
        }
        else {
            callback(true);
            socket.nickname = data;
            nicknames[socket.nickname] = 1;
            updateNickname();
        }
    });

    socket.on('disconnect', (data) => {
        if (!socket.nickname) return;
        delete nicknames[socket.nickname];
        updateNickname();
    });

    function updateNickname() {
        io.sockets.emit('usernames', nicknames);
    }
});
