console.log('My Portfolio')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// Open the Modal
function openModal () {
  document.getElementById('myModal').style.display = ' block'
}

// Close the Modal
function closeModal () {
  document.getElementById('myModal').style.display = 'none'
}

var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides (n) {
  howSlides (slideIndex += n)
}

// Thumbnail image controls
function currentSlide (n) {
  mySlides (slideIndex = n)
}

function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('demo')
  var captionText = document.getElementById('caption')
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += 'active'
  captionText.innerHTML = dots[slideIndex - 1].alt
}
let mainNavLinks = document.querySelectorAll('nav ul li a')
let mainSections = document.querySelectorAll('main section')

let lastId
let cur = []


// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('current')
    } else {
      link.classList.remove('current')
    }
  })
}
