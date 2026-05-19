import { useCart } from '../context/CartContext';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, getItemQty } = useCart();
  const qty = getItemQty(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="product-card" id={`product-${product.id}`}>
      {discount > 0 && (
        <span className="product-card__badge">{discount}% OFF</span>
      )}

      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__unit">{product.unit}</span>
        </div>

        <h3 className="product-card__name">{product.name}</h3>

        <div className="product-card__rating">
          <span className="product-card__star">★</span>
          <span>{product.rating}</span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="product-card__price">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="product-card__mrp">₹{product.mrp}</span>
            )}
          </div>

          {qty === 0 ? (
            <button
              className="product-card__add-btn"
              onClick={() => addToCart(product)}
              id={`add-${product.id}`}
            >
              ADD
            </button>
          ) : (
            <div className="product-card__qty-control" id={`qty-${product.id}`}>
              <button
                className="product-card__qty-btn"
                onClick={() => removeFromCart(product.id)}
                aria-label="Decrease quantity"
              >
                <FiMinus size={14} />
              </button>
              <span className="product-card__qty-num">{qty}</span>
              <button
                className="product-card__qty-btn"
                onClick={() => addToCart(product)}
                aria-label="Increase quantity"
              >
                <FiPlus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
