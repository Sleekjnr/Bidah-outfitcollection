import { useState } from 'react';
import './App.css';

const filters = [
  ['all', 'Everything'],
  ['ready', 'Ready to wear'],
  ['custom', 'Custom designs'],
  ['occasion', 'Occasion wear'],
];

const products = [
  { category: 'ready', number: '01 / READY TO WEAR', title: 'Ready-to-wear design', description: 'Add style name, sizes, and details' },
  { category: 'custom', number: '02 / CUSTOM', title: 'Custom outfit', description: 'Made to your measurements and taste', background: '#eee5e8', shape: 'cup' },
  { category: 'occasion', number: '03 / OCCASION', title: 'Occasion wear', description: 'A standout look for your special day', background: '#eee4e6', shape: 'bowl' },
  { category: 'ready', number: '04 / READY TO WEAR', title: 'Signature look', description: 'Add garment name, fabric, and sizes', background: '#f0e8e6', shape: 'bag' },
  { category: 'custom', number: '05 / CUSTOM', title: 'Made-to-measure', description: 'Your fit, your fabric, your design', background: '#e9e3e7', shape: 'candle' },
  { category: 'occasion', number: '06 / OCCASION', title: 'Special occasion style', description: 'Add occasion, style, and fabric details', background: '#e5e8e7', shape: 'linen' },
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

  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#top">Bidah <span>Outfit Collection</span></a>
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#catalogue">Catalogue</a>
            <a href="#contact">About &amp; contact</a>
            <a className="nav-cta" href="#contact">Contact the designer</a>
          </nav>
        </div>
      </header>
      <main id="top">
        <div className="wrap hero">
          <div>
            <div className="eyebrow">Designed with care · Made to be worn</div>
            <h1>Style that feels<br />like you.</h1>
            <p>Discover Bidah Outfit Collection: fashion designed for confidence, comfort, and your own special moments. Browse the catalogue and contact the designer to ask a question or place an enquiry.</p>
            <div className="actions">
              <a className="btn btn-dark" href="#catalogue">Browse the collection</a>
              <a className="btn btn-light" href="https://wa.me/2348061592493">Chat on WhatsApp</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Fashion collection photo to be added" role="img">
            <div className="sun" />
            <div className="arch" />
            <div className="vase" />
            <div className="stem" />
            <div className="art-label">Collection photos coming soon</div>
          </div>
        </div>
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
            <p className="catalog-note">Product names, photos, and sizes are placeholders. The designer’s real collection will be added when available.</p>
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
