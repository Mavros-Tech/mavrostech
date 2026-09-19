import { Link } from 'react-router-dom'
import { navItems } from './Navbar'

export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="foot-grid">
                    <div>
                        <Link to="/#top" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <img src="/assets/logo.svg" alt="Mavros Logo" style={{ height: '32px', width: 'auto', display: 'block' }} />
                            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>MAVROS</span>
                        </Link>
                        <p className="muted" style={{ maxWidth: '280px', fontSize: '14px' }}>AI development and premium website development — building intelligent applications and digital experiences.</p>
                    </div>
                    <div className="col">
                        <div className="col-h">Site</div>
                        {navItems.map(item => (
                            <Link key={item.label} to={item.to}>{item.label}</Link>
                        ))}
                        <Link to="/#contact">Let's talk</Link>
                    </div>
                    <div className="col">
                        <div className="col-h">Contact</div>
                        <a href="mailto:official@mavrostech.in">official@mavrostech.in</a>
                    </div>
                </div>
                <div className="foot-bottom">
                    <span>© 2026 MAVROS. All rights reserved.</span>
                    <div className="socials">
                        <a href="https://www.linkedin.com/company/mavros-tech/" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/mavrostech.in/" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}
