const personalInfo = {
  name: "Imam Falahi",
  email: "mobho@ymail.com",
  phone: "+62 878 8780 999",
  github: "https://github.com/tugelanboto19",
  linkedin: "https://linkedin.com/in/tugelanboto",
  portfolio: "https://pma.wtf",
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'tools', label: 'Stack' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '2rem 0 1rem',
      background: '#06060a'
    }}>
      <div className="container-custom">
        {/* Main Footer Row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          
          {/* Logo + Copyright Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: 'linear-gradient(135deg, #00f0ff, #7b2ff7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span className="font-orbitron" style={{ fontSize: 9, fontWeight: 'bold', color: 'white' }}>
                  IF
                </span>
              </div>
              <span className="font-orbitron" style={{ fontSize: 12, color: '#00f0ff' }}>
                Imam<span style={{ color: '#7b2ff7' }}>.</span>
              </span>
            </button>

            <p className="font-jetbrains" style={{ fontSize: 10, color: '#4b5563' }}>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved
            </p>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '4px 20px'
          }}>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  fontSize: 12,
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'color 0.3s',
                  fontFamily: "'Inter', sans-serif"
                }}
                onMouseEnter={e => e.target.style.color = '#00f0ff'}
                onMouseLeave={e => e.target.style.color = '#6b7280'}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Mini */}
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: 11, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = '#a78bfa'}
              onMouseLeave={e => e.target.style.color = '#4b5563'}
            >
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: 11, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = '#00f0ff'}
              onMouseLeave={e => e.target.style.color = '#4b5563'}
            >
              LinkedIn
            </a>
            <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer"
              style={{ color: '#4b5563', fontSize: 11, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = '#00ff88'}
              onMouseLeave={e => e.target.style.color = '#4b5563'}
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.03)',
          textAlign: 'center'
        }}>
          <p className="font-jetbrains" style={{ fontSize: 9, color: '#374151' }}>
            Built with <span style={{ color: '#00f0ff' }}>React</span> +{' '}
            <span style={{ color: '#a78bfa' }}>TailwindCSS</span> +{' '}
            <span style={{ color: '#00ff88' }}>Framer Motion</span>
            {' — '}Deployed with ❤️
          </p>
        </div>
      </div>

      {/* Cyber line decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.1), transparent)'
      }} />
    </footer>
  )
}