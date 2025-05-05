// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Modern CPA Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-300 transition">Tax Planning & Preparation</li>
            <li className="hover:text-purple-300 transition">Financial Consulting</li>
            <li className="hover:text-purple-300 transition">Business Advisory</li>
            <li className="hover:text-purple-300 transition">Audit & Assurance</li>
            <li className="hover:text-purple-300 transition">Wealth Management</li>
          </ul>
        </motion.div>

        {/* Contact Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-purple-400" />
              <p>123 Financial Ave, Suite 456<br />New York, NY 10001</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-3 text-purple-400" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-purple-400" />
              <p>info@moderncpa.com</p>
            </div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Connect With Us</h3>
          <div className="flex space-x-4">
            <motion.a 
              href="#" 
              className="bg-gray-800 hover:bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook className="text-xl" />
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-gray-800 hover:bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-gray-800 hover:bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="text-xl" />
            </motion.a>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              />
              <motion.button 
                className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-r-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Modern CPA Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;