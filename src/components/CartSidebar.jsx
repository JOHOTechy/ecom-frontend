import { useCart } from '../context/CartContext';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import './CartSidebar.css';

export default function CartSidebar() {
  const {
    items, isCartOpen, setIsCartOpen,
    addToCart, removeFromCart, deleteFromCart, clearCart,
    totalItems, totalPrice, totalSavings,
  } = useCart();

  const deliveryFee = totalPrice >= 199 ? 0 : 25;
  const grandTotal = totalPrice + deliveryFee;

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'cart-overlay--open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`cart-sidebar ${isCartOpen ? 'cart-sidebar--open' : ''}`} id="cart-sidebar">
        {/* Header */}
        <div className="cart-sidebar__header">
          <div className="cart-sidebar__title">
            <FiShoppingBag size={20} />
            <h2>My Cart</h2>
            {totalItems > 0 && (
              <span className="cart-sidebar__count">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
            )}
          </div>
          <button className="cart-sidebar__close" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <FiX size={22} />
          </button>
        </div>

        {/* Delivery banner */}
        {totalItems > 0 && (
          <div className="cart-sidebar__delivery-banner">
            <span>⚡</span>
            <span>Delivery in <strong>10 minutes</strong></span>
          </div>
        )}

        {/* Items */}
        <div className="cart-sidebar__items">
          {items.length === 0 ? (
            <div className="cart-sidebar__empty">
              <span className="cart-sidebar__empty-icon">🛒</span>
              <h3>Your cart is empty</h3>
              <p>Add items to get started</p>
              <button className="cart-sidebar__shop-btn" onClick={() => setIsCartOpen(false)}>
                Start Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
                <img src={item.image} alt={item.name} className="cart-item__img" />
                <div className="cart-item__info">
                  <span className="cart-item__name">{item.name}</span>
                  <span className="cart-item__unit">{item.unit}</span>
                  <div className="cart-item__price-row">
                    <span className="cart-item__price">₹{item.price * item.qty}</span>
                    {item.mrp > item.price && (
                      <span className="cart-item__mrp">₹{item.mrp * item.qty}</span>
                    )}
                  </div>
                </div>
                <div className="cart-item__actions">
                  <div className="cart-item__qty">
                    <button onClick={() => removeFromCart(item.id)} aria-label="Decrease"><FiMinus size={12} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(item)} aria-label="Increase"><FiPlus size={12} /></button>
                  </div>
                  <button className="cart-item__delete" onClick={() => deleteFromCart(item.id)} aria-label="Remove">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {totalItems > 0 && (
          <div className="cart-sidebar__footer">
            {/* Free delivery progress */}
            {totalPrice < 199 && (
              <div className="cart-sidebar__free-delivery">
                <div className="cart-sidebar__free-delivery-bar">
                  <div
                    className="cart-sidebar__free-delivery-fill"
                    style={{ width: `${Math.min((totalPrice / 199) * 100, 100)}%` }}
                  />
                </div>
                <span>Add ₹{199 - totalPrice} more for <strong>FREE delivery</strong></span>
              </div>
            )}

            <div className="cart-sidebar__summary">
              <div className="cart-sidebar__summary-row">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              {totalSavings > 0 && (
                <div className="cart-sidebar__summary-row cart-sidebar__summary-row--savings">
                  <span>Savings</span>
                  <span>-₹{totalSavings}</span>
                </div>
              )}
              <div className="cart-sidebar__summary-row">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? <span className="cart-sidebar__free-tag">FREE</span> : `₹${deliveryFee}`}</span>
              </div>
              <div className="cart-sidebar__summary-row cart-sidebar__summary-row--total">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button className="cart-sidebar__checkout-btn" id="checkout-btn">
              Proceed to Checkout  ·  ₹{grandTotal}
            </button>

            <button className="cart-sidebar__clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
