import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './Experience.css';

const educationData = [
  {
    type: 'Education',
    title: 'B.Tech in Artificial Intelligence and Machine Learning',
    organization: 'Vishnu Institute of Technology',
    location: 'Bhimavaram, Andhra Pradesh',
    date: 'Aug 2024 - Present',
    score: 'CGPA: 9.45',
    icon: <GraduationCap size={24} />
  },
  {
    type: 'Education',
    title: 'Intermediate (12th Grade)',
    organization: 'Narayana Junior College',
    location: 'Visakhapatnam, Andhra Pradesh',
    date: '2022 - 2024',
    score: '97.9%',
    icon: <BookOpen size={24} />
  }
];

const certificationData = [
  {
    type: 'Certification',
    title: 'Java Programming',
    organization: 'Swayam - NPTEL',
    date: '2025',
    icon: <Award size={24} />
  },
  {
    type: 'Certification',
    title: 'Python Programming',
    organization: 'Infosys Springboard',
    date: '2025',
    icon: <Award size={24} />
  },
  {
    type: 'Certification',
    title: 'GenAI',
    organization: 'Data Valley',
    date: '2025',
    icon: <Award size={24} />
  }
];

const Timeline = ({ data }) => (
  <div className="timeline">
    {data.map((item, index) => (
      <motion.div 
        key={index} 
        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="timeline-icon glow-blue">
          {item.icon}
        </div>
        <div className="timeline-content glass">
          <span className="timeline-date">{item.date}</span>
          <h4 className="timeline-title">{item.title}</h4>
          <p className="timeline-org">{item.organization}</p>
          {item.location && <p className="timeline-loc">{item.location}</p>}
          {item.score && <span className="timeline-score">{item.score}</span>}
        </div>
      </motion.div>
    ))}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">MY JOURNEY</h2>
          <h3 className="big-heading">Education</h3>
        </motion.div>
        
        <Timeline data={educationData} />

        <motion.div 
          className="experience-header"
          style={{ marginTop: '100px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="big-heading">Certifications & Courses</h3>
        </motion.div>
        
        <Timeline data={certificationData} />
      </div>
    </section>
  );
};

export default Experience;
