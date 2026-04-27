/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const l = document.getElementById('loader');
    if(l) {
        l.style.opacity = '0';
        setTimeout(() => l.style.display = 'none', 800);
    }
  }, 2200);
});

/* ── NAV PROGRESS ── */
window.addEventListener('scroll', () => {
  const scrollElement = document.getElementById('nav-progress');
  if(scrollElement) {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollElement.style.width = scrolled + '%';
  }
});

/* ── SAKURA PETALS ── */
(function() {
  const container = document.getElementById('sakura-wrap');
  if(!container) return;
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = 10 + Math.random() * 14;
    const colors = ['#FFB7C5','#FF87A2','#FFD6E4','#ff9fb5','#FFC0CB'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    petal.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="10" rx="9" ry="5" fill="${color}" opacity="0.85" transform="rotate(${Math.random()*360} 10 10)"/>
    </svg>`;
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (5 + Math.random() * 10) + 's';
    petal.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(petal);
  }
})();

/* ── FADE IN ANIMATION PADA SCROLL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── TIMELINE EXPAND TOGGLE ── */
function togglePeriod(el) {
  el.classList.toggle('open');
}
