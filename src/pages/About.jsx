import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const timeline = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'VKMD was established with a vision to revolutionize industrial manufacturing.',
      icon: '🏭'
    },
    {
      year: '2005',
      title: 'First Major Contract',
      description: 'Secured our first major industrial contract, marking the beginning of rapid growth.',
      icon: '📈'
    },
    {
      year: '2010',
      title: 'International Expansion',
      description: 'Expanded operations to international markets, serving clients worldwide.',
      icon: '🌍'
    },
    {
      year: '2015',
      title: 'Innovation Center',
      description: 'Opened our state-of-the-art innovation and research center.',
      icon: '🔬'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented cutting-edge digital solutions and Industry 4.0 technologies.',
      icon: '💻'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to lead the industry with sustainable and innovative solutions.',
      icon: '🚀'
    }
  ]

  const whyChooseUs = [
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every product meets the highest standards.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ClockIcon,
      title: 'Fast Delivery',
      description: 'Efficient logistics and supply chain management for timely delivery worldwide.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge and technical expertise.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Innovation',
      description: 'Continuous research and development to bring cutting-edge solutions to market.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: LightBulbIcon,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed to meet your specific requirements and challenges.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: CheckCircleIcon,
      title: 'Customer Support',
      description: 'Dedicated support team available 24/7 to assist with any questions or concerns.',
      color: 'from-red-500 to-red-600'
    }
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
              About <span className="text-accent-yellow">VKMD</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Leading the future of industrial manufacturing with innovation, 
              quality, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 1998, VKMD has grown from a small local manufacturer to a 
                global leader in industrial tools and equipment. Our journey has been 
                driven by a passion for innovation and an unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Today, we serve clients across multiple continents, providing cutting-edge 
                solutions that power industries and drive progress. Our state-of-the-art 
                facilities and expert team ensure that every product meets the highest 
                standards of excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0a174e] to-[#274690] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To provide innovative, high-quality industrial solutions that empower 
                  businesses to achieve their goals and drive sustainable growth.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the global leader in industrial manufacturing, setting new 
                  standards for quality, innovation, and customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A timeline of key milestones that have shaped VKMD into the industry 
              leader it is today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-blue"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"></div>
                  </div>

                  {/* Year */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                    <div className="text-3xl font-bold text-primary-600">{item.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🏭</div>
                <h3 className="text-xl font-semibold">Modern Factory</h3>
                <p className="text-blue-100">State-of-the-art manufacturing facilities</p>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">👥</div>
                <h3 className="text-xl font-semibold">Expert Team</h3>
                <p className="text-green-100">Skilled professionals dedicated to excellence</p>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🔬</div>
                <h3 className="text-xl font-semibold">Innovation Lab</h3>
                <p className="text-purple-100">Cutting-edge research and development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to quality, 
              innovation, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
  <section className="section-padding bg-gradient-to-r from-[#0a174e] to-[#274690]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-6 italic">
              "Quality is not an act, it is a habit. At VKMD, we've made excellence 
              our daily practice for over 25 years."
            </blockquote>
            <p className="text-xl text-white/90">- VKMD Leadership Team</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
