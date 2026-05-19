import { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { products, categories } from './data/products';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const activeCategoryName = activeCategory
    ? categories.find(c => c.id === activeCategory)?.name
    : 'All Products';

  return (
    <div className="app">
      <Header onSearch={setSearchQuery} />
      <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="main">
        <HeroBanner />

        {/* Product Grid Section */}
        <section className="products-section container" id="products-section">
          <div className="products-section__header">
            <div>
              <h2 className="products-section__title">{activeCategoryName}</h2>
              <p className="products-section__count">{filteredProducts.length} products available</p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, i) => (
                <div key={product.id} style={{ animationDelay: `${i * 40}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <span className="products-empty__icon">🔍</span>
              <h3>No products found</h3>
              <p>Try a different category or search term</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <CartSidebar />
    </div>
  );
}

export default App;
