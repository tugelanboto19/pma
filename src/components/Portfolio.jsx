import { motion } from 'framer-motion'

const projects = [
  {
    id: 1, title: "Cyber Portfolio",
    description: "Personal portfolio with cyberpunk theme built with React, TailwindCSS, and Framer Motion",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    github: "https://github.com/tugelanboto19/tugelanboto19.github.io",
    live: "https://pma.wtf",
    color: "#00f0ff"
  },
  {
    id: 2, title: "Legal Document Automation",
    description: "Automated workflow for processing fiduciary guarantee documents with 99% accuracy",
    tech: ["Python", "PDF Automation", "Database Management"],
    github: "https://github.com/tugelanboto19",
    color: "#7b2ff7"
  },
  {
    id: 3, title: "IoT Monitoring System",
    description: "ESP32-based environmental monitoring system with real-time sensor data visualization",
    tech: ["ESP32", "Arduino", "Sensor Integration", "IoT"],
    github: "https://github.com/tugelanboto19",
    color: "#00ff88"
  },
  {
    id: 4, title: "MSME Business Registry",
    description: "End-to-end business licensing platform integrated with OSS RBA for small enterprises",
    tech: ["Web Dev", "OSS RBA", "Legal Compliance"],
    github: "https://github.com/tugelanboto19",
    color: "#ffd700"
  }
]

const personalInfo = {
  github: "https://github.com/tugelanboto19",
  portfolio: "https://pma.wtf"
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: 0, width: '50%', height: '50%', background: 'rgba(0,240,255,0.05)', borderRadius: '50%', filter: 'blur(150px)' }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge badge-neon" style={{ margin: '0 auto 1rem', width: 'fit-content' }}>
            Projects
          </div>
          <h2 className="font-orbitron" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: '#6b7280' }}>Showcasing work across IT systems, legal automation, IoT, and creative media</p>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #00f0ff, #7b2ff7, #00ffff, #ff00ff)', margin: '1rem auto 0', borderRadius: 2 }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 0.08 } }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px', marginBottom: '3rem' }}>
            {projects.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * project.id } }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="glass-card"
                style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Color Accent */}
                <motion.div
                  style={{
                    position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                    background: project.color,
                    transition: 'width 0.3s'
                  }}
                  className="accent-line"
                  whileHover={{ width: '100%' }}
                />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{
                      padding: 12, borderRadius: 12,
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: [0, 5, 0, -5, 0] }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          padding: 8, borderRadius: 8, background: 'rgba(255,255,255,0.05)', color: '#6b7280'
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: [0, 5, 0, -5, 0] }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            padding: 8, borderRadius: 8, background: 'rgba(255,255,255,0.05)', color: '#6b7280'
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: '1rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {project.tech.map((tech, j) => (
                      <span key={j} style={{
                        padding: '4px 12px', borderRadius: 8, fontSize: 12,
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                        color: project.color,
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            View All Projects on GitHub
          </a>
          <p style={{ color: '#6b7280', fontSize: 13, marginTop: 12 }}>
            Or visit{' '}
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer"
              style={{ color: '#00ffff', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              {personalInfo.portfolio}
            </a>{' '}
            for the live portfolio
          </p>
        </div>
      </div>
    </section>
  )
}