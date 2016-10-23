const five = require('johnny-five');
const board = new five.Board();
const dnode = require('dnode');

board.on('ready', () => {
  let temp = null;
  const sensor = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  // Get temperature in celsius
  sensor.on('data', () => temp = sensor.C);

  const server = dnode({
    getTemperature(cb) {
      cb(temp);
    }
  });

  // listen server
  server.listen(1337);
});