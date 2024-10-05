// src/pages/Cart.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Cart = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>
      {/* Cart items and functionality go here */}
      <p>Your cart is currently empty.</p>
    </motion.div>
  );
};

export default Cart;
