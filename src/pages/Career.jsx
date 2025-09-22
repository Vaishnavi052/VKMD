import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Career = () => {
  const [counters, setCounters] = useState({
    teamSize: 0,
    avgExp: 0
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { teamSize: 150, avgExp: 8 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let current = { teamSize: 0, avgExp: 0 }
      const increment = {
        teamSize: targets.teamSize / steps,
        avgExp: targets.avgExp / steps
      }

      const timer = setInterval(() => {
        current.teamSize = Math.min(current.teamSize + increment.teamSize, targets.teamSize)
        current.avgExp = Math.min(current.avgExp + increment.avgExp, targets.avgExp)

        setCounters({
          teamSize: Math.floor(current.teamSize),
          avgExp: Math.floor(current.avgExp)
        })

        if (current.teamSize >= targets.teamSize && current.avgExp >= targets.avgExp) {
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

  const whyWorkWithUs = [
    {
      icon: HeartIcon,
      title: 'Great Culture',
      description: 'Inclusive and supportive work environment that values every team member.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Work on cutting-edge projects and contribute to industry advancements.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Growth',
      description: 'Continuous learning opportunities and career development programs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Impact',
      description: 'Make a real difference in industries that power the world.',
      color: 'from-green-500 to-green-600'
    }
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Mechanical Engineer',
      department: 'Engineering',
      location: 'Headquarters',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead mechanical design projects and mentor junior engineers.',
      requirements: ['Mechanical Engineering degree', 'CAD proficiency', 'Project management skills']
    },
    {
      id: 2,
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      location: 'Manufacturing Plant',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure product quality standards and implement quality control processes.',
      requirements: ['Quality management experience', 'ISO standards knowledge', 'Attention to detail']
    },
    {
      id: 3,
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build relationships with clients and drive sales growth.',
      requirements: ['Sales experience', 'Technical knowledge', 'Communication skills']
    },
    {
      id: 4,
      title: 'Software Developer',
      department: 'IT',
      location: 'Headquarters',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop software solutions for industrial automation and control systems.',
      requirements: ['Programming skills', 'Industrial systems knowledge', 'Problem-solving ability']
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
              Join Our <span className="text-accent-yellow">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Build your career with a company that's shaping the future of 
              industrial manufacturing and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Quote */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build Your <span className="gradient-text">Future</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At VKMD, we believe that our people are our greatest asset. We're looking 
                for passionate, talented individuals who want to make a difference in the 
                world of industrial manufacturing.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Join a team that values innovation, collaboration, and continuous learning. 
                Together, we're building the future of industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-2xl p-8 text-gray-900"
            >
              <blockquote className="text-2xl font-semibold mb-4 italic">
                "The best way to predict the future is to invent it. At VKMD, 
                we're not just building products – we're building tomorrow."
              </blockquote>
              <p className="text-lg font-medium">- VKMD Leadership</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}

      {/* Job Openings */}

      {/* Apply Form */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Apply for a <span className="gradient-text">Position</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to join our team? Submit your application and let's start 
                building the future together.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
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
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter position you are applying for"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Submit Application
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Counters */}
  <section id="counter-section" className="section-padding bg-gradient-to-r from-[#0a174e] to-[#274690]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-4">{counters.teamSize}+</div>
              <div className="text-xl">Team Members</div>
              <p className="text-white/80 mt-2">Dedicated professionals worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-4">{counters.avgExp}+</div>
              <div className="text-xl">Years Average Experience</div>
              <p className="text-white/80 mt-2">Collective expertise and knowledge</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
