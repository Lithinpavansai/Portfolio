import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsList = [
        {
            title: 'SchemaForge — AI Schema Generation Platform',
            bullets: [
                'Built a 4-stage LLM pipeline (Intent Extraction → System Design → Schema Generation → Refinement) converting natural language into production-ready UI, API, DB, and Auth schemas with a Validation + Repair Engine that auto-fixes broken layers.',
                'Designed a runtime executability validator (0-100 score) and a 20-prompt evaluation framework achieving 92% success rate, tracking latency and failure types across normal and edge case inputs.'
            ],
            tech: ['FastAPI', 'Next.js', 'Groq API', 'Pydantic v2', 'Render', 'Vercel'],
            github: '#',
            demo: 'https://schemaforge-ai.vercel.app/',
            terminalTitle: 'schemaforge_pipeline.json',
            terminalContent: `{
  "intent": "generate_user_db_and_auth",
  "pipeline_stages": {
    "1_intent_extraction": "COMPLETED",
    "2_system_design": "COMPLETED",
    "3_schema_generation": "COMPLETED",
    "4_refinement": "COMPLETED"
  },
  "validation_engine": {
    "executability_score": 98,
    "status": "VALID",
    "auto_repairs": 0
  }
}`
        },
        {
            title: 'Logrix — AI Log Analysis Platform',
            bullets: [
                'Built a full-stack log analysis API that sends raw application logs through a Groq LLM pipeline (llama-3.3-70b-versatile) returning structured diagnostics (error summary, root cause, fix suggestion, severity, affected services) with X-API-Key authentication, Pydantic v2 validation, CORS whitelisting, and Supabase persistence.',
                'Designed a 75/25 split layout with auto-scroll to results, live API health monitoring, and real-time clock — deployed on Vercel with environment-scoped API key injection.'
            ],
            tech: ['FastAPI', 'Next.js', 'Groq API', 'Supabase', 'Pydantic v2', 'Render', 'Vercel'],
            github: '#',
            demo: 'https://logrix.vercel.app',
            terminalTitle: 'logrix_daemon.log',
            terminalContent: `$ logrix --analyze logfile.log
[CRITICAL] Database connection timeout after 5000ms.
[DIAGNOSTICS]:
  -> Root Cause: pool size exhaustion
  -> Fix: Increase max connections in Supabase dashboard
  -> Severity: High (Impacts User Auth API)
[STATUS]: Report cached & synced to DB.`
        },
        {
            title: 'SQL Query RL Environment',
            bullets: [
                'Built an OpenEnv-compatible RL environment where AI agents debug and optimize broken SQL queries against a live SQLite database, deployed on HuggingFace Spaces.',
                'Designed deterministic graders across 3 difficulty tiers (Easy / Medium / Hard) with partial reward signals; baseline LLM agent scored 1.0 on all tasks in 14.8 seconds.'
            ],
            tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'Pydantic', 'HuggingFace Spaces', 'OpenAI API'],
            github: 'https://github.com/Pavansailithen/sql-query-env',
            demo: '#',
            terminalTitle: 'train_rl_agent.py',
            terminalContent: `$ python train_rl_agent.py --env SqlQueryRL-v0
Setting environment: SQLite database (live)
Agent initialized: PPO Policy Network
[TRAINING]:
  Episode 50:  Avg Reward = -0.45
  Episode 100: Avg Reward = +0.72
  Episode 150: Avg Reward = +1.00 (Goal Met)
Agent execution completed in 14.8 seconds.`
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-list-vertical">
                    {projectsList.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            /* Inner card box for each project row */
                            <motion.div 
                                key={index}
                                className="project-row-card"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className={`project-row ${isEven ? 'even-row' : 'odd-row'}`}>
                                    {/* Details Column */}
                                    <div className="project-details-col">
                                        <h3 className="project-row-title text-gradient">{project.title}</h3>
                                        <ul className="project-row-bullets">
                                            {project.bullets.map((bullet, i) => (
                                                <li key={i} className="project-row-bullet-item">
                                                    <ChevronRight size={16} className="bullet-chevron" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="project-row-tech">
                                            {project.tech.map((item, i) => (
                                                <span key={i} className="project-row-tech-badge">{item}</span>
                                            ))}
                                        </div>
                                        <div className="project-row-links">
                                            {project.github !== '#' && (
                                                <motion.a 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="btn-outline-cyber"
                                                >
                                                    <Github size={16} />
                                                    <span>Source Code</span>
                                                </motion.a>
                                            )}
                                            {project.demo !== '#' && (
                                                <motion.a 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    href={project.demo} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="btn-primary-cyber"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Visual/Terminal Column */}
                                    <div className="project-visual-col">
                                        <div className="mock-terminal">
                                            <div className="terminal-header">
                                                <div className="terminal-dots">
                                                    <span className="dot dot-red"></span>
                                                    <span className="dot dot-yellow"></span>
                                                    <span className="dot dot-green"></span>
                                                </div>
                                                <span className="terminal-tab-title">{project.terminalTitle}</span>
                                            </div>
                                            <div className="terminal-body">
                                                <pre><code>{project.terminalContent}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;

