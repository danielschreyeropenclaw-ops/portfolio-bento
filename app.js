// Rotating text ring: hover triggers animation via CSS
// No additional JS needed for core layout.

// Optional: add subtle parallax tilt to exp cards
const expCard = document.querySelector('.exp-card');
if (expCard) {
  expCard.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = expCard.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    expCard.querySelectorAll('.ec').forEach((el, i) => {
      const depth = (3 - i) * 3;
      el.style.transform = `translateX(${x * depth}px) translateY(${y * depth}px)`;
    });
  });
  expCard.addEventListener('mouseleave', () => {
    expCard.querySelectorAll('.ec').forEach(el => {
      el.style.transform = '';
    });
  });
}
