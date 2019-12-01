particlesJS.load('particles-js', '../javascripts/assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

// Begin sticky bar
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  'use strict';
  const section = document.querySelectorAll(".section-anchor");
  const sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("sticky-header").style.top = "0";
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        console.log(sections[i])
        console.log('a[href=' + i + ']')
        document.querySelector('.ref').setAttribute('class', 'ref');
        document.querySelector('a[href=' + i + ']').setAttribute('class', 'ref');
      }
    }
  } else {
    document.getElementById("sticky-header").style.top = "-200px";
  }
};
// End sticky bar

// typed.js
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))
const humanize = speed => Math.round(Math.random() * (100 - 30)) + speed
async function typed(opts) {
  let {
    strings,
    elm,
    backDelay = 500,
    eraseSpeed = 10,
    typeSpeed = 30,
    loop = true
  } = opts

  do {
    let last = strings.length
    let index = 0

    for (let string of strings) {
      index++

      for (let character of string) {
        await sleep(humanize(typeSpeed))
        elm.innerText += character
      }

      if (!loop && last == index) return

      await sleep(backDelay)

      while (string) {
        await sleep(humanize(eraseSpeed))
        elm.innerText = string = string.slice(0, -1)
      }
    }
  } while (loop)
}

typed({
  elm: document.querySelector(".typing"),
  strings: ['du marketing digital.', 'du développement web.', 'de la traduction.'],
  // loop: false <-- default
}).then(() => console.log('done with animation'))

// end typed.js

// // Begin moving letters
// $(document).ready(function () {
// var ml4 = {};
// ml4.opacityIn = [0,1];
// ml4.scaleIn = [0.2, 1];
// ml4.scaleOut = 3;
// ml4.durationIn = 800;
// ml4.durationOut = 600;
// ml4.delay = 500;

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml4 .letters-1',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-1',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4',
//     opacity: 0,
//     duration: 500,
//     delay: 500
//   });
// });
// // End moving letters

// Begin Gallery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
// End Gallery

// Begin Scroll Animations
var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}


// Call the loop for the first time
loop();


function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// End Scroll Animations
