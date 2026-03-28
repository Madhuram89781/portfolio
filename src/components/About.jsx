export default function About() {
    return (
        <section className="section" id="about">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
            </div>
            <div className="about-bento">
                <div className="about-main">
                    <p className="about-text">
                        As a Computer Science Engineering student, I specialize in the intersection of
                        Artificial Intelligence and Software Architecture. My focus lies in developing robust
                        Machine Learning models and exploring the depths of Data Science to solve real-world
                        complexities. I thrive in competitive environments and continuously push the boundaries
                        of my technical capabilities through algorithmic challenges and innovative system design.
                    </p>
                    <p className="about-text" style={{ marginTop: '20px' }}>
                        Born and raised in Konaseema District, my journey is fueled by resilience and curiosity.
                        I believe every problem is an opportunity to grow — and I'm committed to making technology
                        accessible and impactful for everyone.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-card teal">
                        <div className="stat-value">600+</div>
                        <div className="stat-label">Problems Solved</div>
                    </div>
                    <div className="stat-card cyan">
                        <div className="stat-value">8.37</div>
                        <div className="stat-label">Current CGPA</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
