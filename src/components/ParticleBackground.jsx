import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.left = Math.random() * 100 + '%'
            particle.style.animationDelay = Math.random() * 20 + 's'
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
            container.appendChild(particle)
        }

        return () => {
            container.innerHTML = ''
        }
    }, [])

    return <div className="particles" ref={containerRef}></div>
}
