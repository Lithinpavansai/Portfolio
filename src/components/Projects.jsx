import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, Zap, Terminal as TerminalIcon } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsList = [
        {
            title: 'SchemaForge — AI Schema Generation Platform',
            badge: 'AI & Systems Design',
            keyMetric: 'Consolidated 5 LLM calls into 1 Single-Pass Pipeline',
            bullets: [
                'Built a single-pass LLM pipeline (Intent Extraction → System Design → Schema Generation → Refinement) that converts natural language into UI, API, DB, and Auth schemas in one JSON output; consolidated from 5 separate LLM calls into 1.',
                'Built a runtime validator (0–100 score, 6 structural checks) and tested it against 23 prompts (standard + adversarial: contradictions, prompt injection, non-English, malformed input), reaching 100% completion at 84/100 avg score; manual review of 3 outputs caught a real bug — auto-generated business rules contradicting API endpoint permissions.',
                'Manually audited 3 generated schemas end-to-end; found a cross-layer bug where auto-generated business rules restricted an endpoint to Admin-only while the endpoint config itself correctly allowed Customer access — confirmed the validator\'s role-consistency check was catching a real inconsistency, not a false positive.'
            ],
            tech: ['FastAPI', 'Next.js', 'Groq API', 'Pydantic v2', 'Render', 'Vercel'],
            github: 'https://github.com/Lithinpavansai',
            demo: 'https://schemaforge-ai.vercel.app/',
            terminalTitle: 'schemaforge_pipeline.json',
            terminalContent: `{
  "pipeline": "SINGLE_PASS_CONSOLIDATION",
  "llm_calls_reduced": "5 -> 1 single JSON stream",
  "stages": [
    "Intent Extraction", 
    "System Design", 
    "Schema Generation", 
    "Refinement"
  ],
  "outputs": ["UI Schema", "REST API", "DB Model", "Auth/RBAC"],
  "runtime_validator": {
    "score": 84,
    "structural_checks": "6/6 PASSED",
    "adversarial_tests": "23/23 completed (100%)",
    "role_consistency_audit": "PASSED (No permission collisions)"
  }
}`
        },
        {
            title: 'Distributed Notification Engine',
            badge: 'Distributed Systems & Concurrency',
            keyMetric: '~1,058 jobs/sec | 8,153 → 0 Aborts',
            bullets: [
                'Built an at-least-once notification dispatch pipeline with atomic Lua-based rate-limiting and idempotency locking, a three-state duplicate-send guard (SENDING/SENT) with fencing-token reconciliation to close race conditions under concurrent worker claims, and automatic dead-letter escalation to PostgreSQL after exhausted contention retries.',
                'Replaced ARQ\'s default job-claiming path with a custom atomic Lua script, eliminating cross-worker WatchError contention (8,153 → 0 aborts at 4-way concurrency), and scaled sustained throughput to ~1,058 jobs/sec across 4 worker processes — root-caused via isolated benchmarking to Windows/Docker socket overhead rather than app logic or Redis capacity.'
            ],
            tech: ['Python', 'FastAPI', 'Redis (Lua)', 'PostgreSQL', 'ARQ', 'Locust'],
            github: 'https://github.com/Lithinpavansai/Distributed-Notification-Engine',
            demo: '#',
            terminalTitle: 'locust_benchmark.log',
            terminalContent: `$ locust -f benchmark_dispatch.py --users 500 --spawn-rate 50
[INFO] Atomic Lua Idempotency Lock: ACTIVE
[INFO] Fencing Token Reconciliation: 0 Race Conditions
[INFO] Cross-worker WatchError: 8,153 -> 0 ABORTS (100% resolved)
--------------------------------------------------------------------
Concurrency: 4 worker processes (ARQ + custom Lua claim)
Sustained Throughput: 1,058.4 req/sec
Dead-letter Escalation: 0 unhandled (Automated PostgreSQL sync)
Status: BENCHMARK COMPLETED (0% Failure Rate)`
        },
        {
            title: 'SQL Query RL Environment',
            badge: 'Reinforcement Learning & AI',
            keyMetric: '1.0 Score across all 3 tiers in 14.8s',
            bullets: [
                'Built an OpenEnv-compatible RL environment where AI agents debug and optimize broken SQL queries against a live SQLite database, deployed on HuggingFace Spaces.',
                'Designed deterministic graders across 3 difficulty tiers (Easy / Medium / Hard) with partial reward signals; baseline LLM agent scored 1.0 on all tasks in 14.8 seconds.'
            ],
            tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'Pydantic', 'HuggingFace Spaces', 'OpenAI API'],
            github: 'https://github.com/Lithinpavansai/sql-query-env',
            demo: '#',
            terminalTitle: 'sql_rl_gym_eval.py',
            terminalContent: `$ python evaluate_rl_env.py --env SqlQueryRL-v0 --db live_sqlite.db
[INIT] OpenEnv wrapper initialized on HuggingFace Spaces
[TEST-SUITE]:
  -> Tier 1 (Easy): Syntax repair & table aliases      [SCORE: 1.0/1.0]
  -> Tier 2 (Medium): Multi-table JOIN optimizations   [SCORE: 1.0/1.0]
  -> Tier 3 (Hard): Window functions & subquery locks  [SCORE: 1.0/1.0]
[BENCHMARK RESULT]:
  Reward Signal: Partial + Deterministic
  LLM Agent Final Score: 1.0 (All tasks solved in 14.8s)`
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header-wrap">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="section-subtitle">
                        Architecting high-concurrency backend engines, AI evaluation platforms, and production-grade LLM pipelines.
                    </p>
                </div>

                <div className="projects-list-vertical">
                    {projectsList.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={index}
                                className="project-row-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className={`project-row ${isEven ? 'even-row' : 'odd-row'}`}>
                                    {/* Details Column */}
                                    <div className="project-details-col">
                                        <div className="project-header-meta">
                                            <span className="project-category-badge">{project.badge}</span>
                                            <div className="project-key-metric">
                                                <Zap size={13} className="metric-icon" />
                                                <span>{project.keyMetric}</span>
                                            </div>
                                        </div>

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
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.96 }}
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="btn-outline-cyber"
                                                >
                                                    <Github size={16} />
                                                    <span>GitHub Repository</span>
                                                </motion.a>
                                            )}
                                            {project.demo !== '#' && (
                                                <motion.a 
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.96 }}
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
                                                <div className="terminal-tab-info">
                                                    <TerminalIcon size={12} style={{ color: 'var(--accent-primary)' }} />
                                                    <span className="terminal-tab-title">{project.terminalTitle}</span>
                                                </div>
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

