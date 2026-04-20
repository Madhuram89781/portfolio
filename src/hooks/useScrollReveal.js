import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const { threshold = 0.15, delay = 0 } = options

    useEffect(() => {
        const el = ref.current
        if (!el) return

        el.classList.add('reveal')
        if (delay) el.style.transitionDelay = `${delay}ms`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed')
                    observer.unobserve(el)
                }
            },
            { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold, delay])

    return ref
}
