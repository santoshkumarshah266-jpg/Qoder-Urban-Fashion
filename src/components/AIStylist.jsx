import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, TrendingUp } from 'lucide-react';

const AIStylist = () => {
  return (
    <section id="ai-stylist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI-Powered Stylist</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Experience the future of personal styling with our advanced AI technology. 
              Get personalized recommendations based on your style preferences, body type, 
              and the latest cyberpunk trends.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-600 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Smart Analysis</h3>
                  <p className="text-sm text-gray-400">
                    AI analyzes your preferences and suggests perfect matches
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Trend Prediction</h3>
                  <p className="text-sm text-gray-400">
                    Stay ahead with AI-powered trend forecasting
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Personalized Looks</h3>
                  <p className="text-sm text-gray-400">
                    Custom outfit combinations tailored to your style
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-400 rounded-lg font-semibold text-white flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Try AI Stylist Now
            </motion.button>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative h-96 rounded-2xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden"
            >
              {/* Pulsing gradient background */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-500/30 to-cyan-400/30 blur-3xl"
              />

              {/* Robot emoji with animation */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [-5, 5, -5],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl"
                >
                  🤖
                </motion.div>
              </div>

              {/* Floating UI elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-10 right-10 px-4 py-2 bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg"
              >
                <p className="text-xs text-cyan-400 font-mono">Analyzing style...</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-10 left-10 px-4 py-2 bg-black/50 backdrop-blur-sm border border-pink-600/50 rounded-lg"
              >
                <p className="text-xs text-pink-600 font-mono">98% match</p>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(219,39,119,0.3)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
