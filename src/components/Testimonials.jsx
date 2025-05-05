// Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'The financial strategies provided transformed our business. Our revenue grew by 40% within the first year of working with them. Truly exceptional service!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, GreenSolutions',
    content: 'Their team helped us navigate complex tax regulations while expanding internationally. Professional, knowledgeable, and always available when needed.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Director, CreativeMinds',
    content: 'As a creative agency, finances werent our strength. They simplified everything and gave us clarity on our financial position. Highly recommend!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p 
            variants={itemVariants}
            className="text-purple-600 font-semibold mb-4"
          >
            CLIENT TESTIMONIALS
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <FaQuoteLeft className="text-purple-200 text-3xl mb-6" />
              <p className="text-gray-600 mb-8 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;