import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <motion.div 
                    className="about-content section-glass"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-text">
                        <h3 className="text-gradient">Bridging Backend Engineering, Developer Support & Solutions</h3>
                        <p>
                            I am a Computer Science graduate (B.Tech, Cybersecurity, 2026) with hands-on backend experience in Python, FastAPI, REST APIs, PostgreSQL, Redis, and Docker, seeking Developer Support and Solutions Engineering roles. I diagnose auth, deployment, and concurrency failures and explain the fix in plain language.
                        </p>
                        <p>
                            From eliminating cross-worker contention in distributed notification engines and diagnosing live cloud deployment timeouts to validating multi-stage AI schema generation pipelines, I focus on system reliability, observable performance, and actionable root-cause analysis.
                        </p>

                        <div className="about-stats">
                            <motion.div 
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4 className="text-gradient">3+</h4>
                                <span>Years coding</span>
                            </motion.div>
                            <motion.div 
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4 className="text-gradient">10+</h4>
                                <span>Projects Built</span>
                            </motion.div>
                            <motion.div 
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h4 className="text-gradient">3+</h4>
                                <span>Cloud Certs</span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="about-image-container">
                        <motion.div 
                            className="about-image-wrapper"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="about-image-placeholder">
                                <Terminal size={80} style={{ color: 'var(--accent-primary)' }} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

