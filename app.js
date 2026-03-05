const baseZ = { 'fc-front': 3, 'fc-mid': 2, 'fc-back': 1 };

document.querySelectorAll('.fc').forEach(card => {
  const key = [...card.classList].find(c => baseZ[c]);

  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.fc').forEach(other => {
      const k = [...other.classList].find(c => baseZ[c]);
      other.style.zIndex = other === card ? 10 : baseZ[k];
    });
  });

  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.fc').forEach(other => {
      const k = [...other.classList].find(c => baseZ[c]);
      other.style.zIndex = baseZ[k];
    });
  });
});
