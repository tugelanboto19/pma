const personalInfo = {
  name: "Imam Falahi",
  title: "IT Operations & Legal Compliance Specialist",
  email: "mobho@ymail.com",
  phone: "+62 878 8780 999",
  location: "Sleman, DI Yogyakarta",
  photo: "/images/profile.jpg",
}

const aboutMe = {
  description: [
    "A Cum Laude Informatics graduate from Universitas Siber Muhammadiyah with a dual specialization in IT Operations and Legal Compliance. I bridge the gap between technology and law, automating administrative workflows while ensuring regulatory adherence.",
    "With a proven track record of processing 1,500+ flawless legal documents monthly and managing end-to-end IT infrastructure, I thrive at the intersection of system security, data analysis, and legal precision.",
    "Currently serving as IT Support & Legal Administration at Notaris & PPAT Endri Purwani, consulting on business legality at PMA Media, and managing digital operations at Omah Kopi Mrisen."
  ]
}

const education = [{
  degree: "Bachelor of Informatics (S.Kom)",
  school: "Universitas Siber Muhammadiyah",
  period: "2022 – 2026",
  gpa: "3.82",
  honors: "Cum Laude",
  thesis: "Business Strategy Optimization using Association Rule Mining Algorithm"
}]

const professionalTraits = [
  "Logical Data Analysis",
  "Hardware/Software Problem Solving",
  "Legal & Tech Regulatory Adaptability",
  "Administrative Accuracy & Structured Data Precision"
]

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '50%', background: 'rgba(123,47,247,0.05)', borderRadius: '50%', filter: 'blur(150px)' }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ background: 'rgba(123,47,247,0.1)', border: '1px solid rgba(123,47,247,0.2)', color: '#a78bfa', margin: '0 auto 1rem', width: 'fit-content' }}>
            About Me
          </div>
          <h2 className="font-orbitron" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #00f0ff, #7b2ff7)', margin: '0 auto', borderRadius: 2 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Left: Photo */}
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{
              width: 180, height: 180, margin: '0 auto 1rem', borderRadius: 16,
              overflow: 'hidden', border: '2px solid rgba(0,240,255,0.3)',
              boxShadow: '0 0 20px rgba(0,240,255,0.1)',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(123,47,247,0.1))',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span className="font-orbitron" style={{ fontSize: 48, fontWeight: 'bold' }}>
                <span className="text-gradient">IF</span>
              </span>
            </div>
            <h3 className="font-orbitron" style={{ fontSize: '1.25rem', color: 'white' }}>{personalInfo.name}</h3>
            <p style={{ color: '#9ca3af', fontSize: 14, marginTop: 4 }}>{personalInfo.title}</p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 13, color: '#6b7280' }}>
                <span style={{ color: '#00f0ff' }}>🎓</span> GPA 3.82 — Cum Laude
              </div>
              <div style={{ fontSize: 13, color: '#6b7280' }}>
                <span style={{ color: '#ffd700' }}>⚡</span> 6+ Years Experience
              </div>
            </div>

            {/* Education */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ fontSize: 11, fontFamily: "'Orbitron', monospace", color: '#00f0ff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🎓 Education
              </h4>
              {education.map((edu, i) => (
                <div key={i}>
                  <h5 style={{ fontWeight: 600, color: 'white', fontSize: 14 }}>{edu.degree}</h5>
                  <p style={{ color: '#9ca3af', fontSize: 13 }}>{edu.school}</p>
                  <p style={{ color: '#6b7280', fontSize: 12 }}>{edu.period}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <span style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)', color: '#00f0ff', fontSize: 11 }}>
                      GPA: {edu.gpa}
                    </span>
                    <span style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)', color: '#ffd700', fontSize: 11 }}>
                      {edu.honors}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: 11, marginTop: 8 }}>
                    <span style={{ color: '#a78bfa' }}>Thesis:</span> {edu.thesis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Description & Traits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Description */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {aboutMe.description.map((paragraph, i) => (
                  <p key={i} style={{ color: '#d1d5db', lineHeight: 1.8, fontSize: 14 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Traits */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 className="font-orbitron" style={{ fontSize: 12, color: '#a78bfa', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ⚙️ Professional Characteristics
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {professionalTraits.map((trait, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #7b2ff7)', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: '#d1d5db' }}>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Quick Info */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 className="font-orbitron" style={{ fontSize: 12, color: '#00f0ff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📡 Connect
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                <div style={{ fontSize: 13, color: '#9ca3af' }}>
                  <span style={{ color: '#6b7280' }}>Email:</span>{' '}
                  <a href={`mailto:${personalInfo.email}`} style={{ color: '#00f0ff', textDecoration: 'none' }}>
                    {personalInfo.email}
                  </a>
                </div>
                <div style={{ fontSize: 13, color: '#9ca3af' }}>
                  <span style={{ color: '#6b7280' }}>Phone:</span>{' '}
                  <span style={{ color: '#d1d5db' }}>{personalInfo.phone}</span>
                </div>
                <div style={{ fontSize: 13, color: '#9ca3af' }}>
                  <span style={{ color: '#6b7280' }}>Location:</span>{' '}
                  <span style={{ color: '#d1d5db' }}>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}