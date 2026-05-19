import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing && existing.qty > 1) {
        return prev.map(item =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        );
      }
      return prev.filter(item => item.id !== productId);
    });
  }, []);

  const deleteFromCart = useCallback((productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);
  const totalSavings = useMemo(() => items.reduce((sum, i) => sum + (i.mrp - i.price) * i.qty, 0), [items]);

  const getItemQty = useCallback((productId) => {
    const item = items.find(i => i.id === productId);
    return item ? item.qty : 0;
  }, [items]);

  const value = useMemo(() => ({
    items, isCartOpen, setIsCartOpen,
    addToCart, removeFromCart, deleteFromCart, clearCart,
    totalItems, totalPrice, totalSavings, getItemQty,
  }), [items, isCartOpen, addToCart, removeFromCart, deleteFromCart, clearCart, totalItems, totalPrice, totalSavings, getItemQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
