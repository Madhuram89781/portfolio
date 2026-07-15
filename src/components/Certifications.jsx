import ScrollReveal from './ScrollReveal'

export default function Certifications() {
    const certs = [
        {
            icon: '☁️',
            title: 'Google Cloud Certified Generative AI Leader',
            org: 'Google Cloud',
            link: 'https://drive.google.com/file/d/13yJsLUiyRj5-eNk4zy2FRb5g_BrBqzTn/view?usp=sharing'
        },
        { icon: '☁️', title: 'Oracle Cloud Infrastructure AI Foundations Associate', org: 'Oracle' },
        { icon: '🧠', title: 'Oracle Cloud Infrastructure AI Advanced Associate', org: 'Oracle' },
        { icon: '🐍', title: 'Cisco Python Essentials 1', org: 'Cisco' },
        { icon: '🌐', title: 'Cisco Networking Basics', org: 'Cisco' },
        { icon: '🔐', title: 'Cisco Introduction to Cybersecurity', org: 'Cisco' },
        { icon: '💻', title: 'Web Development', org: 'Internshala' },
        {
            icon: '🤖',
            title: 'Salesforce Agentforce Specialist',
            org: 'Salesforce',
            link: 'https://drive.google.com/file/d/1NQ5h8Ojekpe5HGm9LWAiczu0tUkrzrsz/view?usp=sharing'
        },
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
                        {cert.link ? (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-card clickable"
                                style={{ display: 'block', textDecoration: 'none' }}
                            >
                                <div className="cert-icon">{cert.icon}</div>
                                <div className="cert-title">{cert.title}</div>
                                <div className="cert-org">{cert.org}</div>
                            </a>
                        ) : (
                            <div className="cert-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <div className="cert-title">{cert.title}</div>
                                <div className="cert-org">{cert.org}</div>
                            </div>
                        )}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
