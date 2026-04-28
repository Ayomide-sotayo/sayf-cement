import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "40+", label: "Years of Excellence" },
  { value: "2M+", label: "Tonnes Produced" },
  { value: "12", label: "Active Projects" },
  { value: "98%", label: "Client Satisfaction" },
];

const features = [
  {
    icon: "⬡",
    title: "High-Strength Formula",
    desc: "Our proprietary blend delivers superior compressive strength for structures that outlast generations.",
  },
  {
    icon: "◈",
    title: "Eco Cement Line",
    desc: "Lower carbon footprint without compromising structural integrity — the future of responsible building.",
  },
  {
    icon: "⬙",
    title: "Rapid Set Technology",
    desc: "Achieve optimal curing in record time, keeping your projects on schedule and under budget.",
  },
];

function About() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const parallaxX = (mousePos.x - 0.5) * 30;
  const parallaxY = (mousePos.y - 0.5) * 20;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --gold: #d4a348;
          --gold-light: #f0c96b;
          --gold-dim: rgba(212,163,72,0.18);
          --bg: #0a0906;
          --surface: rgba(255,255,255,0.04);
          --border: rgba(212,163,72,0.12);
          --text: #e8ddd0;
          --muted: rgba(232,221,208,0.5);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          background: var(--bg);
          min-height: 100vh;
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          padding-left: 88px;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 65% 40%,
              rgba(212,163,72,0.08) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%,
              rgba(212,163,72,0.05) 0%,
              transparent 60%),
            linear-gradient(160deg, #0f0d0a 0%, #0a0906 50%, #0d0b08 100%);
        }

        /* animated grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,163,72,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,163,72,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 60% 50%, black 30%, transparent 80%);
        }

        /* floating orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: floatOrb 8s ease-in-out infinite;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(212,163,72,0.12) 0%, transparent 70%);
          top: -100px; right: 100px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(180,120,40,0.08) 0%, transparent 70%);
          bottom: 50px; left: 200px;
          animation-delay: -4s;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* hero content */
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 6vw;
          max-width: 900px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.3s forwards;
        }
        .eyebrow-line {
          width: 40px; height: 1px;
          background: var(--gold);
          display: block;
        }
        .eyebrow-text {
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4.5rem, 10vw, 9rem);
          line-height: 0.92;
          letter-spacing: 0.03em;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.5s forwards;
        }
        .hero-title-solid { color: var(--text); }
        .hero-title-outline {
          -webkit-text-stroke: 1.5px rgba(212,163,72,0.5);
          color: transparent;
          display: block;
        }
        .hero-title-gold { color: var(--gold-light); display: block; }

        .hero-desc {
          max-width: 480px;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.7s forwards;
        }

        .hero-cta-group {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.9s forwards;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #d4a348, #f0c96b);
          color: #0a0906;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          transition: all 0.3s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #f0c96b, #d4a348);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(212,163,72,0.35);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: transparent;
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1px solid rgba(212,163,72,0.3);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .btn-ghost:hover {
          border-color: var(--gold);
          color: var(--gold-light);
          background: rgba(212,163,72,0.06);
        }

        /* hero right — glass card */
        .hero-visual {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          animation: fadeLeft 1s ease 1.1s forwards;
        }

        .glass-card-hero {
          width: 300px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px) saturate(1.2);
          -webkit-backdrop-filter: blur(20px) saturate(1.2);
          border: 1px solid rgba(212,163,72,0.15);
          border-radius: 2px;
          padding: 2rem;
          box-shadow:
            0 40px 80px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }
        .glass-card-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .glass-card-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(212,163,72,0.08), transparent 60%);
          pointer-events: none;
        }

        .gc-label {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.2rem;
        }
        .gc-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          color: var(--gold-light);
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .gc-sub {
          font-size: 0.75rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }
        .gc-bar-row {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .gc-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--muted);
          margin-bottom: 3px;
        }
        .gc-bar-bg {
          height: 3px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
        }
        .gc-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
          animation: barGrow 1.5s cubic-bezier(0.4,0,0.2,1) forwards;
          transform-origin: left;
        }
        @keyframes barGrow {
          from { width: 0; }
        }

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateY(-50%) translateX(40px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }

        /* ── STATS ── */
        .stats-section {
          padding: 5rem 6vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(212,163,72,0.08);
        }
        .stat-cell {
          background: var(--bg);
          padding: 2.5rem 2rem;
          text-align: center;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .stat-cell::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 100%, rgba(212,163,72,0.06), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .stat-cell:hover::after { opacity: 1; }
        .stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          color: var(--gold-light);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .stat-lbl {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── FEATURES ── */
        .features-section {
          padding: 7rem 6vw;
        }
        .section-header {
          margin-bottom: 4rem;
        }
        .section-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1;
          letter-spacing: 0.03em;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(212,163,72,0.1);
          padding: 2.5rem 2rem;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .feature-card:hover {
          border-color: rgba(212,163,72,0.25);
          background: rgba(212,163,72,0.04);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4),
                      0 0 0 1px rgba(212,163,72,0.12);
        }
        .feature-card:hover::before { opacity: 1; }

        .feature-icon {
          font-size: 1.8rem;
          color: var(--gold);
          margin-bottom: 1.2rem;
          display: block;
          opacity: 0.8;
        }
        .feature-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.8rem;
          color: var(--text);
        }
        .feature-desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── MARQUEE BAND ── */
        .marquee-band {
          padding: 1.2rem 0;
          background: linear-gradient(90deg, #d4a348, #f0c96b, #d4a348);
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-track {
          display: inline-flex;
          animation: marqueeScroll 18s linear infinite;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          margin-right: 3rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0a0906;
        }
        .marquee-dot {
          width: 4px; height: 4px;
          background: rgba(10,9,6,0.4);
          border-radius: 50%;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ── TAGLINE SECTION ── */
        .tagline-section {
          padding: 8rem 6vw;
          text-align: center;
          position: relative;
        }
        .tagline-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,163,72,0.06), transparent);
        }
        .tagline-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 1;
          letter-spacing: 0.05em;
          position: relative;
        }
        .tagline-line1 { color: var(--text); }
        .tagline-line2 {
          -webkit-text-stroke: 1px rgba(212,163,72,0.4);
          color: transparent;
        }
        .tagline-line3 { color: var(--gold-light); }

        /* animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1100px) {
          .hero-visual { display: none; }
          .features-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .about-root { padding-left: 0; padding-top: 64px; }
          .stats-section { grid-template-columns: 1fr 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .hero-content { padding: 0 5vw; }
        }
      `}</style>

      <div className="about-root">
        {/* ── HERO ── */}
        <section className="hero" ref={heroRef}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="orb orb-1" style={{ transform: `translate(${parallaxX * 0.4}px, ${parallaxY * 0.4}px)` }} />
          <div className="orb orb-2" style={{ transform: `translate(${-parallaxX * 0.2}px, ${-parallaxY * 0.2}px)` }} />

          <div className={`hero-content ${visible ? "visible" : ""}`}>
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Sayf Cement PLC — Est. 1983</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-solid">Built </span>
              <span className="hero-title-outline">To</span>
              <span className="hero-title-gold">Endure.</span>
            </h1>

            <p className="hero-desc">
              Engineering the foundations of Nigeria's future — one structure at a time.
              Premium cement solutions crafted for strength, longevity, and resilience.
            </p>

            <div className="hero-cta-group">
              <a href="/order" className="btn-primary">
                Get a Quote →
              </a>
              <a href="/contact" className="btn-ghost">
                Learn More
              </a>
            </div>
          </div>

          {/* floating glass card */}
          <div className="hero-visual">
            <div className="glass-card-hero">
              <p className="gc-label">Quality Benchmark</p>
              <div className="gc-big">52.5</div>
              <p className="gc-sub">MPa Compressive Strength</p>
              <div className="gc-bar-row">
                {[
                  { label: "Tensile Strength", val: "92" },
                  { label: "Setting Time", val: "88" },
                  { label: "Fineness", val: "96" },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="gc-bar-label">
                      <span>{b.label}</span>
                      <span>{b.val}%</span>
                    </div>
                    <div className="gc-bar-bg">
                      <div className="gc-bar-fill" style={{ width: b.val + "%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee-band">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) =>
              ["Premium Cement", "Rapid Set", "Eco Line", "ISO Certified", "Structural Grade", "High Performance", "Premium Cement", "Rapid Set", "Eco Line", "ISO Certified"].map((t, j) => (
                <span className="marquee-item" key={`${i}-${j}`}>
                  {t} <span className="marquee-dot" />
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── STATS ── */}
        <section className="stats-section">
          {stats.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </section>

        {/* ── FEATURES ── */}
        <section className="features-section">
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line" style={{ width: "30px", height: "1px", background: "#d4a348", display: "inline-block" }} />
              What We Offer
            </div>
            <h2 className="section-title">
              The Science Behind<br />
              <span style={{ color: "#f0c96b" }}>Every Pour</span>
            </h2>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TAGLINE ── */}
        <section className="tagline-section">
          <div className="tagline-big">
            <div className="tagline-line1">Your Vision.</div>
            <div className="tagline-line2">Our Concrete.</div>
            <div className="tagline-line3">Forever.</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;