function b(){let t=sessionStorage.getItem("countdown_end");t?t=parseInt(t):(t=Date.now()+86400*1e3,sessionStorage.setItem("countdown_end",t));const e=document.getElementById("countdown-bar"),o=document.getElementById("countdown-oferta");function r(s){const i=Math.floor(s/3600),d=Math.floor(s%3600/60),l=s%60;return[i,d,l].map(c=>String(c).padStart(2,"0")).join(":")}function a(){const s=Math.max(0,Math.floor((t-Date.now())/1e3)),i=r(s);e&&(e.textContent=i),o&&(o.textContent=i),s>0&&setTimeout(a,1e3)}a()}function v(){const n=document.querySelectorAll(".faq-item");n.forEach(t=>{const e=t.querySelector(".faq-pergunta"),o=t.querySelector(".faq-resposta");!e||!o||e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";n.forEach(a=>{var s,i;(s=a.querySelector(".faq-pergunta"))==null||s.setAttribute("aria-expanded","false"),(i=a.querySelector(".faq-resposta"))==null||i.classList.remove("open")}),r||(e.setAttribute("aria-expanded","true"),o.classList.add("open"))})})}function S(){const n=new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),n.unobserve(e.target))}),{threshold:.1});document.querySelectorAll(".reveal").forEach(t=>n.observe(t))}function y(){document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",t=>{var a;const e=document.querySelector(n.getAttribute("href"));if(!e)return;t.preventDefault();const o=((a=document.getElementById("barra-urgencia"))==null?void 0:a.offsetHeight)??0,r=e.getBoundingClientRect().top+window.scrollY-o-8;window.scrollTo({top:r,behavior:"smooth"})})})}function I(){const n=document.getElementById("hero");if(!n)return;const t=document.createElement("div");t.id="sticky-cta",t.innerHTML=`
    <p>Kit com 5 apostilas por <strong>$9,90</strong></p>
    <a href="#oferta" class="btn-sticky">QUERO AGORA!</a>
  `,t.style.cssText=`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: linear-gradient(90deg, #5BB3D4, #FF85A1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 12px 24px;
    transform: translateY(100%);
    transition: transform 0.35s ease;
    font-family: 'Poppins', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
  `,document.body.appendChild(t),new IntersectionObserver(([r])=>{t.style.transform=r.isIntersecting?"translateY(100%)":"translateY(0)"},{threshold:0}).observe(n);const o=document.getElementById("oferta");o&&new IntersectionObserver(([a])=>{a.isIntersecting&&(t.style.transform="translateY(100%)")},{threshold:.3}).observe(o)}function A(){const n=document.querySelectorAll(".stat .numero");if(!n.length)return;const t=new IntersectionObserver(e=>{e.forEach(o=>{var u,f;if(!o.isIntersecting)return;t.unobserve(o.target);const r=o.target,a=r.textContent.trim(),s=parseInt(a.replace(/\D/g,""));if(isNaN(s))return;const i=((u=a.match(/^[^\d]*/))==null?void 0:u[0])??"",d=((f=a.match(/[^\d]*$/))==null?void 0:f[0])??"",l=1200,c=performance.now();function m(h){const p=Math.min((h-c)/l,1),g=1-Math.pow(1-p,3);r.textContent=i+Math.floor(g*s).toLocaleString("pt-BR")+d,p<1&&requestAnimationFrame(m)}requestAnimationFrame(m)})},{threshold:.5});n.forEach(e=>t.observe(e))}function E(){const n=document.getElementById("cta-timer-display");if(!n)return;const t="cta_timer_end",e=15*60;let o=sessionStorage.getItem(t);o?o=parseInt(o):(o=Date.now()+e*1e3,sessionStorage.setItem(t,o));function r(){const a=Math.max(0,Math.floor((o-Date.now())/1e3)),s=Math.floor(a/60),i=a%60;n.textContent=`${String(s).padStart(2,"0")} : ${String(i).padStart(2,"0")}`,a>0&&setTimeout(r,1e3)}r()}function M(){const n=document.getElementById("toast-prova");if(!n)return;const t=[{nome:"Maria S.",cidade:"São Paulo, SP"},{nome:"Ana C.",cidade:"Curitiba, PR"},{nome:"Carla M.",cidade:"Belo Horizonte, MG"},{nome:"Fernanda R.",cidade:"Rio de Janeiro, RJ"},{nome:"Juliana F.",cidade:"Fortaleza, CE"},{nome:"Patricia O.",cidade:"Recife, PE"},{nome:"Simone B.",cidade:"Porto Alegre, RS"},{nome:"Renata L.",cidade:"Brasília, DF"},{nome:"Luciana T.",cidade:"Salvador, BA"},{nome:"Camila A.",cidade:"Manaus, AM"},{nome:"Beatriz N.",cidade:"Goiânia, GO"},{nome:"Tatiana V.",cidade:"Florianópolis, SC"},{nome:"Gabriela P.",cidade:"Campinas, SP"},{nome:"Daniela K.",cidade:"Belém, PA"},{nome:"Priscila W.",cidade:"Natal, RN"}],e=5e3;let o=Math.floor(Math.random()*t.length),r=null;function a(){const i=["agora mesmo","há 1 minuto","há 2 minutos","há 3 minutos","há 5 minutos"];return i[Math.floor(Math.random()*i.length)]}function s(){const{nome:i,cidade:d}=t[o%t.length];o++;const l=i.charAt(0).toUpperCase();n.innerHTML=`
      <div class="toast-avatar">${l}</div>
      <div class="toast-body">
        <span class="toast-nome">${i}</span>
        <span class="toast-acao">acabou de comprar o Kit 🛒</span>
        <span class="toast-tempo">${d} · ${a()}</span>
      </div>
      <div class="toast-progress" id="toast-bar"></div>
    `,n.classList.add("show");const c=n.querySelector("#toast-bar");c&&(c.style.transition="none",c.style.transform="scaleX(1)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{c.style.transition=`transform ${e}ms linear`,c.style.transform="scaleX(0)"})})),clearTimeout(r),r=setTimeout(()=>n.classList.remove("show"),e),setTimeout(s,e+25e3+Math.random()*15e3)}setTimeout(s,6e3+Math.random()*6e3)}b();E();v();S();y();I();A();M();
