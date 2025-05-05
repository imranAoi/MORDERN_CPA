import React, { useState } from "react";
import AboutMore from "./AboutMore";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  //hlo

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl m-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Modern CPA</h2>
        <p className="text-xl text-gray-600 mb-8 text-center">
        CPA Certified Public Accountant is considered gold standard in the fields of accounting and finance. Spread across just 4 exams, CPA’s curriculum uses some of the most advanced testing techniques to test aspirants all over the world if they’re worthy of the designation CPA. The CPA designation is earned through education and relevant experience and license. A Certified Public Accountant plays a vital role in financial plans and transactions. CPA’s are globally recognized as premier accountants and are hired across industries throughout the world.
        <b>“Go global through the highest accounting Qualification- US Certified Public Accountant’’</b>
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { number: "12+", label: "Years Experience" },
            { number: "200+", label: "Clients Nationwide" },
            { number: "100%", label: "Client Retention" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-bold text-blue-700 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-6 py-2.5 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition duration-300 shadow-md text-sm sm:text-base">
            Schedule a Consultation
          </button>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2.5 bg-white text-blue-700 font-medium rounded-md border border-blue-700 hover:bg-blue-50 transition duration-300 shadow-sm text-sm sm:text-base"
          >
            {showMore ? "Show Less" : "Know More About Us"}
          </button>
        </div>
      </div>

      {/* AboutMore section that appears when "Know More" is clicked */}
      <AboutMore showMore={showMore} />
    </section>
  );
};

export default About;