// Fan cards: hover brings to front, release sends to back
const cards = document.querySelectorAll('.ec');
const defaultZ = { 'dark': 1, 'teal': 2, 'purple': 3 };

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    // Push others back
    cards.forEach(other => {
      if (other !== card) {
        other.style.zIndex = '0';
        other.style.opacity = '0.75';
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    // Restore original z-index and opacity for all
    cards.forEach(other => {
      const label = other.dataset.label;
      other.style.zIndex = defaultZ[label];
      other.style.opacity = '1';
    });
  });
});
