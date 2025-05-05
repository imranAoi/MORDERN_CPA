// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ServicesSection = () => {
  // Enhanced services data with at least 4 types per service
  const services = [
    {
      key: 'cfo',
      title: 'Virtual CFO Services',
      overview: "Strategic financial leadership without the full-time cost. Our Virtual CFOs provide the expertise you need to grow.",
      types: [
        {
          id: 1,
          type: "Financial Strategy & Planning",
          description: "Comprehensive financial roadmaps tailored to your business goals and growth targets.",
          example: "Developed 3-year financial plan for SaaS startup securing $2M in funding.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          type: "Cash Flow Optimization",
          description: "Proactive management of cash inflows and outflows to maintain healthy liquidity.",
          example: "Reduced cash conversion cycle by 22 days for e-commerce business.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          type: "Investor Relations",
          description: "Bridge between your business and investors with transparent financial reporting.",
          example: "Prepared investor decks helping client raise $5M Series A round.",
          image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          type: "Financial Risk Management",
          description: "Identify and mitigate financial risks before they impact your business.",
          example: "Implemented currency hedging strategy saving manufacturing client $250k annually.",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      key: 'payroll',
      title: 'Payroll Services',
      overview: "Accurate, compliant payroll processing that saves you time and reduces risk.",
      types: [
        {
          id: 1,
          type: "Full-Service Payroll",
          description: "End-to-end payroll processing with tax filings and payment processing.",
          example: "Processed payroll for 75-employee tech firm with multi-state compliance.",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          type: "Tax Compliance",
          description: "Automatic calculation and filing of all payroll taxes and forms.",
          example: "Resolved $18k in payroll tax penalties for restaurant chain.",
          image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          type: "Benefits Administration",
          description: "Manage employee benefits alongside payroll for seamless HR operations.",
          example: "Integrated health insurance deductions with payroll for 120-employee nonprofit.",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          type: "Workforce Analytics",
          description: "Powerful insights into labor costs and workforce productivity.",
          example: "Identified $65k in overtime savings for logistics company.",
          image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    // Additional services with 4+ cards each...
    {
      key: 'tax',
      title: 'Tax Services',
      overview: "Maximize savings and minimize risk with our comprehensive tax solutions.",
      types: [
        {
          id: 1,
          type: "Business Tax Planning",
          description: "Proactive strategies to legally minimize your tax liability.",
          example: "Saved architecture firm $48k through R&D tax credit identification.",
          image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          type: "International Tax",
          description: "Navigate cross-border transactions and global tax compliance.",
          example: "Structured EU expansion saving tech client $220k in VAT.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          type: "State & Local Tax",
          description: "Manage complex multi-jurisdictional tax obligations.",
          example: "Reduced SALT burden by 32% for retail chain with 14 locations.",
          image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          type: "Tax Controversy",
          description: "Expert representation during audits and disputes.",
          example: "Successfully defended $125k deduction in IRS audit.",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const ServiceCard = ({ serviceType }) => {
    return (
      <motion.div
        id='services' 
        className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="h-48 relative overflow-hidden">
          <motion.img 
            src={serviceType.image}
            alt={serviceType.type}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white drop-shadow-md">{serviceType.type}</h3>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-600 mb-4 flex-1">{serviceType.description}</p>
          
          <div className="mt-auto">
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
              <p className="text-sm text-purple-700 font-medium">
                <span className="font-bold block mb-1">Case Example:</span> 
                {serviceType.example}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Financial Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {services.map((service) => (
          <div key={service.key} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 max-w-4xl mx-auto">
                {service.overview}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="px-2"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 }
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="pb-12"
              >
                {service.types.map((type) => (
                  <SwiperSlide key={type.id} className="h-auto py-2">
                    <ServiceCard serviceType={type} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;