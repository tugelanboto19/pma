import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const personalInfo = {
  name: "Imam Falahi",
  title: "IT Operations & Legal Compliance Specialist",
  email: "mobho@ymail.com",
  phone: "+62 878 8780 999",
  location: "Sleman, DI Yogyakarta",
  github: "https://github.com/tugelanboto19",
  portfolio: "https://pma.wtf",
  photo: "/images/profile.jpg",
  cv: "/cv/CV_IMAM_FALAHI_JUNI_2026.pdf",
}

const aboutMe = {
  greeting: "Hello, I'm",
  stats: [
    { label: "Experience", value: "6+ Years" },
    { label: "Projects", value: "200+" },
    { label: "Legal Docs", value: "15K+" },
    { label: "GPA", value: "3.82" },
  ]
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`
        ctx.fill()
      })
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.05 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToCV = () => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Canvas Particles */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Grid */}
      <div className="bg-cyber-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />

      {/* Gradient Orbs */}
      <div style={{
        position: 'absolute', top: '25%', left: '25%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 255, 0.1))',
        filter: 'blur(120px)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', bottom: '25%', right: '25%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(255, 0, 255, 0.1))',
        filter: 'blur(120px)',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '3s'
      }} />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="badge badge-neon"
          style={{
            margin: '0 auto 2rem',
            width: 'fit-content'
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', display: 'inline-block' }} />
          SYSTEM ONLINE — Ready for Operations
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
        >
          <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
            {aboutMe.greeting}
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={itemVariants}
        >
          <h1 className="font-orbitron" style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            lineHeight: 1.1
          }}>
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Role Tags */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}
        >
          <span className="font-jetbrains badge badge-secondary" style={{
            padding: '8px 16px', fontSize: 14
          }}>
            &lt; IT Operations /&gt;
          </span>
          <span style={{ color: '#4b5563', display: 'none' }}>✦</span>
          <span className="font-jetbrains badge badge-pulse" style={{
            padding: '8px 16px', fontSize: 14
          }}>
            &lt; Legal Compliance /&gt;
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
        >
          <p style={{ color: '#6b7280', maxWidth: 600, margin: '0 auto 2.5rem', fontSize: '1rem' }}>
            Bridging the gap between{' '}
            <span className="text-gradient">technology</span> and{' '}
            <span className="text-gradient">law</span> — automating workflows while ensuring regulatory precision.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}
        >
          <button onClick={scrollToCV} className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            View CV
          </button>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWeight="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Explore Projects
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            maxWidth: 600,
            margin: '4rem auto 0'
          }}>
            {aboutMe.stats.map((stat, i) => (
              <div key={stat.label} className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                <div className="font-orbitron text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}