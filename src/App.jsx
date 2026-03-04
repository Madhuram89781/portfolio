import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <div className="animated-bg"></div>
            <ParticleBackground />
            <Navbar />
            <div className="container">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Achievements />
                <CodingProfiles />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App
