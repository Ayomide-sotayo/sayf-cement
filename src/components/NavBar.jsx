import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "About", num: "01" },
  { to: "/order", label: "Order", num: "02" },
  { to: "/contact", label: "Contact", num: "03" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500&display=swap');

        .nav-root {
          font-family: 'Outfit', sans-serif;
        }

        /* ── SIDE RAIL (desktop) ── */
        .side-rail {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 88px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          z-index: 999;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s;
          background: ${scrolled
            ? "rgba(14,12,10,0.72)"
            : "rgba(14,12,10,0.38)"};
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          border-right: 1px solid rgba(212,163,72,0.13);
          box-shadow: 4px 0 40px rgba(0,0,0,0.35);
        }

        .side-rail::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d4a348, #f0c96b, #d4a348);
          background-size: 200%;
          animation: shimmerBar 3s linear infinite;
        }
        @keyframes shimmerBar {
          0%{background-position:0%} 100%{background-position:200%}
        }

        .logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }
        .logo-wrap img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: brightness(1.1) drop-shadow(0 0 8px rgba(212,163,72,0.4));
          transition: transform 0.3s;
        }
        .logo-wrap img:hover { transform: scale(1.08); }

        .logo-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: rgba(212,163,72,0.7);
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: horizontal-tb;
        }

        /* vertical nav links */
        .side-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.4rem;
        }

        .side-link {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          cursor: pointer;
          group: true;
        }

        .side-link-num {
          font-size: 0.52rem;
          font-weight: 300;
          color: rgba(212,163,72,0.5);
          letter-spacing: 0.1em;
          transition: color 0.3s;
        }

        .side-link-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(220,210,195,0.6);
          transition: color 0.3s, transform 0.3s;
          transform: rotate(180deg);
        }

        .side-link:hover .side-link-label,
        .side-link.active .side-link-label {
          color: #f0c96b;
          transform: rotate(180deg) translateX(-2px);
        }
        .side-link:hover .side-link-num,
        .side-link.active .side-link-num {
          color: #d4a348;
        }

        .side-link::after {
          content: '';
          position: absolute;
          right: -24px;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 2px;
          height: 100%;
          background: #d4a348;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .side-link:hover::after,
        .side-link.active::after {
          transform: translateY(-50%) scaleY(1);
        }

        /* dot indicator */
        .side-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(212,163,72,0.25);
          transition: background 0.3s, transform 0.3s;
        }
        .side-link:hover .side-dot,
        .side-link.active .side-dot {
          background: #d4a348;
          transform: scale(1.5);
          box-shadow: 0 0 8px rgba(212,163,72,0.6);
        }

        /* social/bottom */
        .side-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .side-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(212,163,72,0.5), transparent);
        }
        .side-year {
          writing-mode: vertical-rl;
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          color: rgba(212,163,72,0.35);
          transform: rotate(180deg);
        }

        /* ── MOBILE TOP BAR ── */
        .top-bar {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 64px;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          z-index: 999;
          background: rgba(14,12,10,0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(212,163,72,0.15);
          transition: background 0.4s;
        }
        .top-bar::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4a348, transparent);
        }

        .top-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .top-logo img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          filter: drop-shadow(0 0 6px rgba(212,163,72,0.4));
        }
        .top-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          color: #f0c96b;
        }

        /* hamburger */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
        }
        .hamburger span {
          display: block;
          height: 1.5px;
          background: #d4a348;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .hamburger span:nth-child(1) { width: 24px; }
        .hamburger span:nth-child(2) { width: 18px; }
        .hamburger span:nth-child(3) { width: 24px; }
        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg); width: 24px;
        }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg); width: 24px;
        }

        /* mobile menu overlay */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0; bottom: 0;
          background: rgba(8,7,5,0.97);
          backdrop-filter: blur(24px);
          z-index: 998;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }
        .mobile-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
        }
        .mobile-link-num {
          font-size: 0.65rem;
          color: rgba(212,163,72,0.5);
          letter-spacing: 0.2em;
          margin-bottom: 4px;
        }
        .mobile-link-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.2rem;
          letter-spacing: 0.1em;
          color: rgba(220,210,195,0.75);
          line-height: 1;
          transition: color 0.25s;
        }
        .mobile-link:hover .mobile-link-label,
        .mobile-link.active .mobile-link-label {
          color: #f0c96b;
          text-shadow: 0 0 30px rgba(212,163,72,0.4);
        }

        @media (max-width: 768px) {
          .side-rail { display: none !important; }
          .top-bar { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <div className="nav-root">
        {/* ── Desktop Side Rail ── */}
        <nav className="side-rail">
          <div className="logo-wrap">
            <img src={logo} alt="Sayf Cement" />
            <span className="logo-label">Sayf</span>
          </div>

          <div className="side-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`side-link ${location.pathname === link.to ? "active" : ""}`}
              >
                <span className="side-link-num">{link.num}</span>
                <div className="side-dot" />
                <span className="side-link-label">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="side-bottom">
            <div className="side-line" />
            <span className="side-year">© 2025</span>
          </div>
        </nav>

        {/* ── Mobile Top Bar ── */}
        <nav className="top-bar">
          <div className="top-logo">
            <img src={logo} alt="Sayf Cement" />
            <span className="top-logo-text">Sayf Cement</span>
          </div>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* ── Mobile Menu Overlay ── */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-link ${location.pathname === link.to ? "active" : ""}`}
            >
              <span className="mobile-link-num">{link.num}</span>
              <span className="mobile-link-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;