const progress=document.getElementById('scroll-progress');
const topBtn=document.getElementById('back-to-top');
const glow=document.querySelector('.cursor-glow');
function updateScroll(){
 const max=document.documentElement.scrollHeight-innerHeight;
 if(progress) progress.style.width=(max>0?scrollY/max*100:0)+'%';
 if(topBtn) topBtn.classList.toggle('visible',scrollY>400);
}
addEventListener('scroll',updateScroll,{passive:true});updateScroll();
topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
if(glow && matchMedia('(pointer:fine)').matches){
 addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
}
const reveal=document.querySelectorAll('.section-label,.about-grid,.work-card,.photo,.interest-grid article,.closing h2,.now-panel');
reveal.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window){
 const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});
 reveal.forEach(el=>obs.observe(el));
}else reveal.forEach(el=>el.classList.add('show'));
const box=document.getElementById('lightbox'), boxImg=box?.querySelector('img');
function closeBox(){box?.classList.remove('open');document.body.style.overflow=''}
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{
 if(!box||!boxImg)return;boxImg.src=img.src;boxImg.alt=img.alt;box.classList.add('open');document.body.style.overflow='hidden';
}));
box?.querySelector('button')?.addEventListener('click',closeBox);
box?.addEventListener('click',e=>{if(e.target===box)closeBox()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
