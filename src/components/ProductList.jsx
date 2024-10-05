// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Replace with your actual data fetching logic
  useEffect(() => {
    // Example static data
    const fetchedProducts = [
      {
        id: 1,
        name: 'Classic T-Shirt',
        price: 29.99,
        image: '/test1.jpg',
      },
      {
        id: 2,
        name: 'Denim Jeans',
        price: 59.99,
        image: '/test1.jpg',
      },
      {
        id: 1,
        name: 'Classic T-Shirt',
        price: 29.99,
        image: '/test1.jpg',
      },
      {
        id: 2,
        name: 'Denim Jeans',
        price: 59.99,
        image: '/test1.jpg',
      },
      {
        id: 1,
        name: 'Classic T-Shirt',
        price: 29.99,
        image: '/test1.jpg',
      },
      {
        id: 2,
        name: 'Denim Jeans',
        price: 59.99,
        image: '/test1.jpg',
      },
      {
        id: 1,
        name: 'Classic T-Shirt',
        price: 29.99,
        image: '/test1.jpg',
      },
      {
        id: 2,
        name: 'Denim Jeans',
        price: 59.99,
        image: '/test1.jpg',
      },
      // Add more products as needed
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="container mx-auto md:px-4 py-10">
      <h2 className="md:text-3xl text-2xl font-semibold mb-8">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-8 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
