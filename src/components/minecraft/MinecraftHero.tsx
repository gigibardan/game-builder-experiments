
import React from 'react';
import { motion } from 'framer-motion';

const MinecraftHero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-400 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            De la jucător la creator
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            Minecraft Modding
          </h2>
          <p className="text-xl mb-0 max-w-2xl mx-auto">
            Transformă jocul tău preferat prin crearea propriilor modificări și extensii.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MinecraftHero;
