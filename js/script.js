// Navbar Toggle (Not Used)
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

// Smooth Scroll
window.onload = function () {
  scrollSpy('#tabbar-1', {
    sectionClass: '.section',
    menuActiveTarget: '.tabbar-1-item',
    offset: 100,
    // scrollContainer: '.scroll-container',
    // smooth scroll
    smoothScroll: true,
    smoothScrollBehavior: function(element) {
      console.log('run "smoothScrollBehavior"...', element)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

// AOS Animation
AOS.init({
  once:true,
})

// Show modal only once per session
// $(window).on('load',function(){
//   if (!sessionStorage.getItem('shown-modal')){
//     $('.wione_open_modal').modal('show');
//     sessionStorage.setItem('shown-modal', 'true');
//   }
// });
// Show modal only once per session (Alternatives)
$(document).ready(function(){
  if (!sessionStorage.getItem('shown-modal')){
    $('.wione_open_modal').modal('show');
    sessionStorage.setItem('shown-modal', 'true');
  }
});

// Add animation to modal
setTimeout(function() { 
  $('.wione_modal_dialog').addClass('vov shake-vertical slowest');
}, 1200);

// Countdown Timer
function cdtd() {
	var xmas = new Date("June 1, 2022 13:00:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
    clearTimeout(timer);
    // Run any code needed for countdown completion here
    document.querySelector("#clockdiv").style.display="none";
    document.querySelector("#saleActive").style.display="none";
    document.querySelector("#saleEnded").style.display="block";
  }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
	document.getElementById("count__day").innerHTML = days;
	document.getElementById("count__hour").innerHTML = hours;
	document.getElementById("count__minute").innerHTML = minutes;
	document.getElementById("count__second").innerHTML = seconds;
	var timer = setTimeout('cdtd()',1000);
}
cdtd();

// Gallery Lightbox 
$(document).ready(function() {
  $('.wione_gallery_view').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    }
  });
});

// Toggle fullscreen
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
  }
  else {
      cancelFullScreen.call(doc);
  }
}

// Audio Player
var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');
var startBtn = document.getElementById('btn_wione_open_modal');
function startPlay(){
  if(track.paused){
    track.play();
    startBtn.className = "play";
  }
}

startBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.className = "pause";
  } else { 
    track.pause();
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
