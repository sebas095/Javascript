const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const servo = new five.Servo(9);
  // Rotate between 0 to 180 degrees
  servo.sweep();

  // Reset board, stop and center servo
  board.wait(3000, () => {
    servo.stop();
    servo.center();
  });
});