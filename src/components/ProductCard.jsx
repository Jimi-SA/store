import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-48" // Changed w-full to a fixed width (w-48) for smaller size
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:h-40 h-32 object-cover" // Reduced height to make it sleeker
        />
      </Link>
      <div className="p-2"> {/* Reduced padding */}
        <h3 className="text-sm font-semibold">{product.name}</h3> {/* Reduced font size */}
        <p className="mt-1 text-gray-600 text-sm">${product.price.toFixed(2)}</p> {/* Reduced margin and font size */}
        <button className="mt-2 w-full bg-purple-600 text-white text-sm py-1 rounded hover:bg-purple-700"> {/* Smaller button */}
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
