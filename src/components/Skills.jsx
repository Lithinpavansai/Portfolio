import { motion } from 'framer-motion';
import { Code2, Layers, Database, Cpu, Wrench, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code2 size={22} style={{ color: 'var(--accent-primary)' }} />,
            skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
        },
        {
            title: 'Frameworks & Libraries',
            icon: <Layers size={22} style={{ color: 'var(--accent-secondary)' }} />,
            skills: ['FastAPI', 'Flask', 'React.js', 'Node.js', 'Next.js', 'Pydantic']
        },
        {
            title: 'Databases & Cloud',
            icon: <Database size={22} style={{ color: 'var(--accent-primary)' }} />,
            skills: ['MySQL', 'PostgreSQL', 'SQLite', 'NoSQL (Redis)', 'GCP', 'Vercel', 'Render', 'Supabase', 'HuggingFace Spaces']
        },
        {
            title: 'AI / ML',
            icon: <Cpu size={22} style={{ color: 'var(--accent-secondary)' }} />,
            skills: ['LLMs', 'Groq API', 'OpenAI API', 'LLM Evaluation', 'Agentic Workflows']
        },
        {
            title: 'DevOps & Tools',
            icon: <Wrench size={22} style={{ color: 'var(--accent-primary)' }} />,
            skills: ['Docker', 'Git', 'REST APIs', 'Locust (load testing)', 'Agile']
        },
        {
            title: 'API & Debugging Concepts',
            icon: <ShieldAlert size={22} style={{ color: 'var(--accent-secondary)' }} />,
            skills: ['HTTP/REST', 'JWT auth', 'RBAC', 'Rate Limiting', 'Idempotency', 'Load Testing']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
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
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header-wrap">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Technical Skills
                    </motion.h2>
                    <p className="section-subtitle">
                        Core languages, frameworks, cloud infrastructures, and AI/ML toolchains I work with.
                    </p>
                </div>

                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            className="skill-card section-glass"
                            variants={cardVariants}
                            whileHover={{ y: -4, borderColor: 'var(--glass-border-hover)' }}
                        >
                            <div className="skill-card-top">
                                <div className="skill-icon-wrapper">
                                    <span className="skill-icon">{category.icon}</span>
                                </div>
                                <h3 className="skill-card-heading">{category.title}</h3>
                            </div>

                            <div className="skill-tags-list">
                                {category.skills.map((skill, i) => (
                                    <motion.span 
                                        key={i} 
                                        className="skill-tag-pill"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="skill-tag-dot"></span>
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

