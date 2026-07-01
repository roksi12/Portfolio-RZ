// Tweaks panel for the Portfolio.
// Wires color palette, name, and font swaps to CSS variables and DOM nodes.

const LOGO_PRESETS = {
  "rz mark (uploaded)": `<img src="assets/brand/rz-logo.svg" alt="logo" style="height:100%;width:auto;display:block">`,
  "studio.": `<svg viewBox="0 0 220 70" xmlns="http://www.w3.org/2000/svg" aria-label="studio.">
  <text x="0" y="56" font-family="Bagel Fat One, sans-serif" font-size="60" fill="currentColor">studio<tspan fill="#A99A2A">.</tspan></text>
</svg>`,
  "wordmark + star": `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" aria-label="logo">
  <text x="0" y="60" font-family="Bagel Fat One, sans-serif" font-size="60" fill="currentColor">alex<tspan fill="#A99A2A">.</tspan></text>
  <path d="M205 14 l3 9 9 1 -7 6 2 10 -8 -5 -8 5 2 -10 -7 -6 9 -1z" fill="#A99A2A"/>
</svg>`,
  "monogram": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="monogram">
  <circle cx="50" cy="50" r="46" fill="currentColor"/>
  <text x="50" y="68" text-anchor="middle" font-family="Bagel Fat One, sans-serif" font-size="56" fill="#FAF7EE">A</text>
</svg>`,
  "underline": `<svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" aria-label="logo">
  <text x="0" y="56" font-family="Bagel Fat One, sans-serif" font-size="60" fill="currentColor">studio</text>
  <path d="M5 70 Q 60 86, 130 72 T 200 70" stroke="#1F3FBA" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "logoSvg": "<img src=\"assets/brand/rz-logo.svg\" alt=\"logo\" style=\"height:100%;width:auto;display:block\">",
  "palette": ["#B12A35", "#A99A2A", "#FFFFFF"],
  "displayFont": "DM Serif Display",
  "bodyFont": "DM Sans",
  "heroStyle": "warm",
  "showStarryDoodles": true
}/*EDITMODE-END*/;

const PALETTES = [
  ["#B12A35", "#A99A2A", "#FFFFFF"], // crimson + mustard (current default)
  ["#1F3FBA", "#AFB37B", "#FAF7EE"], // cobalt + olive
  ["#3A2A6B", "#E89B5A", "#FBF6EE"], // plum + apricot
  ["#0E5C4A", "#E6C45E", "#F5F2E8"], // forest + ochre
  ["#9B2C5B", "#F2C4B4", "#FFF7F2"], // berry + blush
  ["#1B1B1B", "#D6FF5F", "#F4F4F0"], // ink + lime
];

const DISPLAY_FONTS = ["DM Serif Display", "Bricolage Grotesque", "Fraunces", "Caprasimo"];
const BODY_FONTS    = ["Public Sans", "Inter", "DM Sans", "Nunito", "Work Sans"];

const HERO_STYLES = {
  warm: {
    bg: "radial-gradient(120% 80% at 50% 10%, #E8893E 0%, #B12A35 55%, #6E1820 100%)",
    fg: "#FDF7EB",
  },
  cream: {
    bg: "linear-gradient(180deg, var(--olive-soft) 0%, var(--paper) 100%)",
    fg: "var(--ink)",
  },
  ink: {
    bg: "linear-gradient(160deg, #3A3A3A 0%, #1F1F1F 100%)",
    fg: "#FDF7EB",
  },
};

function ensureGoogleFont(family) {
  const id = "gf-" + family.replace(/\s+/g, "-");
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=" +
    family.replace(/\s+/g, "+") +
    ":wght@400;500;600;700&display=swap";
  document.head.appendChild(link);
}

function matchPreset(svg) {
  for (const [name, code] of Object.entries(LOGO_PRESETS)) {
    if (code.replace(/\s+/g, "") === (svg || "").replace(/\s+/g, "")) return name;
  }
  return "custom";
}

function LogoPreview({ svg }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const inner = ref.current.querySelector("svg, img");
    if (inner) {
      inner.setAttribute("height", "100%");
      inner.removeAttribute("width");
      inner.style.height = "100%";
      inner.style.width = "auto";
      inner.style.display = "block";
    }
  }, [svg]);
  return (
    <div style={{
      marginTop: 4,
      padding: 12,
      background: "rgba(255,255,255,.6)",
      border: "1px solid rgba(0,0,0,.08)",
      borderRadius: 10,
      display: "grid",
      placeItems: "center",
      minHeight: 64,
      color: "#2F2F2F",
    }}>
      <div
        ref={ref}
        style={{ height: 40, color: "inherit", display: "flex", alignItems: "center" }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

function SvgEditor({ label, value, onChange, onReset }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
        <button
          type="button"
          onClick={onReset}
          style={{
            border: 0,
            background: "transparent",
            color: "rgba(41,38,27,.5)",
            cursor: "default",
            font: "inherit",
            padding: 0,
            textDecoration: "underline",
          }}
        >reset</button>
      </div>
      <textarea
        value={value}
        spellCheck={false}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        style={{
          font: "10.5px/1.45 ui-monospace, 'SF Mono', Menlo, monospace",
          padding: "8px 10px",
          border: "1px solid rgba(0,0,0,.12)",
          borderRadius: 8,
          background: "rgba(255,255,255,.7)",
          color: "#29261b",
          resize: "vertical",
          minHeight: 90,
          maxHeight: 220,
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
        onFocus={(e) => { e.target.style.borderColor = "rgba(0,0,0,.3)"; }}
        onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,.12)"; }}
      />
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    const [primary, accent, bg] = t.palette;
    root.style.setProperty("--red", primary);
    root.style.setProperty("--burgundy", shade(primary, -0.25));
    root.style.setProperty("--ink", shade(primary, -0.3));
    root.style.setProperty("--olive", accent);
    root.style.setProperty("--olive-soft", tint(accent, 0.55));
    root.style.setProperty("--bg", bg);
    root.style.setProperty("--sky", tint(primary, 0.78));
    root.style.setProperty("--rule", "rgba(0,0,0,0.08)");
  }, [t.palette]);

  React.useEffect(() => {
    ensureGoogleFont(t.displayFont);
    document.documentElement.style.setProperty(
      "--display",
      `'${t.displayFont}', 'Bricolage Grotesque', system-ui, sans-serif`
    );
  }, [t.displayFont]);

  React.useEffect(() => {
    ensureGoogleFont(t.bodyFont);
    document.documentElement.style.setProperty(
      "--body",
      `'${t.bodyFont}', system-ui, -apple-system, sans-serif`
    );
  }, [t.bodyFont]);

  React.useEffect(() => {
    const nav = document.getElementById("logo-mark");
    const foot = document.getElementById("logo-mark-foot");
    if (nav) nav.innerHTML = t.logoSvg;
    if (foot) foot.innerHTML = t.logoSvg;
  }, [t.logoSvg]);

  React.useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const s = HERO_STYLES[t.heroStyle] || HERO_STYLES.warm;
    hero.style.background = s.bg;
    hero.style.color = s.fg;
    hero.querySelectorAll("h1, p").forEach(el => { el.style.color = s.fg; });
    hero.querySelectorAll(".hero-art").forEach(el => {
      el.style.color = t.heroStyle === "cream" ? "rgba(47,47,47,.6)" : "rgba(253,247,235,.85)";
      el.style.borderColor = t.heroStyle === "cream" ? "rgba(47,47,47,.35)" : "rgba(253,247,235,.5)";
    });
  }, [t.heroStyle]);

  React.useEffect(() => {
    document.querySelectorAll(".stars, .doodle").forEach(el => {
      el.style.display = t.showStarryDoodles ? "" : "none";
    });
  }, [t.showStarryDoodles]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Logo (SVG)" />
      <TweakSelect
        label="Preset"
        value={matchPreset(t.logoSvg)}
        options={["rz mark (uploaded)", "studio.", "wordmark + star", "monogram", "underline", "custom"]}
        onChange={(v) => {
          if (v !== "custom" && LOGO_PRESETS[v]) setTweak("logoSvg", LOGO_PRESETS[v]);
        }}
      />
      <LogoPreview svg={t.logoSvg} />
      <SvgEditor
        label="Edit SVG"
        value={t.logoSvg}
        onChange={(v) => setTweak("logoSvg", v)}
        onReset={() => setTweak("logoSvg", LOGO_PRESETS["rz mark (uploaded)"])}
      />

      <TweakSection label="Palette" />
      <TweakColor
        label="Theme"
        value={t.palette}
        options={PALETTES}
        onChange={(v) => setTweak("palette", v)}
      />

      <TweakSection label="Typography" />
      <TweakSelect
        label="Display"
        value={t.displayFont}
        options={DISPLAY_FONTS}
        onChange={(v) => setTweak("displayFont", v)}
      />
      <TweakSelect
        label="Body"
        value={t.bodyFont}
        options={BODY_FONTS}
        onChange={(v) => setTweak("bodyFont", v)}
      />

      <TweakSection label="Hero" />
      <TweakRadio
        label="Style"
        value={t.heroStyle}
        options={["warm", "cream", "ink"]}
        onChange={(v) => setTweak("heroStyle", v)}
      />
      <TweakToggle
        label="Daisies"
        value={t.showStarryDoodles}
        onChange={(v) => setTweak("showStarryDoodles", v)}
      />
    </TweaksPanel>
  );
}

// ── tiny color helpers ───────────────────────────────────────
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = h.length === 3
    ? h.split("").map(c => c + c).join("")
    : h;
  const v = parseInt(n, 16);
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}
function rgbToHex({ r, g, b }) {
  const c = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return "#" + c(r) + c(g) + c(b);
}
function shade(hex, amt) {
  const { r, g, b } = hexToRgb(hex);
  const m = amt < 0 ? 1 + amt : 1;
  return rgbToHex({ r: r * m, g: g * m, b: b * m });
}
function tint(hex, amt) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex({
    r: r + (255 - r) * amt,
    g: g + (255 - g) * amt,
    b: b + (255 - b) * amt,
  });
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
