export default function Certifications() {
    const certs = [
        { icon: '🌐', title: 'Web Development', org: 'Internshala' },
        { icon: '☁️', title: 'OCI AI Foundations Associate', org: 'Oracle' },
        { icon: '🧠', title: 'OCI AI Advanced Associate', org: 'Oracle' },
        { icon: '🐍', title: 'Python Essentials 1', org: 'Cisco' },
        { icon: '🌐', title: 'Networking Basics', org: 'Cisco' },
        { icon: '🔐', title: 'Intro to Cybersecurity', org: 'Cisco' },
        { icon: '🤖', title: 'Agentforce Specialist', org: 'Salesforce' },
    ]

    return (
        <section className="section" id="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {certs.map((cert, i) => (
                    <div className="cert-card" key={i}>
                        <div className="cert-icon">{cert.icon}</div>
                        <h3>{cert.title}</h3>
                        <p>{cert.org}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
