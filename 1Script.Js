let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides(n) {
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Hide all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show the current slide and active dot
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// Function to move to the next or previous slide
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Function to select a specific slide based on dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// Initialize the first slide
showSlides(slideIndex);

