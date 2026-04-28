import { Link } from "react-router";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500&display=swap');

        .footer-root {
          background: #070604;
          border-top: 1px solid rgba(212,163,72,0.1);
          padding-left: 88px;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .footer-root::before {
          content: '';
          position: absolute;
          top: 0; left: 88px; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #d4a348, rgba(212,163,72,0.1), transparent);
        }

        .footer-inner {
          padding: 4rem 6vw 2rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.06em;
          color: #f0c96b;
          margin-bottom: 0.8rem;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: rgba(232,221,208,0.4);
          line-height: 1.65;
          font-weight: 300;
          max-width: 220px;
          margin-bottom: 1.5rem;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.6);
          border: 1px solid rgba(212,163,72,0.15);
          padding: 0.35rem 0.75rem;
        }
        .badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #d4a348;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)}
        }

        .footer-col-title {
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #d4a348;
          margin-bottom: 1.2rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          list-style: none;
          padding: 0;
        }
        .footer-links a {
          font-size: 0.82rem;
          color: rgba(232,221,208,0.45);
          text-decoration: none;
          font-weight: 300;
          transition: color 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-links a:hover { color: #f0c96b; }
        .footer-links a:hover::before { content: '→ '; color: #d4a348; }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(212,163,72,0.15), transparent);
          margin-bottom: 1.5rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-copy {
          font-size: 0.7rem;
          color: rgba(232,221,208,0.25);
          font-weight: 300;
        }
        .footer-copy span { color: rgba(212,163,72,0.5); }

        .footer-cert {
          display: flex;
          gap: 1.5rem;
        }
        .cert-tag {
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.4);
          border: 1px solid rgba(212,163,72,0.1);
          padding: 0.25rem 0.6rem;
        }

        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .footer-root { padding-left: 0; }
          .footer-top { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">Sayf Cement</div>
              <p className="footer-tagline">
                Engineering foundations that stand the test of time. Nigeria's premium cement manufacturer since 1983.
              </p>
              <div className="footer-badge">
                <span className="badge-dot" />
                ISO 9001:2015 Certified
              </div>
            </div>

            <div>
              <div className="footer-col-title">Navigate</div>
              <ul className="footer-links">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/order">Place Order</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Products</div>
              <ul className="footer-links">
                <li><a href="#">OPC 52.5 Grade</a></li>
                <li><a href="#">OPC 42.5 Grade</a></li>
                <li><a href="#">Eco Cement</a></li>
                <li><a href="#">Rapid Set</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="tel:+2348000000">+234 (0) 800 SAYF CEM</a></li>
                <li><a href="mailto:hello@sayfcement.ng">hello@sayfcement.ng</a></li>
                <li><a href="#">Kaduna, Nigeria</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2025 <span>Sayf Cement PLC</span>. All rights reserved.
            </p>
            <div className="footer-cert">
              <span className="cert-tag">SON Certified</span>
              <span className="cert-tag">ISO 9001</span>
              <span className="cert-tag">NIS 444</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;