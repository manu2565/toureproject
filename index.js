const header=document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle ("sticky", window.scrollY>180);
})

// Select the video element by ID
const video = document.getElementById("myVideo");

// Add a click event listener to the video
video.addEventListener("click", function() {
  // If the video is paused, play it
  if (video.paused) {
    video.play();
  } 
  // If the video is playing, pause it
  else {
    video.pause();
  }
});
