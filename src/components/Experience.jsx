import ScrollReveal from './ScrollReveal'

export default function Experience() {
    const internships = [
        {
            track: 'Generative AI',
            duration: '10-weeks (May — July 2026)',
            badges: '22 Skill Badges',
            mode: 'Virtual',
            accent: 'cyan-accent',
            description: 'Gained hands-on experience through real-world Google Cloud labs, focusing on large language models, prompt engineering, vector databases, and developer tools to build intelligent generative applications.',
            verifyLink: 'https://www.skills.google/public_profiles/f697b36c-4647-4aeb-aa77-c9026f8f318c',
            highlights: [
                'Learned foundation models and APIs on Google Cloud',
                'Completed hands-on labs in generative AI workflows',
                'Earned 22 Google Developer skill badges'
            ]
        },
        {
            track: 'Associate Cloud Engineering',
            duration: '10-weeks (May — July 2026)',
            badges: '10 Skill Badges',
            mode: 'Virtual',
            accent: 'teal-accent',
            description: 'Acquired practical proficiency in cloud architecture, deployment strategies, networking, security, and infrastructure monitoring using Google Cloud Platform (GCP) resources.',
            verifyLink: 'https://www.skills.google/public_profiles/25f5a7a1-13b5-434a-94d7-781bfb874de4',
            highlights: [
                'Deployed and managed applications on GCP infrastructure',
                'Configured networking, IAM roles, and storage services',
                'Earned 10 Google Developer skill badges'
            ]
        }
    ]

    return (
        <section className="section" id="experience">
            <ScrollReveal>
                <div className="section-header">
                    <h2 className="section-title">Internship Experience</h2>
                    <div className="section-divider"></div>
                </div>
            </ScrollReveal>

            <div className="experience-wrapper">
                <ScrollReveal delay={100}>
                    <div className="experience-company-card">
                        <div className="company-logo-container">
                            <span className="company-badge-partner">L4G Solutions Pvt Ltd</span>
                            <span className="company-badge-supporter">Supported by Google for Developers</span>
                        </div>
                        <h3 className="company-title">Google for Developers Virtual Internship</h3>
                        <p className="company-summary">
                            Completed a rigorous 10-week industry-aligned program bridging cloud architecture and 
                            advanced artificial intelligence. Acquired deep practical skills by executing complex labs, 
                            projects, and tasks under professional frameworks.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="tracks-grid">
                    {internships.map((intern, idx) => (
                        <ScrollReveal key={idx} delay={200 + idx * 150}>
                            <div className={`track-card ${intern.accent}`}>
                                <div className="track-card-header">
                                    <span className="track-tag">{intern.mode} Internship</span>
                                    <span className="track-duration">{intern.duration}</span>
                                </div>
                                <h4 className="track-name">{intern.track} Track</h4>
                                <p className="track-desc">{intern.description}</p>
                                
                                <div className="achievement-badge">
                                    <span className="badge-icon">🎖️</span>
                                    <div>
                                        <div className="badge-label">Achievement</div>
                                        <div className="badge-value">{intern.badges}</div>
                                    </div>
                                </div>

                                <div className="track-highlights">
                                    {intern.highlights.map((h, i) => (
                                        <div key={i} className="highlight-item">
                                            <span className="highlight-dot">▪</span>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                {intern.verifyLink && (
                                    <a href={intern.verifyLink} target="_blank" rel="noopener noreferrer" className="track-link">
                                        Verify Developer Profile ↗
                                    </a>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
