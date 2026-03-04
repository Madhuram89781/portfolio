export default function Projects() {
    return (
        <section className="section" id="projects">
            <h2 className="section-title">Featured Projects</h2>

            {/* EcoGlow */}
            <div className="project-showcase">
                <h3 className="project-title">🌱 EcoGlow – Sustainable Skincare Platform</h3>
                <p className="project-desc">
                    Developed a web application to repurpose fruit waste peels into eco-friendly skincare solutions.
                    Built frontend using HTML, CSS, JS; used Firebase for hosting/authentication; integrated Google Cloud
                    and Grok API for intelligent recommendations.
                </p>
                <div className="project-tech">
                    <p><strong>🔑 Tech Stack:</strong></p>
                    <ul>
                        <li>HTML, CSS, JavaScript for responsive UI</li>
                        <li>Firebase for hosting and authentication</li>
                        <li>Google Cloud for scalable backend services</li>
                        <li>Grok API for AI-powered features</li>
                    </ul>
                </div>
                <div className="project-links">
                    <a href="http://eco-glow.in" target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-external-link-alt"></i> Visit Website
                    </a>
                    <a href="https://github.com/Madhuram89781/ecoglow" target="_blank" rel="noopener noreferrer" className="project-link github">
                        <i className="fab fa-github"></i> View Source Code
                    </a>
                </div>
            </div>

            {/* Face Anti-Spoofing */}
            <div className="project-showcase">
                <h3 className="project-title">🛡️ Real-Time Face Anti-Spoofing System (3D CNN)</h3>
                <p className="project-desc">
                    Built a liveness detection system to defend against spoofing attacks using photos, videos, and masks.
                    Implemented 3D CNN and multi-signal fusion for robust, real-time face verification.
                </p>
                <div className="project-tech">
                    <p><strong>🔑 Tech Stack:</strong></p>
                    <ul>
                        <li>Python for core implementation</li>
                        <li>TensorFlow & Keras for 3D CNN model</li>
                        <li>OpenCV for real-time video processing</li>
                        <li>MediaPipe for face landmark detection</li>
                        <li>Multi-signal fusion for enhanced accuracy</li>
                    </ul>
                </div>
            </div>

            {/* Twitter Emotion Detection */}
            <div className="project-showcase">
                <h3 className="project-title">🐦 Real-Time Emotion Detection on Twitter</h3>
                <p className="project-desc">
                    Sentiment analysis system classifying tweets as positive, negative, or neutral using NLP techniques.
                    Collected tweets via Tweepy, preprocessed text, and used TextBlob for polarity analysis.
                </p>
                <div className="project-tech">
                    <p><strong>🔑 Tech Stack:</strong></p>
                    <ul>
                        <li>Python with Tweepy for Twitter API integration</li>
                        <li>TextBlob for sentiment polarity analysis</li>
                        <li>NLP-based text preprocessing pipeline</li>
                        <li>Real-time tweet retrieval and classification</li>
                    </ul>
                </div>
                <div className="project-links">
                    <a
                        href="https://github.com/Madhuram89781/real-time-emotion-detection-on-twitter-with-ml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                    >
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
