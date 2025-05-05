import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMore = ({ showMore }) => {
  return (
    <AnimatePresence>
      {showMore && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="max-w-6xl mx-auto mt-12 p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-3">Our Story</h4>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, Modern CPA began with a simple mission: to deliver 
                  accounting services that prioritize clarity and strategy over 
                  compliance alone. Today, we serve 200+ clients nationwide.
                </p>
                
                <h4 className="text-xl font-semibold text-blue-700 mb-3">Core Values</h4>
                <ul className="space-y-3">
                  {["Integrity in every calculation", "Proactive (not reactive) advice", 
                    "Tailored solutions"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-3">Why Choose Us?</h4>
                <div className="space-y-4">
                  {[
                    { title: "Partner-Level Attention", desc: "Work directly with CPAs, not juniors" },
                    { title: "Fixed-Fee Pricing", desc: "No surprise hourly bills" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-medium text-gray-900">{item.title}</h5>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMore;