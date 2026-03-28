export default function Skills() {
    const programming = ['Python', 'Java', 'C Language', 'SQL']
    const aiml = ['Machine Learning', 'Neural Networks', 'Data Structures', 'Algorithms']
    const tools = ['MySQL', 'GitHub', 'Jupyter Notebook', 'VS Code', 'TensorFlow', 'OpenCV']
    const soft = ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Quick Learner']

    return (
        <section className="skills-section-bg" id="skills">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.2em', fontWeight: 700, marginBottom: '8px' }}>
                    Technical Arsenal
                </h2>
                <p style={{ fontSize: '0.7em', color: 'var(--tertiary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Expertise &amp; Proficiencies
                </p>
            </div>
            <div className="skills-grid">
                <div>
                    <div className="skills-category-title">⌨ Programming</div>
                    <div className="skills-tags">
                        {programming.map((s, i) => <span className="skill-chip" key={i}>{s}</span>)}
                    </div>
                </div>
                <div>
                    <div className="skills-category-title">🧠 Core AI/ML</div>
                    <div className="skills-tags">
                        {aiml.map((s, i) => <span className="skill-chip" key={i}>{s}</span>)}
                    </div>
                </div>
                <div>
                    <div className="skills-category-title">🛠 Tools &amp; Frameworks</div>
                    <div className="skills-tags">
                        {tools.map((s, i) => <span className="skill-chip" key={i}>{s}</span>)}
                    </div>
                </div>
                <div>
                    <div className="skills-category-title">✨ Soft Skills</div>
                    <div className="skills-tags">
                        {soft.map((s, i) => <span className="skill-chip" key={i}>{s}</span>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
