
//ANIMATIONS on load


gsap.fromTo(".nav", {opacity: -1}, {opacity: 1, duration: 2});


// gsap.from(".list", {duration: 1, opacity: -1 });


// scrolling animation

const about = document.querySelector(".about");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const resume = document.querySelector(".resume");


$(function() {
  $('.scroll-down-btn a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

/* ************************************* */
(function($) { "use strict";
	$(document).ready(function(){"use strict";
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


	});

})(jQuery);


// project navbar

//buttons on nav bar
const all = document.querySelector(".all");
const wechatMp = document.querySelector(".wechatMp");
const webApp = document.querySelector(".webApp");
const games = document.querySelector(".games");

//containers name
const allContainer = document.querySelector(".work-info");
const wechatContainer = document.querySelector(".wechat-display");
const webContainer = document.querySelector(".web-display");
const gameContainer = document.querySelector(".gaming");

const wechatClick = () => {
  if(!wechatMp.classList.contains("active-bg")){
    wechatMp.addEventListener("click", () => {
      all.classList.remove("active-bg");
      webApp.classList.remove("active-bg");
      games.classList.remove("active-bg");
      wechatMp.classList.add("active-bg");
      allContainer.classList.add("d-none");
      wechatContainer.classList.remove("d-none");
      webContainer.classList.add("d-none");
      gameContainer.classList.add("d-none");
      gsap.fromTo(".boxes", {opacity: -1}, {opacity: 1, duration: 2});
    })
  }
}

wechatClick();

const webClick = () => {
  if(!webApp.classList.contains("active-bg")){
    webApp.addEventListener("click", () => {
      all.classList.remove("active-bg");
      wechatMp.classList.remove("active-bg");
      games.classList.remove("active-bg");
      webApp.classList.add("active-bg");
      allContainer.classList.add("d-none");
      wechatContainer.classList.add("d-none");
      webContainer.classList.remove("d-none");
      gameContainer.classList.add("d-none");
      gsap.fromTo(".boxes", {opacity: -1}, {opacity: 1, duration: 2});
      gsap.fromTo(".link-to", {opacity: -1}, {opacity: 1, duration: 2});
    })
  }
}

webClick();

const gameClick = () => {
  if(!games.classList.contains("active-bg")){
    games.addEventListener("click", () => {
      all.classList.remove("active-bg");
      wechatMp.classList.remove("active-bg");
      webApp.classList.remove("active-bg");
      games.classList.add("active-bg");
      allContainer.classList.add("d-none");
      wechatContainer.classList.add("d-none");
      webContainer.classList.add("d-none");
      gameContainer.classList.remove("d-none");
      gsap.fromTo(".boxes", {opacity: -1}, {opacity: 1, duration: 2});
      gsap.fromTo(".link-to", {opacity: -1}, {opacity: 1, duration: 2});
    })
  }
}

gameClick();

const allClick = () => {
  if (all.classList.contains("active-bg")) {
    all.addEventListener("click", () => {
      wechatMp.classList.remove("active-bg");
      webApp.classList.remove("active-bg");
      games.classList.remove("active-bg");
      all.classList.add("active-bg");
      wechatContainer.classList.add("d-none");
      webContainer.classList.add("d-none");
      gameContainer.classList.add("d-none");
      allContainer.classList.remove("d-none");
      gsap.fromTo(".boxes", {opacity: -1}, {opacity: 1, duration: 2});
    })
  }
}


allClick();
