const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const potent = new five.Sensor('A2');
  const servo = new five.Servo(9);
  
  potent
    .scale(0, 179)
    .on('change', () => servo.to(potent.value));
});