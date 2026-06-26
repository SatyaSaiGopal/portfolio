import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`navbar ${scrolled ? 'scrolled glass' : ''}`}
    >
      <div className="nav-content">
        <div className="logo">
          <span className="text-gradient">Satya</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">01. Home</a></li>
          <li><a href="#about">02. About</a></li>
          <li><a href="#projects">03. Projects</a></li>
          <li><a href="#experience">04. Experience</a></li>
          <li><a href="#contact">05. Contact</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn-primary glow-purple">Let's Talk</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
