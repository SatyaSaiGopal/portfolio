import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './About.css';

const Core = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 2]} scale={1.2}>
      <MeshDistortMaterial
        color="#ff00ff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.9}
        wireframe={true}
      />
    </Icosahedron>
  );
};

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Three.js'] },
  { category: 'Backend', items: ['Python', 'Java', 'Flask', 'FastAPI'] },
  { category: 'AI & GenAI', items: ['Generative AI', 'Embeddings', 'RAG', 'Prompt Engineering', 'YOLOv8'] },
  { category: 'Tools', items: ['Git/GitHub', 'VS Code', 'Android Studio', 'Firebase'] },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ABOUT ME</h2>
          <h3 className="big-heading">Crafting digital experiences that make an <span className="text-gradient">impact.</span></h3>
          <p className="description">
            I'm an AI & ML Engineering student with a passion for building intelligent systems and immersive web applications. From real-time autonomous voice agents to full-stack scalable web solutions, I love solving complex problems with beautiful, intuitive code.
          </p>
        </motion.div>

        <div className="about-content">
          <div className="about-3d">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Core />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx} 
                className="skill-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 0 20px rgba(138, 43, 226, 0.4)' }}
              >
                <h4>{skillGroup.category}</h4>
                <p>{skillGroup.items.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
