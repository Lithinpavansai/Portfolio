import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Shield, Cloud, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="hero-greeting text-gradient">Hello, I am</p>
                    <h1 className="hero-title">
                        <span className="text-bright">Lithin Pavan Sai Uddagiri</span><br />
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                2000,
                                'Cloud Security Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-gradient"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="hero-subtitle">
                        B.Tech Graduate in Computer Science & Engineering (Cybersecurity). I design secure, scalable architectures and develop high-performance AI & cloud applications.
                    </p>
                    <div className="hero-cta">
                        <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects" 
                            className="button-primary"
                        >
                            View My Work
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Lithin_resume.docx" 
                            download="Lithin_resume.docx" 
                            className="button-outline" 
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        >
                            <Download size={18} /> Download CV
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact" 
                            className="button-outline"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                    
                    <motion.div 
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.03 }}
                            href="https://github.com/Pavansailithen" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.03 }}
                            href="https://linkedin.com/in/lithinpavansai" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="visual-circle">
                        <div className="visual-core"></div>
                        <div className="orbit orbit-1"></div>
                        <div className="orbit orbit-2"></div>
                        
                        <motion.div 
                            className="floating-badge badge-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.03, border: '1px solid var(--accent-primary)' }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            <Shield size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span>Security</span>
                        </motion.div>
                        
                        <motion.div 
                            className="floating-badge badge-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            whileHover={{ scale: 1.03, border: '1px solid var(--accent-secondary)' }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            <Cloud size={16} style={{ color: 'var(--accent-secondary)' }} />
                            <span>Cloud</span>
                        </motion.div>
                        
                        <motion.div 
                            className="floating-badge badge-3"
                            animate={{ y: [-10, 0, -10] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            whileHover={{ scale: 1.03, border: '1px solid var(--accent-primary)' }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span>AI / ML</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

