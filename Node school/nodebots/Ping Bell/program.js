const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const piezo = new five.Piezo(8);

  server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
  });

  server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    piezo.play({
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 100
    });
  });

  server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });

  // erver listening
  server.bind(1337);
});