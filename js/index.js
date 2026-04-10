  let index = 0;
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  // Auto-slide
  // setInterval(nextSlide, 5000);

  function toggleTheme(){
    const body = document.body;
    const btn = document.getElementById('themeBtn');

    body.classList.toggle('light');

    if (body.classList.contains('light')){
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
  }
  
  // load saved theme
  window.onload = () => {
    const saved = localStorage.getItem('theme');
    const btn = document.getElementById('themeBtn');

    if (saved === 'light') {
        document.body.classList.add('light');
        btn.textContent = '☀️';
    }
  };
  