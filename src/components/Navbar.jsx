import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Check if the screen width is desktop

  // Prevent background scrolling when search overlay is open
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [searchOpen]);

  // Update isDesktop state on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.nav
        className="bg-white h-auto shadow-lg fixed top-0 left-0 w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bg-gradient-to-r from-purple-700 to-indigo-500 w-full py-2 text-white md:flex hidden justify-end items-center px-5'> 
          <ul className='flex space-x-4'>
            <li>Register</li>
            <li>Sales</li>
            <li>Pickup & delivery</li>
            <li>CALL TO ORDER</li>
          </ul>
        </div>
        <div className="container scale-95 mx-auto md:px-4 px-2 py-4 flex justify-between items-center">
          <div className='flex space-x-4 md:-ml-5 -ml-2 items-center'>
            {/* Hamburger Menu Icon */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="md:h-7 md:w-7 h-8 w-8 text-gray-700 hover:text-purple-700 transition-colors duration-300" />
              ) : (
                <Bars3Icon className="h-8 w-8 md:h-7 md:w-7 text-gray-700 hover:text-purple-700 transition-colors duration-300" />
              )}
            </button>
            {/* Logo / Brand */}
            <a href="/" className="text-2xl -mt-[2px] font-bold text-purple-700 hover:text-purple-900 transition-colors duration-300">
              ClothStore
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden scale-90 md:flex w-1/2">
            <input 
              type="text" 
              className="w-full p-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg font-semibold" 
              placeholder="Search for New & Featured, brands and more..." 
            />
            <button className="bg-purple-700 text-white font-semibold px-4 py-2 rounded-r-lg hover:bg-purple-900 transition-colors duration-300">
              Search
            </button>
          </div>

          {/* Icons for mobile: search and cart */}
          <div className="flex items-center space-x-8 md:hidden">
            <button onClick={() => setSearchOpen(true)}>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 hover:text-purple-700 transition-colors duration-300" />
            </button>
            <a href="/cart" className="relative text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              <ShoppingCartIcon className="h-6 w-6 text-green-600 inline-block mr-2" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                0
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300">Deals</a>
            <a href="/products" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300">New & Featured</a>
            <a href="/help" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300">Help</a>
            <a href="/account" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300">Account</a>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex relative">
            <a href="/cart">
              <ShoppingCartIcon className="h-8 w-8 text-green-600 hover:text-green-800 transition-colors duration-300" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">0</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {menuOpen && !isDesktop && ( // Show mobile menu only on mobile devices
            <motion.div
              className="md:hidden bg-purple-700/20 border border-t shadow-lg top-full left-0 w-full z-40"
              initial={{ x: -300, opacity: 0 }} // Slide in from the left
              animate={{ x: 0, opacity: 1 }} // Slide to position
              exit={{ x: -300, opacity: 0 }} // Slide out to the left
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 h-screen w-[80%] bg-white py-4 px-6">
                {/* Categories */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold">Categories</h2>
                  <Categories /> {/* Updated to use Categories component */}
                </div>
                <a href="/help" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Help</a>
                <a href="/account" className="text-lg font-semibold text-gray-700 hover:text-purple-700 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Account</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

       {/* Mobile Search Overlay */}
       <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-purple-700">Search</h2>
              <button onClick={() => setSearchOpen(false)}>
                <XMarkIcon className="h-8 w-8 text-gray-700 hover:text-purple-700 transition-colors duration-300" />
              </button>
            </div>
            <div className="mt-4">
              <input 
                type="text" 
                className="w-full p-3 rounded-lg focus:outline-none text-lg font-semibold" 
                placeholder="Search for products, brands and more..." 
              />
              <button className="mt-4 w-full bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-900 transition-colors duration-300">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setMenuOpen(false)} // Close menu on clicking overlay
        />
      )}
      {/* Desktop Categories Sliding in */}
      <AnimatePresence>
        {isDesktop && menuOpen && ( // Show categories div only on desktop devices when menu is open
          <motion.div
            className='h-screen bg-white border-t shadow-xl z-50 top-[120px] left-0 w-[28%] fixed'
            initial={{ x: -300, opacity: 0 }} // Slide in from the left
            animate={{ x: 0, opacity: 1 }} // Slide to position
            exit={{ x: -300, opacity: 0 }} // Slide out to the left
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <div className="space-y-2">
                <h2 className="text-lg font-bold">Categories</h2>
                <Categories /> {/* Updated to use Categories component */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Categories = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category); // Toggle the open category
  };

  const categories = [
    { title: "Men's Clothing", items: ["T-Shirts", "Shirts", "Pants"] },
    { title: "Women's Clothing", items: ["Dresses", "Tops", "Skirts"] },
    { title: "Kids' Clothing", items: ["T-Shirts", "Shorts", "Dresses"] },
  ];

  return (
    <div className="space-y-2 md:space-y-3">
      {categories.map((category, index) => (
        <div key={index}>
          <CategoryToggle
            title={category.title}
            isOpen={openCategory === category.title} // Check if this category is open
            onToggle={() => handleToggle(category.title)} // Pass the toggle function
          />
          <AnimatePresence>
            {openCategory === category.title && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }} // Initial state
                animate={{ opacity: 1, height: 'auto' }} // Expanded state
                exit={{ opacity: 0, height: 0 }} // Collapsed state
                transition={{ duration: 0.3 }}
                className="pl-4"
              >
                {category.items.map((item, idx) => (
                  <li key={idx} className="py-1 text-gray-700 hover:text-purple-700 transition-colors duration-300">{item}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const CategoryToggle = ({ title, isOpen, onToggle }) => {
  return (
    <div>
      <button
        className="flex justify-between items-center w-full text-left py-2 font-semibold text-gray-800 hover:text-purple-700"
        onClick={onToggle} // Call the toggle function
      >
        {title}
        {/* <span className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span> */}
          <span className='text-lg'>{isOpen ? '-' : '+'}</span> {/* Toggle icon */}
      </button>
    </div>
  );
};

export default Navbar;
