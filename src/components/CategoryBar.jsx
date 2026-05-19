import { categories } from '../data/products';
import './CategoryBar.css';

export default function CategoryBar({ activeCategory, onCategoryChange }) {
  return (
    <nav className="category-bar" id="category-nav">
      <div className="category-bar__inner container">
        <button
          className={`category-chip ${!activeCategory ? 'category-chip--active' : ''}`}
          onClick={() => onCategoryChange(null)}
          id="category-all"
        >
          <span className="category-chip__emoji">🏪</span>
          <span className="category-chip__name">All</span>
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-chip ${activeCategory === cat.id ? 'category-chip--active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
            id={`category-${cat.id}`}
          >
            <span className="category-chip__emoji">{cat.emoji}</span>
            <span className="category-chip__name">{cat.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
