import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  WrenchScrewdriverIcon,
  BoltIcon,
  CogIcon,
  TruckIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  EyeIcon,
  XMarkIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'All Products', icon: '🔧' },
    { id: 'fasteners', name: 'Fasteners', icon: '🔩' },
    { id: 'electrical', name: 'Electrical', icon: '⚡' },
    { id: 'handtools', name: 'Hand Tools', icon: '🔨' },
    { id: 'machinery', name: 'Machinery', icon: '🏭' }
  ]

  const products = [
    {
      id: 1,
      name: 'High-Tensile Steel Bolts',
      image: 'product1.png',
      description: 'Premium grade steel bolts with exceptional strength and durability.'
    },
    {
      id: 2,
      name: 'Industrial Circuit Breakers',
      image: 'product2.png',
      description: 'Advanced circuit protection for industrial electrical systems.'
    },
    {
      id: 3,
      name: 'Precision Screwdrivers',
      image: 'product3.png',
      description: 'Professional-grade screwdrivers for precise applications.'
    },
    {
      id: 4,
      name: 'CNC Machining Center',
      image: 'product4.png',
      description: 'State-of-the-art CNC machine for precision manufacturing.'
    },
    {
      id: 5,
      name: 'Stainless Steel Nuts',
      image: 'product5.png',
      description: 'Corrosion-resistant nuts for harsh environments.'
    },
    {
      id: 6,
      name: 'LED Industrial Lights',
      image: 'product6.png',
      description: 'Energy-efficient LED lighting solutions for industrial spaces.'
    },
    {
      id: 7,
      name: 'Heavy-Duty Wrenches',
      image: 'product7.png',
      description: 'Industrial-strength wrenches for demanding applications.'
    },
    {
      id: 8,
      name: 'Automated Assembly Line',
      image: 'product8.png',
      description: 'Complete automated assembly system for mass production.'
    },
    {
      id: 9,
      name: 'Product 9',
      image: 'product9.png',
      description: 'Description for Product 9.'
    },
    {
      id: 10,
      name: 'Product 10',
      image: 'product10.png',
      description: 'Description for Product 10.'
    }
  ]

  const featuredProducts = products.filter(product => product.featured)

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.new - a.new
      case 'popular':
        return b.rating - a.rating
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''))
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''))
      default:
        return 0
    }
  })

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
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
              Our <span className="text-accent-yellow">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive range of industrial tools and equipment designed for 
              professionals who demand quality and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid - 10 Simple Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center group"
              >
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="mx-auto mb-4 h-24 object-contain"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <button
                  className="mt-2 text-blue-600 font-semibold underline hover:text-blue-800 transition-colors duration-200"
                  onClick={() => openModal(product)}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* VKMD Product Advantage Section */}
      <section className="section-padding bg-gradient-to-br from-[#0a174e] to-[#274690]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose VKMD Products?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every VKMD product is engineered for performance, reliability, and long-term value. Our commitment to quality ensures you get the best tools and equipment for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

  {/* ...existing code... */}

      {/* Product Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 max-w-lg w-full flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={`/${selectedProduct.image}`}
                alt={selectedProduct.name}
                className="mx-auto h-96 object-contain mb-4"
                style={{ maxHeight: '80vh' }}
              />
              <h2 className="text-2xl font-bold mb-2 text-center">{selectedProduct.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                {selectedProduct.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Products
