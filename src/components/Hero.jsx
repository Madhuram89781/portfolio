import { useEffect, useRef, useState } from 'react'

const phrases = [
    'Problem Solver',
    'AI & ML Enthusiast',
    'Data Science Explorer',
    'Tech Innovator',
    'Python Developer'
]

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const phraseIndexRef = useRef(0)
    const charIndexRef = useRef(0)
    const isDeletingRef = useRef(false)

    useEffect(() => {
        let timeout

        function type() {
            const currentPhrase = phrases[phraseIndexRef.current]

            if (isDeletingRef.current) {
                charIndexRef.current--
                setDisplayText(currentPhrase.substring(0, charIndexRef.current))
            } else {
                charIndexRef.current++
                setDisplayText(currentPhrase.substring(0, charIndexRef.current))
            }

            if (!isDeletingRef.current && charIndexRef.current === currentPhrase.length) {
                timeout = setTimeout(() => {
                    isDeletingRef.current = true
                    timeout = setTimeout(type, 50)
                }, 2000)
                return
            } else if (isDeletingRef.current && charIndexRef.current === 0) {
                isDeletingRef.current = false
                phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length
            }

            const speed = isDeletingRef.current ? 50 : 100
            timeout = setTimeout(type, speed)
        }

        type()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <section className="hero-section" id="home">
            <div className="hero-grid">
                <div className="hero-left">
                    <span className="hero-eyebrow">Engineered for Intelligence</span>
                    <h1 className="hero-name">
                        Sundara Madhu <span className="accent">Ram</span>
                    </h1>
                    <p className="hero-subtitle">
                        {displayText}<span className="typing-cursor">|</span>
                        <br />
                        Architecting data-driven solutions and neural architectures for the next generation of computing.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-outline">Get in Touch</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src="/profile.jpg" alt="Sundara Madhu Ram" />
                    <div className="hero-image-overlay"></div>
                </div>
            </div>
            <style>{`
                .typing-cursor {
                    display: inline-block;
                    color: #4cd6ff;
                    animation: blink 0.7s infinite;
                    font-weight: 300;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </section>
    )
}
