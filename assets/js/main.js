const MAP_URL="https://share.google/aaxZB0MQiPbZqtcqO";
const $=id=>document.getElementById(id);
$('map').href=MAP_URL;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.r').forEach(el=>io.observe(el));
const v=$('v'),intro=$('intro'),au=$('au'),mu=$('mu');let done=false,on=false;
function setM(s){on=s;mu.textContent=s?'♪':'✕';mu.style.opacity=s?1:.6;s?au.play().catch(()=>{}):au.pause()}
function petals(){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const p=$('pt'),f=document.createDocumentFragment();
for(let i=0;i<14;i++){const s=document.createElement('i'),z=9+Math.random()*8,x=Math.random()*100;
s.style.cssText=`--x:${x}%;width:${z}px;height:${z*1.3}px;--o:${.35+Math.random()*.3};--dx:${(Math.random()-.5)*30}%;--rot:${180+Math.random()*360}deg;animation-duration:${14+Math.random()*10}s;animation-delay:${Math.random()*14}s`;f.appendChild(s)}p.appendChild(f);const h=document.querySelector('.hero');new IntersectionObserver(e=>p.classList.toggle('show',!e[0].isIntersecting||e[0].intersectionRatio<.5),{threshold:[0,.5,1]}).observe(h)}
const heroImg=document.querySelector('.hero img');
const heroReady=heroImg&&heroImg.decode?heroImg.decode().catch(()=>{}):Promise.resolve();
function end(){if(done)return;done=true;try{v.pause()}catch(e){}
heroReady.then(()=>{scrollTo(0,0);document.body.classList.remove('lock');intro.classList.add('out');petals();setTimeout(()=>intro.remove(),1600)})}
$('open').addEventListener('click',()=>{$('open').classList.add('gone');intro.classList.add('go');mu.classList.add('show');setM(true);v.play().catch(end);setTimeout(end,12000)});
v.addEventListener('ended',end);v.addEventListener('error',end);
mu.addEventListener('click',()=>setM(!on));

/* wedding countdown — 09 Jan 2027, 11:00 AM IST (UTC+05:30), independent of the visitor's timezone */
(function(){const box=$('cd'),done=$('cd-done');if(!box)return;
const T=Date.UTC(2027,0,9,11,0,0)-330*60000,out={d:$('cd-d'),h:$('cd-h'),m:$('cd-m'),s:$('cd-s')};let t=0;
const pad=n=>String(n).padStart(2,'0');
function tick(){clearTimeout(t);const left=Math.max(0,Math.floor((T-Date.now())/1000));
if(left<=0){box.hidden=true;done.hidden=false;return}
out.d.textContent=pad(Math.floor(left/86400));out.h.textContent=pad(Math.floor(left%86400/3600));out.m.textContent=pad(Math.floor(left%3600/60));out.s.textContent=pad(left%60);
t=setTimeout(tick,1000-Date.now()%1000+20)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick()});tick()})();
