import React from 'react';
import ProductList from '../components/ProductList';
import { motion } from 'framer-motion';

// Images for each category (replace these with actual image URLs)
const categories = [
  { name: 'Clothing', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
  { name: 'Accessories', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
  { name: 'Footwear', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
  { name: 'Sales', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
  { name: 'Bags', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
  { name: 'Jewelry', imageUrl: '/6.gif', size: 'w-20 h-20', sizeDesktop: 'w-52 h-52' },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:mt-[56px]'
    >
      {/* Hero Section */}
      <div className="bg-indigo-700 item-center md:h-[400px] h-[350px] flex justify-center items-center md:rounded-none rounded-md p-5 m-4 text-white md:p-10 md:mx-10 text-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to ClothStore</h1>
          <p className="mt-4 text-lg">Discover the latest trends in fashion!</p>
          <button className="mt-6 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Categories - Mobile */}
      <div className="container md:hidden block mx-auto py-4 md:py-8">
        <div className='flex space-x-5 scale-90 justify-center'>
          {categories.slice(0, 4).map((category, index) => (
            <div key={index} className='flex justify-center flex-col text-center space-y-2'>
              <div className={`relative ${category.size} rounded-md shadow-md`} style={{ backgroundImage: `url(${category.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-md'>
                  <span className='text-xs text-white font-semibold'>{category.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories - Desktop */}
      <div className="container md:block hidden mx-auto py-4 md:py-8">
        <div className='flex space-x-4 scale-90 justify-center'>
          {categories.map((category, index) => (
            <div key={index} className='flex justify-center flex-col text-center space-y-2'>
              <div className={`relative ${category.sizeDesktop} rounded-md shadow-md`} style={{ backgroundImage: `url(${category.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-md'>
                  <span className='text-md text-white font-semibold'>{category.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto py-2 px-5 md:py-8">
        <ProductList />
      </div>

      {/* Special Offers */}
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Limited Time Offers</h2>
        <p className="text-lg mb-4 text-gray-600">Up to 50% off on selected items!</p>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
          View Offers
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
