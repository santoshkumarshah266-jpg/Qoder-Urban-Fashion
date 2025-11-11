import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import { instagramPosts } from '../data';

const SocialFeed = () => {
  return (
    <section id="social" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Join the Movement</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Be part of our global community of tech-wear enthusiasts. 
            Share your style and get inspired by others.
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <Instagram className="w-5 h-5" />
            <span className="font-semibold">@urbanfashion</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Post Image/Emoji */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl">
                {post.emoji}
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
              >
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-5 h-5 fill-pink-600 text-pink-600" />
                  <span className="font-semibold">{post.likes.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-300">@{post.username}</p>
              </motion.div>

              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-600 group-hover:to-cyan-400 rounded-lg transition-all" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-700 hover:border-pink-600 rounded-lg font-semibold text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed;
