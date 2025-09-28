import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Topbar from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

import Water from './pages/Services/Water';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/Projects/ProjectDetail';

import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/services/water" element={<Water />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
