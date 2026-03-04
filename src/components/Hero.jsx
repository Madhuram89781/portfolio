import { useEffect, useRef, useState } from 'react'

const phrases = [
    '🤖 AI & ML Enthusiast',
    '📊 Data Science Explorer',
    '💻 Problem Solver',
    '🌟 Tech Innovator',
    '🐍 Python Developer'
]

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const heroRef = useRef(null)
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

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
                heroRef.current.style.opacity = Math.max(0, 1 - scrolled / 700)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <div className="profile-img">
                    <img src="/profile.jpg" alt="Sundara Madhu Ram" />
                </div>
                <h1 className="hero-name">Sundara Madhu Ram</h1>
                <div className="typing-text">
                    {displayText}<span className="cursor"></span>
                </div>
            </div>
            <div className="scroll-indicator">
                <i className="fas fa-chevron-down" style={{ fontSize: '2em', color: '#667eea' }}></i>
            </div>
        </header>
    )
}
