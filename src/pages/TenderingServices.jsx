const gemImage = '/Gem.png';
import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, DocumentTextIcon, GlobeAltIcon, CheckCircleIcon, ArrowRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const processSteps = [
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-primary-600" />,
    title: 'GeM Registration',
    desc: 'Get registered and set up your seller profile on the Government e-Marketplace.'
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-accent-blue" />,
    title: 'Tender Identification',
    desc: 'We scout and shortlist tenders relevant to your business.'
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-accent-yellow" />,
    title: 'Bid Preparation',
    desc: 'Expert help with documentation, compliance, and online bid submission.'
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
    title: 'Post-Award Support',
    desc: 'Smooth execution, delivery, and contract compliance after you win.'
  }
];


const TenderingServices = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
    {/* Hero Section */}
    <section className="relative py-24 bg-gradient-to-br from-[#0a174e] to-[#274690] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="w-full text-center pt-12 pb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tendering & <span className="text-accent-yellow">GeM Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering businesses to succeed in government procurement with expert GeM registration, tender management, and contract support.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
    </section>
    {/* Image & Content Section */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-stretch justify-center min-h-[600px] mt-0">
          {/* Left: SVG Image */}
          <div className="md:w-1/2 flex justify-center items-center p-8 h-[600px] min-w-[350px]">
            <object type="image/svg+xml" data="/img1.svg" className="w-full h-full max-w-2xl" aria-label="GeM Portal Tendering Process" />
          </div>
          {/* Right: Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-start p-8 h-[600px] min-w-[350px]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-600 dark:text-accent-yellow">Why Choose VKMD?</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">VKMD makes GeM registration, tender management, and contract success simple and transparent.</p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>GeM Registration & Seller Profile Setup</li>
              <li>Tender Identification & Shortlisting</li>
              <li>Bid Preparation & Submission Support</li>
              <li>Post-Award Execution & Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="gradient-text">VKMD</span> Helps You Succeed
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our step-by-step process ensures you can register, participate, and win in government tenders and GeM procurement.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card p-8 text-center group bg-white dark:bg-dark-800 shadow-lg rounded-xl"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* GeM Info Section */}
    <section className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is <span className="gradient-text">GeM?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Government e-Marketplace (GeM) is India’s official procurement portal, making public procurement transparent, efficient, and paperless. By May 2025, GeM processed ₹13.6 lakh crore+ orders across 2.8 crore+ transactions, benefiting 23 lakh+ sellers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card p-6 bg-gray-100 dark:bg-dark-700 rounded-xl text-center">
            <UserGroupIcon className="w-8 h-8 mx-auto text-primary-600 mb-2" />
            <p className="font-semibold">100% Online Process</p>
          </div>
          <div className="card p-6 bg-gray-100 dark:bg-dark-700 rounded-xl text-center">
            <ArrowRightIcon className="w-8 h-8 mx-auto text-accent-blue mb-2" />
            <p className="font-semibold">Fair & Competitive Bidding</p>
          </div>
          <div className="card p-6 bg-gray-100 dark:bg-dark-700 rounded-xl text-center">
            <CheckCircleIcon className="w-8 h-8 mx-auto text-green-500 mb-2" />
            <p className="font-semibold">Inclusive for MSMEs & Startups</p>
          </div>
          <div className="card p-6 bg-gray-100 dark:bg-dark-700 rounded-xl text-center">
            <GlobeAltIcon className="w-8 h-8 mx-auto text-accent-yellow mb-2" />
            <p className="font-semibold">Access to Government Buyers</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
  <section className="section-padding bg-gradient-to-br from-[#0a174e] to-[#274690]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Win Government Contracts?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with VKMD’s Tendering & GeM Portal Services. Let us help you grow by connecting with government buyers and winning profitable contracts.
          </p>
          
        </motion.div>
      </div>
    </section>
  </div>
);

export default TenderingServices;
