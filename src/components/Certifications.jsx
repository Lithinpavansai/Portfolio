import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "Security Principles in Cloud Computing",
            issuer: "Google Cloud Skills Boost",
            category: "Cloud Security & Architecture",
            description: "Covers cloud defense-in-depth, IAM access control policies, VPC security perimeters, resource isolation, and cloud compliance.",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg",
            status: "Verified Credential",
            inProgress: false
        },
        {
            title: "Generative AI: Google Cloud (Modern Applications)",
            issuer: "Google Cloud / NEOSKILLZ Training",
            category: "Generative AI & LLM Systems",
            description: "Intensive training program (May 18 – Jun 18, 2026) focusing on modern application architectures with Google Cloud generative AI models, prompt engineering, and LLM orchestration.",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg",
            status: "Completed Training",
            inProgress: false
        },
        {
            title: "Google Cloud Cybersecurity Certificate",
            issuer: "Google Cloud",
            category: "Cybersecurity & Threat Mitigation",
            description: "Comprehensive program covering SIEM tools, network defense, threat detection, incident response, and Python-based security automation.",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg",
            status: "In Progress",
            inProgress: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <div className="section-header-wrap">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Certifications
                    </motion.h2>
                    <p className="section-subtitle">
                        Industry-recognized credentials in Cloud Computing, Security Principles, and Generative AI.
                    </p>
                </div>

                <motion.div 
                    className="cert-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div 
                            key={index} 
                            className="cert-card section-glass"
                            variants={cardVariants}
                            whileHover={{ y: -4, borderColor: 'var(--glass-border-hover)' }}
                        >
                            <div className="cert-card-header">
                                <div className="cert-icon-circle">
                                    <img 
                                        src={cert.icon} 
                                        alt={cert.issuer} 
                                        className="cert-logo-img"
                                        onError={(e) => { 
                                            e.target.style.display = 'none'; 
                                            e.target.nextElementSibling.style.display = 'flex'; 
                                        }} 
                                    />
                                    <div className="cert-icon-fallback" style={{ display: 'none' }}>
                                        <Award size={24} style={{ color: 'var(--accent-primary)' }} />
                                    </div>
                                </div>
                                
                                <div className={`cert-status-badge ${cert.inProgress ? 'in-progress' : ''}`}>
                                    {cert.inProgress ? <Clock size={13} /> : <CheckCircle2 size={13} />}
                                    <span>{cert.status}</span>
                                </div>
                            </div>

                            <div className="cert-content">
                                <span className="cert-category-tag">{cert.category}</span>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer text-gradient">{cert.issuer}</p>
                                <p className="cert-desc">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

