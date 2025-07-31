import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Men from './pages/Men';
import Women from './pages/Women';
import Sale from './pages/Sale';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './contexts/CartContext';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import SearchOverlay from './components/SearchOverlay';

/**
 * The main application component.
 * It sets up the global layout, routing, context providers, and page transitions.
 */
const App: React.FC = () => {
  // Get the current location object from React Router to use as a key for page transitions.
  const location = useLocation();
  // State to manage the visibility of the preloader.
  const [isLoading, setIsLoading] = useState(true);
  // State to manage the visibility of the search overlay.
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Effect to hide the preloader after a delay, simulating a loading process.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // 2.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // This effect runs whenever the pathname changes.
  // It scrolls the window to the top to ensure the user starts at the top of a new page.
  React.useEffect(() => {
    // A small timeout ensures the scroll happens after the transition starts.
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 150);
  }, [location.pathname]);

  return (
    // The CartProvider wraps the entire application, making cart state available to all components.
    <CartProvider>
      <div className="bg-white text-brand-primary font-sans">
        {/* AnimatePresence handles the exit animation of the Preloader */}
        <AnimatePresence>
          {isLoading && <Preloader />}
        </AnimatePresence>
        
        {/* The main app content is rendered after loading is complete */}
        {!isLoading && (
          <>
            <Navbar onSearchClick={() => setIsSearchOpen(true)} />
            <main>
              {/* AnimatePresence enables animations for components that are added or removed from the tree.
                  It's used here to animate page transitions when routes change. */}
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {/* Each route's element is wrapped in PageTransition to apply animations. */}
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                  <Route path="/men" element={<PageTransition><Men /></PageTransition>} />
                  <Route path="/women" element={<PageTransition><Women /></PageTransition>} />
                  <Route path="/sale" element={<PageTransition><Sale /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
                  <Route path="/account" element={<PageTransition><Account /></PageTransition>} />
                  <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
                  <Route path="/forgot-password" element={<PageTransition><ForgotPassword /></PageTransition>} />
                  <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                  <Route path="/product/:productId" element={<PageTransition><ProductPage /></PageTransition>} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </>
        )}
      </div>
    </CartProvider>
  );
};

export default App;
