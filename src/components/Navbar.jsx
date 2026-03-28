import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(targetId)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">Portfolio</div>
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                <a href="#education" onClick={(e) => handleNavClick(e, '#education')}>Education</a>
                <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            </div>
            <a
                href="https://drive.google.com/file/d/1LbwlxX-ogcwQ-x95nKoa3gXx_T1oM7W0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-btn"
            >
                Resume
            </a>
        </nav>
    )
}
