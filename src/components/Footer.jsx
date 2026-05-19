import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span className="footer__logo-icon">⚡</span>
              <span className="footer__logo-text">zet<span className="footer__logo-accent">op</span></span>
            </a>
            <p className="footer__tagline">
              Groceries delivered in minutes. Fresh produce, daily essentials, and more — right at your doorstep.
            </p>
            <div className="footer__app-badges">
              <button className="footer__app-badge">
                <span>📱</span> App Store
              </button>
              <button className="footer__app-badge">
                <span>▶️</span> Google Play
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Contact</h4>
            <ul className="footer__contact-list">
              <li><FiPhone size={14} /> 1800-xxx-xxxx</li>
              <li><FiMail size={14} /> support@zetop.com</li>
              <li><FiMapPin size={14} /> Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Zetop. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
