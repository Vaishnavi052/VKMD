import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      content: '123 Industrial Park, Manufacturing District, City, State 12345',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'info@vkmd.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:00 AM - 6:00 PM',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'YouTube', url: '#', icon: '📺' }
  ]

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
              Get in <span className="text-accent-yellow">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to discuss your industrial needs? Contact our expert team 
              for personalized solutions and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reach out to us through any of these channels. Our team is ready 
              to assist you with your industrial needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-8 text-center"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Find Us on the <span className="gradient-text">Map</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Visit our headquarters or get directions to our facility.
              </p>

              {/* Google Maps Embed */}
              <div className="card p-4">
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Google Maps integration would be here
                    </p>
                    <div className="bg-white dark:bg-dark-700 rounded-lg p-4 text-sm">
                      <p className="font-medium">VKMD Headquarters</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Industrial Park<br />
                        Manufacturing District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Emergency support available
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Connect With <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, industry insights, 
              and behind-the-scenes content.
            </p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-blue rounded-xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div> 
          </motion.div>
        </div>
      </section>
      */}

      {/* CTA Section */}
  <section className="section-padding bg-gradient-to-r from-[#162a6a] to-[#1a2c5b]">
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
              Let's discuss how VKMD can help you achieve your industrial 
              manufacturing goals. Contact us today for a consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call Now</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Email Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
  </section>
    </div>
  )
}

export default Contact
