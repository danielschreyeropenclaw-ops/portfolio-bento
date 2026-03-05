// Fan cards: hover brings card to front, others step back
const fan = document.querySelector('.exp-fan');
const cards = fan ? fan.querySelectorAll('.ec') : [];
const baseZ = {'ec-purple': 3, 'ec-teal': 2, 'ec-dark': 1};

cards.forEach(card => {
  const key = [...card.classList].find(c => c.startsWith('ec-'));

  card.addEventListener('mouseenter', () => {
    cards.forEach(other => {
      const k = [...other.classList].find(c => c.startsWith('ec-'));
      other.style.zIndex = other === card ? 10 : baseZ[k];
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(other => {
      const k = [...other.classList].find(c => c.startsWith('ec-'));
      other.style.zIndex = baseZ[k];
    });
  });
});
