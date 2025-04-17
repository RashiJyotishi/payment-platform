'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="px-6 py-20 text-center lg:py-32 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text">
            Next-Gen QR Payments
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
            Transform your transactions with instant, secure QR-based payments. 
            Empower your business and delight your customers with cutting-edge technology.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 md:flex-row"
          >
            <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700">
              Get Started
              <FiArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-blue-600 transition-all border-2 border-blue-600 rounded-full dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6 mt-16 text-left md:grid-cols-4"
        >
          {['Secure', 'Instant', 'Low Fees', '24/7 Support'].map((feature, index) => (
            <div
              key={feature}
              className="p-6 transition-shadow bg-white shadow-lg rounded-xl dark:bg-gray-800 hover:shadow-xl"
            >
              <div className="mb-3 text-2xl text-blue-600 dark:text-blue-400">
                {index + 1}.
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature === 'Secure' && 'Bank-grade encryption'}
                {feature === 'Instant' && 'Real-time transactions'}
                {feature === 'Low Fees' && 'Competitive pricing'}
                {feature === '24/7 Support' && 'Always available'}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}