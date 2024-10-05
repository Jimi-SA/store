import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-indigo-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Info Section */}
        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm mb-2">ClothStore offers quality clothing for every occasion. Our mission is to provide the best online shopping experience.</p>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-400">Men's Clothing</a></li>
            <li><a href="#" className="hover:text-gray-400">Women's Clothing</a></li>
            <li><a href="#" className="hover:text-gray-400">Kids' Clothing</a></li>
            <li><a href="#" className="hover:text-gray-400">Accessories</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Returns & Exchanges</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Contact and Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-4">
        {/* Contact Us Section */}
        <div className=" md:items-center mb-4">
          <h3 className="text-lg flex md:justify-start justify-center font-bold mb-2 md:mb-4">Contact Us</h3>
          <ul className="text-sm flex flex-col justify-center ">
            <li className="flex items-center mb-2">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-green-200" />
              support@clothstore.com
            </li>
            <li className="flex items-center md:justify-start justify-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2 text-green-200" />
              +1 (234) 567-890
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-4 flex justify-center md:justify-start">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-100 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ClothStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
