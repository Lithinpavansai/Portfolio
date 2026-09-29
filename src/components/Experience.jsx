import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experienceData = [
        {
            role: 'Software Developer Intern',
            company: 'KIET Group of Institutions',
            location: 'Kakinada, Andhra Pradesh',
            duration: 'Dec 2025 – Feb 2026',
            type: 'Internship',
            project: 'KIET Jira — Full-Stack Project Management Platform',
            backendRepo: 'https://github.com/Lithinpavansai',
            liveDemo: 'https://kiet-jira.vercel.app/',
            bullets: [
                'Contributed to backend development for KIET Jira — a full-stack project management platform — within an Agile team of 14, working on REST API endpoints, auth workflows, and DB schema design.',
                'Resolved critical deployment issues including CORS misconfiguration, bcrypt version compatibility, DB connection timeouts, and global exception handling; containerized full stack with Docker for cloud deployment.',
                'Implemented JWT-based auth UI and middleware logic with RBAC across Admin, Manager, and Developer tiers; optimized round-trip time through token caching and middleware optimization.'
            ],
            tech: ['FastAPI', 'Python', 'REST APIs', 'JWT & RBAC', 'Docker', 'PostgreSQL', 'Agile / Scrum']
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header-wrap">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Work Experience
                    </motion.h2>
                    <p className="section-subtitle">
                        Production engineering experience building full-stack platforms and optimizing backend reliability.
                    </p>
                </div>

                <div className="experience-timeline">
                    {experienceData.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="timeline-item section-glass"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-role">{item.role}</h3>
                                        <p className="timeline-company-name">
                                            {item.company}
                                            <span className="timeline-location-tag">
                                                <MapPin size={13} /> {item.location}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="timeline-badge-date">
                                        <Calendar size={14} />
                                        <span>{item.duration}</span>
                                    </div>
                                </div>

                                <div className="timeline-project-info">
                                    <span className="timeline-project-name">
                                        <Briefcase size={14} className="project-brief-icon" />
                                        Project: <strong>{item.project}</strong>
                                    </span>
                                    <div className="timeline-links">
                                        <a 
                                            href={item.backendRepo} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="exp-link-pill"
                                        >
                                            <Github size={13} />
                                            <span>Backend Repo</span>
                                        </a>
                                        <a 
                                            href={item.liveDemo} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="exp-link-pill exp-live"
                                        >
                                            <ExternalLink size={13} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>

                                <ul className="timeline-list">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={16} className="exp-bullet-icon" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="timeline-tech-stack">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="exp-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

