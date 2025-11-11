import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { products } from '../data';

const Products = ({ onAddToCart }) => {
  const [addedProducts, setAddedProducts] = useState({});

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setAddedProducts({ ...addedProducts, [product.id]: true });
    
    setTimeout(() => {
      setAddedProducts({ ...addedProducts, [product.id]: false });
    }, 2000);
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Collection</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cutting-edge tech-wear designed for the future. Each piece integrates advanced materials and smart technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Product Emoji/Image */}
              <div className="mb-6 flex items-center justify-center h-32">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl"
                >
                  {product.emoji}
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-cyan-400">
                  ${product.price}
                </p>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-cyan-400 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </motion.button>

              {/* Added to Cart Overlay */}
              {addedProducts[product.id] && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-pink-600 to-cyan-400 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-xl font-bold gradient-text">
                      Added to Cart!
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
