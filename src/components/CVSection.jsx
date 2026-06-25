import { useState } from 'react'

const personalInfo = {
  cv: "/cv/CV_IMAM_FALAHI_JUNI_2026.pdf",
  cvFileName: "CV_Imam_Falahi_2026.pdf",
}

const experiences = [
  {
    id: 1, role: "IT Support & Legal Administration",
    company: "Notaris & PPAT Endri Purwani, S.H., M.Kn.",
    location: "Sleman", period: "2020 – Present", type: "Full-time",
    highlights: [
      "Manage full IT infrastructure with encrypted security protocols",
      "Handle comprehensive land legality cycle and rights transfer",
      "Process 1,500+ Fiduciary Guarantee documents/month at zero error rate"
    ],
    color: "#00f0ff"
  },
  {
    id: 2, role: "Business Licensing Consultant",
    company: "PMA Media", location: "Sleman",
    period: "2020 – Present", type: "Consultant",
    highlights: [
      "End-to-end business licensing via OSS RBA system",
      "NPWP activation and Building Permit approvals via SIMBG",
      "Strategic mentoring for MSMEs on regulatory compliance"
    ],
    color: "#7b2ff7"
  },
  {
    id: 3, role: "IT & Digital Marketing Specialist",
    company: "Omah Kopi Mrisen", location: "Sleman",
    period: "2021 – Present", type: "Part-time",
    highlights: [
      "IT operations including POS system and network architecture",
      "Employee recruitment cycles and automated attendance systems",
      "Brand visibility through photography, design, and data-driven campaigns"
    ],
    color: "#ffd700"
  },
  {
    id: 4, role: "Graphic Designer",
    company: "PT. INDOKOM", location: "Sleman",
    period: "2013 – 2014", type: "Full-time",
    highlights: [
      "High-resolution visual assets for corporate product branding",
      "Multimedia digital marketing campaigns across distribution channels"
    ],
    color: "#00ff88"
  }
]

const skillCategories = [
  {
    title: "⚡ Legal & Administration",
    color: "#00f0ff",
    skills: ["OSS RBA & SIMBG Systems", "Fiduciary Guarantee Registration", "Land Administration & Regulation", "Legal Document Management", "NPWP Processing", "Microsoft Office Suite"]
  },
  {
    title: "🖥️ IT & Infrastructure",
    color: "#7b2ff7",
    skills: ["IT Technical Support", "Network Maintenance (LAN/WLAN)", "Hardware Troubleshooting", "OS Administration", "Database Security", "Web Development"]
  },
  {
    title: "🔌 IoT & Innovation",
    color: "#00ff88",
    skills: ["IoT Development (ESP32)", "Sensor Integration"]
  },
  {
    title: "🎨 Digital & Creative Media",
    color: "#ffd700",
    skills: ["Digital Marketing", "Adobe Creative Suite", "CorelDRAW", "Canva", "Professional Photography", "Video Editing"]
  }
]

export default function CVSection() {
  const [showPDF, setShowPDF] = useState(false)
  const [expandedExp, setExpandedExp] = useState(null)

  return (
    <section id="cv" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '50%', background: 'rgba(0,240,255,0.05)', borderRadius: '50%', filter: 'blur(150px)' }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)', color: '#00f0ff', margin: '0 auto 1rem', width: 'fit-content' }}>
            Curriculum Vitae
          </div>
          <h2 className="font-orbitron" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
            Professional <span className="text-gradient">Track Record</span>
          </h2>
          <p style={{ color: '#6b7280' }}>6+ years of experience bridging IT operations and legal compliance</p>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #00f0ff, #7b2ff7)', margin: '1rem auto 0', borderRadius: 2 }} />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '3rem' }}>
          <a href={personalInfo.cv} download={personalInfo.cvFileName} className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV (PDF)
          </a>
          <button onClick={() => setShowPDF(true)} className="btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Preview CV
          </button>
        </div>

        {/* PDF Modal */}
        {showPDF && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)'
          }} onClick={() => setShowPDF(false)}>
            <div style={{
              position: 'relative', width: '100%', maxWidth: 900,
              height: '85vh', background: 'white', borderRadius: 16,
              overflow: 'hidden'
            }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowPDF(false)}
                style={{
                  position: 'absolute', top: 16, right: 16, zIndex: 10,
                  padding: 8, borderRadius: '50%', background: 'rgba(0,0,0,0.5)',
                  color: 'white', border: 'none', cursor: 'pointer'
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <iframe src={personalInfo.cv} style={{ width: '100%', height: '100%', border: 'none' }} title="CV Preview" />
            </div>
          </div>
        )}

        {/* Experience */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="font-orbitron" style={{ fontSize: '1.25rem', color: '#00f0ff', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            💼 Professional Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experiences.map(exp => (
              <div key={exp.id}>
                <button onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                  className="glass-card" style={{
                    width: '100%', textAlign: 'left', padding: '1.5rem', border: 'none', color: 'white', cursor: 'pointer'
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: exp.color }} />
                        <span className="font-jetbrains" style={{
                          fontSize: 11, padding: '2px 8px', borderRadius: 999,
                          background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                          color: exp.color
                        }}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{exp.role}</h4>
                      <p style={{ color: '#9ca3af', fontSize: 14 }}>{exp.company}</p>
                      <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 12, color: '#6b7280' }}>
                        <span>📅 {exp.period}</span>
                        <span>📍 {exp.location}</span>
                      </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      style={{ transform: expandedExp === exp.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: '#6b7280', flexShrink: 0 }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {expandedExp === exp.id && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#9ca3af' }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: exp.color, marginTop: 6, flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-orbitron" style={{ fontSize: '1.25rem', color: '#a78bfa', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ⚡ Skills & Expertise
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {skillCategories.map(cat => (
              <div key={cat.title} className="glass-card" style={{ padding: '1.5rem' }}>
                <h4 className="font-orbitron" style={{ fontSize: 12, color: cat.color, marginBottom: '1rem' }}>
                  {cat.title}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((skill, j) => (
                    <span key={j} style={{
                      padding: '6px 12px', borderRadius: 8, fontSize: 12,
                      background: `${cat.color}10`,
                      border: `1px solid ${cat.color}20`,
                      color: cat.color,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}