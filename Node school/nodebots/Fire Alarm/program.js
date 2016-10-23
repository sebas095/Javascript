const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const piezo = new five.Piezo(9);
  const led = new five.Led(13);
  const button = new five.Button(5);
  const thermo = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });

  let isOnFire = false;
  let isReset = false;
  let sirenInterval = null;

  // Sound the alarm
  function warning () {
    if (isOnFire) return;
    isOnFire = true;

    led.blink(1000);
    piezo.tone(five.Piezo.Notes.c4, 750);
    sirenInterval = setInterval(() => {
      piezo.tone(five.Piezo.Notes.c4, 750);
    }, 1000);
  }

  // Silence the things
  function relax () {
    if (!isOnFire) return;
    isOnFire = false;

    led.stop().off();
    clearInterval(sirenInterval);
    piezo.noTone();
  }

  // The reset button
  button.on('press', () => {
    if (!isOnFire) return;
    isReset = true;
    relax();
  })

  // Watch the temp
  thermo.on('change', () => {
    if (thermo.C > 50 && !isReset) {
      warning();
    } else {
      relax();
      isReset = false; // clear the reset flag when temp drops below threshold
    }
  })
});