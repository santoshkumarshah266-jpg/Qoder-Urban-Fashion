import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AIStylist from './components/AIStylist';
import SocialFeed from './components/SocialFeed';
import Newsletter from './components/Newsletter';

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAddToCart = (product) => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header cartItems={cartItems} />
      <Hero scrollY={scrollY} />
      <Products onAddToCart={handleAddToCart} />
      <AIStylist />
      <SocialFeed />
      <Newsletter />
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-2">
              URBAN FASHION
            </h3>
            <p className="text-gray-400 text-sm">
              Future-Forward Tech-Wear for the Digital Age
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          </div>
          <p className="text-gray-500 text-xs">
            © 2024 Urban Fashion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
