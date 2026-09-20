(() => {
'use strict';
const routes = ['home','education','experience','projects','about'];
let lang = 'zh';
try { if(localStorage.getItem('liting-language') === 'en') lang = 'en'; } catch {}
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const p = s => `<p>${esc(s)}</p>`;
const heading = d => `<p class="eyebrow">${esc(d.eyebrow)}</p><h1 class="page-heading">${esc(d.title)}</h1>${d.intro ? `<p class="page-intro">${esc(d.intro)}</p>` : ''}`;
function render(focus = false) {
const route = routes.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
const c = window.CONTENT[lang], d = c[route];
document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
document.title = `${lang === 'zh' ? '李婷' : 'Li Ting'} · ${c.nav[routes.indexOf(route)]}`;
document.querySelector('meta[name="description"]').content = c.home.lead;
document.querySelector('nav').innerHTML = routes.map((r,i) => `<a href="#${r}" ${r===route ? 'aria-current="page"' : ''}><span>0${i}</span>${esc(c.nav[i])}</a>`).join('');
document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
document.getElementById('side-note').innerText = c.side;
document.getElementById('footer-note').textContent = c.footer;
document.getElementById('footer-link').textContent = c.contact;
let html = '';
if(route === 'home') html = `<p class="eyebrow">${esc(d.eyebrow)}</p><div class="hero"><div class="hero-copy"><p class="hello">${esc(d.hello)}</p><h1>${esc(d.name)}<span class="latin">${esc(d.other)}</span></h1><p class="lead">${esc(d.lead)}</p><div class="tags">${d.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div><figure class="portrait"><img src="assets/profile.jpeg" alt="${lang==='zh'?'简历原图：戴着黑框眼镜的黄色玩偶':'Original résumé image: a yellow plush toy wearing black glasses'}" width="1163" height="1138"><figcaption><span>${esc(d.photo)}</span><span>— LT</span></figcaption></figure></div><div class="contact-strip"><div><span class="field-label">${esc(d.schoolLabel)}</span><span class="field-value">${esc(d.school)}</span></div><div><span class="field-label">${esc(d.email)}</span><span class="field-value"><a href="mailto:3439474779@qq.com">3439474779@qq.com</a></span></div><div><span class="field-label">${esc(d.phone)}</span><span class="field-value"><a href="tel:+8619852736959">198 5273 6959</a></span></div></div><div class="intro-bottom"><p>${esc(d.note)}</p><a class="text-link" href="#experience">${esc(d.next)}</a></div>`;
if(route === 'education') html = heading(d)+`<article class="entry"><h2>${esc(d.school)}</h2><p class="entry-meta">${esc(d.meta)}</p><div class="facts"><div class="fact"><strong>3.6<span> / 4.3</span></strong><span>${esc(d.gpa)}</span></div></div><h2 style="margin-top:28px">${esc(d.coursesTitle)}</h2><div class="course-list">${d.courses.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${p(d.note)}</article>`;
if(route === 'experience') html = heading(d)+`<article class="entry"><h2>${esc(d.company)}</h2><p class="entry-meta">${esc(d.role)}</p>${d.items.map(([t,b])=>`<h3>${esc(t)}</h3>${p(b)}`).join('')}</article>`;
if(route === 'projects') html = heading(d)+d.entries.map((e,i)=>`<article class="entry"><div class="entry-header"><h2>${esc(e.title)}</h2><span class="number">0${i+1}</span></div><p class="entry-meta">${esc(e.meta)}</p><div class="facts"><div class="fact"><strong>${esc(e.value)}</strong><span>${esc(e.label)}</span></div></div>${e.paragraphs.map(p).join('')}</article>`).join('');
if(route === 'about') html = heading(d)+`<blockquote class="quote">${esc(d.quote)}</blockquote><div class="skill-grid">${d.items.map(([t,b])=>`<article class="entry"><h2>${esc(t)}</h2>${p(b)}</article>`).join('')}</div>`;
const main = document.getElementById('main'); main.innerHTML=html;
if(focus) {main.focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'});}
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('liting-language',lang);}catch{}render();}));
window.addEventListener('hashchange',()=>render(true));
document.getElementById('year').textContent=new Date().getFullYear();
render();
})();
