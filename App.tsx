import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from '@/components/Home';
import Theme from './components/Theme';
import CartDrawer from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Theme />
      <BrowserRouter>
        <div className="w-full flex flex-col min-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>          
      </BrowserRouter>
      <Toaster />
    <CartDrawer />
  </CartProvider>
  );
};

export default App;