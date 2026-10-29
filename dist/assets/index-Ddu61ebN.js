(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const q={brand:"ZAKI",fullName:"Muhammad Faiz Al Zaki",role:"RPL Student · Aspiring Backend Developer",school:"SMKN 64 Jakarta",location:"Jakarta, Indonesia",aboutPersonalLine:"Anak pertama yang ingin membangun sesuatu yang berguna untuk keluarga.",email:"",github:"",linkedin:"",formspreeEndpoint:"",siteUrl:""};function D(e){const t=document.querySelector("[data-journey-path]"),s=document.querySelector("#main");if(!t||!s||typeof t.getTotalLength!="function")return;const c=t.getTotalLength(),n=document.querySelector("#main .container"),i=()=>{if(!n)return;const b=n.getBoundingClientRect(),y=Math.max(7,b.left-24);document.documentElement.style.setProperty("--journey-x",`${y}px`)};if(i(),!c)return;if(t.style.strokeDasharray=String(c),e){t.style.strokeDashoffset="0",window.addEventListener("resize",i);return}let l=!1;const v=()=>{const b=s.getBoundingClientRect(),y=b.top+window.scrollY,L=window.innerHeight*.64,w=Math.min(1,Math.max(0,(window.scrollY+L-y)/b.height));t.style.strokeDashoffset=String(c*(1-w)),l=!1},g=()=>{l||(l=!0,window.requestAnimationFrame(v))};window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",()=>{i(),g()}),v()}function B(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;D(e),document.querySelectorAll("[data-year]").forEach(s=>{s.textContent=String(new Date().getFullYear())});const t=document.querySelector("[data-back-to-top]");if(t){let s=!1;const c=()=>{const i=window.scrollY>520;t.classList.toggle("is-visible",i),t.tabIndex=i&&!t.classList.contains("is-suppressed")?0:-1,s=!1},n=()=>{s||(s=!0,window.requestAnimationFrame(c))};window.addEventListener("scroll",n,{passive:!0}),c(),t.addEventListener("click",()=>{const i=document.querySelector("#beranda h1");i&&(i.setAttribute("tabindex","-1"),i.focus({preventScroll:!0})),window.scrollTo({top:0,behavior:e?"auto":"smooth"})})}}const N=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
`,x=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.31-2.63 5.26-5.13 5.54.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"/></svg>
`,z=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V9H7.1v11.45Z"/></svg>
`,K=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>
`,W={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function u(e=""){return String(e).replace(/[&<>"']/g,t=>W[t])}function E(e){if(typeof e!="string"||!e.trim())return"";const t=e.trim();if(!/^(https?:\/\/|\/)/i.test(t))return"";try{const s=new URL(t,window.location.href);return s.protocol!=="https:"&&s.protocol!=="http:"?"":s.href}catch{return""}}function H(e){try{const t=new URL(e),s=t.pathname==="/"?"":t.pathname.replace(/\/$/,"");return`${t.hostname}${s}`}catch{return e}}const C=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function V(){const e=document.querySelector("[data-contact-links]");if(!e)return;const t="".trim(),s=E(q.github),c=E(q.linkedin),n=[];if(t&&C.test(t)&&n.push({label:"Email",value:t,href:`mailto:${t}`,icon:K,external:!1}),s&&n.push({label:"GitHub",value:H(s),href:s,icon:x,external:!0}),c&&n.push({label:"LinkedIn",value:H(c),href:c,icon:z,external:!0}),!n.length){e.innerHTML=`
      <div class="contact-empty" role="note">
        <p class="contact-empty__title">Kanal kontak belum ditambahkan</p>
        <p>
          Isi <code>email</code>, <code>github</code>, atau <code>linkedin</code> di
          <code>src/config/site.js</code> agar tautan kontak muncul di sini.
        </p>
      </div>
    `;return}e.innerHTML=n.map(i=>`
        <a
          class="contact-link"
          href="${u(i.href)}"
          ${i.external?'target="_blank" rel="noopener noreferrer"':""}
        >
          <span class="contact-link__icon" aria-hidden="true">${i.icon}</span>
          <span class="contact-link__text">
            <span class="contact-link__label">${u(i.label)}</span>
            <span class="contact-link__value">${u(i.value)}</span>
          </span>
          <span class="contact-link__arrow" aria-hidden="true">${N}</span>
          ${i.external?'<span class="sr-only">(membuka tab baru)</span>':""}
        </a>
      `).join("")}function Z(){const e=document.querySelector("[data-footer-github]");if(!e)return;const t=E(q.github);if(!t){e.hidden=!0;return}e.href=t,e.target="_blank",e.rel="noopener noreferrer",e.setAttribute("aria-label","GitHub ZAKI (membuka tab baru)"),e.hidden=!1}function I(e){const t="".trim();if(!t||!C.test(t))return"";const s=encodeURIComponent(`Pesan portofolio dari ${e.name}`),c=encodeURIComponent(`${e.message}

— ${e.name}
${e.email}`);return`mailto:${t}?subject=${s}&body=${c}`}function G(){const e=document.querySelector("[data-contact-form]");if(!e)return;const t=e.querySelector("[data-form-status]"),s=e.querySelector("[data-form-submit]"),c=e.querySelector("[data-form-submit-label]"),n={name:e.querySelector("#contact-name"),email:e.querySelector("#contact-email"),message:e.querySelector("#contact-message")};if(!t||!s||!c||Object.values(n).some(r=>!r))return;let i="";try{const r=new URL((q.formspreeEndpoint||"").trim());r.protocol==="https:"&&(i=r.href)}catch{i=""}let l=!1;const v=r=>{const a=n[r].value.trim();if(r==="name"){if(!a)return"Nama wajib diisi.";if(a.length<2)return"Nama minimal 2 karakter."}if(r==="email"){if(!a)return"Email wajib diisi.";if(!C.test(a))return"Masukkan alamat email yang valid, misalnya nama@email.com."}if(r==="message"){if(!a)return"Pesan wajib diisi.";if(a.length<10)return"Pesan minimal 10 karakter agar lebih jelas."}return""},g=(r,a)=>{const o=n[r],d=e.querySelector(`[data-error-for="${r}"]`);d&&(d.textContent=a,a?o.setAttribute("aria-invalid","true"):o.removeAttribute("aria-invalid"))},b=()=>{t.className="form-status",t.replaceChildren()},y=(r,a)=>{t.className=`form-status is-${r}`;const o=document.createElement("p");o.textContent=a,t.replaceChildren(o)},L=r=>{const a=document.createDocumentFragment(),o=document.createElement("p");o.append("Form belum terhubung ke layanan pengiriman. Tambahkan endpoint Formspree di ");const d=document.createElement("code");d.textContent="src/config/site.js",o.append(d," (lihat README), lalu coba lagi."),a.append(o);const h=I(r);if(h){const _=document.createElement("p"),$=document.createElement("a");$.href=h,$.textContent="Atau kirim isi form ini lewat email",_.append($,"."),a.append(_)}else{const _=document.createElement("p");_.textContent="Email juga belum diisi di konfigurasi, jadi alternatif mailto belum tersedia.",a.append(_)}t.className="form-status is-info",t.replaceChildren(a)},w=r=>{s.disabled=r,c.textContent=r?"Mengirim…":"Kirim Pesan",r?e.setAttribute("aria-busy","true"):e.removeAttribute("aria-busy")},m=r=>{const a=document.createDocumentFragment(),o=document.createElement("p");o.textContent="Pesan belum terkirim. Coba lagi beberapa saat lagi, atau gunakan alternatif email di bawah.",a.append(o);const d=I(r);if(d){const h=document.createElement("p"),_=document.createElement("a");_.href=d,_.textContent="Kirim lewat email",h.append(_,"."),a.append(h)}t.className="form-status is-error",t.replaceChildren(a)},k=async r=>{w(!0),y("info","Mengirim pesan…");try{const a=await fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({...r,_subject:`Pesan portofolio dari ${r.name}`})});if(!a.ok)throw new Error(`Pengiriman gagal dengan status ${a.status}.`);e.reset(),l=!1,Object.keys(n).forEach(o=>g(o,"")),y("success","Pesan terkirim. Terima kasih sudah menghubungi!")}catch(a){console.error("Form kontak gagal dikirim:",a),m(r)}finally{w(!1)}};e.addEventListener("submit",r=>{r.preventDefault(),l=!0;const a=Object.keys(n).map(d=>({name:d,message:v(d)})).filter(d=>d.message);if(Object.keys(n).forEach(d=>{const h=a.find(_=>_.name===d);g(d,h?h.message:"")}),a.length){b(),n[a[0].name].focus();return}const o={name:n.name.value.trim(),email:n.email.value.trim(),message:n.message.value.trim()};if(!i){L(o);return}k(o)}),Object.entries(n).forEach(([r,a])=>{a.addEventListener("blur",()=>{(l||a.value.trim())&&g(r,v(r))}),a.addEventListener("input",()=>{a.getAttribute("aria-invalid")==="true"&&g(r,v(r))})})}function J(){V(),Z(),G()}const A={name:"Bata",messages:{hero:"Halo, selamat datang di rumahku.",tentang:"Di sini aku cerita dikit soal diriku.",skills:"Ini perkakas yang sehari-hari kupakai.",projects:"Ini yang sudah kubangun.",kontak:"Ada ide? Ngobrol yuk."},defaultSection:"hero"};function Y(){const e=[...document.querySelectorAll("[data-mascot]")],t=[...document.querySelectorAll(".mascot__bubble")],s=document.querySelector("[data-mascot-figure]"),c=document.querySelector("[data-mascot-figure-dock]"),n=document.querySelector("[data-mascot-dock]"),i=document.querySelector("#beranda"),l=document.querySelector("[data-motion-toggle]"),v=document.querySelector("[data-motion-label]"),g=window.matchMedia("(prefers-reduced-motion: reduce)");if(!e.length)return;if(s&&c&&!c.querySelector("svg")){const a=s.querySelector("svg");if(a){const o=a.cloneNode(!0);o.setAttribute("aria-hidden","true"),o.removeAttribute("role"),o.removeAttribute("aria-label"),c.append(o)}}let b=A.defaultSection;const y=()=>{const a=A.messages[b]||A.messages[A.defaultSection]||`Halo, aku ${A.name}.`;t.forEach(o=>{o.textContent=a}),e.forEach(o=>{const d=o.textContent.replace(/\s+/g," ").trim();o.setAttribute("aria-label",`Sapa ${A.name}, maskot ZAKI. ${d}`)})};y();const L=(a,o)=>{a.classList.toggle("is-open",o),a.setAttribute("aria-expanded",String(o))},w=()=>{e.forEach(a=>L(a,!1))};e.forEach(a=>{a.addEventListener("click",()=>{const o=a.getAttribute("aria-expanded")!=="true";w(),o&&L(a,!0)})}),document.addEventListener("pointerdown",a=>{e.some(o=>o.contains(a.target))||w()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&w()});const m=[...document.querySelectorAll("[data-mascot-section]")];if(m.length&&"IntersectionObserver"in window){const a=new IntersectionObserver(o=>{o.forEach(d=>{if(!d.isIntersecting)return;const h=d.target.dataset.mascotSection;h&&A.messages[h]&&(b=h,y())})},{rootMargin:"-45% 0px -45% 0px",threshold:0});m.forEach(o=>a.observe(o))}if(n&&i){let a=!1,o=!1;const d=document.querySelector("[data-contact-form]"),h=document.querySelector("[data-contact-links]"),_=document.querySelector("[data-back-to-top]"),$=[...document.querySelectorAll("a[href], button, input, textarea, select")].filter(p=>!p.closest("[data-mascot-dock]")&&!p.closest("[hidden]"));document.querySelectorAll(".site-footer__meta > span").forEach(p=>{$.push(p)});const M=(p,f)=>p.width>0&&f.width>0&&p.left<f.right&&p.right>f.left&&p.top<f.bottom&&p.bottom>f.top,P=p=>{if(!p)return!1;const f=p.getBoundingClientRect();return[d,h].some(S=>S&&M(f,S.getBoundingClientRect()))},F=p=>{if(!p)return!1;const f=p.getBoundingClientRect();return f.width?$.some(S=>S===p||!M(f,S.getBoundingClientRect())?!1:window.getComputedStyle(S).visibility!=="hidden"):!1},T=()=>{const p=i.offsetTop+i.offsetHeight*.7,f=window.scrollY>p,S=f&&P(n),U=f&&(P(_)||F(_));n.classList.toggle("is-suppressed",S),_&&(_.classList.toggle("is-suppressed",U),_.tabIndex=f&&!U?0:-1),f!==a&&(a=f,n.classList.toggle("is-visible",f)),(!f||S)&&w(),o=!1},j=()=>{o||(o=!0,window.requestAnimationFrame(T))};if(window.addEventListener("scroll",j,{passive:!0}),window.addEventListener("resize",j),"ResizeObserver"in window){const p=new ResizeObserver(j);d&&p.observe(d),h&&p.observe(h)}T()}let k=!1;const r=()=>{const a=g.matches,o=a||k;e.forEach(d=>{d.classList.toggle("is-paused",o)}),!(!l||!v)&&(l.disabled=a,l.setAttribute("aria-pressed",String(o)),l.setAttribute("aria-label",a?"Animasi maskot dinonaktifkan mengikuti preferensi sistem":o?"Lanjutkan animasi maskot":"Jeda animasi maskot"),v.textContent=a?"Animasi nonaktif":o?"Lanjutkan animasi":"Jeda animasi")};l&&(l.addEventListener("click",()=>{g.matches||(k=!k,r())}),typeof g.addEventListener=="function"&&g.addEventListener("change",r)),r()}function Q(e){if(!e)return;const t=e.querySelector("h1, h2");t&&(t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0}))}function X(){const e=document.querySelector("[data-header]"),t=document.querySelector("[data-nav-toggle]"),s=document.getElementById("primary-navigation"),c=[...document.querySelectorAll("[data-nav-link]")],n=[...document.querySelectorAll("[data-section]")];if(!e||!t||!s)return;let i=!1;const l=m=>{i=m,s.classList.toggle("is-open",m),e.classList.toggle("is-nav-open",m),t.setAttribute("aria-expanded",String(m)),t.setAttribute("aria-label",m?"Tutup menu navigasi":"Buka menu navigasi")};t.addEventListener("click",()=>{l(!i)}),s.addEventListener("click",m=>{const k=m.target.closest('a[href^="#"]');if(!k||!i)return;const r=document.querySelector(k.getAttribute("href")),a=window.matchMedia("(max-width: 900px)").matches;l(!1),a&&window.setTimeout(()=>Q(r),420)}),document.addEventListener("keydown",m=>{m.key==="Escape"&&i&&(l(!1),t.focus())}),document.addEventListener("pointerdown",m=>{i&&!s.contains(m.target)&&!t.contains(m.target)&&l(!1)});const v=window.matchMedia("(min-width: 901px)"),g=m=>{m.matches&&l(!1)};typeof v.addEventListener=="function"&&v.addEventListener("change",g);let b=!1;const y=()=>{e.classList.toggle("is-scrolled",window.scrollY>8),b=!1},L=()=>{b||(b=!0,window.requestAnimationFrame(y))};window.addEventListener("scroll",L,{passive:!0}),y();const w=m=>{c.forEach(k=>{const r=k.getAttribute("href")===`#${m}`;k.classList.toggle("is-active",r),r?k.setAttribute("aria-current","location"):k.removeAttribute("aria-current")})};if(n.length&&"IntersectionObserver"in window){const m=new IntersectionObserver(k=>{k.forEach(r=>{r.isIntersecting&&w(r.target.id)})},{rootMargin:"-42% 0px -53% 0px",threshold:0});n.forEach(k=>m.observe(k))}w("beranda")}const O=[{id:"peminjaman-alat",title:"Aplikasi Peminjaman Alat",type:"Web App",summary:"Aplikasi web untuk mengelola proses peminjaman dan pengembalian alat, membantu pencatatan inventaris, serta mendukung pemantauan kondisi alat dan denda.",tech:["Laravel","PHP","MySQL","Filament"],features:["Pencatatan peminjaman dan pengembalian alat","Manajemen data inventaris","Pemantauan kondisi alat","Pencatatan denda"],repoUrl:"",demoUrl:"",image:"",imageAlt:"",mockup:"loans"},{id:"sertifikasi-siswa",title:"Web Sertifikasi Siswa",type:"Web App",summary:"Aplikasi pengelolaan peserta sertifikasi dan skema sertifikasi dengan fitur CRUD, relasi data, validasi, serta pembatasan akses berdasarkan role.",tech:["Laravel","PHP","MySQL","Bootstrap"],features:["CRUD peserta","CRUD skema sertifikasi","Relasi peserta–skema","Pencarian dan validasi data","Login dengan akses admin/user"],repoUrl:"",demoUrl:"",image:"",imageAlt:"",mockup:"certification"},{id:"profil-tk-angkasa-8",title:"Website Profil Sekolah (TK Angkasa 8)",type:"Website",summary:"Website profil sekolah yang menyajikan informasi sekolah dalam tampilan responsif dan mudah diakses.",tech:["Laravel","PHP","MySQL","Bootstrap 5"],features:["Halaman profil sekolah","Tampilan responsif"],repoUrl:"",demoUrl:"",image:"",imageAlt:"",mockup:"school"}];function ee(){return`
    <div class="mock mock--loans" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__app">
          <div class="mock__side">
            <span class="mock__logo"></span>
            <span class="mock__nav is-active"></span>
            <span class="mock__nav"></span>
            <span class="mock__nav"></span>
            <span class="mock__nav"></span>
          </div>
          <div class="mock__main">
            <div class="mock__row">
              <span class="mock__line mock__line--dark w-40"></span>
              <span class="mock__pill"></span>
            </div>
            <div class="mock__stats">
              <span class="mock__stat"></span>
              <span class="mock__stat"></span>
              <span class="mock__stat"></span>
            </div>
            <div class="mock__table">
              <div class="mock__tr"><span></span><span></span><span></span></div>
              <div class="mock__tr"><span></span><span class="mock__status"></span><span class="mock__status mock__status--green"></span></div>
              <div class="mock__tr"><span></span><span class="mock__status mock__status--muted"></span><span class="mock__status mock__status--green"></span></div>
              <div class="mock__tr"><span></span><span class="mock__status"></span><span class="mock__status mock__status--green"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function te(){return`
    <div class="mock mock--certification" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__topnav">
          <span class="mock__branddot"></span>
          <span class="mock__line w-15"></span>
          <span class="mock__line w-10"></span>
          <span class="mock__pill"></span>
        </div>
        <div class="mock__content">
          <div class="mock__row">
            <div>
              <span class="mock__line mock__line--dark w-50"></span>
              <span class="mock__line w-30"></span>
            </div>
            <span class="mock__pill"></span>
          </div>
          <div class="mock__cards">
            <div class="mock__panel">
              <span class="mock__line mock__line--dark w-60"></span>
              <span class="mock__line"></span>
              <span class="mock__line w-80"></span>
              <span class="mock__line w-70"></span>
              <span class="mock__pill"></span>
            </div>
            <div class="mock__panel">
              <span class="mock__line mock__line--dark w-50"></span>
              <span class="mock__line w-80"></span>
              <span class="mock__line w-60"></span>
              <span class="mock__line"></span>
              <span class="mock__pill"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ae(){return`
    <div class="mock mock--school" aria-hidden="true">
      <div class="mock__browser">
        <div class="mock__bar">
          <span class="mock__dot"></span><span class="mock__dot"></span><span class="mock__dot"></span>
          <span class="mock__address"></span>
        </div>
        <div class="mock__topnav">
          <span class="mock__branddot"></span>
          <span class="mock__line w-20"></span>
          <span class="mock__line w-10"></span>
          <span class="mock__pill"></span>
        </div>
        <div class="mock__schoolhero">
          <div class="mock__schoolcopy">
            <span class="mock__line mock__line--dark w-80"></span>
            <span class="mock__line w-60"></span>
            <span class="mock__line w-70"></span>
            <span class="mock__pill"></span>
          </div>
          <div class="mock__schoolart">
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" focusable="false">
              <g fill="none" stroke="#172A46" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 50h84" stroke-width="1.6" />
                <path d="M22 48V31l28-15 28 15v17" stroke-width="1.8" />
                <path d="M43 48V36h14v12" stroke-width="1.3" />
                <path d="M30 38h6M64 38h6" stroke-width="1.1" opacity=".55" />
              </g>
              <circle cx="50" cy="26" r="1.8" fill="#16845B" />
            </svg>
          </div>
        </div>
        <div class="mock__content mock__content--tight">
          <div class="mock__cards mock__cards--three">
            <span class="mock__panel"></span>
            <span class="mock__panel"></span>
            <span class="mock__panel"></span>
          </div>
        </div>
      </div>
    </div>
  `}function ne(e){switch(e){case"certification":return te();case"school":return ae();default:return ee()}}function se(e){const t=E(e.image);if(t){const s=e.imageAlt||`Pratinjau proyek ${e.title}`;return`<img class="project-card__image" src="${u(t)}" alt="${u(s)}" loading="lazy" decoding="async" />`}return ne(e.mockup)}function ie(e,t){const s=E(e.repoUrl),c=s?`
      <a
        class="project-card__external"
        href="${u(s)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka repository ${u(e.title)} di tab baru"
      >${x}</a>
    `:"";return`
    <article class="project-card">
      <div class="project-card__visual">${se(e)}</div>
      <div class="project-card__body">
        <p class="project-card__meta">
          <span class="project-card__meta-index">${String(t+1).padStart(2,"0")}</span>
          <span class="project-card__meta-type">${u(e.type||"Web")}</span>
        </p>
        <h3>${u(e.title)}</h3>
        <p class="project-card__summary">${u(e.summary)}</p>
        <ul class="tag-list" aria-label="Teknologi yang digunakan">
          ${e.tech.map(n=>`<li class="tag">${u(n)}</li>`).join("")}
        </ul>
        <div class="project-card__actions">
          <button
            class="btn btn--outline btn--small"
            type="button"
            data-project-id="${u(e.id)}"
            aria-haspopup="dialog"
          >
            Detail Proyek
          </button>
          ${c}
        </div>
      </div>
    </article>
  `}function oe(e){const t=E(e.repoUrl),s=E(e.demoUrl),c=e.features?.length?e.features.map(l=>`<li>${u(l)}</li>`).join(""):"<li>Detail fitur belum ditambahkan.</li>",n=[t?`<a class="btn btn--primary btn--small" href="${u(t)}" target="_blank" rel="noopener noreferrer">Buka Repository ${x}<span class="sr-only">(membuka tab baru)</span></a>`:"",s?`<a class="btn btn--outline btn--small" href="${u(s)}" target="_blank" rel="noopener noreferrer">Lihat Demo<span class="sr-only">(membuka tab baru)</span></a>`:""].filter(Boolean).join(""),i=n?"":'<p class="dialog__pending">Tautan repository dan demo belum ditambahkan. Isi di <code>src/config/projects.js</code> saat sudah tersedia.</p>';return`
    <p class="dialog__eyebrow">Detail proyek <span>${u(e.type||"Web")}</span></p>
    <h2 class="dialog__title" id="project-dialog-title">${u(e.title)}</h2>
    <p class="dialog__summary">${u(e.summary)}</p>
    <div class="dialog__grid">
      <div class="dialog__column">
        <h3>Yang ada di dalamnya</h3>
        <ul class="dialog__features">${c}</ul>
      </div>
      <div class="dialog__column">
        <h3>Teknologi</h3>
        <ul class="tag-list" aria-label="Teknologi yang digunakan">
          ${e.tech.map(l=>`<li class="tag">${u(l)}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="dialog__actions">
      ${n||i}
    </div>
  `}function re(){const e=document.querySelector("[data-project-grid]"),t=document.querySelector("[data-project-dialog]"),s=t?.querySelector("[data-dialog-content]"),c=t?.querySelector("[data-dialog-close]");if(e&&(e.innerHTML=O.map(ie).join("")),!t||!s)return;let n=null;const i=l=>{n=document.activeElement,s.innerHTML=oe(l),document.body.classList.add("is-modal-open"),t.showModal()};e?.addEventListener("click",l=>{const v=l.target.closest("[data-project-id]");if(!v)return;const g=O.find(b=>b.id===v.dataset.projectId);g&&i(g)}),c?.addEventListener("click",()=>{t.close()}),t.addEventListener("click",l=>{l.target===t&&t.close()}),t.addEventListener("close",()=>{document.body.classList.remove("is-modal-open"),n instanceof HTMLElement&&n.focus({preventScroll:!0}),n=null})}const ce=[{id:"programming-web",title:"Programming & Web",description:"Dipakai untuk latihan dan proyek sekolah.",items:[{name:"PHP",level:"Practicing"},{name:"Laravel",level:"Practicing"},{name:"MySQL",level:"Practicing"},{name:"HTML5",level:"Practicing"},{name:"CSS3",level:"Practicing"},{name:"JavaScript",level:"Practicing"}]},{id:"tools",title:"Tools",description:"Lingkungan kerja untuk belajar dan membangun proyek.",items:[{name:"Git",level:"Familiar"},{name:"GitHub",level:"Familiar"},{name:"Visual Studio Code",level:"Familiar"},{name:"Laragon",level:"Familiar"}]}],le={Practicing:"Sedang dilatih dan dipakai untuk latihan atau proyek.",Familiar:"Sudah pernah dipakai, masih di tahap dasar.",Learning:"Sedang dipelajari, belum dipakai di proyek nyata."};function R(e){const t=String(e).toLowerCase();return["practicing","familiar","learning"].includes(t)?t:"learning"}function de(e){const t=u(e.level);return`
    <li class="skill-tag">
      <span class="skill-tag__dot skill-tag__dot--${R(e.level)}" aria-hidden="true"></span>
      <span>${u(e.name)}</span>
      <span class="skill-tag__level">${t}</span>
    </li>
  `}function ue(e){return`
    <article class="skill-group">
      <header class="skill-group__head">
        <h3>${u(e.title)}</h3>
        <p>${u(e.description)}</p>
      </header>
      <ul class="skill-tags">
        ${e.items.map(de).join("")}
      </ul>
    </article>
  `}function me(){const e=document.querySelector("[data-skills-grid]");e&&(e.innerHTML=ce.map(ue).join(""));const t=document.querySelector("[data-skill-legend]");t&&(t.innerHTML=Object.entries(le).map(([s,c])=>`
        <li class="skill-legend__item">
          <span class="skill-tag__dot skill-tag__dot--${R(s)}" aria-hidden="true"></span>
          <span><strong class="skill-legend__label">${u(s)}</strong> — ${u(c)}</span>
        </li>
      `).join(""))}function pe(){const e=E(q.siteUrl);if(!e)return;if(!document.querySelector('link[rel="canonical"]')){const c=document.createElement("link");c.rel="canonical",c.href=e,document.head.append(c)}const t=document.querySelector('meta[property="og:url"]');t&&t.setAttribute("content",e);const s=document.querySelector('meta[property="og:image"]');s&&s.setAttribute("content",new URL("/assets/images/og-cover.png",e).href)}function fe(){const e=document.querySelector("[data-about-personal]");if(!e)return;const t=q.aboutPersonalLine.trim();if(!t){e.hidden=!0;return}e.textContent=t,e.hidden=!1}fe();me();re();J();X();Y();B();pe();
