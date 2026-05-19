import { useState, useEffect, useCallback } from 'react';
import { banners } from '../data/products';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './HeroBanner.css';

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % banners.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + banners.length) % banners.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero" id="hero-banner">
      <div className="hero__inner container">
        <div className="hero__carousel">
          {banners.map((banner, i) => (
            <div
              key={banner.id}
              className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
              style={{ background: banner.gradient }}
            >
              <div className="hero__slide-content">
                <span className="hero__slide-badge">Limited Offer</span>
                <h2 className="hero__slide-title">{banner.title}</h2>
                <p className="hero__slide-subtitle">{banner.subtitle}</p>
                <button className="hero__slide-cta">Shop Now →</button>
              </div>
              <span className="hero__slide-emoji">{banner.emoji}</span>
            </div>
          ))}

          <button className="hero__nav hero__nav--prev" onClick={prev} aria-label="Previous">
            <FiChevronLeft size={20} />
          </button>
          <button className="hero__nav hero__nav--next" onClick={next} aria-label="Next">
            <FiChevronRight size={20} />
          </button>

          <div className="hero__dots">
            {banners.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick info cards */}
        <div className="hero__features">
          {[
            { icon: '⚡', title: '10 Min Delivery', desc: 'Super fast' },
            { icon: '🏷️', title: 'Best Prices', desc: 'Save more' },
            { icon: '🔄', title: 'Easy Returns', desc: 'No questions' },
            { icon: '🛡️', title: '100% Safe', desc: 'Secure pay' },
          ].map((f, i) => (
            <div key={i} className="hero__feature-card" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="hero__feature-icon">{f.icon}</span>
              <div>
                <span className="hero__feature-title">{f.title}</span>
                <span className="hero__feature-desc">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
