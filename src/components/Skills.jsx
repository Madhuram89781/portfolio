import ScrollReveal from './ScrollReveal'

export default function Skills() {
    const programming = ['Python', 'Java', 'C Language', 'SQL']
    const aiml = ['Machine Learning', 'Neural Networks', 'Data Structures', 'Algorithms']
    const tools = ['MySQL', 'GitHub', 'Jupyter Notebook', 'VS Code', 'TensorFlow', 'OpenCV']
    const soft = ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Quick Learner']

    const categories = [
        { icon: '⌨', title: 'Programming', items: programming },
        { icon: '🧠', title: 'Core AI/ML', items: aiml },
        { icon: '🛠', title: 'Tools & Frameworks', items: tools },
        { icon: '✨', title: 'Soft Skills', items: soft },
    ]

    return (
        <section className="skills-section-bg" id="skills">
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.2em', fontWeight: 700, marginBottom: '8px' }}>
                        Technical Arsenal
                    </h2>
                    <p style={{ fontSize: '0.7em', color: 'var(--tertiary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Expertise &amp; Proficiencies
                    </p>
                </div>
            </ScrollReveal>
            <div className="skills-grid">
                {categories.map((cat, i) => (
                    <ScrollReveal key={i} delay={i * 150}>
                        <div>
                            <div className="skills-category-title">{cat.icon} {cat.title}</div>
                            <div className="skills-tags">
                                {cat.items.map((s, j) => <span className="skill-chip" key={j}>{s}</span>)}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
