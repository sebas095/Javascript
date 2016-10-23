const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const sensor = new five.Sensor('A0');
  const led = new five.Led(9);
  sensor.on('change', () => {
    if (sensor.value > 600) led.on();
    else led.off();
  });
});