import { useState } from "react";

const contactInfo = [
  { icon: "◉", label: "Headquarters", value: "14 Industrial Layout, Kaduna, Nigeria" },
  { icon: "◎", label: "Phone", value: "+234 (0) 800 SAYF CEM" },
  { icon: "◌", label: "Email", value: "hello@sayfcement.ng" },
  { icon: "◈", label: "Working Hours", value: "Mon–Sat: 7:00am – 6:00pm" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .contact-root {
          background: #0a0906;
          min-height: 100vh;
          color: #e8ddd0;
          font-family: 'Outfit', sans-serif;
          padding-left: 88px;
        }

        .contact-hero {
          padding: 6rem 6vw 3rem;
          position: relative;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          bottom: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(212,163,72,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .page-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #d4a348;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .eyebrow-line { width: 30px; height: 1px; background: #d4a348; display: inline-block; }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          margin-bottom: 0.5rem;
        }
        .page-title span { color: #f0c96b; }

        .page-sub {
          font-size: 0.95rem;
          color: rgba(232,221,208,0.45);
          font-weight: 300;
          max-width: 400px;
        }

        .contact-body {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 2rem;
          padding: 2rem 6vw 6rem;
          align-items: start;
        }

        /* info side */
        .info-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(212,163,72,0.12);
          padding: 2.5rem 2rem;
          position: sticky;
          top: 2rem;
          overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold, #d4a348), transparent);
        }
        .info-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 0% 0%, rgba(212,163,72,0.07), transparent 50%);
          pointer-events: none;
        }

        .info-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
        }
        .info-sub {
          font-size: 0.75rem;
          color: rgba(232,221,208,0.38);
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .info-icon {
          color: #d4a348;
          font-size: 1rem;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .info-lbl {
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.55);
          margin-bottom: 2px;
        }
        .info-val {
          font-size: 0.85rem;
          font-weight: 300;
          color: #e8ddd0;
          line-height: 1.5;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(212,163,72,0.2), transparent);
          margin: 1.5rem 0;
        }

        .social-row {
          display: flex;
          gap: 0.8rem;
        }
        .social-btn {
          width: 38px; height: 38px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,163,72,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(212,163,72,0.6);
          font-size: 0.7rem;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(212,163,72,0.1);
          border-color: rgba(212,163,72,0.4);
          color: #f0c96b;
        }

        /* form side */
        .form-card {
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(20px) saturate(1.3);
          -webkit-backdrop-filter: blur(20px) saturate(1.3);
          border: 1px solid rgba(212,163,72,0.12);
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4a348, transparent);
        }
        .form-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 100% 0%, rgba(212,163,72,0.06), transparent 45%);
          pointer-events: none;
        }

        .form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }
        .form-sub {
          font-size: 0.8rem;
          color: rgba(232,221,208,0.4);
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .form-field {
          margin-bottom: 1.2rem;
        }
        .field-label {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.6);
          margin-bottom: 0.5rem;
        }
        .field-input, .field-textarea {
          width: 100%;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(212,163,72,0.12);
          padding: 0.75rem 1rem;
          color: #e8ddd0;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          resize: none;
        }
        .field-input::placeholder, .field-textarea::placeholder {
          color: rgba(232,221,208,0.22);
        }
        .field-input:focus, .field-textarea:focus {
          border-color: rgba(212,163,72,0.4);
          box-shadow: 0 0 0 3px rgba(212,163,72,0.06);
        }

        .submit-btn {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #d4a348, #f0c96b);
          color: #0a0906;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(212,163,72,0.3);
        }

        /* success */
        .success-box {
          text-align: center;
          padding: 5rem 2rem;
          animation: fadeUp 0.6s ease;
        }
        .success-icon {
          font-size: 3rem;
          color: #d4a348;
          margin-bottom: 1.2rem;
          display: block;
        }
        .success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #f0c96b;
          letter-spacing: 0.05em;
          margin-bottom: 0.6rem;
        }
        .success-text {
          font-size: 0.85rem;
          color: rgba(232,221,208,0.45);
          line-height: 1.6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 860px) {
          .contact-body { grid-template-columns: 1fr; }
          .info-card { position: static; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .contact-root { padding-left: 0; padding-top: 64px; }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-hero">
          <div className="page-eyebrow">
            <span className="eyebrow-line" />
            Get In Touch
          </div>
          <h1 className="page-title">
            Let's Build<br />
            <span>Together</span>
          </h1>
          <p className="page-sub">
            Whether it's a large commercial project or a single delivery, we're here to help.
          </p>
        </div>

        <div className="contact-body">
          {/* info */}
          <div className="info-card">
            <div className="info-title">Contact Info</div>
            <div className="info-sub">We respond within 24 hours</div>
            <div className="info-items">
              {contactInfo.map((c) => (
                <div className="info-item" key={c.label}>
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <div className="info-lbl">{c.label}</div>
                    <div className="info-val">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider" />
            <div className="social-row">
              {["in", "tw", "fb", "ig"].map((s) => (
                <a href="#" className="social-btn" key={s}>{s}</a>
              ))}
            </div>
          </div>

          {/* form */}
          <div className="form-card">
            {sent ? (
              <div className="success-box">
                <span className="success-icon">◈</span>
                <div className="success-title">Message Sent</div>
                <p className="success-text">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="form-title">Send a Message</div>
                <div className="form-sub">Tell us about your project or inquiry</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field" style={{ marginBottom: 0 }}>
                      <label className="field-label">Full Name</label>
                      <input
                        className="field-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field" style={{ marginBottom: 0 }}>
                      <label className="field-label">Email Address</label>
                      <input
                        className="field-input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-field" style={{ marginTop: "1.2rem" }}>
                    <label className="field-label">Subject</label>
                    <input
                      className="field-input"
                      placeholder="Project inquiry, pricing, distribution..."
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Message</label>
                    <textarea
                      className="field-textarea"
                      rows={6}
                      placeholder="Tell us about your project, volume requirements, timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button className="submit-btn" type="submit">
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;