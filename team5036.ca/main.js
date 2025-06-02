// ===================== Sponsor Carousel Logic =====================
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }

  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  // Initialize
  showImage(current);
});

// ===================== Logo Fade-in Animation =====================
document.addEventListener('DOMContentLoaded', function() {
  var logo = document.querySelector('.logo2');
  if (logo) {
    logo.style.opacity = 0;
    logo.style.transition = 'opacity 1.2s';
    setTimeout(function() {
      logo.style.opacity = 1;
    }, 600);
  }
});

// ===================== Typing Animation for FIRST Section =====================
document.addEventListener('DOMContentLoaded', function() {
  const text = "FIRST is an international program for youth that recognizes the importance of science and technology and aims to promote interest in STEM fields. It operates four programs for youth in kindergarten through grade 12; FIRST LEGO League Jr, FIRST LEGO League, FIRST Tech Challenge and FIRST Robotics Competition. These programs prepare the youth of all ages for what is ahead of them and opens life-changing opportunities by allowing them to work side by side with likeminded individuals, scientists and engineers.";
  const el = document.getElementById('first-type-animate');
  const section = document.getElementById('first-section');
  if (!el || !section) return;
  let hasAnimated = false;

  function updateText(str) {
    el.innerHTML = str + '<span class="type-cursor">|</span>';
  }

  function typeWriter(str, i) {
    if (i <= str.length) {
      updateText(str.slice(0, i));
      setTimeout(() => typeWriter(str, i + 1), 6); // Fast typing
    }
  }

  function blinkCursor() {
    const cursor = el.querySelector('.type-cursor');
    if (cursor) {
      cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }
    setTimeout(blinkCursor, 500);
  }

  function onScroll() {
    if (hasAnimated) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      hasAnimated = true;
      typeWriter(text, 0);
      blinkCursor();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
});

// ===================== (Optional) Placeholder for Additional JS =====================
// ...existing code...