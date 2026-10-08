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
            teamContext: 'Agile team of 14 with mentor guidance',
            backendRepo: 'https://github.com/Lithinpavansai/jira_backend',
            liveDemo: '',
            bullets: [
                'With mentor guidance, built KIET Jira, a full-stack project management platform, in an Agile team of 14: REST API endpoints, authentication workflows, and database schema design.',
                'Implemented JWT-based authentication and RBAC across Admin, Manager, and Developer tiers; resolved CORS misconfiguration and bcrypt version compatibility issues; cut round-trip time through token caching.'
            ],
            tech: ['Python', 'FastAPI', 'REST APIs', 'JWT Auth', 'RBAC', 'PostgreSQL', 'Redis Token Caching', 'Agile']
        },
        {
            role: 'KIET Jira, Team Project (after internship)',
            company: 'KIET Group of Institutions',
            location: 'Kakinada, Andhra Pradesh',
            duration: 'Mar – Apr 2026',
            type: 'Team Project',
            project: 'KIET Jira — Cloud Deployment & Containerization',
            teamContext: '14-member team, no mentor support',
            backendRepo: 'https://github.com/Lithinpavansai/jira_backend',
            liveDemo: '',
            bullets: [
                'Independently deployed the frontend on Vercel and the backend on Render, with Supabase for storage.',
                'Containerized the full stack with Docker; diagnosed and fixed database connection timeouts in the deployed environment.'
            ],
            tech: ['Docker', 'Render', 'Vercel', 'Supabase (PostgreSQL)', 'FastAPI', 'Troubleshooting & Diagnostics']
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
                                        <span><strong>{item.project}</strong> {item.teamContext && <span style={{ opacity: 0.8, fontSize: '0.85rem', fontWeight: 'normal' }}>• {item.teamContext}</span>}</span>
                                    </span>
                                    <div className="timeline-links">
                                        {item.backendRepo && (
                                            <a 
                                                href={item.backendRepo} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="exp-link-pill"
                                            >
                                                <Github size={13} />
                                                <span>Backend Repo</span>
                                            </a>
                                        )}
                                        {item.liveDemo && (
                                            <a 
                                                href={item.liveDemo} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="exp-link-pill exp-live"
                                            >
                                                <ExternalLink size={13} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
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

