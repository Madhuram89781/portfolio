import { useEffect, useRef } from 'react'

export default function About() {
    const cardRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible')
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        )
        cardRefs.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="content-card" ref={(el) => (cardRefs.current[0] = el)}>
                <p className="about-text">
                    Hello! I'm Sundara Madhu Ram, a motivated Computer Science undergraduate with a strong interest in
                    <strong> Artificial Intelligence, Machine Learning, and Data Science</strong>. Currently pursuing my B.Tech at
                    CMR College of Engineering & Technology, Hyderabad (2023–2027), I'm skilled in Python, Java, and
                    problem-solving using Data Structures and Algorithms.
                </p>
                <p className="about-text" style={{ marginTop: '20px' }}>
                    I'm seeking opportunities to apply my technical knowledge to real-world projects, gain industry
                    experience, and grow as a professional software and AI engineer.
                </p>
            </div>

            <div className="content-card" ref={(el) => (cardRefs.current[1] = el)} style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '2em', marginBottom: '30px', color: '#667eea', textAlign: 'center' }}>
                    My Story
                </h3>
                <div className="edu-grid">
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-home"></i></div>
                        <h3>Roots & Family</h3>
                        <p style={{ fontSize: '1.1em', lineHeight: '1.8', opacity: 0.9 }}>
                            Born and raised in Gudapalli, Malkipuram Mandal, Konaseema District, I come from a humble background.
                            My mother, Satya Vani, has been my pillar of strength. I lost my father, Ramesh, when I was just 1 year old,
                            but his memory continues to inspire me to work hard and make my family proud.
                        </p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-lightbulb"></i></div>
                        <h3>Philosophy</h3>
                        <p style={{ fontSize: '1.1em', lineHeight: '1.8', opacity: 0.9 }}>
                            I believe in continuous learning and embracing challenges. Every problem is an opportunity to grow,
                            and every failure is a stepping stone to success. My journey has taught me resilience, and I'm committed
                            to making technology accessible and impactful for everyone.
                        </p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-rocket"></i></div>
                        <h3>Vision & Goals</h3>
                        <p style={{ fontSize: '1.1em', lineHeight: '1.8', opacity: 0.9 }}>
                            My goal is to work at the intersection of AI/ML and Data Science, building intelligent systems and
                            deriving meaningful insights. I aspire to create solutions that make a real difference in people's lives,
                            leveraging cutting-edge technology for positive impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
