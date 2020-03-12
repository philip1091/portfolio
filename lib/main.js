// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({display: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })

const about = document.querySelector(".about");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const resume = document.querySelector(".resume");

// const targetAbout = document.querySelector(".targetAbout")

const scrollToAbout = () => {
  about.addEventListener("click", () => {
    window.scrollBy({
      top: 650,
      left: 0,
      behavior: 'smooth'
    });
  });
};

scrollToAbout();

const scrollToProject = () => {
  project.addEventListener("click", () => {
    window.scrollBy({
      top: 930,
      left: 0,
      behavior: 'smooth'
    });
  });
};

scrollToProject();

const scrollToContact = () => {
  contact.addEventListener("click", () => {
    window.scrollBy({
      top: 1700,
      left: 0,
      behavior: 'smooth'
    });
  });
};

scrollToContact();









