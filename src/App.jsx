import { useState } from 'react';
import './App.css';

const filters = [
  ['all', 'All styles'],
  ['hijabs', 'Hijabs'],
  ['abayas', 'Abayas'],
  ['ready', 'Ready to wear'],
  ['native', 'Native wear'],
  ['jumpsuits', 'Jumpsuits'],
  ['occasion', 'Occasion wear'],
];

const products = [
  { category: 'hijabs', number: '01 / HIJABS', title: 'Chiffon hijab', description: 'A lightweight drape for everyday styling' },
  { category: 'hijabs', number: '02 / HIJABS', title: 'Jersey hijab', description: 'Soft, easy-to-wear coverage' },
  { category: 'hijabs', number: '03 / HIJABS', title: 'Printed hijab', description: 'A patterned accent for versatile looks' },
  { category: 'abayas', number: '04 / ABAYAS', title: 'Open-front abaya', description: 'A layered modest style' },
  { category: 'abayas', number: '05 / ABAYAS', title: 'Everyday abaya', description: 'A clean silhouette for daily wear' },
  { category: 'abayas', number: '06 / ABAYAS', title: 'Occasion abaya', description: 'Refined details for special moments' },
  { category: 'ready', number: '07 / READY TO WEAR', title: 'Two-piece set', description: 'A coordinated top and bottom, ready to style' },
  { category: 'ready', number: '08 / READY TO WEAR', title: 'Everyday dress', description: 'A comfortable one-piece look' },
  { category: 'ready', number: '09 / READY TO WEAR', title: 'Blouse and skirt set', description: 'An easy pairing with a polished finish' },
  { category: 'native', number: '10 / NATIVE WEAR', title: 'Ankara two-piece', description: 'A coordinated look with a bold print' },
  { category: 'native', number: '11 / NATIVE WEAR', title: 'Native occasion set', description: 'Traditional details for celebrations' },
  { category: 'native', number: '12 / NATIVE WEAR', title: 'Modern native dress', description: 'A contemporary silhouette with cultural detail' },
  { category: 'jumpsuits', number: '13 / JUMPSUITS', title: 'Wide-leg jumpsuit', description: 'A relaxed shape with a polished finish' },
  { category: 'jumpsuits', number: '14 / JUMPSUITS', title: 'Belted jumpsuit', description: 'A defined waist for day-to-evening style' },
  { category: 'jumpsuits', number: '15 / JUMPSUITS', title: 'Sleeveless jumpsuit', description: 'A light, versatile one-piece style' },
  { category: 'occasion', number: '16 / OCCASION WEAR', title: 'Wedding guest look', description: 'A refined style for celebrations' },
  { category: 'occasion', number: '17 / OCCASION WEAR', title: 'Celebration gown', description: 'A statement for special events' },
  { category: 'occasion', number: '18 / OCCASION WEAR', title: 'Party-ready set', description: 'Coordinated pieces for evening occasions' },
];

function ProductCard({ product }) {
  return (
    <article className="card" data-category={product.category}>
      <div className="product-art" style={product.background ? { background: product.background } : undefined}>
        <span className="number">{product.number}</span>
        {product.shape && <div className={`shape ${product.shape}`} />}
      </div>
      <div className="card-copy">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-sub">{product.description}</p>
        <div className="card-bottom">
          <a className="ask" href="https://wa.me/2348061592493">Enquire about this design ↗</a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#top">Bidah <span>Outfit Collection</span></a>
          <button
            className={`menu-toggle${menuOpen ? ' menu-toggle-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`navlinks${menuOpen ? ' navlinks-open' : ''}`} id="main-navigation" aria-label="Main navigation">
            <a href="#catalogue" onClick={() => setMenuOpen(false)}>Catalogue</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>About &amp; contact</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Contact the designer</a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="hero-band" aria-label="Bidah Outfit Collection">
          <div className="wrap hero">
          <div>
            <p className="motto">Where fashion meets perfection</p>
            <h1>Style that feels<br />like you.</h1>
            <p>Discover Bidah Outfit Collection: fashion designed for confidence, comfort, and your own special moments. Browse the catalogue and contact the designer to ask a question or place an enquiry.</p>
            <div className="actions">
              <a className="btn btn-dark" href="#catalogue">Browse the collection</a>
              <a className="btn btn-light" href="https://wa.me/2348061592493">Chat on WhatsApp</a>
            </div>
          </div>
          <img
            className="hero-art"
            src="/WhatsApp%20Image%202026-10-16%20at%205.14.58%20PM.jpeg"
            alt="Bidah Outfit Collection logo"
          />
          </div>
        </section>
        <div className="trust">
          <div className="wrap trust-inner">
            <span><b>Bidah Outfit Collection</b> — independent fashion designer</span>
            <span>Enquiries by <b>call or WhatsApp</b></span>
            <span>Ask about custom designs and availability</span>
          </div>
        </div>
        <section id="catalogue">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow">The catalogue</div><h2>Find your next favourite</h2></div>
              <p>Browse designs from the collection. Contact the designer to ask about fabrics, sizes, custom orders, and availability.</p>
            </div>
            <div className="filters" role="group" aria-label="Filter catalogue">
              {filters.map(([value, label]) => (
                <button
                  className={`filter${activeFilter === value ? ' active' : ''}`}
                  data-filter={value}
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="grid" id="products">
              {products.filter(product => activeFilter === 'all' || product.category === activeFilter).map(product => (
                <ProductCard key={product.number} product={product} />
              ))}
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap contact-layout">
            <div className="contact-intro">
              <div className="eyebrow">Let’s talk style</div>
              <h2>Your next look starts here.</h2>
              <p>Ask about a design, discuss a custom outfit, or find out what’s available. Bidah is happy to help you plan a look that feels right for you.</p>
              <div className="actions">
                <a className="btn btn-dark" href="tel:+2348061592493">Call the designer</a>
                <a className="btn btn-light" href="https://wa.me/2348061592493">WhatsApp</a>
              </div>
            </div>
            <div className="person">
              <div className="person-label">Your fashion designer</div>
              <h3>Bidah</h3>
              <p className="person-role">Fashion designer · Bidah Outfit Collection</p>
              <blockquote className="owner-quote">
                <p>“The secret of getting ahead is getting started.”</p>
                <cite>A line Bidah lives by</cite>
              </blockquote>
              <div className="detail"><b>Phone</b><a href="tel:+2348061592493">+234 806 159 2493</a></div>
              <div className="detail"><b>WhatsApp</b><a href="https://wa.me/2348061592493">Message Bidah ↗</a></div>
              <div className="detail"><b>Address</b><span>Location details coming soon</span></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Bidah Outfit Collection</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
