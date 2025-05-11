const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let currentSlideIndex = 0;

function updateCarousel(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + slideWidth * index + 'px)';
  dots.forEach(dot => dot.classList.remove('current-slide'));
  dots[index].classList.add('current-slide');
}

nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentSlideIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlideIndex = index;
    updateCarousel(currentSlideIndex);
  });
});

setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel(currentSlideIndex);
}, 5000);

updateCarousel(currentSlideIndex);

let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
}, { passive: true });

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const deltaX = e.touches[0].clientX - startX;

  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    } else {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    }
    updateCarousel(currentSlideIndex);
    isDragging = false; 
  }
}, { passive: true });

track.addEventListener('touchend', () => {
  isDragging = false;
});
