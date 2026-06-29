import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'tools', label: 'Stack' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMobileOpen(false) }
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.1)' : 'none',
        transition: 'all 0.4s'
      }}
    >
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #00f0ff, #7b2ff7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span className="font-orbitron" style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>IF</span>
            </div>
            <span className="font-orbitron text-cyan" style={{ fontSize: 14 }}>
              Imam<span style={{ color: '#7b2ff7' }}>.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'none', gap: '4px' }}>
            {navLinks.map(link => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 16px', fontSize: 14, fontWeight: 500,
                  color: '#9ca3af', background: 'transparent', border: 'none',
                  borderRadius: 8, cursor: 'pointer'
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'block', color: '#d1d5db', background: 'transparent',
              border: 'none', cursor: 'pointer', padding: 8
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <><path d="M4 6h16M4 12h16M4 18h16" /></>}
              </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,240,255,0.1)' }}>
          <div className="container-custom" style={{ padding: '16px 0' }}>
            {navLinks.map(link => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 16px', color: '#9ca3af',
                  background: 'transparent', border: 'none',
                  borderRadius: 8, cursor: 'pointer', fontSize: 15
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  )
}