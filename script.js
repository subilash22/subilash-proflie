// Gentle pointer tilt for the 3D hero object; disabled on touch-sized screens.
const stage = document.querySelector('.visual-stage');
const planet = document.querySelector('.planet');
if (stage && planet && window.matchMedia('(pointer:fine)').matches) {
  stage.addEventListener('pointermove', (event) => {
    const r = stage.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - .5;
    const y = (event.clientY - r.top) / r.height - .5;
    planet.style.animation = 'none';
    planet.style.transform = `translate(${x * 13}px, ${y * 13}px) rotateX(${-19 - y * 12}deg) rotateY(${-28 + x * 15}deg)`;
  });
  stage.addEventListener('pointerleave', () => {
    planet.style.animation = '';
    planet.style.transform = '';
  });
}
