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
  { category: 'hijabs', number: '01 / HIJABS', title: 'Chiffon hijab', description: 'A lightweight drape for everyday styling', image: '/product-images/hijab-drape.jpg', imageAlt: 'Woman styling a dark draped hijab with a blue outfit' },
  { category: 'hijabs', number: '02 / HIJABS', title: 'Jersey hijab', description: 'Soft, easy-to-wear coverage', image: '/product-images/hijab-soft-drape.jpg', imageAlt: 'Close-up of a softly draped neutral hijab' },
  { category: 'hijabs', number: '03 / HIJABS', title: 'Printed hijab', description: 'A patterned accent for versatile looks', image: '/product-images/hijab-print.jpg', imageAlt: 'Woman wearing a light hijab with a colourful printed outfit' },
  { category: 'abayas', number: '04 / ABAYAS', title: 'Open-front abaya', description: 'A layered modest style', image: '/product-images/abaya-collection.jpg', imageAlt: 'Models wearing long, layered modest outfits' },
  { category: 'abayas', number: '05 / ABAYAS', title: 'Everyday abaya', description: 'A clean silhouette for daily wear', image: '/product-images/abaya-everyday.jpg', imageAlt: 'Full-length black abaya with a simple silhouette' },
  { category: 'abayas', number: '06 / ABAYAS', title: 'Occasion abaya', description: 'Refined details for special moments', image: '/product-images/abaya-embroidered.jpg', imageAlt: 'Black abaya with decorative embroidery' },
  { category: 'ready', number: '07 / READY TO WEAR', title: 'Two-piece set', description: 'A coordinated top and bottom, ready to style', image: '/product-images/readywear-layered.jpg', imageAlt: 'Layered neutral outfit styled with a long coat' },
  { category: 'ready', number: '08 / READY TO WEAR', title: 'Everyday dress', description: 'A comfortable one-piece look', image: '/product-images/readywear-dress.jpg', imageAlt: 'Long-sleeved white shirt dress with a waist tie' },
  { category: 'ready', number: '09 / READY TO WEAR', title: 'Blouse and skirt set', description: 'An easy pairing with a polished finish', image: '/product-images/occasion-coordinated.jpg', imageAlt: 'Two coordinated dark modest outfits' },
  { category: 'native', number: '10 / NATIVE WEAR', title: 'Ankara two-piece', description: 'A coordinated look with a bold print', image: '/product-images/native-patterned-set.jpg', imageAlt: 'Coordinated outfit with a bold all-over print' },
  { category: 'native', number: '11 / NATIVE WEAR', title: 'Native occasion set', description: 'Traditional details for celebrations', image: '/product-images/native-headwrap.jpg', imageAlt: 'Portrait featuring an African-print headwrap' },
  { category: 'native', number: '12 / NATIVE WEAR', title: 'Modern native dress', description: 'A contemporary silhouette with cultural detail', image: '/product-images/native-fabric-detail.jpg', imageAlt: 'Close-up of textured garments on a clothing rail' },
  { category: 'jumpsuits', number: '13 / JUMPSUITS', title: 'Wide-leg jumpsuit', description: 'A relaxed shape with a polished finish', image: '/product-images/readywear-layered.jpg', imageAlt: 'Long, relaxed layered outfit in neutral tones' },
  { category: 'jumpsuits', number: '14 / JUMPSUITS', title: 'Belted jumpsuit', description: 'A defined waist for day-to-evening style', image: '/product-images/readywear-dress.jpg', imageAlt: 'Long-sleeved belted outfit in a light neutral tone' },
  { category: 'jumpsuits', number: '15 / JUMPSUITS', title: 'Sleeveless jumpsuit', description: 'A light, versatile one-piece style', image: '/product-images/native-patterned-set.jpg', imageAlt: 'Printed coordinated set with a relaxed silhouette' },
  { category: 'occasion', number: '16 / OCCASION WEAR', title: 'Wedding guest look', description: 'A refined style for celebrations', image: '/product-images/abaya-collection.jpg', imageAlt: 'Elegant long modest outfits styled for an occasion' },
  { category: 'occasion', number: '17 / OCCASION WEAR', title: 'Celebration gown', description: 'A statement for special events', image: '/product-images/abaya-embroidered.jpg', imageAlt: 'Embellished black occasion abaya' },
  { category: 'occasion', number: '18 / OCCASION WEAR', title: 'Party-ready set', description: 'Coordinated pieces for evening occasions', image: '/product-images/occasion-coordinated.jpg', imageAlt: 'Coordinated evening outfits in dark tones' },
];

function ProductCard({ product, eager = false }) {
  return (
    <article className="card" data-category={product.category}>
      <div className="product-art" style={product.background ? { background: product.background } : undefined}>
        <span className="number">{product.number}</span>
        <img className="product-image" src={product.image} alt={product.imageAlt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
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
  const [darkMode, setDarkMode] = useState(false);
  const visibleProducts = products.filter(product => activeFilter === 'all' || product.category === activeFilter);

  return (
    <div className={darkMode ? 'app dark-theme' : 'app'}>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#top">Bidah <span>Outfit Collection</span></a>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={darkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode(mode => !mode)}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              {darkMode ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </>
              ) : (
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              )}
            </svg>
          </button>
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
            <p><strong>Designed with modesty in mind.</strong><br />From everyday favourites to special-occasion looks, Bidah creates pieces that honour your values and help you feel at home in your style.</p>
            <div className="actions">
              <a className="btn btn-dark" href="#catalogue">Browse the collection</a>
              <a className="btn btn-light" href="https://wa.me/2348061592493">Chat on WhatsApp</a>
            </div>
          </div>
          <img
            className="hero-art"
            src="/WhatsApp%20Image%202026-10-16%20at%205.14.58%20PM.jpeg"
            alt="Bidah Outfit Collection logo"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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
              {visibleProducts.map((product, index) => (
                <ProductCard key={product.number} product={product} eager={index < 3} />
              ))}
            </div>
            <p className="catalog-note">These editorial photos are style references, not photos of Bidah’s exact pieces. Contact the designer for current fabrics, colours, and availability.</p>
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
    </div>
  );
}
