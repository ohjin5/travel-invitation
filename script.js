function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

function showMain() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000); // 4초 간격
