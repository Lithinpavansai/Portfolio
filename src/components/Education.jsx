import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="section-header-wrap">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Education
                    </motion.h2>
                    <p className="section-subtitle">
                        Academic background in Computer Science, Systems Security, and Software Engineering.
                    </p>
                </div>

                <div className="education-timeline">
                    <motion.div 
                        className="edu-item section-glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="edu-header">
                            <div className="edu-title-group">
                                <div className="edu-icon-wrap">
                                    <GraduationCap size={26} style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <h3 className="edu-degree">
                                        B. Tech — Computer Science & Engineering <span className="edu-specialization">(Cybersecurity)</span>
                                    </h3>
                                    <p className="edu-school">
                                        KIET Group of Institutions
                                        <span className="edu-location">
                                            <MapPin size={13} /> Kakinada, Andhra Pradesh
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="edu-meta-badges">
                                <div className="edu-date-badge">
                                    <Calendar size={13} />
                                    <span>Oct 2022 – April 2026</span>
                                </div>
                                <div className="edu-gpa-badge">
                                    <Award size={13} />
                                    <span>CGPA: <strong>7.54 / 10</strong></span>
                                </div>
                            </div>
                        </div>

                        <div className="edu-highlights">
                            <div className="edu-highlight-item">
                                <BookOpen size={15} className="highlight-icon" />
                                <span>Core Focus: Distributed Systems, Cloud Architecture, Cryptography & Network Security, Data Structures & Algorithms</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

