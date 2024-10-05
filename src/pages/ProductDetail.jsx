// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on ID
    // For demonstration, using static data
    const fetchedProduct = {
      id: id,
      name: 'Classic T-Shirt',
      price: 29.99,
      image: '/assets/images/tshirt1.jpg',
      description: 'A high-quality classic t-shirt made from 100% cotton.',
    };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
        <div className="md:ml-8 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="mt-4 text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
