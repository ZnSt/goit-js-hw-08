const player = new Vimeo.Player("vimeo-player");
player.on("timeupdate", function (event) {
  console.log(event);
  videoplayerCurrentTime = event.seconds;
  localStorage.setItem("currentTime", videoplayerCurrentTime);
});
player.setCurrentTime(localStorage.getItem("currentTime"));
