const xhr = require('xhr');
const Webrtc2Images = require('webrtc2images');

const rtc = new Webrtc2Images({
  width: 200,
  height: 200,
  frames: 10,
  type: "image/jpeg",
  quality: 0.8,
  interval: 200
});

rtc.startVideo(function(err) {
  if (err) return logError(err);
});

const record = document.querySelector('#record');

record.addEventListener('click', function(ev) {
  ev.preventDefault();
  rtc.recordVideo(function(err, frames) {
    if (err) logError(err);

    xhr({
      uri: "/process",
      method: "post",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({images: frames})
    }, function(err, res, body) {
      if (err) logError(err);

      body = JSON.parse(body);

      if (body.video) {
        const video = document.querySelector('#video');
        video.src = body.video;
        video.loop = true;
        video.play();
      }
    });
  });
}, false);

function logError(err) {
  console.error(err);
}
