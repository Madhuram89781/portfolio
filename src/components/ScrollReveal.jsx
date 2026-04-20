import useScrollReveal from '../hooks/useScrollReveal'

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
    const ref = useScrollReveal({ delay })

    return (
        <div ref={ref} className={`reveal-${direction} ${className}`}>
            {children}
        </div>
    )
}
