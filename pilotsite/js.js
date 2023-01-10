window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const stopBtn = document.querySelector("#stop");
  const playBckRate = document.querySelector("#current_rate");
  const volSlider = document.querySelector("#volControl");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  volSlider.addEventListener("change", changeVolume);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(billeder/pause.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(billeder/play.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtn.style.backgroundImage = "url(billeder/play.svg)";
  }
  function changeVolume() {
    console.log(volSlider.value);
    let newVolume = volSlider.value / 100;
    video.volume = newVolume;
  }
}
