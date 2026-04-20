// ── App controller ─────────────────────────────────────────────────
(function(){
  const CATEGORIES = window.ANIM_CATEGORIES;
  const DATA = window.ANIM_DATA;

  const state = {
    category: localStorage.getItem("elemek-cat") || "backgrounds",
    palette: localStorage.getItem("elemek-pal") || "violet",
    drawer: null,
    codeTab: "snippet",
  };

  const PALETTES = {
    violet: { accent: "oklch(0.72 0.18 290)", accent2: "oklch(0.78 0.14 220)" },
    cyan:   { accent: "oklch(0.78 0.14 200)", accent2: "oklch(0.82 0.14 160)" },
    rose:   { accent: "oklch(0.74 0.18 15)",  accent2: "oklch(0.80 0.14 60)"  },
    lime:   { accent: "oklch(0.82 0.14 135)", accent2: "oklch(0.80 0.12 180)" },
    amber:  { accent: "oklch(0.80 0.14 75)",  accent2: "oklch(0.74 0.16 30)"  },
    mono:   { accent: "oklch(0.92 0 0)",      accent2: "oklch(0.62 0 0)"      },
  };

  // ── Sidebar ──
  function renderSidebar() {
    const nav = document.getElementById("nav");
    nav.innerHTML = `<div class="nav-group">Animations</div>` +
      CATEGORIES.map(c => {
        const count = (DATA[c.key] || []).length;
        return `<div class="nav-item ${c.key === state.category ? 'active' : ''}" data-cat="${c.key}">
          <span>${c.label}</span><span class="nav-count">${count}</span>
        </div>`;
      }).join("");
    nav.querySelectorAll(".nav-item").forEach(el => {
      el.addEventListener("click", () => {
        state.category = el.dataset.cat;
        localStorage.setItem("elemek-cat", state.category);
        renderSidebar(); renderMain();
      });
    });

    const pal = document.getElementById("paletteRow");
    pal.innerHTML = Object.entries(PALETTES).map(([k,v]) => `
      <div class="swatch ${k===state.palette?'active':''}" data-pal="${k}"
           style="background:linear-gradient(135deg, ${v.accent}, ${v.accent2})"></div>
    `).join("");
    pal.querySelectorAll(".swatch").forEach(s => s.addEventListener("click", () => {
      state.palette = s.dataset.pal;
      localStorage.setItem("elemek-pal", state.palette);
      applyPalette();
      renderSidebar();
    }));
  }

  function applyPalette() {
    const p = PALETTES[state.palette];
    document.documentElement.style.setProperty("--accent", p.accent);
    document.documentElement.style.setProperty("--accent-2", p.accent2);
  }

  // ── Main grid ──
  function renderMain() {
    const cat = CATEGORIES.find(c => c.key === state.category);
    const items = DATA[state.category] || [];
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="main-head">
        <div>
          <div class="section-eyebrow">// ${String(CATEGORIES.indexOf(cat)+1).padStart(2,'0')} · CATEGORY</div>
          <h1 class="section-title">${cat.label}</h1>
          <p class="section-sub">${cat.description}</p>
        </div>
        <div class="head-meta">
          <div><b>${items.length}</b> variants</div>
          <div>Click any tile for snippet</div>
        </div>
      </div>
      <div class="grid" id="grid"></div>
    `;
    const grid = main.querySelector("#grid");
    items.forEach((item, i) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.innerHTML = `
        <div class="tile-stage">${item.render}</div>
        <button class="tile-copy" data-copy>COPY SNIPPET</button>
        <div class="tile-label">
          <span>${item.name}</span>
          <span class="num">${state.category.toUpperCase().slice(0,2)}-${String(i+1).padStart(2,'0')}</span>
        </div>
      `;
      tile.addEventListener("click", (e) => {
        if (e.target.matches("[data-copy]")) {
          copyToClipboard(item.snippet);
        } else {
          openDrawer(item);
        }
      });
      grid.appendChild(tile);
      if (item.init) {
        try { item.init(tile.querySelector(".tile-stage")); } catch(e) { console.warn(e); }
      }
    });
  }

  // ── Drawer ──
  function openDrawer(item) {
    state.drawer = item;
    const d = document.getElementById("drawer");
    d.classList.add("open");
    d.querySelector(".drawer-title").textContent = item.name;
    d.querySelector(".drawer-sub").textContent = "// " + item.id.toUpperCase();
    const prev = d.querySelector(".drawer-preview");
    prev.innerHTML = `<div class="tile-stage" style="position:absolute;inset:0">${item.render}</div>`;
    if (item.init) {
      try { item.init(prev); } catch(e) {}
    }
    const code = d.querySelector("#drawerCode");
    code.textContent = item.snippet;
  }
  function closeDrawer() {
    document.getElementById("drawer").classList.remove("open");
    state.drawer = null;
  }

  // ── Copy ──
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const t = document.getElementById("toast");
      t.textContent = "Snippet copied";
      t.classList.add("show");
      clearTimeout(window.__tToast);
      window.__tToast = setTimeout(() => t.classList.remove("show"), 1800);
    });
  }

  // ── Tweaks (host integration) ──
  function setupTweaks() {
    window.addEventListener("message", (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") {
        document.getElementById("tweaks").classList.add("open");
      }
      if (e.data.type === "__deactivate_edit_mode") {
        document.getElementById("tweaks").classList.remove("open");
      }
    });
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");

    const tweaks = document.getElementById("tweaks");
    tweaks.innerHTML = `
      <h4>Tweaks · Palette</h4>
      <div class="tweak-row">
        <label>ACCENT COLOR</label>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${Object.entries(PALETTES).map(([k,v]) =>
            `<div class="swatch ${k===state.palette?'active':''}" data-tw-pal="${k}"
                  style="background:linear-gradient(135deg, ${v.accent}, ${v.accent2})"></div>`
          ).join("")}
        </div>
      </div>
      <div class="tweak-row">
        <label>ANIMATION SPEED</label>
        <input type="range" id="spd" min="0.3" max="2" step="0.1" value="1" style="width:100%">
      </div>
    `;
    tweaks.classList.add("glass");
    tweaks.querySelectorAll("[data-tw-pal]").forEach(s => s.addEventListener("click", () => {
      state.palette = s.dataset.twPal;
      localStorage.setItem("elemek-pal", state.palette);
      applyPalette(); renderSidebar();
      tweaks.querySelectorAll("[data-tw-pal]").forEach(x => x.classList.toggle("active", x===s));
      window.parent.postMessage({type:"__edit_mode_set_keys", edits:{palette: state.palette}}, "*");
    }));
    document.getElementById("spd").addEventListener("input", e => {
      document.documentElement.style.setProperty("--speed", e.target.value);
      document.body.style.animationDuration = "";
      // adjust all animations via factor — re-apply to :root
      document.querySelectorAll("*").forEach(el => {
        const cs = getComputedStyle(el);
        if (cs.animationName !== "none" && !el.dataset.origDur) {
          el.dataset.origDur = cs.animationDuration;
        }
      });
      const style = document.getElementById("speed-style") || (() => {
        const s = document.createElement("style"); s.id = "speed-style";
        document.head.appendChild(s); return s;
      })();
      style.textContent = `* { animation-duration: calc(var(--orig-dur, 1s) / ${e.target.value}) !important; }`;
      // simpler: apply to body animation rate
    });
  }

  // ── Boot ──
  document.addEventListener("DOMContentLoaded", () => {
    applyPalette();
    renderSidebar();
    renderMain();
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    document.getElementById("copyBtn").addEventListener("click", () => {
      if (state.drawer) copyToClipboard(state.drawer.snippet);
    });
    setupTweaks();
  });
})();
