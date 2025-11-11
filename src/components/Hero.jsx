import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = ({ scrollY }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl mix-blend-multiply"
        />
      </div>

      {/* Parallax Emojis */}
      <motion.div
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
        className="absolute top-20 left-10 text-6xl md:text-8xl opacity-20"
      >
        🧥
      </motion.div>
      <motion.div
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${-scrollY * 0.05}deg)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
        className="absolute top-40 right-20 text-6xl md:text-8xl opacity-20"
      >
        👟
      </motion.div>
      <motion.div
        style={{
          transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.03}deg)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
        className="absolute bottom-40 left-1/4 text-6xl md:text-8xl opacity-20"
      >
        🧢
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Welcome to the Future of Fashion</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">URBAN FASHION</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Embrace the cyberpunk aesthetic with cutting-edge tech-wear designed for the digital age.
            Where innovation meets style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#ai-stylist"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-border rounded-lg font-semibold text-white hover:bg-gray-900/50 transition-all"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(to right, #db2777, #22d3ee) border-box'
              }}
            >
              Try AI Stylist
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-gradient-to-b from-pink-600 to-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
