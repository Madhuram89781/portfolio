export default function Achievements() {
    return (
        <section className="section" id="achievements">
            <h2 className="section-title">Achievements & Hackathons</h2>

            <div className="achieve-grid">
                {/* Competitive Programming */}
                <div className="achieve-card">
                    <div className="achieve-icon">🏆</div>
                    <h3>Competitive Programming</h3>
                    <div className="achieve-stats">
                        <div className="stat-badge">CodeChef 250+</div>
                        <div className="stat-badge">GFG 200+</div>
                        <div className="stat-badge">LeetCode 150+</div>
                    </div>
                    <p style={{ marginTop: '20px' }}>
                        600+ problems solved across major competitive programming platforms, demonstrating consistent
                        problem-solving ability and algorithmic thinking.
                    </p>
                </div>

                {/* Hackathons */}
                <div className="achieve-card">
                    <div className="achieve-icon">🚀</div>
                    <h3>Hackathon Experience</h3>
                    <p>
                        <strong>Hackathon at CBIT, Hyderabad</strong> — Collaborated on innovative tech solutions
                        with cross-functional teams.
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        <strong>Hackathon at Narasimha Reddy Engineering College</strong> — Gained experience in
                        teamwork, rapid problem-solving, and prototype development.
                    </p>
                </div>
            </div>
        </section>
    )
}
