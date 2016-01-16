var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (re1, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
  // console.log('A user connected');
  // socket.broadcast.emit('hi');
  socket.on('chat message', (msj) => io.emit('chat message', msj));
  // socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(3000, () => console.log('listening on *: 3000'));
