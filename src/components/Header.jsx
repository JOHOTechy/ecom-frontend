import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMapPin, FiChevronDown } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header({ onSearch }) {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();
  const [searchValue, setSearchValue] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="main-header">
      {/* Top delivery strip */}
      <div className="header__strip">
        <div className="header__strip-inner container">
          <span className="header__strip-text">
            ⚡ Get delivery in <strong>10 minutes</strong> — Order now!
          </span>
          <span className="header__strip-text">
            📞 Support: 1800-xxx-xxxx
          </span>
        </div>
      </div>

      <div className="header__main">
        <div className="header__inner container">
          {/* Logo */}
          <a href="/" className="header__logo" id="logo-link">
            <span className="header__logo-icon">⚡</span>
            <span className="header__logo-text">
              zet<span className="header__logo-accent">op</span>
            </span>
          </a>

          {/* Location */}
          <button className="header__location" id="location-btn">
            <FiMapPin className="header__location-icon" />
            <div className="header__location-info">
              <span className="header__location-label">Delivery in <strong>8 mins</strong></span>
              <span className="header__location-address">
                Koramangala, Bengaluru <FiChevronDown size={12} />
              </span>
            </div>
          </button>

          {/* Search */}
          <div className="header__search" id="search-bar">
            <FiSearch className="header__search-icon" />
            <input
              type="text"
              className="header__search-input"
              placeholder='Search for "milk, bread, eggs..."'
              value={searchValue}
              onChange={handleSearch}
              id="search-input"
            />
          </div>

          {/* Actions */}
          <div className="header__actions">
            <button className="header__action-btn" id="login-btn">
              <FiUser size={20} />
              <span>Login</span>
            </button>

            <button
              className="header__cart-btn"
              onClick={() => setIsCartOpen(true)}
              id="cart-btn"
            >
              <div className="header__cart-icon-wrap">
                <FiShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="header__cart-badge" key={totalItems}>
                    {totalItems}
                  </span>
                )}
              </div>
              {totalItems > 0 ? (
                <div className="header__cart-info">
                  <span className="header__cart-count">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
                  <span className="header__cart-total">₹{totalPrice}</span>
                </div>
              ) : (
                <span>My Cart</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
