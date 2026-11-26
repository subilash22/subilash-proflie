
const intro=document.getElementById('intro');
if(intro){
  const seen=sessionStorage.getItem('subiIntroSeen');
  if(seen){intro.remove();}
  else{
    document.body.style.overflow='hidden';
    window.setTimeout(()=>{intro.classList.add('done');document.body.style.overflow='';sessionStorage.setItem('subiIntroSeen','1');window.setTimeout(()=>intro.remove(),380);},3000);
  }
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');closeLightbox();}});
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});revealItems.forEach(el=>observer.observe(el));}
else revealItems.forEach(el=>el.classList.add('visible'));
const lightbox=document.getElementById('lightbox'),lightboxImg=lightbox?.querySelector('img');
function closeLightbox(){lightbox?.classList.remove('open');lightbox?.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.photo-card').forEach(card=>card.addEventListener('click',()=>{if(!lightbox||!lightboxImg)return;lightboxImg.src=card.dataset.full;lightboxImg.alt=card.querySelector('img')?.alt||'Photograph';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
