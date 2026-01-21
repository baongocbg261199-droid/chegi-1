
import React, { useState, useMemo } from 'react';
import { View, CartItem, Product } from './types';
import HomeView from './components/HomeView';
import CatalogView from './components/CatalogView';
import ProductDetailView from './components/ProductDetailView';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import AccountView from './components/AccountView';
import DashboardView from './components/DashboardView';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const buyNow = (product: Product) => {
    addToCart(product);
    setCurrentView('CHECKOUT');
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('PRODUCT_DETAIL');
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <HomeView onNavigate={navigateToProduct} onSeeAll={() => setCurrentView('CATALOG')} />;
      case 'CATALOG':
        return <CatalogView onBack={() => setCurrentView('HOME')} onProductClick={navigateToProduct} />;
      case 'DASHBOARD':
        return <DashboardView />;
      case 'PRODUCT_DETAIL':
        return selectedProduct ? (
          <ProductDetailView 
            product={selectedProduct} 
            onBack={() => setCurrentView('HOME')} 
            onAddToCart={() => {
              addToCart(selectedProduct);
              setCurrentView('CART');
            }} 
            onBuyNow={() => buyNow(selectedProduct)}
          />
        ) : null;
      case 'CART':
        return (
          <CartView 
            items={cart} 
            onUpdateQuantity={updateQuantity} 
            onRemove={removeFromCart} 
            onBack={() => setCurrentView('HOME')} 
            onCheckout={() => setCurrentView('CHECKOUT')}
          />
        );
      case 'CHECKOUT':
        return <CheckoutView onBack={() => setCurrentView('CART')} cart={cart} />;
      case 'ACCOUNT':
        return <AccountView />;
      default:
        return <HomeView onNavigate={navigateToProduct} onSeeAll={() => setCurrentView('CATALOG')} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-background-light dark:bg-background-dark">
      {renderView()}
      <BottomNav currentView={currentView} onNavigate={setCurrentView} cartCount={cartCount} />
    </div>
  );
};

export default App;
