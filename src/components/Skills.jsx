export default function Skills() {
    const technicalSkills = [
        { emoji: '🔤', name: 'C' },
        { emoji: '🐍', name: 'Python' },
        { emoji: '☕', name: 'Java' },
        { emoji: '🗃️', name: 'SQL' },
        { emoji: '🧮', name: 'DSA (Intermediate)' },
        { emoji: '🧠', name: 'Neural Networks' },
        { emoji: '🤖', name: 'Machine Learning' },
        { emoji: '🐙', name: 'GitHub' },
        { emoji: '🛢️', name: 'MySQL' },
        { emoji: '📓', name: 'Jupyter Notebook' },
        { emoji: '💻', name: 'VS Code' },
    ]

    const softSkills = [
        { emoji: '🗣️', name: 'Communication' },
        { emoji: '🎤', name: 'Public Speaking' },
        { emoji: '⚡', name: 'Quick Learner' },
        { emoji: '🔄', name: 'Adaptability' },
    ]

    return (
        <section className="section" id="skills">
            <h2 className="section-title">Skills & Expertise</h2>

            <div className="skills-container">
                <div className="skills-category-title">🛠️ Technical Skills</div>
                {technicalSkills.map((skill, i) => (
                    <div className="skill-tag" key={i}>
                        {skill.emoji} {skill.name}
                    </div>
                ))}
            </div>

            <div className="skills-container">
                <div className="skills-category-title">🌟 Soft Skills</div>
                {softSkills.map((skill, i) => (
                    <div className="skill-tag" key={i}>
                        {skill.emoji} {skill.name}
                    </div>
                ))}
            </div>
        </section>
    )
}
