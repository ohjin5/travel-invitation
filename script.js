function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

// ✅ 메뉴 닫기: 링크 클릭 시 자동으로 닫힘
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("active");
  });
});

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
