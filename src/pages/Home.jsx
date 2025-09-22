import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ChevronDownIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  CogIcon,
  TruckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  const [counters, setCounters] = useState({
    years: 0,
    products: 0,
    clients: 0
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const animateCounters = () => {
      const targets = { years: 25, products: 500, clients: 1000 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let current = { years: 0, products: 0, clients: 0 }
      const increment = {
        years: targets.years / steps,
        products: targets.products / steps,
        clients: targets.clients / steps
      }

      const timer = setInterval(() => {
        current.years = Math.min(current.years + increment.years, targets.years)
        current.products = Math.min(current.products + increment.products, targets.products)
        current.clients = Math.min(current.clients + increment.clients, targets.clients)

        setCounters({
          years: Math.floor(current.years),
          products: Math.floor(current.products),
          clients: Math.floor(current.clients)
        })

        if (current.years >= targets.years && current.products >= targets.products && current.clients >= targets.clients) {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.unobserve(entry.target)
        }
      })
    })

    const counterSection = document.getElementById('counter-section')
    if (counterSection) {
      observer.observe(counterSection)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: WrenchScrewdriverIcon,
      title: 'Fasteners',
      description: 'High-quality screws, bolts, nuts, and washers for all industrial applications.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BoltIcon,
      title: 'Electrical Components',
      description: 'Reliable electrical connectors, switches, and components for your projects.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: CogIcon,
      title: 'Hand Tools',
      description: 'Professional-grade hand tools designed for durability and precision.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TruckIcon,
      title: 'Machinery',
      description: 'Advanced machinery and equipment for manufacturing and production.',
      color: 'from-green-500 to-green-600'
    }
  ]

  const clients = [
    'Client A', 'Client B', 'Client C', 'Client D', 'Client E',
    'Client F', 'Client G', 'Client H', 'Client I', 'Client J'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
          style={{ backgroundImage: 'url(/bg.png)' }}
        />

        {/* Animated Heading & Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight animate__animated animate__fadeInDown">
              Welcome to <span className="text-yellow-400">VKMD</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-medium mb-8 animate__animated animate__fadeInUp">
              Leading manufacturer of industrial tools and equipment. <br className="hidden md:inline" />
              Empowering industries with innovation, quality, and reliability for over <span className="text-yellow-300 font-bold">25 years</span>.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#counter-section"
              className="inline-block bg-yellow-400 text-dark-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg md:text-xl"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Intro & Counters Section */}
  <section id="counter-section" className="section-padding bg-gradient-to-r from-[#232f45] to-[#232f45] dark:from-[#232f45] dark:to-[#232f45]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Industry Leaders for{' '}
              <span className="gradient-text">{counters.years}+ Years</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've been at the forefront of industrial manufacturing, delivering 
              innovative solutions and exceptional quality to businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Years of Excellence Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(33,150,243,0.15)' }}
              className="card rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white"
              style={{ backgroundColor: '#1565c0' }}
            >
              <span className="text-5xl font-extrabold mb-4 drop-shadow-lg">{counters.years}</span>
              <h3 className="text-2xl font-bold mb-2">Years of Excellence</h3>
              <p className="text-lg text-white/80">Decades of manufacturing expertise</p>
            </motion.div>

            {/* Products Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(33,150,243,0.15)' }}
              className="card rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white"
              style={{ backgroundColor: '#1976d2' }}
            >
              <span className="text-5xl font-extrabold mb-4 drop-shadow-lg">{counters.products}+</span>
              <h3 className="text-2xl font-bold mb-2">Products</h3>
              <p className="text-lg text-white/80">Comprehensive product catalog</p>
            </motion.div>

            {/* Happy Clients Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(33,150,243,0.15)' }}
              className="card rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white"
              style={{ backgroundColor: '#1565c0' }}
            >
              <span className="text-5xl font-extrabold mb-4 drop-shadow-lg">{counters.clients}+</span>
              <h3 className="text-2xl font-bold mb-2">Happy Clients</h3>
              <p className="text-lg text-white/80">Satisfied customers worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of industrial tools and equipment designed to meet 
              the diverse needs of modern manufacturing and construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're proud to serve industry leaders across various sectors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
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
              'partner9.png'
            ].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-44 h-24 bg-white dark:bg-[#232f45] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={`/${img}`}
                  alt={`Client ${index + 1}`}
                  className="max-h-20 max-w-[90%] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
  <section className="section-padding bg-gradient-to-r from-[#0a174e] to-[#274690]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download our comprehensive product catalog or schedule a consultation 
              with our expert team to discuss your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                href="/Vednat Enterprises & IT Solutions Profile (1).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Brochure</span>
                <ArrowRightIcon className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center space-x-2"
                as={undefined}
              >
                <a href="/contact" className="w-full h-full flex items-center justify-center">
                  <span>Book a Call</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
