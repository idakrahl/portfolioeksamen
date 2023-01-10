window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const stopBtn = document.querySelector("#stop");
  const slowBtn = document.querySelector("#slowdown");
  const speedBtn = document.querySelector("#speedup");
  const playBckRate = document.querySelector("#current_rate");
  const volSlider = document.querySelector("#volControl");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  slowBtn.addEventListener("click", speedUpVideo);
  speedBtn.addEventListener("click", slowDownVideo);
  volSlider.addEventListener("change", changeVolume);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(images/pause.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(images/play.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtn.style.backgroundImage = "url(images/play.svg)";
  }
  function slowDownVideo() {
    if (video.playbackRate >= 0.25) {
      video.playbackRate -= 0.25;
      playBckRate.textContent = video.playbackRate;
    }
  }
  function speedUpVideo() {
    video.playbackRate += 0.25;
    playBckRate.textContent = video.playbackRate;
  }
  function changeVolume() {
    console.log(volSlider.value);
    let newVolume = volSlider.value / 100;
    video.volume = newVolume;
  }
}
