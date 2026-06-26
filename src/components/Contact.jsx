import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Contact.css';

const Planet = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Core */}
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial color="#030014" emissive="#8a2be2" emissiveIntensity={0.2} wireframe={true} />
      </Sphere>
      {/* Outer Glow */}
      <Sphere args={[2.1, 16, 16]}>
        <meshBasicMaterial color="#00f0ff" wireframe={true} transparent opacity={0.1} />
      </Sphere>
      {/* Ring */}
      <Torus args={[3, 0.02, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
      </Torus>
    </group>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <h3 className="big-heading">Let's build something <br /><span className="text-gradient">amazing together.</span></h3>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>24pala4237@vishnu.edu.in</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 7382512524</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/SatyaSaiGopal" target="_blank" rel="noreferrer" className="social-icon">
                <Github />
              </a>
              <a href="https://linkedin.com/in/gollu-s-24629a317" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin />
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" rows="4" placeholder=" " required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="submit-btn glow-purple">Send Message &rarr;</button>
          </motion.form>
        </div>
      </div>

      <div className="contact-3d-bg">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Planet />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
