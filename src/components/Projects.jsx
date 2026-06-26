import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const projectData = [
  {
    title: 'JARVIS - Voice-Controlled AI OS',
    description: 'A real-time AI assistant capable of voice commands, system automation, and intelligent task execution with wake-word detection.',
    tech: ['Python', 'FastAPI', 'WebSockets', 'GenAI'],
    year: '2026'
  },
  {
    title: 'SmartPantryAI',
    description: 'AI-powered pantry app with camera-based item detection, real-time Firebase tracking, and smart validation of food items.',
    tech: ['Flutter', 'Firebase', 'YOLOv8', 'AI'],
    year: '2025'
  },
  {
    title: 'TravelGuideAI',
    description: 'AI-powered travel assistant recommending tourist places and food based on user preferences using semantic search.',
    tech: ['Python', 'Embeddings', 'RAG', 'GenAI'],
    year: '2025'
  },
  {
    title: 'ATS Resume Analyzer',
    description: 'An ATS-based resume scoring system that evaluates resumes and generates improvement suggestions via AI.',
    tech: ['Python', 'Flask', 'Google GenAI'],
    year: '2025'
  },
  {
    title: 'Jarvis Chatbot',
    description: 'A domain-specific AI chatbot answering questions strictly related to Physics and Chemistry using prompt engineering.',
    tech: ['Python', 'Generative AI', 'HTML/CSS/JS'],
    year: '2025'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">MY WORK</h2>
          <h3 className="big-heading">Featured <span className="text-gradient">Projects</span></h3>
        </motion.div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: 5, 
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)' 
              }}
            >
              <div className="project-year">{project.year}</div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href="#" className="icon-link"><Github size={20} /></a>
                <a href="#" className="icon-link"><ExternalLink size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
