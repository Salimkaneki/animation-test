'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function ScrollGallery() {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({ 
    target: parallaxRef, 
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  
  // Gallery items with real content
  const galleryItems = [
    { id: 1, title: "Mountain Peaks", color: "bg-indigo-600", emoji: "🏔️" },
    { id: 2, title: "Ocean Depths", color: "bg-cyan-500", emoji: "🌊" },
    { id: 3, title: "Forest Whispers", color: "bg-emerald-500", emoji: "🌲" },
    { id: 4, title: "Desert Sands", color: "bg-amber-500", emoji: "🏜️" },
    { id: 5, title: "Urban Heights", color: "bg-rose-500", emoji: "🏙️" },
    { id: 6, title: "Starry Nights", color: "bg-violet-600", emoji: "✨" },
  ];

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-20">
      
      {/* Hero section with animated title */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center mb-32">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Scroll Gallery
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-xl text-gray-300 text-center max-w-lg"
        >
          An immersive visual experience that responds to your scrolling journey
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 animate-bounce"
        >
          <svg 
            className="w-8 h-8 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>

      {/* Enhanced parallax section */}
      <motion.div
        ref={parallaxRef}
        style={{ y, opacity, scale }}
        className="h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(66,153,225,0.5)] mb-48"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center p-8">
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-6"
          >
            🌌
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Parallax Universe</h2>
          <p className="text-blue-200 text-center max-w-md">
            Scroll to see how elements shift and transform based on your viewport position
          </p>
        </div>
      </motion.div>

      {/* Improved gallery grid with hover effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Explore<span className="text-blue-400"> The Collection</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)" 
              }}
              onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              className={`${item.color} rounded-xl overflow-hidden cursor-pointer h-[250px] flex flex-col items-center justify-center text-center transition-shadow`}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              
              {activeCard === item.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 px-6 text-sm"
                >
                  <p>Click again to collapse this beautiful {item.title.toLowerCase()} showcase</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to action section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-10 rounded-2xl mb-32"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to create your own?</h2>
        <p className="text-gray-300 mb-6">
          Start building immersive scroll experiences with our advanced animation tools
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Enhanced footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center pt-20 pb-10 border-t border-gray-800"
      >
        <p className="text-gray-400 mb-4">Merci de votre visite ✨</p>
        <div className="flex justify-center space-x-4">
          {["Twitter", "GitHub", "Dribbble"].map((item) => (
            <motion.a 
              key={item}
              whileHover={{ y: -3, color: "#60A5FA" }}
              className="text-gray-500 hover:text-gray-300 cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.footer>
    </div>
  );
}