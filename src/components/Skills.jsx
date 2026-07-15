import ScrollReveal from './ScrollReveal'

export default function Skills() {
    const programming = ['C', 'Python', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS']
    const concepts = ['Data Structures & Algorithms', 'Probability & Statistics', 'Linear Algebra', 'Neural Networks', 'Machine Learning', 'NLP', 'Computer Vision', 'Deep Learning']
    const libraries = ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn']
    const tools = ['GitHub', 'MySQL', 'Jupyter Notebook', 'VS Code', 'Docker']

    const categories = [
        { icon: '⌨', title: 'Languages', items: programming },
        { icon: '🧠', title: 'AI/ML & CS Concepts', items: concepts },
        { icon: '📚', title: 'Libraries & Frameworks', items: libraries },
        { icon: '🛠', title: 'Tools & Platforms', items: tools },
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
