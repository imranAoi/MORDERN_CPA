import React from 'react'
import { motion } from 'framer-motion'
import homie from '../assets/helo.jpg'
import { FaArrowRight, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Home() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 1.4
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8
      }
    },
    hover: {
      scale: 1.1,
      color: '#9333ea', // purple-600
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className='bg-white relative'>
      <img 
        className='w-full h-screen object-cover md:h-full brightness-50 rounded-b-4xl' 
        src={homie}
        alt="Background"
      />
      
      {/* Social Media Sidebar */}
      <motion.div 
        className='absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-6 px-4 py-6 bg-black/30 backdrop-blur-sm bg-opacity-30 rounded-r-lg'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.8
            }
          }
        }}
      >
        <motion.a 
          href="#" 
          className='text-white text-xl hover:text-purple-400'
          variants={socialVariants}
          whileHover="hover"
        >
          <FaFacebook />
        </motion.a>
        <motion.a 
          href="#" 
          className='text-white text-xl hover:text-purple-400'
          variants={socialVariants}
          whileHover="hover"
        >
          <FaTwitter />
        </motion.a>
        <motion.a 
          href="#" 
          className='text-white text-xl hover:text-purple-400'
          variants={socialVariants}
          whileHover="hover"
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a 
          href="#" 
          className='text-white text-xl hover:text-purple-400'
          variants={socialVariants}
          whileHover="hover"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="#" 
          className='text-white text-xl hover:text-purple-400'
          variants={socialVariants}
          whileHover="hover"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
      
      <motion.div 
        className='absolute inset-0 flex items-center justify-center md:justify-start'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className='text-center md:text-left px-6 md:px-16 max-w-3xl md:ml-16'>
          <motion.p 
            className='text-purple-400 font-semibold mb-2 text-lg md:text-xl'
            variants={itemVariants}
          >
            Expert Financial Guidance
          </motion.p>
          
          <motion.h1 
            className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'
            variants={itemVariants}
          >
            Strategic Financial Solutions for Tomorrow's Success
          </motion.h1>
          
          <motion.h2 
            className='text-xl md:text-2xl text-gray-300 mb-3'
            variants={itemVariants}
          >
            Tailored accounting services to grow your business
          </motion.h2>
          
          <motion.p 
            className='text-gray-300 mb-8 text-base md:text-lg'
            variants={itemVariants}
          >
            Our certified professionals deliver comprehensive financial strategies 
            to optimize your growth and secure your future. Let us handle the numbers 
            while you focus on what matters most.
          </motion.p>
  
          <motion.button 
            className='bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto md:mx-0'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started <FaArrowRight className='ml-2' />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Home