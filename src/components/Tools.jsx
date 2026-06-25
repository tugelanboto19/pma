const tools = [
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "TailwindCSS", icon: "🎨", category: "Styling" },
  { name: "Framer Motion", icon: "🌀", category: "Animation" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Vite", icon: "⚡", category: "Build Tool" },
  { name: "Git & GitHub", icon: "🔀", category: "Version Control" },
  { name: "VS Code", icon: "💻", category: "Editor" },
  { name: "Figma", icon: "🖌️", category: "Design" },
  { name: "AutoCAD", icon: "📐", category: "Design" },
  { name: "Adobe Suite", icon: "🎬", category: "Creative" },
  { name: "OSS RBA", icon: "📋", category: "Legal System" },
  { name: "SIMBG", icon: "🏗️", category: "Legal System" },
  { name: "ESP32 IoT", icon: "🔧", category: "Hardware" },
  { name: "Linux Server", icon: "🐧", category: "Infrastructure" },
]

const categories = [...new Set(tools.map(t => t.category))]

const categoryIcons = {
  Frontend: "⚛️", Styling: "🎨", Animation: "🌀", Backend: "🟢",
  'Build Tool': "⚡", 'Version Control': "🔀", Editor: "💻",
  Design: "🖌️", Creative: "🎬", 'Legal System': "📋",
  Hardware: "🔧", Infrastructure: "🐧"
}

export default function Tools() {
  return (
    <section id="tools" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '50%', background: 'rgba(0,255,136,0.05)', borderRadius: '50%', filter: 'blur(150px)' }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', color: '#00ff88', margin: '0 auto 1rem', width: 'fit-content' }}>
            Tech Stack
          </div>
          <h2 className="font-orbitron" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p style={{ color: '#6b7280' }}>A versatile arsenal spanning IT, legal systems, creative media, and development</p>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #00f0ff, #7b2ff7)', margin: '1rem auto 0', borderRadius: 2 }} />
        </div>

        {/* All Tools Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
          marginBottom: '3rem'
        }}>
          {tools.map((tool, i) => (
            <div key={i} className="glass-card" style={{
              padding: '1rem', textAlign: 'center', cursor: 'default'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
              <h4 style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{tool.name}</h4>
              <p style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>{tool.category}</p>
            </div>
          ))}
        </div>

        {/* By Category */}
        <div>
          <h3 className="font-orbitron" style={{ fontSize: '1.25rem', color: '#00ff88', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ⚡ Categorized Stack
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {categories.map(cat => (
              <div key={cat} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{categoryIcons[cat] || '📦'}</span>
                  <h4 className="font-orbitron" style={{ fontSize: 12, color: 'white' }}>{cat}</h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tools.filter(t => t.category === cat).map((tool, j) => (
                    <span key={j} style={{
                      padding: '6px 12px', borderRadius: 8, fontSize: 12,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#9ca3af'
                    }}>
                      {tool.name}
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