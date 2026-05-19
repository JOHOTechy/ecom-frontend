// Grocery product data for the Zepto-like store
export const categories = [
  { id: 'fruits', name: 'Fruits & Vegetables', emoji: '🥬', color: '#22c55e' },
  { id: 'dairy',  name: 'Dairy & Breakfast',   emoji: '🥛', color: '#3b82f6' },
  { id: 'snacks', name: 'Snacks & Munchies',   emoji: '🍿', color: '#f97316' },
  { id: 'drinks', name: 'Cold Drinks & Juices', emoji: '🥤', color: '#06b6d4' },
  { id: 'bakery', name: 'Bakery & Biscuits',   emoji: '🍞', color: '#eab308' },
  { id: 'instant',name: 'Instant & Frozen',     emoji: '🍜', color: '#ef4444' },
  { id: 'atta',   name: 'Atta, Rice & Dal',     emoji: '🌾', color: '#a855f7' },
  { id: 'cleaning', name: 'Cleaning Essentials', emoji: '🧹', color: '#14b8a6' },
  { id: 'beauty', name: 'Beauty & Hygiene',     emoji: '💄', color: '#ec4899' },
  { id: 'baby',   name: 'Baby Care',            emoji: '👶', color: '#8b5cf6' },
];

export const products = [
  // Fruits & Vegetables
  { id: 1,  name: 'Fresh Bananas',        category: 'fruits', price: 45,  mrp: 55,  unit: '1 dozen',  image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 2,  name: 'Organic Tomatoes',     category: 'fruits', price: 35,  mrp: 42,  unit: '500 g',    image: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300&h=300&fit=crop', rating: 4.3, inStock: true },
  { id: 3,  name: 'Baby Spinach',         category: 'fruits', price: 40,  mrp: 50,  unit: '200 g',    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 4,  name: 'Fresh Avocados',       category: 'fruits', price: 120, mrp: 150, unit: '2 pcs',    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop', rating: 4.7, inStock: true },
  { id: 5,  name: 'Red Capsicum',         category: 'fruits', price: 68,  mrp: 80,  unit: '250 g',    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop', rating: 4.2, inStock: true },
  { id: 6,  name: 'Sweet Corn',           category: 'fruits', price: 55,  mrp: 65,  unit: '2 pcs',    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop', rating: 4.4, inStock: true },

  // Dairy & Breakfast
  { id: 7,  name: 'Amul Toned Milk',      category: 'dairy', price: 30,  mrp: 30,  unit: '500 ml',   image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 8,  name: 'Greek Yogurt',         category: 'dairy', price: 85,  mrp: 99,  unit: '400 g',    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 9,  name: 'Farm Fresh Eggs',      category: 'dairy', price: 80,  mrp: 95,  unit: '12 pcs',   image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 10, name: 'Amul Butter',          category: 'dairy', price: 56,  mrp: 56,  unit: '100 g',    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop', rating: 4.7, inStock: true },
  { id: 11, name: 'Cheese Slices',        category: 'dairy', price: 110, mrp: 130, unit: '200 g',    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop', rating: 4.3, inStock: true },
  { id: 12, name: 'Paneer Fresh',         category: 'dairy', price: 90,  mrp: 105, unit: '200 g',    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop', rating: 4.5, inStock: true },

  // Snacks & Munchies
  { id: 13, name: 'Lays Classic Salted',  category: 'snacks', price: 20,  mrp: 20,  unit: '52 g',     image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop', rating: 4.2, inStock: true },
  { id: 14, name: 'Mixed Dry Fruits',     category: 'snacks', price: 299, mrp: 399, unit: '250 g',    image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=300&h=300&fit=crop', rating: 4.8, inStock: true },
  { id: 15, name: 'Roasted Almonds',      category: 'snacks', price: 220, mrp: 280, unit: '200 g',    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=300&h=300&fit=crop', rating: 4.7, inStock: true },
  { id: 16, name: 'Dark Chocolate',       category: 'snacks', price: 150, mrp: 175, unit: '100 g',    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 17, name: 'Protein Bars',         category: 'snacks', price: 180, mrp: 200, unit: '6 pcs',    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 18, name: 'Nachos Cheese',        category: 'snacks', price: 99,  mrp: 120, unit: '150 g',    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=300&fit=crop', rating: 4.3, inStock: true },

  // Cold Drinks & Juices
  { id: 19, name: 'Fresh Orange Juice',   category: 'drinks', price: 90,  mrp: 110, unit: '1 L',      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 20, name: 'Coconut Water',        category: 'drinks', price: 45,  mrp: 50,  unit: '200 ml',   image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 21, name: 'Cold Coffee',          category: 'drinks', price: 65,  mrp: 75,  unit: '250 ml',   image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 22, name: 'Green Smoothie',       category: 'drinks', price: 120, mrp: 140, unit: '300 ml',   image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=300&fit=crop', rating: 4.7, inStock: true },
  { id: 23, name: 'Sparkling Water',      category: 'drinks', price: 55,  mrp: 60,  unit: '750 ml',   image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?w=300&h=300&fit=crop', rating: 4.3, inStock: true },
  { id: 24, name: 'Mango Lassi',          category: 'drinks', price: 70,  mrp: 85,  unit: '250 ml',   image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=300&h=300&fit=crop', rating: 4.8, inStock: true },

  // Bakery & Biscuits
  { id: 25, name: 'Multigrain Bread',     category: 'bakery', price: 50,  mrp: 55,  unit: '400 g',    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 26, name: 'Croissant Butter',     category: 'bakery', price: 75,  mrp: 90,  unit: '2 pcs',    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 27, name: 'Chocolate Muffins',    category: 'bakery', price: 120, mrp: 140, unit: '4 pcs',    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 28, name: 'Cookies Pack',         category: 'bakery', price: 60,  mrp: 70,  unit: '200 g',    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop', rating: 4.3, inStock: true },

  // Instant & Frozen
  { id: 29, name: 'Maggi Noodles',        category: 'instant', price: 14,  mrp: 14,  unit: '70 g',     image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 30, name: 'Frozen Pizza',         category: 'instant', price: 199, mrp: 249, unit: '300 g',    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 31, name: 'Frozen Momos',         category: 'instant', price: 150, mrp: 180, unit: '12 pcs',   image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=300&fit=crop', rating: 4.6, inStock: true },
  { id: 32, name: 'Cup Noodles',          category: 'instant', price: 45,  mrp: 50,  unit: '70 g',     image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop', rating: 4.2, inStock: true },

  // Atta, Rice & Dal
  { id: 33, name: 'Basmati Rice',         category: 'atta', price: 180, mrp: 210, unit: '1 kg',     image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop', rating: 4.7, inStock: true },
  { id: 34, name: 'Whole Wheat Atta',     category: 'atta', price: 65,  mrp: 72,  unit: '1 kg',     image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 35, name: 'Toor Dal',             category: 'atta', price: 135, mrp: 155, unit: '1 kg',     image: 'https://images.unsplash.com/photo-1585996064681-3d1f5e7c6be2?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 36, name: 'Quinoa',               category: 'atta', price: 250, mrp: 300, unit: '500 g',    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop', rating: 4.6, inStock: true },

  // Cleaning Essentials
  { id: 37, name: 'Dish Wash Liquid',     category: 'cleaning', price: 99,  mrp: 120, unit: '500 ml',   image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&h=300&fit=crop', rating: 4.3, inStock: true },
  { id: 38, name: 'Floor Cleaner',        category: 'cleaning', price: 140, mrp: 165, unit: '1 L',      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=300&fit=crop', rating: 4.4, inStock: true },
  { id: 39, name: 'Detergent Powder',     category: 'cleaning', price: 220, mrp: 260, unit: '1 kg',     image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=300&fit=crop', rating: 4.5, inStock: true },
  { id: 40, name: 'Toilet Cleaner',       category: 'cleaning', price: 85,  mrp: 99,  unit: '500 ml',   image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&h=300&fit=crop', rating: 4.2, inStock: true },
];

export const banners = [
  { id: 1, title: 'Fresh Fruits & Veggies',    subtitle: 'Up to 40% Off',   gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', emoji: '🥗' },
  { id: 2, title: 'Dairy Delights',             subtitle: 'Buy 2 Get 1 Free', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', emoji: '🧀' },
  { id: 3, title: 'Snack Attack!',              subtitle: 'Flat ₹50 Off',    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', emoji: '🍕' },
  { id: 4, title: 'Summer Coolers',             subtitle: 'Starting ₹29',    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', emoji: '🧊' },
];
