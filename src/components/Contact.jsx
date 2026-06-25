const personalInfo = {
  name: "Imam Falahi",
  email: "mobho@ymail.com",
  phone: "+62 878 8780 999",
  location: "Sleman, DI Yogyakarta, Indonesia",
  linkedin: "https://linkedin.com/in/tugelanboto",
  github: "https://github.com/tugelanboto19",
  portfolio: "https://pma.wtf",
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '66%', height: '50%', background: 'rgba(123,47,247,0.05)',
        borderRadius: '50%', filter: 'blur(150px)'
      }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{
            background: 'rgba(123,47,247,0.1)',
            border: '1px solid rgba(123,47,247,0.2)',
            color: '#a78bfa',
            margin: '0 auto 1rem',
            width: 'fit-content'
          }}>
            Get In Touch
          </div>
          <h2 className="font-orbitron" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem'
          }}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p style={{ color: '#6b7280' }}>
            Open for collaborations, consulting, or just a tech-law chat
          </p>
          <div style={{
            width: 80, height: 4,
            background: 'linear-gradient(90deg, #00f0ff, #7b2ff7)',
            margin: '1rem auto 0',
            borderRadius: 2
          }} />
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          maxWidth: 960,
          margin: '0 auto 3rem'
        }}>
          {[
            { icon: "✉️", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { icon: "📞", label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { icon: "📍", label: "Location", value: personalInfo.location },
            { icon: "🌐", label: "Portfolio", value: personalInfo.portfolio, href: personalInfo.portfolio },
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h4 style={{
                fontSize: 14,
                color: 'white',
                marginBottom: 8,
                fontFamily: "'Orbitron', monospace",
                letterSpacing: '0.05em'
              }}>
                {item.label}
              </h4>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : ''}
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: '#00f0ff',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={e => e.target.style.color = '#7b2ff7'}
                  onMouseLeave={e => e.target.style.color = '#00f0ff'}
                >
                  {item.value}
                </a>
              ) : (
                <p style={{ fontSize: 13, color: '#9ca3af' }}>
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
            — Or find me on —
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            {[
              { label: "LinkedIn", href: personalInfo.linkedin, color: "#00f0ff", icon: "💼" },
              { label: "GitHub", href: personalInfo.github, color: "#a78bfa", icon: "🐙" },
              { label: "Website", href: personalInfo.portfolio, color: "#00ff88", icon: "🌐" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 24px',
                  borderRadius: 12,
                  color: social.color,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${social.color}20`,
                }}
                onMouseEnter={e => {
                  e.target.style.boxShadow = `0 0 20px ${social.color}30`
                  e.target.style.borderColor = `${social.color}50`
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={e => {
                  e.target.style.boxShadow = 'none'
                  e.target.style.borderColor = `${social.color}20`
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <span>{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}