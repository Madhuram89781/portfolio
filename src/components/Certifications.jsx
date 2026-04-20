import ScrollReveal from './ScrollReveal'

export default function Certifications() {
    const certs = [
        { icon: '☁️', title: 'OCI AI Foundations', org: 'Oracle' },
        { icon: '🧠', title: 'OCI AI Advanced', org: 'Oracle' },
        { icon: '🐍', title: 'Python Essentials 1', org: 'Cisco' },
        { icon: '🌐', title: 'Networking Basics', org: 'Cisco' },
        { icon: '🔐', title: 'Intro to Cybersecurity', org: 'Cisco' },
        { icon: '💻', title: 'Web Development', org: 'Internshala' },
        { icon: '🤖', title: 'Agentforce Specialist', org: 'Salesforce' },
    ]

    return (
        <section className="section" id="certifications">
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 className="section-title" style={{ display: 'inline-block', width: 'auto' }}>
                        Professional Certifications
                    </h2>
                </div>
            </ScrollReveal>
            <div className="certs-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {certs.map((cert, i) => (
                    <ScrollReveal key={i} delay={i * 100}>
                        <div className="cert-card">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-title">{cert.title}</div>
                            <div className="cert-org">{cert.org}</div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
