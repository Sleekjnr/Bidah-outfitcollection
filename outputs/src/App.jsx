import React, { useState } from 'react';

const products = [
  { category: 'ready', number: '01 / READY TO WEAR', title: 'Ready-to-wear design', subtitle: 'Add style name, sizes, and details', shape: '' },
  { category: 'custom', number: '02 / CUSTOM', title: 'Custom outfit', subtitle: 'Made to your measurements and taste', shape: 'cup', background: '#eee5e8' },
  { category: 'occasion', number: '03 / OCCASION', title: 'Occasion wear', subtitle: 'A standout look for your special day', shape: 'bowl', background: '#eee4e6' },
  { category: 'ready', number: '04 / READY TO WEAR', title: 'Signature look', subtitle: 'Add garment name, fabric, and sizes', shape: 'bag', background: '#f0e8e6' },
  { category: 'custom', number: '05 / CUSTOM', title: 'Made-to-measure', subtitle: 'Your fit, your fabric, your design', shape: 'candle', background: '#e9e3e7' },
  { category: 'occasion', number: '06 / OCCASION', title: 'Special occasion style', subtitle: 'Add occasion, style, and fabric details', shape: 'linen', background: '#e5e8e7' },
];

const filters = [
  { label: 'Everything', value: 'all' },
  { label: 'Ready to wear', value: 'ready' },
  { label: 'Custom designs', value: 'custom' },
  { label: 'Occasion wear', value: 'occasion' },
];

function ProductCard({ product }) {
  return (
    <article className="card" data-category={product.category}>
      <div className="product-art" style={product.background ? { background: product.background } : undefined}>
        <span className="number">{product.number}</span>
        <div className={`shape ${product.shape}`} />
      </div>
      <div className="card-copy">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-sub">{product.subtitle}</p>
        <div className="card-bottom">
          <a className="ask" href="https://wa.me/2348061592493">Enquire about this design ↗</a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const year = new Date().getFullYear();

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
              {filters.map((filter) => (
                <button
                  className={`filter${activeFilter === filter.value ? ' active' : ''}`}
                  data-filter={filter.value}
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  type="button"
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="grid" id="products">
              {products.filter((product) => activeFilter === 'all' || product.category === activeFilter).map((product) => (
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
          <span>© {year} Bidah Outfit Collection</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
