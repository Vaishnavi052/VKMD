import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeProvider from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import TenderingServices from './pages/TenderingServices'
import Career from './pages/Career'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

function App() {
  // Removed initial loading screen

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Navbar />
          <main className="pt-16">
            <ScrollToTop behavior="instant" />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/tendering-services" element={<TenderingServices />} />
                <Route path="/career" element={<Career />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
