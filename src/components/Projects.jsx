export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="projects-header">
                <div>
                    <h2 className="section-title">Featured Projects</h2>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9em', marginTop: '8px' }}>
                        Selected engineering works and research implementations
                    </p>
                </div>
            </div>

            <div className="projects-grid">
                {/* EcoGlow */}
                <div className="project-card cyan-deco">
                    <div className="project-card-deco"></div>
                    <span className="project-tag">Sustainability + Tech</span>
                    <h3 className="project-name">EcoGlow</h3>
                    <p className="project-desc">
                        A platform dedicated to sustainable skincare solutions, integrating product recommendations
                        with environmental impact analysis. Built with HTML, CSS, JS; Firebase for hosting/auth;
                        Google Cloud and Grok API for intelligent recommendations.
                    </p>
                    <div className="project-techs">
                        <span className="tech-badge">Web Development</span>
                        <span className="tech-badge">Firebase</span>
                        <span className="tech-badge">Google Cloud</span>
                        <span className="tech-badge">Grok API</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="http://eco-glow.in" target="_blank" rel="noopener noreferrer" className="project-link">
                            ↗ Visit Website
                        </a>
                        <a href="https://github.com/Madhuram89781/ecoglow" target="_blank" rel="noopener noreferrer" className="project-link">
                            ⌄ View Source
                        </a>
                    </div>
                </div>

                {/* Face Anti-Spoofing */}
                <div className="project-card teal-deco">
                    <div className="project-card-deco"></div>
                    <span className="project-tag">Computer Vision</span>
                    <h3 className="project-name">Real-Time Face Anti-Spoofing</h3>
                    <p className="project-desc">
                        Developed a robust system to distinguish between live human faces and spoofing attacks
                        (photos, videos, masks) using 3D CNN depth analysis, motion detection, and multi-signal
                        fusion for real-time face verification.
                    </p>
                    <div className="project-techs">
                        <span className="tech-badge">Python</span>
                        <span className="tech-badge">OpenCV</span>
                        <span className="tech-badge">TensorFlow</span>
                        <span className="tech-badge">MediaPipe</span>
                        <span className="tech-badge">Deep Learning</span>
                    </div>
                </div>

                {/* Twitter Emotion Detection - Wide */}
                <div className="project-card wide">
                    <div className="project-wide-inner">
                        <div>
                            <span className="project-tag">NLP + Social Data</span>
                            <h3 className="project-name project-wide">Real-Time Emotion Detection on Twitter</h3>
                            <p className="project-desc">
                                A large-scale sentiment analysis engine that streams real-time tweets to classify
                                public emotions using advanced natural language processing pipelines and recurrent
                                neural networks.
                            </p>
                            <div className="project-techs">
                                <span className="tech-badge">NLTK</span>
                                <span className="tech-badge">Tweepy</span>
                                <span className="tech-badge">TensorFlow</span>
                                <span className="tech-badge">TextBlob</span>
                                <span className="tech-badge">API Integration</span>
                            </div>
                            <a
                                href="https://github.com/Madhuram89781/real-time-emotion-detection-on-twitter-with-ml"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                ⌄ View on GitHub
                            </a>
                        </div>
                        <div className="project-vis">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbuzeuiux9qi20xaQBQjcV82SOcSTbSBF85uM9blx8u-rg-3KFZi2eaZ0b_bciNfg3vn2ii9HDDQhmfsI5lLyZM9gL0D-CJAnPE49c8BSwMsJrhPF__lBliQby_jVbwbn-wb8iUUv1xwiua5T0R1tJmomRMuewhmINFTaSnJjhGvKgX7YbFj2jFj_eXvsuvcfPrUxkl3yzIJvmTG-rpB9TsIhWXlisuvqgAySbu-pJlZ3hvjBYlO5_ak4V2ZAY_TvnBoc-UmZxh6lw"
                                alt="Data Analytics Visualization"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
