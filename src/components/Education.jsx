export default function Education() {
    return (
        <section className="section" id="education">
            <div className="section-header">
                <h2 className="section-title">Academic Journey</h2>
                <div className="section-divider"></div>
            </div>
            <div className="edu-timeline">
                <div className="edu-card-main">
                    <div>
                        <div className="edu-year">2023 — 2027</div>
                        <div className="edu-degree">B.Tech in Computer Science Engineering</div>
                        <div className="edu-institution">CMR College of Engineering &amp; Technology</div>
                    </div>
                    <div className="edu-grade">8.37 CGPA</div>
                </div>
                <div className="edu-lower-grid">
                    <div className="edu-card-lower">
                        <div className="edu-level">Intermediate</div>
                        <div className="edu-degree">MPC (Mathematics, Physics, Chemistry)</div>
                        <div className="edu-institution" style={{ fontSize: '0.85em', marginTop: '4px' }}>
                            Aditya Junior College, Palakollu — Board of Intermediate Education
                        </div>
                        <div className="edu-score">96.3%</div>
                    </div>
                    <div className="edu-card-lower">
                        <div className="edu-level">Secondary School</div>
                        <div className="edu-degree">SSC (Secondary School Certificate)</div>
                        <div className="edu-institution" style={{ fontSize: '0.85em', marginTop: '4px' }}>
                            Montessori&apos;s English Medium School — Board of Secondary Education
                        </div>
                        <div className="edu-score">96.6%</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
