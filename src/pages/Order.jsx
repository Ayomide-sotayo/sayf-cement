import { useState } from "react";

const products = [
  { id: "opc52", name: "OPC 52.5 Grade", price: "₦4,800/bag", tag: "Premium" },
  { id: "opc42", name: "OPC 42.5 Grade", price: "₦4,200/bag", tag: "Standard" },
  { id: "eco", name: "Eco Cement", price: "₦4,500/bag", tag: "Sustainable" },
  { id: "rapid", name: "Rapid Set", price: "₦5,100/bag", tag: "Fast Cure" },
];

function Order() {
  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .order-root {
          background: #0a0906;
          min-height: 100vh;
          color: #e8ddd0;
          font-family: 'Outfit', sans-serif;
          padding-left: 88px;
          padding-top: 0;
        }

        .order-hero {
          padding: 6rem 6vw 3rem;
          position: relative;
          overflow: hidden;
        }
        .order-hero::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 600px; height: 600px;
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
          margin-bottom: 1rem;
        }
        .page-title span { color: #f0c96b; }

        .order-body {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          padding: 2rem 6vw 6rem;
          align-items: start;
        }

        /* product picker */
        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .product-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,163,72,0.1);
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
          position: relative;
        }
        .product-card:hover {
          border-color: rgba(212,163,72,0.3);
          background: rgba(212,163,72,0.04);
        }
        .product-card.active {
          border-color: #d4a348;
          background: rgba(212,163,72,0.08);
          box-shadow: 0 0 0 1px rgba(212,163,72,0.25), inset 0 0 30px rgba(212,163,72,0.05);
        }
        .product-card.active::before {
          content: '✓';
          position: absolute;
          top: 0.7rem; right: 0.9rem;
          color: #d4a348;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .product-tag {
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4a348;
          margin-bottom: 0.5rem;
        }
        .product-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
        }
        .product-price {
          font-size: 0.78rem;
          color: rgba(232,221,208,0.5);
        }

        /* qty control */
        .qty-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .qty-label {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.7);
        }
        .qty-control {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,163,72,0.15);
        }
        .qty-btn {
          width: 40px; height: 40px;
          background: none;
          border: none;
          color: #d4a348;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .qty-btn:hover { background: rgba(212,163,72,0.1); }
        .qty-val {
          width: 60px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          color: #f0c96b;
          border-left: 1px solid rgba(212,163,72,0.1);
          border-right: 1px solid rgba(212,163,72,0.1);
        }

        /* glass form */
        .glass-form {
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(20px) saturate(1.3);
          -webkit-backdrop-filter: blur(20px) saturate(1.3);
          border: 1px solid rgba(212,163,72,0.13);
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .glass-form::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4a348, transparent);
        }
        .glass-form::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(212,163,72,0.07), transparent 50%);
          pointer-events: none;
        }

        .form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
        }
        .form-sub {
          font-size: 0.75rem;
          color: rgba(232,221,208,0.4);
          margin-bottom: 1.8rem;
          font-weight: 300;
        }

        .form-field {
          margin-bottom: 1.2rem;
        }
        .field-label {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212,163,72,0.6);
          margin-bottom: 0.5rem;
        }
        .field-input {
          width: 100%;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(212,163,72,0.12);
          padding: 0.7rem 1rem;
          color: #e8ddd0;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .field-input::placeholder { color: rgba(232,221,208,0.25); }
        .field-input:focus {
          border-color: rgba(212,163,72,0.4);
          box-shadow: 0 0 0 3px rgba(212,163,72,0.06);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          margin-top: 0.5rem;
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
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(212,163,72,0.3);
        }
        .submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        /* success */
        .success-box {
          text-align: center;
          padding: 3rem 1.5rem;
        }
        .success-icon {
          font-size: 3rem;
          color: #d4a348;
          margin-bottom: 1rem;
          display: block;
          animation: popIn 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #f0c96b;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .success-text {
          font-size: 0.82rem;
          color: rgba(232,221,208,0.5);
          line-height: 1.6;
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .order-body { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .order-root { padding-left: 0; padding-top: 64px; }
          .product-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="order-root">
        <div className="order-hero">
          <div className="page-eyebrow">
            <span className="eyebrow-line" />
            Place Your Order
          </div>
          <h1 className="page-title">
            Order<br />
            <span>Your Cement</span>
          </h1>
        </div>

        <div className="order-body">
          <div>
            <div className="page-eyebrow" style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-line" />
              Select Product
            </div>
            <div className="product-grid">
              {products.map((p) => (
                <div
                  key={p.id}
                  className={`product-card ${selected === p.id ? "active" : ""}`}
                  onClick={() => setSelected(p.id)}
                >
                  <div className="product-tag">{p.tag}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">{p.price}</div>
                </div>
              ))}
            </div>

            <div className="qty-row">
              <span className="qty-label">Quantity (bags)</span>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <div className="qty-val">{qty}</div>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="glass-form">
            {submitted ? (
              <div className="success-box">
                <span className="success-icon">◈</span>
                <div className="success-title">Order Received</div>
                <p className="success-text">
                  Our team will reach out to {form.name || "you"} within 24 hours to confirm your order and arrange delivery.
                </p>
              </div>
            ) : (
              <>
                <div className="form-title">Your Details</div>
                <div className="form-sub">We'll get back to you within 24 hours</div>
                <form onSubmit={handleSubmit}>
                  {[
                    { key: "name", label: "Full Name", placeholder: "John Doe" },
                    { key: "company", label: "Company / Site", placeholder: "Optional" },
                    { key: "phone", label: "Phone Number", placeholder: "+234 000 000 0000" },
                    { key: "location", label: "Delivery Location", placeholder: "City, State" },
                  ].map((f) => (
                    <div className="form-field" key={f.key}>
                      <label className="field-label">{f.label}</label>
                      <input
                        className="field-input"
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <button className="submit-btn" disabled={!selected}>
                    {selected ? `Submit Order` : "Select a Product First"}
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

export default Order;