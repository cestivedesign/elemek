// ── Animation Catalog ───────────────────────────────────────────────
// Each entry has: id, name, description, render (HTML string rendered inside .tile-stage),
// init (optional function called with the stage element for JS behaviors),
// snippet (copy-paste code for the user's site).

window.ANIM_CATEGORIES = [
  { key: "backgrounds", label: "Backgrounds",  description: "Ambient loops for hero and page backgrounds." },
  { key: "cards",       label: "3D Cards",     description: "Hover-driven depth + tilt card effects." },
  { key: "menubars",    label: "Menubars",     description: "Navigation bar transitions and indicators." },
  { key: "menu-reveals",label: "Menu Reveals", description: "What opens inside a menu item — images, quotes, mini-pages." },
  { key: "reviews",     label: "Reviews",      description: "Testimonial, rating and social-proof animations." },
  { key: "intros",      label: "Page Intros",  description: "Page-load and hero reveal sequences." },
  { key: "scroll",      label: "Scroll Reveals", description: "Scroll-triggered entry animations." },
  { key: "buttons",     label: "Buttons",      description: "CTA micro-interactions." },
  { key: "cursors",     label: "Cursor FX",    description: "Interactive cursor and pointer effects." },
  { key: "mockups",     label: "3D Mockups",   description: "Interactive 3D objects, device mockups, and scrollable surfaces." },
];

// ─── BACKGROUNDS ────────────────────────────────────────────────────
const BG = [
  { id:"bg-01", name:"Aurora mesh", render:`<div class="bg-01"></div>`,
    snippet: cssSnip("backgrounds.css", "BG-01 · Aurora mesh") + `

<!-- HTML -->
<div class="bg-01"></div>` },
  { id:"bg-02", name:"Animated grid", render:`<div class="bg-02"></div>`,
    snippet: cssSnip("backgrounds.css", "BG-02 · Animated grid") + `

<!-- HTML -->
<div class="bg-02"></div>` },
  { id:"bg-03", name:"Floating orbs", render:`<div class="bg-03"><div class="orb"></div><div class="orb"></div><div class="orb"></div><div class="orb"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-03 · Floating orbs") + `

<!-- HTML -->
<div class="bg-03">
  <div class="orb"></div><div class="orb"></div>
  <div class="orb"></div><div class="orb"></div>
</div>` },
  { id:"bg-04", name:"Wave lines", render:`
    <div class="bg-04">
      <svg viewBox="0 0 400 300" preserveAspectRatio="none">
        ${Array.from({length:8}, (_,i)=>`<path class="wave" d="M0 ${60+i*30} Q100 ${40+i*30} 200 ${60+i*30} T400 ${60+i*30}" stroke="oklch(0.72 0.18 290 / ${0.3+i*0.08})" style="animation-delay:${i*0.3}s"/>`).join("")}
      </svg>
    </div>`,
    snippet: cssSnip("backgrounds.css", "BG-04 · Noise waves") + `

<!-- HTML: repeat <path class="wave"> a few times with different d and delays -->
<div class="bg-04">
  <svg viewBox="0 0 400 300" preserveAspectRatio="none">
    <path class="wave" d="M0 60 Q100 40 200 60 T400 60"
          stroke="var(--accent)" style="animation-delay:0s"/>
    <!-- more paths... -->
  </svg>
</div>` },
  { id:"bg-05", name:"Spotlight follow", render:`<div class="bg-05"></div>`,
    init(el) {
      const bg = el.querySelector(".bg-05");
      el.addEventListener("mousemove", e => {
        const r = bg.getBoundingClientRect();
        bg.style.setProperty("--mx", (e.clientX - r.left) + "px");
        bg.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    },
    snippet: cssSnip("backgrounds.css", "BG-05 · Spotlight follow") + `

<!-- HTML -->
<div class="bg-05"></div>

<!-- JS -->
<script>
  const bg = document.querySelector('.bg-05');
  bg.addEventListener('mousemove', e => {
    const r = bg.getBoundingClientRect();
    bg.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    bg.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
</script>` },
  { id:"bg-06", name:"Conic prism", render:`<div class="bg-06"></div>`,
    snippet: cssSnip("backgrounds.css", "BG-06 · Conic prism") + `

<!-- HTML -->
<div class="bg-06"></div>` },

  { id:"bg-10", name:"Starfield", render:`<div class="bg-10"><div class="stars s1"></div><div class="stars s2"></div><div class="stars s3"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-10 · Starfield") + `

<div class="bg-10">
  <div class="stars s1"></div><div class="stars s2"></div><div class="stars s3"></div>
</div>` },

  { id:"bg-11", name:"Aurora", render:`<div class="bg-11"><div class="a a1"></div><div class="a a2"></div><div class="a a3"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-11 · Aurora") + `

<div class="bg-11">
  <div class="a a1"></div><div class="a a2"></div><div class="a a3"></div>
</div>` },

  { id:"bg-12", name:"Dot matrix",
    render: `<div class="bg-12">${Array.from({length:26*16}).map((_,i)=>`<div class="dot" style="animation-delay:${((i*53)%100)/100}s"></div>`).join("")}</div>`,
    snippet: cssSnip("backgrounds.css", "BG-12 · Dot matrix") },

  { id:"bg-13", name:"Liquid chrome", render:`<div class="bg-13"></div>`,
    snippet: cssSnip("backgrounds.css", "BG-13 · Liquid chrome") },

  { id:"bg-14", name:"Drift lines", render:`<div class="bg-14"><div class="lines"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-14 · Drift lines") },

  { id:"bg-15", name:"Grid wobble", render:`<div class="bg-15"><div class="g"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-15 · Grid wobble") },

  { id:"bg-16", name:"Color fields", render:`<div class="bg-16"><div class="f f1"></div><div class="f f2"></div><div class="f f3"></div><div class="f f4"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-16 · Color fields") },

  { id:"bg-17", name:"Ripple", render:`<div class="bg-17"><div class="r"></div><div class="r r2"></div><div class="r r3"></div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-17 · Ripple") },

  { id:"bg-18", name:"Neon signage", render:`<div class="bg-18"><div class="g">ELEMEK · OPEN</div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-18 · Neon signage") },

  { id:"bg-19", name:"Glitch", render:`<div class="bg-19"><div class="base">ELEMEK</div><div class="g1">ELEMEK</div><div class="g2">ELEMEK</div></div>`,
    snippet: cssSnip("backgrounds.css", "BG-19 · Glitch") },
];

// ─── 3D CARDS ───────────────────────────────────────────────────────
const CARDS = [
  { id:"card-01", name:"Tilt follow", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-01" id="c01">
        <div class="c-img ph">IMG · 3:4</div>
        <div class="c-title">Case · Northline</div>
        <div class="c-sub">BRAND / WEB / MOTION</div>
      </div>
    </div>`,
    init(el) {
      const card = el.querySelector("#c01");
      el.addEventListener("mousemove", e=>{
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `rotateY(${(px-0.5)*20}deg) rotateX(${(0.5-py)*20}deg)`;
        card.style.setProperty("--cx", px*100+"%");
        card.style.setProperty("--cy", py*100+"%");
      });
      el.addEventListener("mouseleave", ()=>{ card.style.transform=""; });
    },
    snippet: cssSnip("cards.css", "CARD-01 · Tilt follow") + `

<!-- HTML -->
<div style="perspective:1000px">
  <div class="card-01">
    <div class="c-img"></div>
    <div class="c-title">Case · Northline</div>
    <div class="c-sub">BRAND / WEB / MOTION</div>
  </div>
</div>

<!-- JS -->
<script>
  const card = document.querySelector('.card-01');
  const parent = card.parentElement;
  parent.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = \`rotateY(\${(px-0.5)*20}deg) rotateX(\${(0.5-py)*20}deg)\`;
    card.style.setProperty('--cx', px*100 + '%');
    card.style.setProperty('--cy', py*100 + '%');
  });
  parent.addEventListener('mouseleave', () => card.style.transform = '');
</script>` },

  { id:"card-02", name:"Flip reveal", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-02" id="c02">
        <div class="face front">
          <div style="text-align:center">
            <div class="ph" style="width:60px;height:60px;margin:0 auto 10px;border-radius:50%"></div>
            HOVER TO FLIP
          </div>
        </div>
        <div class="face back">
          <div style="text-align:center">
            <div style="font-size:24px;font-weight:500;">98%</div>
            CLIENT SATISFACTION
          </div>
        </div>
      </div>
    </div>`,
    init(el) {
      const c = el.querySelector("#c02");
      el.addEventListener("mouseenter", ()=> c.style.transform="rotateY(180deg)");
      el.addEventListener("mouseleave", ()=> c.style.transform="");
    },
    snippet: cssSnip("cards.css", "CARD-02 · Flip") + `

<!-- HTML -->
<div style="perspective:1000px">
  <div class="card-02">
    <div class="face front">Hover to flip</div>
    <div class="face back">98% Client satisfaction</div>
  </div>
</div>

<!-- JS -->
<script>
  const c = document.querySelector('.card-02');
  c.parentElement.addEventListener('mouseenter', () => c.style.transform = 'rotateY(180deg)');
  c.parentElement.addEventListener('mouseleave', () => c.style.transform = '');
</script>` },

  { id:"card-03", name:"Stacked reveal", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-03">
        <div class="layer" style="z-index:1">LAYER 1</div>
        <div class="layer" style="z-index:2">LAYER 2</div>
        <div class="layer" style="z-index:3">HOVER ME</div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-03 · Stacked reveal") + `

<!-- HTML -->
<div class="card-03">
  <div class="layer">Layer 1</div>
  <div class="layer">Layer 2</div>
  <div class="layer">Hover me</div>
</div>` },

  { id:"card-04", name:"Depth lift", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-04">
        <div class="layer-a"></div>
        <div class="layer-b">Depth</div>
        <div class="layer-c">HOVER FOR 3D LIFT</div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-04 · Depth lift") + `

<!-- HTML -->
<div style="perspective:1000px">
  <div class="card-04">
    <div class="layer-a"></div>
    <div class="layer-b">Depth</div>
    <div class="layer-c">3D Lift on hover</div>
  </div>
</div>` },

  { id:"card-05", name:"Rotating border glow", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-05">
        <div class="c-tag">// FEATURED</div>
        <div class="c-h">Glow border cards with animated conic gradient.</div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-05 · Gradient border glow") + `

<!-- HTML -->
<div class="card-05">
  <div class="c-tag">// FEATURED</div>
  <div class="c-h">Animated border card</div>
</div>` },

  { id:"card-06", name:"Image zoom parallax", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-06">
        <div class="c-bg"></div>
        <div class="c-body">
          <div class="c-h">Northline / 2026</div>
          <div class="c-p">BRAND IDENTITY · WEB</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-06 · Image zoom parallax") + `

<!-- HTML -->
<div class="card-06">
  <div class="c-bg"></div>
  <div class="c-body">
    <div class="c-h">Northline / 2026</div>
    <div class="c-p">BRAND IDENTITY · WEB</div>
  </div>
</div>` },

  { id:"card-09", name:"Rotating gradient border", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-09">
        <div class="inner">
          <div class="c-tag">// 2026</div>
          <div class="c-h">Conic border</div>
          <div class="c-p">Glowing edge that spins on hover.</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-09 · Rotating gradient border") },

  { id:"card-10", name:"Stacked deck", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;perspective:1200px">
      <div class="card-10">
        <div class="c back b2"></div>
        <div class="c back b1"></div>
        <div class="c front">
          <div class="ft">N / 01</div>
          <div class="fs">FAN ON HOVER</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-10 · Stacked deck") },

  { id:"card-11", name:"Grayscale flash", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-11">
        <div class="c-bg"></div>
        <div class="c-body">
          <div class="c-tag">// COLOR SHIFT</div>
          <div class="c-h">Gray to signal</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-11 · Grayscale flash") },

  { id:"card-12", name:"Perspective push", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-12">
        <div class="shell"></div>
        <div class="body">
          <div class="h">Lean back</div>
          <div class="s">Z-PUSH ON HOVER</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-12 · Perspective push") },

  { id:"card-13", name:"Corner arrow", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-13">
        <div class="corner">→</div>
        <div class="title">Diagonal</div>
        <div class="sub">HOVER TO ARRIVE</div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-13 · Corner arrow") },

  { id:"card-14", name:"Book spine", render:`
    <div class="card-stage" style="display:grid;place-items:center;width:100%;height:100%;">
      <div class="card-14">
        <div class="page"></div>
        <div class="cover">
          <div>
            <div class="ct">Field<br/>Notes</div>
          </div>
          <div class="cs">VOL · 04</div>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("cards.css", "CARD-14 · Book spine") },
];

// ─── MENUBARS ───────────────────────────────────────────────────────
function buildPillMB(kind, idx) {
  const items = ["WORK","STUDIO","JOURNAL","CONTACT"];
  const id = `${kind}-${idx}`;
  return { items, id };
}

const MENUBARS = [
  { id:"mb-01", name:"Pill indicator", render:`
    <div class="mb-stage"><nav class="mb-01" id="mb01">
      <div class="pill"></div>
      ${["WORK","STUDIO","JOURNAL","CONTACT"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
    </nav></div>`,
    init(el){ setupPillNav(el, "#mb01", ".pill"); },
    snippet: cssSnip("menubars.css", "MB-01 · Pill indicator") + `

<!-- HTML -->
<nav class="mb-01">
  <div class="pill"></div>
  <a class="active">Work</a><a>Studio</a><a>Journal</a><a>Contact</a>
</nav>

<!-- JS (indicator follows active link) -->
<script>
  const nav = document.querySelector('.mb-01');
  const pill = nav.querySelector('.pill');
  const update = (el) => {
    pill.style.left = el.offsetLeft + 'px';
    pill.style.width = el.offsetWidth + 'px';
  };
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.querySelectorAll('a').forEach(x => x.classList.remove('active'));
    a.classList.add('active'); update(a);
  }));
  requestAnimationFrame(() => update(nav.querySelector('.active')));
</script>` },

  { id:"mb-02", name:"Underline draw", render:`
    <div class="mb-stage"><nav class="mb-02" id="mb02">
      ${["WORK","STUDIO","JOURNAL","CONTACT"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
      <div class="underline"></div>
    </nav></div>`,
    init(el){ setupPillNav(el, "#mb02", ".underline"); },
    snippet: cssSnip("menubars.css", "MB-02 · Underline draw") + `

<!-- Same JS pattern as MB-01 -->` },

  { id:"mb-03", name:"Glass dock magnify", render:`
    <div class="mb-stage"><nav class="mb-03">
      ${["A","B","C","D","E","F"].map(t=>`<div class="dock-i">${t}</div>`).join("")}
    </nav></div>`,
    snippet: cssSnip("menubars.css", "MB-03 · Glass dock with magnify") + `

<!-- HTML -->
<nav class="mb-03">
  <div class="dock-i">1</div><div class="dock-i">2</div>
  <div class="dock-i">3</div><div class="dock-i">4</div>
</nav>` },

  { id:"mb-04", name:"Liquid blob", render:`
    <div class="mb-stage"><nav class="mb-04" id="mb04">
      <div class="blob"></div>
      ${["HOME","SERVICES","CLIENTS","NEWS"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
    </nav></div>`,
    init(el){ setupPillNav(el, "#mb04", ".blob"); },
    snippet: cssSnip("menubars.css", "MB-04 · Liquid morph") + `

<!-- Same JS pattern as MB-01 -->` },

  { id:"mb-05", name:"Side indicator", render:`
    <div class="mb-stage"><nav class="mb-05" id="mb05">
      <div class="tick"></div>
      ${["DESIGN","BUILD","LAUNCH","GROW"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
    </nav></div>`,
    init(el){
      const nav = el.querySelector("#mb05");
      const tick = nav.querySelector(".tick");
      const update = a => {
        tick.style.top = a.offsetTop + 8 + "px";
        tick.style.height = (a.offsetHeight - 16) + "px";
      };
      nav.querySelectorAll("a").forEach(a=>a.addEventListener("mouseenter",()=>{
        nav.querySelectorAll("a").forEach(x=>x.classList.remove("active"));
        a.classList.add("active"); update(a);
      }));
      requestAnimationFrame(()=> update(nav.querySelector(".active")));
    },
    snippet: cssSnip("menubars.css", "MB-05 · Side indicator") + `

<!-- Vertical nav with JS updating tick position on hover -->` },

  { id:"mb-06", name:"Mega with numbers", render:`
    <div class="mb-stage"><nav class="mb-06">
      <a data-n="01">WORK</a><a data-n="02">ABOUT</a>
      <a data-n="03">PROCESS</a><a data-n="04">CONTACT</a>
    </nav></div>`,
    snippet: cssSnip("menubars.css", "MB-06 · Mega reveal trigger") + `

<!-- HTML -->
<nav class="mb-06">
  <a data-n="01">Work</a><a data-n="02">About</a>
  <a data-n="03">Process</a><a data-n="04">Contact</a>
</nav>` },

  { id:"mb-07", name:"Active chip", render:`
    <div class="mb-stage"><nav class="mb-07"><div class="nav" id="mb07">
      <div class="chip"></div>
      ${["WORK","STUDIO","JOURNAL","CONTACT"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
    </div></nav></div>`,
    init(el){ setupPillNav(el, "#mb07", ".chip"); },
    snippet: cssSnip("menubars.css", "MB-07 · Active chip") },

  { id:"mb-08", name:"Text scramble", render:`
    <div class="mb-stage"><nav class="mb-08"><div class="nav" id="mb08">
      ${["WORK","STUDIO","JOURNAL","CONTACT"].map(t=>`<a data-word="${t}">${t}</a>`).join("")}
    </div></nav></div>`,
    init(el){
      const chars = "▮▯!<>-_/[]{}—=+*^?#";
      el.querySelectorAll(".mb-08 a").forEach(a => {
        const word = a.dataset.word;
        let t;
        a.addEventListener("mouseenter", () => {
          let i = 0;
          clearInterval(t);
          t = setInterval(() => {
            a.textContent = word.split("").map((c, j) =>
              j < i ? c : chars[Math.floor(Math.random()*chars.length)]
            ).join("");
            if (i >= word.length) { clearInterval(t); a.textContent = word; }
            i += 0.5;
          }, 40);
        });
        a.addEventListener("mouseleave", () => { clearInterval(t); a.textContent = word; });
      });
    },
    snippet: cssSnip("menubars.css", "MB-08 · Text scramble") },

  { id:"mb-09", name:"Bracket frame", render:`
    <div class="mb-stage"><nav class="mb-09"><div class="nav" id="mb09">
      ${["WORK","STUDIO","JOURNAL","CONTACT"].map((t,i)=>`<a class="${i===0?'active':''}">${t}</a>`).join("")}
    </div></nav></div>`,
    snippet: cssSnip("menubars.css", "MB-09 · Bracket frame") },

  { id:"mb-10", name:"Dropdown caret", render:`
    <div class="mb-stage"><nav class="mb-10"><div class="nav">
      <a class="has-sub">WORK <span class="car">▾</span></a>
      <a class="has-sub">SERVICES <span class="car">▾</span></a>
      <a>JOURNAL</a>
      <a>CONTACT</a>
    </div></nav></div>`,
    snippet: cssSnip("menubars.css", "MB-10 · Dropdown caret") },

  { id:"mb-11", name:"Side nav indicator", render:`
    <div class="mb-11">
      <div class="vside" id="mb11">
        <div class="ind"></div>
        ${["HOME","WORK","STUDIO","JOURNAL","CONTACT"].map((t,i)=>`<a data-i="${i}" class="${i===0?'active':''}">${t}</a>`).join("")}
      </div>
      <div class="vcanvas"></div>
    </div>`,
    init(el){
      const nav = el.querySelector("#mb11");
      const ind = nav.querySelector(".ind");
      const update = (a) => {
        ind.style.transform = `translateY(${a.offsetTop - 8}px)`;
        ind.style.height = a.offsetHeight + "px";
      };
      nav.querySelectorAll("a").forEach(a => a.addEventListener("mouseenter", () => {
        nav.querySelectorAll("a").forEach(x => x.classList.remove("active"));
        a.classList.add("active"); update(a);
      }));
      requestAnimationFrame(() => update(nav.querySelector(".active")));
    },
    snippet: cssSnip("menubars.css", "MB-11 · Side indicator") },

  { id:"mb-12", name:"Clock nav", render:`
    <div class="mb-stage"><nav class="mb-12"><div class="nav">
      <span class="logo">ELEMEK</span>
      <a>WORK</a><a>STUDIO</a><a>JOURNAL</a><a>CONTACT</a>
      <span class="clock" id="mb12-clock">--:--:--</span>
    </div></nav></div>`,
    init(el){
      const c = el.querySelector("#mb12-clock");
      const tick = () => {
        const d = new Date();
        c.textContent = d.toTimeString().slice(0, 8);
      };
      tick(); setInterval(tick, 1000);
    },
    snippet: cssSnip("menubars.css", "MB-12 · Clock nav") },
];

function setupPillNav(root, navSel, indicatorSel) {
  const nav = root.querySelector(navSel);
  const ind = nav.querySelector(indicatorSel);
  const update = (a) => {
    ind.style.left = a.offsetLeft + "px";
    ind.style.width = a.offsetWidth + "px";
  };
  nav.querySelectorAll("a").forEach(a=> a.addEventListener("mouseenter", ()=>{
    nav.querySelectorAll("a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active"); update(a);
  }));
  requestAnimationFrame(()=> update(nav.querySelector(".active")));
}

// ─── MENU REVEALS ───────────────────────────────────────────────────
const MENU_REVEALS = [
  { id:"mr-01", name:"Image peek", render:`
    <div class="mr-01">
      <div class="items">
        ${["BRAND","WEB","MOTION","PRODUCT"].map((t,i)=>`<div class="item ${i===0?'active':''}">${t}</div>`).join("")}
      </div>
      <div class="preview"><div class="p-label">PREVIEW · BRAND</div></div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-01 · Image peek") },

  { id:"mr-02", name:"Quote fade cycle", render:`
    <div class="mr-02">
      <div class="q"><div class="q-text">"Sharp work. On time."</div><div class="q-who">— MAYA R. · NORTHLINE</div></div>
      <div class="q"><div class="q-text">"Made our site feel alive."</div><div class="q-who">— J. OKONKWO · RIVUS</div></div>
      <div class="q"><div class="q-text">"The detail is wild."</div><div class="q-who">— S. ANDERS · COSMO</div></div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-02 · Quote fade") },

  { id:"mr-03", name:"Icon list stagger", render:`
    <div class="mr-03">
      <div class="row"><div class="ic">B</div><div><div class="r-text">Brand identity</div><div class="r-sub">LOGO · GUIDES</div></div></div>
      <div class="row"><div class="ic">W</div><div><div class="r-text">Web design</div><div class="r-sub">MARKETING · SAAS</div></div></div>
      <div class="row"><div class="ic">M</div><div><div class="r-text">Motion</div><div class="r-sub">VIDEO · MICRO</div></div></div>
      <div class="row"><div class="ic">P</div><div><div class="r-text">Product</div><div class="r-sub">UX · UI</div></div></div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-03 · Icon + label row") },

  { id:"mr-04", name:"Video loop tile", render:`
    <div class="mr-04">
      <div class="v"></div>
      <div class="play"></div>
      <div class="meta"><span>SHOWREEL · 02:14</span><span>2026</span></div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-04 · Video loop tile") },

  { id:"mr-05", name:"Page mini-preview", render:`
    <div class="mr-05">
      <div class="t"><span></span><span></span><span></span></div>
      <div class="bd">
        <div class="bar a"></div>
        <div class="bar b"></div>
        <div class="blk"></div>
      </div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-05 · Page mini-preview") },

  { id:"mr-06", name:"Swipe deck", render:`
    <div class="mr-06">
      <div class="s"><div class="t">01 · Discover</div><div class="b">WEEK 1–2</div></div>
      <div class="s"><div class="t">02 · Design</div><div class="b">WEEK 3–6</div></div>
      <div class="s"><div class="t">03 · Deliver</div><div class="b">WEEK 7–8</div></div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-06 · Swipe cards") },

  { id:"mr-07", name:"Quote bloom", render:`
    <div class="mr-07">
      <div class="nav">
        <a class="active">TESTIMONIALS</a><a>WORK</a><a>JOURNAL</a>
      </div>
      <div class="bloom">
        <blockquote>"They shipped our entire brand in six weeks. Unbelievable taste level."</blockquote>
        <cite>— MAYA R. · NORTHLINE</cite>
      </div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-07 · Quote bloom") },

  { id:"mr-08", name:"Image stack", render:`
    <div class="mr-08">
      <div class="nav">
        <a class="active">GALLERY <span class="cnt">04</span></a><a>CASES</a><a>SHOP</a>
      </div>
      <div class="stack">
        ${Array.from({length:4}).map((_,i)=>`<div class="thumb ph" style="--i:${i}"></div>`).join("")}
      </div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-08 · Image stack") },

  { id:"mr-09", name:"Split panel", render:`
    <div class="mr-09">
      <div class="nav">
        <a class="active">SERVICES</a><a>WORK</a><a>JOURNAL</a>
      </div>
      <div class="panel">
        <div class="left">
          <div class="eb">/ 04 OFFERINGS</div>
          <div class="h">Brand, web, motion &amp; product.</div>
        </div>
        <div class="right">
          <a>Brand identity →</a>
          <a>Web design →</a>
          <a>Motion →</a>
          <a>Product →</a>
        </div>
      </div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-09 · Split panel") },

  { id:"mr-10", name:"List cascade", render:`
    <div class="mr-10">
      <div class="nav">
        <a class="active">JOURNAL</a><a>WORK</a><a>SHOP</a>
      </div>
      <ul class="list">
        ${["On brand systems","Designing for depth","Typography as identity","The slow web","Notes on motion"].map((t,i)=>`<li style="--i:${i}">${t}</li>`).join("")}
      </ul>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-10 · List cascade") },

  { id:"mr-11", name:"Video preview", render:`
    <div class="mr-11">
      <div class="nav">
        <a class="active">REEL</a><a>WORK</a><a>CONTACT</a>
      </div>
      <div class="video">
        <div class="play">▶</div>
        <div class="meta">2026 · SHOWREEL · 02:14</div>
      </div>
    </div>`,
    snippet: cssSnip("menu-reveals.css", "MR-11 · Video preview") },
];

// ─── REVIEWS ────────────────────────────────────────────────────────
const REVIEWS = [
  { id:"rv-01", name:"3D cube carousel", render:`
    <div class="rv-01"><div class="stage">
      <div class="face"><div class="q">"They made our launch feel like a film opening."</div><div class="w">— MAYA R. · NORTHLINE</div></div>
      <div class="face"><div class="q">"Best studio we've worked with. Full stop."</div><div class="w">— J. OKONKWO · RIVUS</div></div>
      <div class="face"><div class="q">"Every detail, considered. Every pixel, intentional."</div><div class="w">— S. ANDERS · COSMO</div></div>
    </div></div>`,
    snippet: cssSnip("reviews.css", "RV-01 · 3D carousel cube") },

  { id:"rv-02", name:"Marquee wall", render:`
    <div class="rv-02">
      <div class="track">
        ${Array.from({length:10}).map((_,i)=>`<div class="cell">"${["Brilliant.","On-point craft.","Made our brand sing.","Every detail considered.","Top-tier.","They get it."][i%6]}"<div class="w">— CLIENT ${i+1}</div></div>`).join("")}
      </div>
      <div class="track rev">
        ${Array.from({length:10}).map((_,i)=>`<div class="cell">"${["Fast, precise, kind.","We'd hire again.","Wild creative range.","Worth every dollar.","Studio of choice.","Taste level = 10."][i%6]}"<div class="w">— CLIENT ${20-i}</div></div>`).join("")}
      </div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-02 · Marquee wall") },

  { id:"rv-03", name:"Stars + bars", render:`
    <div class="rv-03">
      <div class="big">
        <div class="num">4.96</div>
        <div class="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
      <div class="bars">
        <div class="bar-row">5<div class="bar"><i style="--w:0.92"></i></div>92%</div>
        <div class="bar-row">4<div class="bar"><i style="--w:0.06"></i></div>6%</div>
        <div class="bar-row">3<div class="bar"><i style="--w:0.02"></i></div>2%</div>
      </div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-03 · Stars bar") },

  { id:"rv-04", name:"Typewriter", render:`
    <div class="rv-04">
      <div class="q">"They made our launch feel like a film opening."</div>
      <div class="who"><div class="av"></div>MAYA R. · NORTHLINE CREATIVE DIR.</div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-04 · Typewriter quote") },

  { id:"rv-05", name:"Logo pulse grid", render:`
    <div class="rv-05">
      ${["NORTHLINE","RIVUS","COSMO","AXEL","MERIDIAN","FOLD","ATLAS","OKAY"].map(t=>`<div class="l">${t}</div>`).join("")}
    </div>`,
    snippet: cssSnip("reviews.css", "RV-05 · Logo grid pulse") },

  { id:"rv-06", name:"Rotating card stack", render:`
    <div class="rv-06">
      <div class="c"><div class="q">"Sharp craft. On time. On brand."</div><div class="w">— MAYA R. · NORTHLINE</div></div>
      <div class="c"><div class="q">"Best studio we've worked with."</div><div class="w">— J. OKONKWO · RIVUS</div></div>
      <div class="c"><div class="q">"Every pixel intentional."</div><div class="w">— S. ANDERS · COSMO</div></div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-06 · Card stack swipe") },

  { id:"rv-07", name:"Ticker", render:`
    <div class="rv-07">
      <div class="t">
        ${Array.from({length:2}).map(()=>
          ["\"Brilliant.\" <b>NORTHLINE</b>","★★★★★ <b>RIVUS</b>","\"Top-tier work.\" <b>COSMO</b>","\"Made our brand sing.\" <b>AXEL</b>","\"Every detail.\" <b>MERIDIAN</b>","★★★★★ <b>FOLD</b>"]
            .map(s=>`<span>${s}</span>`).join(`<span>·</span>`)
        ).join(`<span>·</span>`)}
      </div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-07 · Ticker") },

  { id:"rv-08", name:"Avatar pile", render:`
    <div class="rv-08">
      <div class="row">
        <div class="av a1"></div><div class="av a2"></div>
        <div class="av a3"></div><div class="av a4"></div>
        <div class="plus">+ 214</div>
      </div>
      <div class="line">Trusted by studios, startups &amp; independents worldwide.</div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-08 · Avatar pile") },

  { id:"rv-09", name:"Quote deal", render:`
    <div class="rv-09">
      <div class="deck">
        <div class="card c1"><p>"Sharp work. On time. On brand."</p><cite>— MAYA R.</cite></div>
        <div class="card c2"><p>"Best studio we've worked with."</p><cite>— J. OKONKWO</cite></div>
        <div class="card c3"><p>"Every pixel intentional."</p><cite>— S. ANDERS</cite></div>
      </div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-09 · Quote deal") },

  { id:"rv-10", name:"Logo sweep", render:`
    <div class="rv-10">
      <div class="sweep"></div>
      ${["NORTHLINE","RIVUS","COSMO","AXEL","MERIDIAN","FOLD"].map(t=>`<span>${t}</span>`).join("")}
    </div>`,
    snippet: cssSnip("reviews.css", "RV-10 · Logo sweep") },

  { id:"rv-11", name:"Counter", render:`
    <div class="rv-11">
      <div class="big">98%</div>
      <div class="lb">REPEAT CLIENTS · 2024–2026</div>
    </div>`,
    snippet: cssSnip("reviews.css", "RV-11 · Counter") },
];

// ─── INTROS ─────────────────────────────────────────────────────────
const INTROS = [
  { id:"in-01", name:"Split reveal", render:`
    <div class="in-01">
      <div class="cnt">ELEMEK · 2026</div>
      <div class="half t"></div><div class="half b"></div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-01 · Split reveal") },

  { id:"in-02", name:"Text stagger rise", render:`
    <div class="in-02">
      <h2>
        <span class="w"><span>We</span></span>
        <span class="w"><span>design</span></span>
        <span class="w"><span>with</span></span>
        <span class="w"><span>intent.</span></span>
      </h2>
      <div class="sub">ELEMEK STUDIO · EST. 2026</div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-02 · Text stagger") },

  { id:"in-03", name:"Loader → content", render:`
    <div class="in-03">
      <div class="count">ELEMEK</div>
      <div class="bar"></div>
      <div class="sub">Loading Experience</div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-03 · Loader") },

  { id:"in-04", name:"Curtain rise blur", render:`
    <div class="in-04">
      <div class="brand">WE BUILD STUDIOS</div>
      <div class="curtain"></div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-04 · Curtain rise") },

  { id:"in-05", name:"Particles assemble", render:`
    <div class="in-05">
      ${Array.from({length:24}).map(()=>{
        const tx = (Math.random()*400-200)+"px";
        const ty = (Math.random()*300-150)+"px";
        const delay = (Math.random()*0.8)+"s";
        return `<div class="particle" style="top:50%;left:50%;--tx:${tx};--ty:${ty};animation-delay:${delay}"></div>`;
      }).join("")}
      <div class="core"></div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-05 · Particles assemble") },

  { id:"in-06", name:"Grid wipe", render:`
    <div class="in-06">
      <div class="bg">ELEMEK</div>
      ${Array.from({length:24}).map((_,i)=>`<div class="cell" style="animation-delay:${(i%6)*0.05 + Math.floor(i/6)*0.08}s"></div>`).join("")}
    </div>`,
    snippet: cssSnip("intros.css", "IN-06 · Wipe grid") },

  { id:"in-07", name:"Split curtain", render:`
    <div class="in-07">
      <div class="cur l"></div>
      <div class="cur r"></div>
      <div class="inner">
        <div class="eb">/ EST 2026</div>
        <h2>ELEMEK</h2>
      </div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-07 · Split curtain") },

  { id:"in-08", name:"Letter drop", render:`
    <div class="in-08">
      <h2>${"ELEMEK".split("").map((c,i)=>`<span style="--i:${i}">${c}</span>`).join("")}</h2>
    </div>`,
    snippet: cssSnip("intros.css", "IN-08 · Letter drop") },

  { id:"in-09", name:"Wipe counter", render:`
    <div class="in-09">
      <div class="bar"></div>
      <div class="n" id="in09-n">00</div>
      <div class="eb">LOADING STUDIO</div>
      <div class="final">READY.</div>
    </div>`,
    init(el){
      const n = el.querySelector("#in09-n");
      let i = 0;
      const t = setInterval(() => {
        i += 3;
        if (i > 99) { n.textContent = "99"; clearInterval(t); }
        else n.textContent = String(i).padStart(2,"0");
      }, 60);
    },
    snippet: cssSnip("intros.css", "IN-09 · Wipe counter") },

  { id:"in-10", name:"Logo build", render:`
    <div class="in-10">
      <div class="mark">
        <div class="s s1"></div><div class="s s2"></div><div class="s s3"></div>
      </div>
      <div class="lab">ELEMEK · 2026</div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-10 · Logo build") },

  { id:"in-11", name:"Radial wipe", render:`
    <div class="in-11">
      <div class="bg"></div>
      <div class="fg"><h2>Design with gravity.</h2></div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-11 · Radial wipe") },

  { id:"in-12", name:"Stagger grid", render:`
    <div class="in-12">
      ${Array.from({length:16}).map((_,i)=>`<div class="t" style="--i:${i}"></div>`).join("")}
      <div class="label">ELEMEK STUDIO</div>
    </div>`,
    snippet: cssSnip("intros.css", "IN-12 · Stagger grid") },
];

// ─── SCROLL ─────────────────────────────────────────────────────────
const SCROLL = [
  { id:"sr-01", name:"Fade-up stagger", render:`<div class="sr-01">${Array(5).fill().map(()=>`<div class="r"></div>`).join("")}</div>`,
    snippet: cssSnip("scroll.css", "SR-01 · Fade up stagger") + `

<!-- Wire to IntersectionObserver on your site:
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  }), { threshold: 0.2 });
  document.querySelectorAll('.r').forEach(el => io.observe(el));
-->` },

  { id:"sr-02", name:"Mask text reveal", render:`
    <div class="sr-02">
      <span class="ln"><span>We craft digital</span></span>
      <span class="ln"><span>experiences with</span></span>
      <span class="ln"><span>intention &amp; depth.</span></span>
    </div>`,
    snippet: cssSnip("scroll.css", "SR-02 · Mask reveal text") },

  { id:"sr-03", name:"Blur + scale", render:`<div class="sr-03">${Array(4).fill().map(()=>`<div class="b"></div>`).join("")}</div>`,
    snippet: cssSnip("scroll.css", "SR-03 · Scale in with blur") },

  { id:"sr-04", name:"Counter tick", render:`
    <div class="sr-04">
      <div class="stat"><div class="n">120+</div><div class="l">PROJECTS</div></div>
      <div class="stat"><div class="n">36</div><div class="l">AWARDS</div></div>
      <div class="stat"><div class="n">14</div><div class="l">PEOPLE</div></div>
    </div>`,
    snippet: cssSnip("scroll.css", "SR-04 · Counter tick") },

  { id:"sr-05", name:"Horizontal slide", render:`<div class="sr-05">${Array(4).fill().map(()=>`<div class="tile"></div>`).join("")}</div>`,
    snippet: cssSnip("scroll.css", "SR-05 · Horizontal slide row") },

  { id:"sr-06", name:"Clip-path sweep", render:`
    <div class="sr-06">
      <div class="cp">01 · DISCOVERY</div>
      <div class="cp">02 · DESIGN SYSTEM</div>
      <div class="cp">03 · LAUNCH</div>
    </div>`,
    snippet: cssSnip("scroll.css", "SR-06 · Clip-path unveil") },

  { id:"sr-07", name:"Words drift", render:`
    <div class="sc-07">
      ${"We design worlds with gravity and intention".split(" ").map((w,i)=>`<span style="--i:${i}">${w}&nbsp;</span>`).join("")}
    </div>`,
    snippet: cssSnip("scroll.css", "SC-07 · Words drift") },

  { id:"sr-08", name:"Numbered rows", render:`
    <div class="sc-08">
      ${[["01","Discovery"],["02","Design system"],["03","Build & ship"],["04","Grow"]].map(([n,t],i)=>`<div class="row" style="--i:${i}"><b>${n}</b><span>${t}</span></div>`).join("")}
    </div>`,
    snippet: cssSnip("scroll.css", "SC-08 · Numbered rows") },

  { id:"sr-09", name:"Image cascade", render:`
    <div class="sc-09">
      ${Array.from({length:8}).map((_,i)=>`<div class="c ph" style="--i:${i}"></div>`).join("")}
    </div>`,
    snippet: cssSnip("scroll.css", "SC-09 · Image cascade") },

  { id:"sr-10", name:"Weight sweep", render:`
    <div class="sc-10">
      <h3 class="sw">Type that grows heavier as you read.</h3>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-10 · Weight sweep") },

  { id:"sr-11", name:"Border trace", render:`
    <div class="sc-11">
      <div class="box">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"><rect x="0.5" y="0.5" width="99" height="99" rx="3"/></svg>
        <div class="lab">ELEMEK · 2026</div>
      </div>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-11 · Border trace") },

  { id:"sr-12", name:"Ribbon scroll", render:`
    <div class="sc-12">
      <div class="ribbon"></div>
      <div class="t">WE DESIGN WORLDS WORTH JOINING</div>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-12 · Ribbon scroll") },

  { id:"sr-13", name:"Column fan", render:`
    <div class="sc-13">
      ${Array.from({length:4}).map((_,i)=>`<div class="col" style="--i:${i}"></div>`).join("")}
    </div>`,
    snippet: cssSnip("scroll.css", "SC-13 · Column fan") },

  { id:"sr-14", name:"Split text", render:`
    <div class="sc-14">
      <div class="top"><h3>ELEMEK</h3></div>
      <div class="bot"><h3>ELEMEK</h3></div>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-14 · Split text") },

  { id:"sr-15", name:"Mask reveal", render:`
    <div class="sc-15">
      <div class="mask"></div>
      <h3>INTENTIONAL WORK</h3>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-15 · Mask reveal") },

  { id:"sr-16", name:"Marquee", render:`
    <div class="sc-16">
      <div class="t">${Array.from({length:4}).fill("DESIGN · BUILD · LAUNCH · GROW · ").join("")}</div>
    </div>`,
    snippet: cssSnip("scroll.css", "SC-16 · Marquee") },
];

// ─── BUTTONS ────────────────────────────────────────────────────────
const BUTTONS = [
  { id:"bt-01", name:"Gradient shift", render:`<div class="btn-preview"><button class="bt-01">Get in touch →</button></div>`,
    snippet: cssSnip("buttons.css", "BT-01 · Gradient shift") + `

<button class="bt-01">Get in touch →</button>` },
  { id:"bt-02", name:"Magnetic shine", render:`<div class="btn-preview"><button class="bt-02">Start Project</button></div>`,
    snippet: cssSnip("buttons.css", "BT-02 · Magnetic shine") + `

<button class="bt-02">Start Project</button>` },
  { id:"bt-03", name:"Border draw", render:`<div class="btn-preview"><button class="bt-03">Hover me <svg><rect x="0" y="0" width="100%" height="100%" rx="10"/></svg></button></div>`,
    snippet: cssSnip("buttons.css", "BT-03 · Border draw") + `

<button class="bt-03">Hover me
  <svg><rect x="0" y="0" width="100%" height="100%" rx="10"/></svg>
</button>` },
  { id:"bt-04", name:"Icon slide", render:`<div class="btn-preview"><button class="bt-04"><span class="txt">View case</span><span class="arr">→</span></button></div>`,
    snippet: cssSnip("buttons.css", "BT-04 · Icon slide") + `

<button class="bt-04"><span class="txt">View case</span><span class="arr">→</span></button>` },
  { id:"bt-05", name:"3D press", render:`<div class="btn-preview"><button class="bt-05">Press me</button></div>`,
    snippet: cssSnip("buttons.css", "BT-05 · 3D press") + `

<button class="bt-05">Press me</button>` },
  { id:"bt-06", name:"Liquid fill", render:`<div class="btn-preview"><button class="bt-06">Say hello</button></div>`,
    snippet: cssSnip("buttons.css", "BT-06 · Liquid fill") + `

<button class="bt-06">Say hello</button>` },

  { id:"bt-09", name:"Arrow trail", render:`<div class="btn-preview"><button class="bt-09">View work <span class="ar"><i>→</i><i>→</i></span></button></div>`,
    snippet: cssSnip("buttons.css", "BT-09 · Arrow trail") },

  { id:"bt-10", name:"Ghost underline", render:`<div class="btn-preview"><button class="bt-10">Read the journal</button></div>`,
    snippet: cssSnip("buttons.css", "BT-10 · Ghost underline") },

  { id:"bt-11", name:"Pill swap", render:`<div class="btn-preview"><button class="bt-11"><span class="a">Book a call</span><span class="b">Let's talk →</span></button></div>`,
    snippet: cssSnip("buttons.css", "BT-11 · Pill swap") },

  { id:"bt-12", name:"Icon burst", render:`<div class="btn-preview"><button class="bt-12"><span class="ic">✦</span>Subscribe</button></div>`,
    snippet: cssSnip("buttons.css", "BT-12 · Icon burst") },

  { id:"bt-13", name:"Fill from center", render:`<div class="btn-preview"><button class="bt-13">Start project</button></div>`,
    snippet: cssSnip("buttons.css", "BT-13 · Fill from center") },

  { id:"bt-14", name:"Hold to confirm", render:`<div class="btn-preview"><button class="bt-14"><svg viewBox="0 0 30 30"><circle cx="15" cy="15" r="13"/><circle class="prog" cx="15" cy="15" r="13"/></svg>Hold to confirm</button></div>`,
    snippet: cssSnip("buttons.css", "BT-14 · Hold to confirm") },
];

// ─── CURSORS ────────────────────────────────────────────────────────
const CURSORS = [
  { id:"cu-01", name:"Dot + ring trail", render:`
    <div class="cursor-stage cu-01">
      <div class="bg">MOVE YOUR CURSOR</div>
      <div class="ring"></div><div class="dot"></div>
    </div>`,
    init(el){
      const dot = el.querySelector(".dot");
      const ring = el.querySelector(".ring");
      el.addEventListener("mousemove", e=>{
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
        setTimeout(()=>{ ring.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`; }, 50);
      });
    },
    snippet: cssSnip("cursors.css", "CU-01 · Dot + ring trailing") + `

<!-- HTML -->
<div class="cu-01">
  <div class="ring"></div><div class="dot"></div>
</div>

<!-- JS: follow the real cursor -->
<script>
  const dot = document.querySelector('.cu-01 .dot');
  const ring = document.querySelector('.cu-01 .ring');
  window.addEventListener('mousemove', e => {
    dot.style.transform = \`translate(\${e.clientX}px, \${e.clientY}px) translate(-50%,-50%)\`;
    setTimeout(() => ring.style.transform =
      \`translate(\${e.clientX}px, \${e.clientY}px) translate(-50%,-50%)\`, 60);
  });
</script>` },

  { id:"cu-02", name:"Magnifier lens", render:`
    <div class="cursor-stage cu-02">
      <div class="bg"></div>
      <div class="lens"></div>
    </div>`,
    init(el){
      const lens = el.querySelector(".lens");
      el.addEventListener("mousemove", e=>{
        const r = el.getBoundingClientRect();
        lens.style.left = (e.clientX - r.left) + "px";
        lens.style.top = (e.clientY - r.top) + "px";
      });
    },
    snippet: cssSnip("cursors.css", "CU-02 · Magnifier") + `

<!-- JS: position lens via mousemove (same pattern as CU-01) -->` },

  { id:"cu-03", name:"Label follower", render:`
    <div class="cursor-stage cu-03">
      <div class="bg">HOVER — LABEL FOLLOWS</div>
      <div class="lab">VIEW CASE →</div>
    </div>`,
    init(el){
      const lab = el.querySelector(".lab");
      el.addEventListener("mousemove", e=>{
        const r = el.getBoundingClientRect();
        lab.style.left = (e.clientX - r.left) + "px";
        lab.style.top = (e.clientY - r.top) + "px";
      });
    },
    snippet: cssSnip("cursors.css", "CU-03 · Label follow") },

  { id:"cu-04", name:"Paint trail", render:`
    <div class="cursor-stage cu-04">
      <div class="bg"></div>
      <canvas></canvas>
      <div class="hint">DRAG TO PAINT</div>
    </div>`,
    init(el){
      const c = el.querySelector("canvas");
      const resize = ()=>{ c.width = c.offsetWidth; c.height = c.offsetHeight; };
      resize();
      const ctx = c.getContext("2d");
      let lx=null, ly=null;
      el.addEventListener("mousemove", e=>{
        const r = c.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        if (lx !== null) {
          ctx.strokeStyle = "oklch(0.72 0.18 290 / 0.9)";
          ctx.lineWidth = 2; ctx.lineCap = "round";
          ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(x,y); ctx.stroke();
        }
        lx = x; ly = y;
      });
      el.addEventListener("mouseleave", ()=>{ lx=ly=null; });
      // fade
      setInterval(()=>{ ctx.fillStyle = "rgba(10,13,20,0.04)"; ctx.fillRect(0,0,c.width,c.height); }, 60);
    },
    snippet: cssSnip("cursors.css", "CU-04 · Paint trail") + `

<!-- Canvas-based trail with fade. See gallery source for full JS. -->` },

  { id:"cu-05", name:"Repel particles", render:`
    <div class="cursor-stage cu-05">
      ${Array.from({length:60}).map(()=>`<div class="p" style="left:${Math.random()*100}%;top:${Math.random()*100}%"></div>`).join("")}
      <div class="cur"></div>
    </div>`,
    init(el){
      const cur = el.querySelector(".cur");
      const parts = [...el.querySelectorAll(".p")];
      el.addEventListener("mousemove", e=>{
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
        parts.forEach(p=>{
          const pr = p.getBoundingClientRect();
          const px = pr.left - r.left + pr.width/2;
          const py = pr.top - r.top + pr.height/2;
          const dx = px - x, dy = py - y;
          const d = Math.hypot(dx,dy);
          if (d < 80) {
            const f = (80 - d) / 80;
            p.style.transform = `translate(${dx/d*30*f}px, ${dy/d*30*f}px)`;
          } else p.style.transform = "";
        });
      });
    },
    snippet: cssSnip("cursors.css", "CU-05 · Repel particles") },

  { id:"cu-06", name:"Text mask reveal", render:`
    <div class="cursor-stage cu-06">
      <div class="bg">We design digital brands.</div>
      <div class="reveal">We craft worlds worth joining.</div>
    </div>`,
    init(el){
      const rv = el.querySelector(".reveal");
      el.addEventListener("mousemove", e=>{
        const r = el.getBoundingClientRect();
        rv.style.setProperty("--mx", (e.clientX - r.left) + "px");
        rv.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    },
    snippet: cssSnip("cursors.css", "CU-06 · Text reveal mask") },

  { id:"cu-09", name:"Inverted disk", render:`
    <div class="cursor-stage cu-09">
      <div class="bg">Move to invert</div>
      <div class="cir" style="left:50%;top:50%"></div>
    </div>`,
    init(el){
      const cir = el.querySelector(".cir");
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        cir.style.left = (e.clientX - r.left) + "px";
        cir.style.top = (e.clientY - r.top) + "px";
      });
    },
    snippet: cssSnip("cursors.css", "CU-09 · Inverted disk") },

  { id:"cu-10", name:"Crosshair HUD", render:`
    <div class="cursor-stage cu-10">
      <div class="bg"></div>
      <div class="hud"><div class="v"></div><div class="h"></div><div class="bracket"></div><div class="cx">X 0000 · Y 0000</div></div>
    </div>`,
    init(el){
      const hud = el.querySelector(".hud");
      const cx = el.querySelector(".cx");
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        hud.style.left = x + "px"; hud.style.top = y + "px";
        cx.textContent = `X ${String(Math.round(x)).padStart(4,"0")} · Y ${String(Math.round(y)).padStart(4,"0")}`;
      });
    },
    snippet: cssSnip("cursors.css", "CU-10 · Crosshair HUD") },

  { id:"cu-11", name:"Click ripple", render:`
    <div class="cursor-stage cu-11">
      <div class="bg">CLICK ANYWHERE</div>
    </div>`,
    init(el){
      el.addEventListener("click", e => {
        const r = el.getBoundingClientRect();
        const d = document.createElement("div");
        d.className = "ripple";
        d.style.left = (e.clientX - r.left) + "px";
        d.style.top = (e.clientY - r.top) + "px";
        el.appendChild(d);
        setTimeout(() => d.remove(), 1000);
      });
    },
    snippet: cssSnip("cursors.css", "CU-11 · Click ripple") },

  { id:"cu-12", name:"Sticky link", render:`
    <div class="cursor-stage cu-12">
      <div class="puck"></div>
      <div class="words">
        ${"We believe quiet design is loud when it's right.".split(" ").map(w=>`<span class="w">${w}</span>`).join(" ")}
      </div>
    </div>`,
    init(el){
      const puck = el.querySelector(".puck");
      el.querySelectorAll(".w").forEach(w => {
        w.addEventListener("mouseenter", () => {
          const pr = el.getBoundingClientRect();
          const r = w.getBoundingClientRect();
          puck.style.left = (r.left - pr.left + r.width/2) + "px";
          puck.style.top = (r.top - pr.top + r.height/2) + "px";
          puck.style.width = r.width + "px";
          puck.style.height = r.height + "px";
        });
      });
      el.addEventListener("mouseleave", () => {
        puck.style.width = "24px"; puck.style.height = "24px";
        puck.style.left = "50%"; puck.style.top = "50%";
      });
    },
    snippet: cssSnip("cursors.css", "CU-12 · Sticky link") },
];

// ─── 3D MOCKUPS ─────────────────────────────────────────────────────
const NEWS_BODY = `
  <p>A quiet shift is underway on the western edge of the city, where glassmakers and software engineers have taken to sharing studio space above the old market arcades. The result, observers say, is an emerging design language somewhere between craft and code.</p>
  <p>"We used to treat the screen and the shelf as separate problems," said one resident, who asked to remain unnamed. "Now the two inform each other — a typeface decides the shape of a tumbler, a kiln teaches us about gradients."</p>
  <p>City planners remain cautiously optimistic. A grant program announced last Tuesday will fund fifteen hybrid studios through the end of the year, with applications opening in May.</p>
  <p>Critics argue the trend risks turning a working neighborhood into a curated showroom. Supporters counter that the new studios are producing genuine apprenticeships — a claim borne out, at least in part, by the apprentice roster at the Gulliver Workshop, which has grown from two to eleven in under a year.</p>
  <p>Whatever the long view, the short one is visible from the arcade balcony: warm light from the upstairs windows, and, on the street below, a steady current of visitors who stop to read the hand-painted signage before moving on.</p>`;

const BOOK_PAGES = [
  { left: "Chapter One · The house on the hill stood empty for most of the year, and when it was full, it was full of the sort of people who did not stay long enough to leave a mark.",
    right: "On the morning Margot arrived, the hedges were still wet from a three-day rain, and the gardener — if he could be called that — was asleep in a striped chair beside the greenhouse." },
  { left: "She let herself in through the side door, because the front key had been bent in someone's pocket and nobody thought to replace it. The kitchen smelled faintly of bay leaves and older, sweeter things she could not name.",
    right: "Above the stove, a handwritten list read: bread · apricots · the word forgive, which had been crossed out twice and rewritten in a different, rounder hand. She ran her thumb along it before turning on the kettle." },
  { left: "By noon the gardener was awake and the greenhouse was open, and somebody's dog — nobody ever agreed whose — trotted through the rooms with the importance of a paid employee.",
    right: "Margot took her tea to the library, found the window sticky, forced it, and watched a flight of crows make their long, pragmatic way across the wheat." },
];

const MOCKUPS = [
  { id:"mk-01", name:"Interactive Earth", description:"Drag to rotate · spherical shading with drifting continents and a faint atmosphere.",
    render:`
      <div class="mk-stage">
        <div class="mk-earth-wrap">
          <div class="mk-earth-atmo"></div>
          <div class="mk-earth mk-earth--auto"></div>
        </div>
        <div class="mk-label">MK-01 · Earth</div>
        <div class="mk-hint">Drag →</div>
      </div>`,
    init(el){
      const wrap = el.querySelector(".mk-earth-wrap");
      const earth = el.querySelector(".mk-earth");
      if (!earth) return;
      let dragging=false, lastX=0, rot=0;
      const stage = el.querySelector(".mk-stage") || el;
      stage.addEventListener("pointerdown", e => {
        dragging=true; lastX=e.clientX;
        earth.classList.remove("mk-earth--auto");
        stage.setPointerCapture?.(e.pointerId);
      });
      stage.addEventListener("pointermove", e => {
        if (!dragging) return;
        rot += (e.clientX - lastX) * 0.35;
        lastX = e.clientX;
        earth.style.setProperty("--rot", (rot % 240) + "%");
      });
      const up = () => { dragging=false; };
      stage.addEventListener("pointerup", up);
      stage.addEventListener("pointercancel", up);
      stage.addEventListener("pointerleave", up);
    },
    snippet: cssSnip("mockups.css","MK-01 · Interactive Earth") + `

<!-- HTML -->
<div class="mk-earth-wrap">
  <div class="mk-earth-atmo"></div>
  <div class="mk-earth mk-earth--auto"></div>
</div>

<!-- Optional JS — drag to rotate -->
<script>
  const earth = document.querySelector('.mk-earth');
  let dragging=false, lastX=0, rot=0;
  earth.addEventListener('pointerdown', e => { dragging=true; lastX=e.clientX; earth.classList.remove('mk-earth--auto'); });
  addEventListener('pointermove', e => {
    if(!dragging) return;
    rot += (e.clientX - lastX) * 0.35; lastX = e.clientX;
    earth.style.setProperty('--rot', (rot % 240) + '%');
  });
  addEventListener('pointerup', () => dragging=false);
</script>` },

  { id:"mk-02", name:"Ringed planet", description:"Saturn-like ringed body tumbling slowly in space.",
    render:`
      <div class="mk-stage">
        <div class="mk-planet-wrap">
          <div class="mk-planet-ring"></div>
          <div class="mk-planet-ring r2"></div>
          <div class="mk-planet"></div>
        </div>
        <div class="mk-label">MK-02 · Saturn</div>
      </div>`,
    snippet: cssSnip("mockups.css","MK-02 · Ringed planet") + `

<!-- HTML -->
<div class="mk-planet-wrap">
  <div class="mk-planet-ring"></div>
  <div class="mk-planet-ring r2"></div>
  <div class="mk-planet"></div>
</div>` },

  { id:"mk-03", name:"Wireframe globe", description:"Classic wire sphere built from rotated rings — no WebGL required.",
    render:`
      <div class="mk-stage">
        <div class="mk-wire">
          ${Array.from({length:8}).map((_,i)=>`<div class="ring h" style="transform: rotateY(${i*22.5}deg)"></div>`).join("")}
          ${Array.from({length:5}).map((_,i)=>`<div class="ring v" style="transform: rotateX(${i*30}deg)"></div>`).join("")}
          <div class="axis"></div>
          <div class="core"></div>
        </div>
        <div class="mk-label">MK-03 · Wire globe</div>
      </div>`,
    snippet: cssSnip("mockups.css","MK-03 · Wireframe globe") + `

<!-- HTML — repeat rotated rings to form a sphere -->
<div class="mk-wire">
  <div class="ring h" style="transform: rotateY(0deg)"></div>
  <div class="ring h" style="transform: rotateY(22.5deg)"></div>
  <!-- …eight vertical rings, five horizontal -->
  <div class="ring v" style="transform: rotateX(0deg)"></div>
  <div class="core"></div>
  <div class="axis"></div>
</div>` },

  { id:"mk-04", name:"Page-flip book", description:"Open book with real 3D page turns. Click the arrows (or press ← →) to flip.",
    render:`
      <div class="mk-stage">
        <div class="mk-book-wrap">
          <div class="mk-book">
            <div class="mk-book-side left">
              <div class="pg-txt">${BOOK_PAGES[0].left}</div>
              <div class="pg-no">2</div>
            </div>
            <div class="mk-book-side right">
              <div class="pg-txt">${BOOK_PAGES[0].right}</div>
              <div class="pg-no">3</div>
            </div>
            <div class="mk-book-spine"></div>
            <div class="mk-book-pages">
              ${BOOK_PAGES.map((p,i) => `
                <div class="mk-book-page" data-page="${i}" style="z-index:${BOOK_PAGES.length - i}; transform: rotateY(0deg);">
                  <div class="face front">
                    <div class="pg-txt">${p.right}</div>
                    <div class="pg-no">${3 + i*2}</div>
                  </div>
                  <div class="face back">
                    <div class="pg-txt">${(BOOK_PAGES[i+1]||{}).left || "—"}</div>
                    <div class="pg-no">${4 + i*2}</div>
                  </div>
                </div>`).join("")}
            </div>
          </div>
          <div class="mk-book-controls">
            <button data-bk="prev">‹ Prev</button>
            <button data-bk="next">Next ›</button>
          </div>
        </div>
        <div class="mk-label">MK-04 · Book</div>
      </div>`,
    init(el){
      const pages = el.querySelectorAll(".mk-book-page");
      let flipped = 0;
      const update = () => {
        pages.forEach((p,i) => {
          p.style.transform = `rotateY(${i < flipped ? -180 : 0}deg)`;
          p.style.zIndex = i < flipped ? (i+10) : (pages.length - i);
        });
      };
      el.querySelectorAll("[data-bk]").forEach(b => b.addEventListener("click", e => {
        e.stopPropagation();
        if (b.dataset.bk === "next" && flipped < pages.length) flipped++;
        if (b.dataset.bk === "prev" && flipped > 0) flipped--;
        update();
      }));
      pages.forEach((p,i) => p.addEventListener("click", e => {
        e.stopPropagation();
        flipped = (i < flipped) ? i : i+1; update();
      }));
    },
    snippet: cssSnip("mockups.css","MK-04 · Page-flip book") + `

<!-- HTML — stack pages with transform-origin: left -->
<div class="mk-book">
  <div class="mk-book-side left">…</div>
  <div class="mk-book-side right">…</div>
  <div class="mk-book-spine"></div>
  <div class="mk-book-pages">
    <div class="mk-book-page">
      <div class="face front">…</div>
      <div class="face back">…</div>
    </div>
    <!-- more pages -->
  </div>
</div>

<!-- JS — flip by rotating Y to -180deg -->` },

  { id:"mk-05", name:"Scrollable newspaper", description:"Tilted broadsheet with columns and scroll-through long-form.",
    render:`
      <div class="mk-stage">
        <div class="mk-news-wrap">
          <div class="mk-news">
            <div class="masthead">
              <div class="title">The Elemek Review</div>
              <div class="meta">Vol. XII · No. 204</div>
            </div>
            <h1>Glassmakers and engineers share an arcade, and a vocabulary</h1>
            <div class="dek">Craft studios, software teams and a grant program are reshaping the west end. A slow-growing detente between hands and screens.</div>
            <div class="photo" data-caption="Afternoon light in Studio 4. Photo by K. Reyes."></div>
            <div class="cols">${NEWS_BODY}</div>
            <h2>Also in today's edition</h2>
            <div class="cols">${NEWS_BODY}</div>
          </div>
        </div>
        <div class="mk-label">MK-05 · Newspaper</div>
        <div class="mk-hint">Scroll ↕</div>
      </div>`,
    snippet: cssSnip("mockups.css","MK-05 · Scrollable newspaper") + `

<!-- HTML -->
<div class="mk-news-wrap">
  <div class="mk-news">
    <div class="masthead">
      <div class="title">The Elemek Review</div>
      <div class="meta">Vol. XII · No. 204</div>
    </div>
    <h1>Headline goes here</h1>
    <div class="dek">Deck line with a bit more context.</div>
    <div class="photo" data-caption="Credit line."></div>
    <div class="cols"><p>…three columns of justified body…</p></div>
  </div>
</div>` },

  { id:"mk-06", name:"MacBook Pro", description:"Laptop mockup with a scrollable site inside. Tilt follows cursor.",
    render:`
      <div class="mk-stage">
        <div class="mk-mac-wrap">
          <div class="mk-mac">
            <div class="mk-mac-lid">
              <div class="mk-mac-screen">
                <div class="mk-site">
                  <div class="topbar"><div class="dots"><i></i><i></i><i></i></div><div class="url">elemek.studio</div><div style="opacity:0.4">⌘K</div></div>
                  <div class="hero">
                    <h1>Design that<br>keeps its hands</h1>
                    <div class="sub">A small studio at the intersection of craft and code. Typefaces, tools, and interfaces for people who build other things.</div>
                    <div class="cta">Start a project →</div>
                  </div>
                  <div class="sect">
                    <div class="eye">// WORK · 2024</div>
                    <h2>Selected projects</h2>
                    <div class="cards3">
                      <div class="c"><span class="n">01</span>Arcade Press identity and book series.</div>
                      <div class="c"><span class="n">02</span>Kiln OS — a glassmaker's production tool.</div>
                      <div class="c"><span class="n">03</span>Margin — a long-form reading app.</div>
                    </div>
                  </div>
                  <div class="sect">
                    <div class="eye">// WRITING</div>
                    <h2>On reading at screen-size</h2>
                    <div class="lorem">We still treat the screen like a poster — big type, wide margins, one idea per page. That works for the home page and almost nowhere else. A reader arrives to an article because they want to stay for a while. The design should treat their time as long, not short.</div>
                  </div>
                  <div class="sect">
                    <div class="eye">// CONTACT</div>
                    <h2>Say hello</h2>
                    <div class="lorem">hello@elemek.studio · We answer within two working days, usually sooner.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mk-mac-base"></div>
          </div>
        </div>
        <div class="mk-label">MK-06 · MacBook</div>
        <div class="mk-hint">Scroll screen</div>
      </div>`,
    init(el){
      const mac = el.querySelector(".mk-mac");
      const stage = el.querySelector(".mk-stage") || el;
      stage.addEventListener("mousemove", e => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        mac.style.transform = `rotateX(${8 - y*6}deg) rotateY(${-4 + x*10}deg)`;
      });
      stage.addEventListener("mouseleave", () => mac.style.transform = "");
    },
    snippet: cssSnip("mockups.css","MK-06 · MacBook") + `

<!-- HTML -->
<div class="mk-mac">
  <div class="mk-mac-lid">
    <div class="mk-mac-screen">
      <!-- your page / iframe / screenshot goes here -->
    </div>
  </div>
  <div class="mk-mac-base"></div>
</div>` },

  { id:"mk-07", name:"iPhone", description:"Phone mockup with notch-screen and scrollable iOS-style feed.",
    render:`
      <div class="mk-stage">
        <div class="mk-phone-wrap">
          <div class="mk-phone">
            <div class="mk-phone-screen">
              <div class="mk-ios">
                <div class="statusbar"><span>9:41</span><span>●●●●</span></div>
                <h1>Today</h1>
                <div class="search">Search</div>
                <div class="feed-card">
                  <div class="feed-img"></div>
                  <div class="tag">// Feature</div>
                  <div class="tit">A quiet shift in the west end</div>
                  <div class="desc">Craft studios and software teams share an arcade — and a vocabulary.</div>
                </div>
                <div class="feed-card">
                  <div class="tag">// Review</div>
                  <div class="tit">On reading at screen-size</div>
                  <div class="desc">Long articles deserve long design. Typography for people who actually stay.</div>
                </div>
                <div class="feed-card">
                  <div class="feed-img" style="background:linear-gradient(135deg, oklch(0.7 0.15 65), oklch(0.55 0.12 30))"></div>
                  <div class="tag">// Essay</div>
                  <div class="tit">Warm light, small type</div>
                  <div class="desc">A field note from the upstairs studio at the Gulliver Workshop, where apprentices work through the evening.</div>
                </div>
                <div class="feed-card">
                  <div class="tag">// Interview</div>
                  <div class="tit">"We used to treat the screen and the shelf as separate problems"</div>
                  <div class="desc">A conversation with three studio founders about hybrid practice.</div>
                </div>
                <div class="feed-card">
                  <div class="tag">// Notes</div>
                  <div class="tit">Fifteen studios, one grant</div>
                  <div class="desc">The city's new program opens in May. What the money can — and can't — do.</div>
                </div>
                <div class="tabbar"><span class="tab active">Today</span><span class="tab">Reading</span><span class="tab">Saved</span><span class="tab">Me</span></div>
              </div>
            </div>
            <div class="mk-phone-notch"></div>
          </div>
        </div>
        <div class="mk-label">MK-07 · iPhone</div>
        <div class="mk-hint">Scroll screen</div>
      </div>`,
    init(el){
      const phone = el.querySelector(".mk-phone");
      const stage = el.querySelector(".mk-stage") || el;
      stage.addEventListener("mousemove", e => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        phone.style.transform = `rotateX(${4 - y*8}deg) rotateY(${-4 + x*14}deg)`;
      });
      stage.addEventListener("mouseleave", () => phone.style.transform = "");
    },
    snippet: cssSnip("mockups.css","MK-07 · iPhone") + `

<!-- HTML -->
<div class="mk-phone">
  <div class="mk-phone-screen">
    <!-- your app screen goes here -->
  </div>
  <div class="mk-phone-notch"></div>
</div>` },

  { id:"mk-08", name:"3D cube", description:"Spinning glass cube — drag to spin, release to let it drift.",
    render:`
      <div class="mk-stage">
        <div class="mk-cube-wrap">
          <div class="mk-cube">
            <div class="f front">01</div>
            <div class="f back">02</div>
            <div class="f right">03</div>
            <div class="f left">04</div>
            <div class="f top">05</div>
            <div class="f bottom">06</div>
          </div>
        </div>
        <div class="mk-label">MK-08 · Cube</div>
        <div class="mk-hint">Drag ↔</div>
      </div>`,
    init(el){
      const cube = el.querySelector(".mk-cube");
      const wrap = el.querySelector(".mk-cube-wrap");
      const stage = el.querySelector(".mk-stage") || el;
      let dragging=false, lx=0, ly=0, rx=-20, ry=25;
      stage.addEventListener("pointerdown", e => {
        dragging=true; lx=e.clientX; ly=e.clientY;
        cube.style.animation="none";
        stage.setPointerCapture?.(e.pointerId);
      });
      stage.addEventListener("pointermove", e => {
        if(!dragging) return;
        ry += (e.clientX - lx) * 0.5;
        rx += -(e.clientY - ly) * 0.4;
        lx=e.clientX; ly=e.clientY;
        cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      const up = () => { dragging=false; };
      stage.addEventListener("pointerup", up);
      stage.addEventListener("pointercancel", up);
      stage.addEventListener("pointerleave", up);
    },
    snippet: cssSnip("mockups.css","MK-08 · 3D cube") + `

<!-- HTML -->
<div class="mk-cube-wrap">
  <div class="mk-cube">
    <div class="f front">01</div>
    <div class="f back">02</div>
    <div class="f right">03</div>
    <div class="f left">04</div>
    <div class="f top">05</div>
    <div class="f bottom">06</div>
  </div>
</div>` },
];

// ── helpers ──
function cssSnip(file, heading) {
  return `/* From styles/anims/${file} — section "${heading}" */`;
}

window.ANIM_DATA = {
  backgrounds: BG,
  cards: CARDS,
  menubars: MENUBARS,
  "menu-reveals": MENU_REVEALS,
  reviews: REVIEWS,
  intros: INTROS,
  scroll: SCROLL,
  buttons: BUTTONS,
  cursors: CURSORS,
  mockups: MOCKUPS,
};
