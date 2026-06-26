import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="subtitle">B.Tech in AI & ML | Full Stack Developer</p>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient">Satya Sai Gopal</span>
          </h1>
          <p className="hero-description">
            I build immersive 3D experiences, intelligent AI systems, and scalable web applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary glow-purple" style={{ padding: '14px 30px', fontSize: '1rem' }}>View My Work &rarr;</a>
            <a href="#contact" className="btn-secondary glass">Download CV &darr;</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-image-container">
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src={heroImg} 
            alt="Developer Avatar" 
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
