// src/components/ServicesSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {
  cfo,
  RFP,
  PayrollServices,
  BusinessAdvisory,
  AuditAssurance,
  AccountingBookkeeping,
  TaxServices
} from '../assets/virtualCFOServices';

const ServicesSlider = () => {
  const allServices = [
    { title: "Virtual CFO Services", data: cfo, color: "bg-purple-600" },
    { title: "Retirement & Financial Planning", data: RFP, color: "bg-blue-600" },
    { title: "Payroll Services", data: PayrollServices, color: "bg-green-600" },
    { title: "Business Advisory", data: BusinessAdvisory, color: "bg-indigo-600" },
    { title: "Audit & Assurance", data: AuditAssurance, color: "bg-red-600" },
    { title: "Accounting & Bookkeeping", data: AccountingBookkeeping, color: "bg-teal-600" },
    { title: "Tax Services", data: TaxServices, color: "bg-orange-600" }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4">
            Our Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Tailored solutions to meet all your financial needs and drive business growth
          </p>
        </motion.div>

        {allServices.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className={`${service.color} text-white p-6 rounded-t-2xl`}>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-2">{service.data.overview}</p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              className="bg-white shadow-xl rounded-b-2xl p-6"
            >
              {service.data.types.map((item) => (
                <SwiperSlide key={item.id} className="pb-10">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.type}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Available';
                        }}
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex items-start mb-3">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full ${service.color} bg-opacity-10 flex items-center justify-center`}>
                          <span className={`font-bold ${service.color.replace('bg', 'text')}`}>
                            {item.id}
                          </span>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-lg font-semibold text-gray-900">{item.type}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                    </div>
                    <div className="px-4 pb-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Example:</span> {item.example}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;