export default function Education() {
    const semesters = [
        { value: '8.60', label: 'Semester 1' },
        { value: '8.39', label: 'Semester 2' },
        { value: '7.89', label: 'Semester 3' },
        { value: '8.31', label: 'Semester 4' },
    ]

    return (
        <>
            {/* Academic Excellence */}
            <section className="section">
                <h2 className="section-title">Academic Excellence</h2>
                <div className="cgpa-container">
                    {semesters.map((s, i) => (
                        <div className="cgpa-card" key={i}>
                            <div className="cgpa-value">{s.value}</div>
                            <div className="cgpa-label">{s.label}</div>
                        </div>
                    ))}
                    <div className="cgpa-card">
                        <div className="cgpa-value">8.37</div>
                        <div className="cgpa-label">Overall CGPA</div>
                    </div>
                </div>
            </section>

            {/* Education Journey */}
            <section className="section" id="education">
                <h2 className="section-title">Education Journey</h2>
                <div className="edu-grid">
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-university"></i></div>
                        <h3>B.Tech in CSE</h3>
                        <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
                            CMR College of Engineering & Technology, Hyderabad
                        </p>
                        <p style={{ opacity: 0.8, fontSize: '1.1em' }}>2023 – 2027</p>
                        <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold', fontSize: '1.2em' }}>
                            CGPA: 8.37/10
                        </p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-school"></i></div>
                        <h3>Intermediate (MPC)</h3>
                        <p style={{ fontSize: '1.2em', margin: '10px 0' }}>
                            Aditya Junior College, Palakollu (AP)
                        </p>
                        <p style={{ opacity: 0.8, fontSize: '1.1em' }}>2021 – 2023</p>
                        <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold', fontSize: '1.2em' }}>
                            Percentage: 96.3%
                        </p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><i className="fas fa-child"></i></div>
                        <h3>SSC</h3>
                        <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
                            Montessori's English Medium School, Ullamparru (AP)
                        </p>
                        <p style={{ opacity: 0.8, fontSize: '1.1em' }}>2021</p>
                        <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold', fontSize: '1.2em' }}>
                            Percentage: 96.6%
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
