import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Shield, Cloud, Server, Terminal, CheckCircle2 } from 'lucide-react';
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
                    {/* Status Badge */}
                    <div className="hero-status-container">
                        <div className="status-badge">
                            <span className="status-dot"></span>
                            <span className="status-text">Available Immediately</span>
                        </div>
                        <div className="hero-location">
                            <MapPin size={14} className="location-icon" />
                            <span>Visakhapatnam, India</span>
                        </div>
                    </div>

                    <h1 className="hero-title">
                        <span className="hero-greeting">Hi, I'm</span>{' '}
                        <span className="text-bright font-bold">Lithin Pavan Sai Uddagiri</span>
                        <br />
                        <span className="hero-role-wrapper">
                            <TypeAnimation
                                sequence={[
                                    'Backend Developer',
                                    2200,
                                    'Distributed Systems Engineer',
                                    2200,
                                    'Software Developer',
                                    2200,
                                    'Cloud & Security Enthusiast',
                                    2200,
                                ]}
                                wrapper="span"
                                speed={45}
                                className="text-gradient"
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className="hero-subtitle">
                        B.Tech in Computer Science & Engineering (Cybersecurity). Specializing in high-throughput distributed systems, atomic concurrency control, production-grade LLM pipelines, and resilient cloud architectures.
                    </p>

                    <div className="hero-cta">
                        <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            href="#projects" 
                            className="button-primary"
                        >
                            <span>Explore Projects</span>
                            <ArrowRight size={17} style={{ marginLeft: '0.4rem' }} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            href="#contact" 
                            className="button-outline"
                        >
                            <span>Get In Touch</span>
                        </motion.a>
                    </div>
                    
                    <motion.div 
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.05 }}
                            href="https://github.com/Lithinpavansai" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.05 }}
                            href="https://linkedin.com/in/lithinpavansai" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.05 }}
                            href="mailto:lithinpavansai04@gmail.com" 
                            className="social-icon" 
                            aria-label="Email"
                        >
                            <Mail size={20} />
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
                        <div className="visual-core">
                            <Terminal size={38} className="core-icon" />
                        </div>
                        <div className="orbit orbit-1"></div>
                        <div className="orbit orbit-2"></div>
                        
                        <motion.div 
                            className="floating-badge badge-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, border: '1px solid var(--accent-primary)' }}
                        >
                            <Shield size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span>Cybersecurity</span>
                        </motion.div>
                        
                        <motion.div 
                            className="floating-badge badge-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            whileHover={{ scale: 1.05, border: '1px solid var(--accent-secondary)' }}
                        >
                            <Cloud size={16} style={{ color: 'var(--accent-secondary)' }} />
                            <span>Distributed Cloud</span>
                        </motion.div>

                        <motion.div 
                            className="floating-badge badge-3"
                            animate={{ y: [-10, 0, -10] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            whileHover={{ scale: 1.05, border: '1px solid var(--accent-primary)' }}
                        >
                            <Server size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span>Backend Developer</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

