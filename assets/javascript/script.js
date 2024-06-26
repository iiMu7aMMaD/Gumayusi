const menuToggle = document.querySelector(".toggle");
const main = document.querySelector(".main");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  main.classList.toggle("active");
});

var video = document.getElementById("video");
var storedTime = sessionStorage.getItem("videoTime");

if (storedTime) {
  video.currentTime = parseFloat(storedTime);
}

video.addEventListener("timeupdate", function () {
  sessionStorage.setItem("videoTime", video.currentTime);
});

video.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
