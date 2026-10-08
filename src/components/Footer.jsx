import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="text-gradient">Lithin Pavan Sai Uddagiri</h3>
                        <p>Diagnosing auth, deployment, and concurrency failures — building robust backend systems, distributed architectures, and AI pipelines.</p>
                    </div>

                    <div className="footer-nav">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#certifications">Certifications</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="https://github.com/Lithinpavansai" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/lithinpavansai" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:lithinpavansai04@gmail.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Lithin Pavan Sai Uddagiri. All rights reserved.</p>
                    <p>Engineered with React & Modern Web Standards</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
