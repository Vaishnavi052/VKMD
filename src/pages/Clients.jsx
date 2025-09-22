import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StarIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Clients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const clients = [
    {
      id: 1,
      name: 'TechCorp Industries',
      industry: 'Technology',
      logo: '🏢',
      rating: 5.0,
      description: 'Leading technology manufacturer with global operations.',
      testimonial: 'VKMD has been instrumental in our manufacturing success. Their quality and reliability are unmatched.',
      contact: 'John Smith, CTO'
    },
    {
      id: 2,
      name: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      logo: '🏭',
      rating: 4.9,
      description: 'International manufacturing company with 50+ facilities.',
      testimonial: 'The partnership with VKMD has transformed our production efficiency and product quality.',
      contact: 'Sarah Johnson, Operations Director'
    },
    {
      id: 3,
      name: 'Innovation Labs',
      industry: 'Research & Development',
      logo: '🔬',
      rating: 5.0,
      description: 'Cutting-edge research and development facility.',
      testimonial: 'VKMD\'s innovative solutions have accelerated our R&D processes significantly.',
      contact: 'Dr. Michael Chen, Research Lead'
    },
    {
      id: 4,
      name: 'Energy Solutions Ltd.',
      industry: 'Energy',
      logo: '⚡',
      rating: 4.8,
      description: 'Renewable energy solutions provider.',
      testimonial: 'Reliable equipment and exceptional support from the VKMD team.',
      contact: 'Emily Davis, Engineering Manager'
    },
    {
      id: 5,
      name: 'Precision Engineering',
      industry: 'Engineering',
      logo: '⚙️',
      rating: 4.9,
      description: 'High-precision engineering and manufacturing.',
      testimonial: 'VKMD\'s precision tools have elevated our engineering capabilities to new heights.',
      contact: 'Robert Wilson, Technical Director'
    },
    {
      id: 6,
      name: 'Automotive Dynamics',
      industry: 'Automotive',
      logo: '🚗',
      rating: 4.7,
      description: 'Automotive parts and systems manufacturer.',
      testimonial: 'Consistent quality and timely delivery make VKMD our preferred supplier.',
      contact: 'Lisa Thompson, Supply Chain Manager'
    }
  ]

  const testimonials = [
    {
      id: 1,
      text: "VKMD has been our trusted partner for over 5 years. Their commitment to quality and innovation has helped us maintain our competitive edge in the market.",
      author: "John Smith",
      position: "CTO, TechCorp Industries",
      rating: 5
    },
    {
      id: 2,
      text: "The level of technical support and customer service we receive from VKMD is exceptional. They truly understand our industry challenges.",
      author: "Sarah Johnson",
      position: "Operations Director, Global Manufacturing Co.",
      rating: 5
    },
    {
      id: 3,
      text: "Working with VKMD has transformed our manufacturing processes. Their innovative solutions have increased our efficiency by 40%.",
      author: "Dr. Michael Chen",
      position: "Research Lead, Innovation Labs",
      rating: 5
    },
    {
      id: 4,
      text: "VKMD's products are not just tools; they're solutions that drive our business forward. Highly recommended for any industrial operation.",
      author: "Emily Davis",
      position: "Engineering Manager, Energy Solutions Ltd.",
      rating: 5
    }
  ]

  const clientLogos = [
    '🏢', '🏭', '🔬', '⚡', '⚙️', '🚗', '🏗️', '🔧', '📊', '🌍'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="relative py-24 bg-gradient-to-br from-[#0a174e] to-[#274690]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent-yellow">Clients</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide. Discover how we're helping 
              businesses achieve their manufacturing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're proud to serve clients across diverse industries, from technology 
              to manufacturing, energy to automotive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{client.logo}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(client.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                      {client.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {client.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <BuildingOfficeIcon className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {client.industry}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {client.description}
                </p>

                <div className="border-t border-gray-200 dark:border-dark-700 pt-4">
                  <blockquote className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                    "{client.testimonial}"
                  </blockquote>
                  <p className="text-sm font-medium text-primary-600">
                    {client.contact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real feedback from satisfied customers across industries
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card p-8 text-center"
            >
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowLeftIcon className="w-5 h-5 text-primary-600" />
              </motion.button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-primary-600'
                        : 'bg-gray-300 dark:bg-dark-600'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowRightIcon className="w-5 h-5 text-primary-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Partners Marquee */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Authorized Partners</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are proud to collaborate with our authorized partners for quality and reliability.
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-16"
            >
              {[
                'partner1.png',
                'partner2.png',
                'partner3.png',
                'partner4.png',
                'partner5.png',
                'partner6.png',
                'partner7.png',
                'partner8.png',
                'partner9.png',
                'vkmdlogo.png'
              ].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 bg-gray-100 dark:bg-dark-800 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`/${img}`}
                    alt={`Partner ${index + 1}`}
                    className="max-h-16 max-w-[80%] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
  <section className="section-padding bg-gradient-to-br from-[#0a174e] to-[#274690]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how VKMD has helped our clients achieve their manufacturing 
              goals through detailed case studies and success stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
              >
                <ChartBarIcon className="w-5 h-5" />
                <span>View Case Studies</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>Become a Client</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Clients
