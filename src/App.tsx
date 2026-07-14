import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Terminal as TerminalIcon,
  MapPin,
  ArrowDown,
  Briefcase,
  GraduationCap,
  Award,
  Github,
  Instagram,
  Mail,
  Clock,
  Cpu,
  Menu,
  X
} from 'lucide-react';

import { personalInfo, projectsData, timelineData } from './data';
import TerminalLab from './components/TerminalLab';
import ProjectCard from './components/ProjectCard';
import SkillSphere from './components/SkillSphere';
import CertificateCarousel from './components/CertificateCarousel';
import ContactForm from './components/ContactForm';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [timeString, setTimeString] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'development' | 'security'>('all');

  // Real-time WIB (Waktu Indonesia Barat) Time Tracker
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      // UTC Offset calculations
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      const wibTime = new Date(utc + (3600000 * 7)); // Yogyakarta is UTC+7
      setTimeString(
        wibTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Performance-optimized scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = projectsData.filter(
    proj => selectedFilter === 'all' || proj.category === selectedFilter || proj.category === 'both'
  );

  const workExperience = timelineData.filter(evt => evt.type === 'work');
  const educationHistory = timelineData.filter(evt => evt.type === 'education');

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-slate-100 font-sans selection:bg-brand-blue/30 selection:text-white">
      
      {/* =========================================================================
          PARALLAX BACKGROUND DESIGN ELEMENTS (Amplified depth and density)
         ========================================================================= */}
      
      {/* Layer 1: Sharp Vector Grid Backdrop (Translating down slightly slower than scroll) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          transform: `translate3d(0, ${scrollY * 0.18}px, 0)`,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(10, 10, 10, 0.1) 0%, rgba(10, 10, 10, 1) 95%),
            linear-gradient(rgba(255, 255, 255, 0.015) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          height: '280%'
        }}
      />

      {/* Layer 2: Concentric Vector Circles (Translating opposite/upward direction) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-0 overflow-hidden h-[300vh]"
        style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0)` }}
      >
        <div className="absolute top-[-50px] right-[-50px] w-[700px] h-[700px] border border-brand-blue/5 rounded-full pointer-events-none" />
        <div className="absolute top-[90vh] left-[-200px] w-[950px] h-[950px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-[220vh] right-[10%] w-[550px] h-[550px] border border-brand-blue/5 rounded-full pointer-events-none" />
      </div>

      {/* Layer 3: Floating Blueprint Code Lines (Translating very fast upward to create intense foreground depth) */}
      <div
        className="absolute inset-y-0 left-4 sm:left-12 w-px pointer-events-none z-0 overflow-hidden"
        style={{ height: '350vh' }}
      >
        <div 
          className="h-[600px] w-full bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent flex flex-col justify-around text-[9px] font-mono text-brand-blue/35 py-12 select-none"
          style={{ transform: `translate3d(0, ${scrollY * -0.42}px, 0)` }}
        >
          <span>[SYS_INIT] 0xEF91</span>
          <span>[SEC_ENCRYPT] ACTIVE</span>
          <span>[PORT_BND] 3000</span>
          <span>[CLASS_AA] INTR_CHK</span>
          <span>[IP_STABLE] 127.0.0.1</span>
        </div>
      </div>

      <div
        className="absolute inset-y-0 right-4 sm:right-12 w-px pointer-events-none z-0 overflow-hidden"
        style={{ height: '350vh' }}
      >
        <div 
          className="h-[800px] w-full bg-gradient-to-b from-transparent via-white/10 to-transparent flex flex-col justify-between text-[8px] font-mono text-slate-500/45 py-24 select-none"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
        >
          <span>LAT: -7.79706</span>
          <span>LON: 110.37052</span>
          <span>YOGYAKARTA_CORE</span>
          <span>INTEGRITY_LEVEL: AA+</span>
        </div>
      </div>

      {/* Layer 4: Multi-Speed Background Watermarks */}
      <div
        className="absolute inset-x-0 top-[22vh] pointer-events-none z-0 overflow-hidden select-none font-display font-black text-white/[0.015] text-[20vw] text-center uppercase tracking-tighter"
        style={{ transform: `translate3d(0, ${scrollY * 0.38}px, 0)` }}
      >
        IT & LEGAL
      </div>

      <div
        className="absolute inset-x-0 top-[110vh] pointer-events-none z-0 overflow-hidden select-none font-display font-black text-brand-blue/[0.012] text-[18vw] text-center uppercase tracking-tighter"
        style={{ transform: `translate3d(0, ${scrollY * -0.28}px, 0)` }}
      >
        COMPLIANCE
      </div>

      <div
        className="absolute inset-x-0 top-[230vh] pointer-events-none z-0 overflow-hidden select-none font-display font-black text-white/[0.015] text-[16vw] text-center uppercase tracking-tighter"
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      >
        SECURE NODE
      </div>

      {/* Layer 5: Floating technical console offsets */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-0 overflow-hidden select-none font-mono text-[9px] text-white/10 hidden md:block"
        style={{
          transform: `translate3d(0, ${scrollY * -0.24}px, 0)`,
          height: '240vh'
        }}
      >
        <div className="absolute top-[45vh] left-[8%] border border-white/10 px-2.5 py-1 bg-[#0A0A0A]/60 uppercase tracking-widest font-bold">
          SYS_STATION: 3000 // RUNNING
        </div>
        <div className="absolute top-[105vh] right-[10%] border border-white/10 px-2.5 py-1 bg-[#0A0A0A]/60 uppercase tracking-widest font-bold">
          SECURITY_INTEGRITY: ENCRYPTED_AES_256
        </div>
        <div className="absolute top-[185vh] left-[12%] border border-white/10 px-2.5 py-1 bg-[#0A0A0A]/60 uppercase tracking-widest font-bold">
          COMPLIANCE_LEVEL: COMPLIANT_OSS_RBA
        </div>
      </div>

      {/* =========================================================================
          NAVIGATION COMPONENT (Bold Minimalist)
         ========================================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand/Logo (Initial Box & Title from style guide) */}
          <a href="#home" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-black font-display font-black text-sm uppercase">IF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs tracking-[0.2em] text-slate-100 uppercase">
                {personalInfo.handle}
              </span>
              <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
                PORTFOLIO 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">
            <a href="#about" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">01. ABOUT</a>
            <a href="#skills" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">02. COMPETENCIES</a>
            <a href="#lab" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" />
              03. CYBER_LAB
            </a>
            <a href="#projects" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">04. OPERATIONS</a>
            <a href="#credentials" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">05. CREDENTIALS</a>
            <a href="#contact" className="hover:text-white hover:opacity-100 transition-colors cursor-pointer px-4 py-2 bg-white text-black font-bold border border-transparent hover:bg-transparent hover:text-white hover:border-white/20 transition-all">
              CONNECT
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 cursor-pointer focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 bg-[#0A0A0A] px-4 py-6 space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                01. ABOUT
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                02. COMPETENCIES
              </a>
              <a
                href="#lab"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                03. CYBER_LAB
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                04. OPERATIONS
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                05. CREDENTIALS
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-center bg-white text-black font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white/20 transition-all"
              >
                CONNECT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================================
          HERO / LANDING SECTION (Scroll-sensitive scaling & translates)
         ========================================================================= */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-20 px-4 z-10"
      >
        <div
          className="w-full max-w-6xl flex flex-col justify-center text-left space-y-10"
          style={{
            transform: `translate3d(0, ${scrollY * 0.22}px, 0) scale(${Math.max(1 - scrollY / 1800, 0.88)})`,
            opacity: Math.max(1 - scrollY / 700, 0)
          }}
        >
          {/* Cyber Status Banner */}
          <div className="inline-flex items-center gap-3 max-w-max px-4 py-1.5 bg-[#0A0A0A] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
              NODE_YOGYAKARTA_ID
            </span>
            <span className="h-3 w-px bg-white/10" />
            <div className="flex items-center gap-1 font-mono text-[10px] text-slate-350">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>{timeString || "00:00:00 WIB"}</span>
            </div>
          </div>

          {/* Main Huge Bold Titles (Inspired directly by the prompt's layout specifications) */}
          <div className="space-y-4">
            <span className="text-[12px] uppercase tracking-[0.5em] text-brand-blue font-bold block mb-1">
              {personalInfo.role}
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[170px] leading-[0.8] font-black tracking-tighter uppercase font-display select-none">
              Imam<br/>
              <span className="ml-12 sm:ml-24 flex items-center flex-wrap gap-x-6">
                Falahi
                <span className="w-8 h-8 sm:w-12 sm:h-12 bg-brand-blue rounded-full mt-2 sm:mt-12 animate-pulse inline-block"></span>
              </span>
            </h1>
          </div>

          {/* Footer of Hero */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-6 border-t border-white/10">
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-serif italic font-light">
                "{personalInfo.bio} {personalInfo.philosophy}"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-4 w-full md:w-auto font-mono text-[10px] tracking-[0.2em] font-bold">
              <a
                href="#lab"
                className="px-6 py-3 bg-white text-black uppercase hover:bg-brand-blue hover:text-white transition-all text-center cursor-pointer"
              >
                Enter Cyber Lab →
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent text-slate-300 uppercase border border-white/20 hover:border-white transition-all text-center cursor-pointer"
              >
                Operations Registry
              </a>
            </div>
          </div>

          {/* Subtle scroll down indicator */}
          <div className="pt-8 flex items-center gap-3 opacity-50">
            <span className="font-mono text-[9px] tracking-widest uppercase">
              Scroll to Decrypt
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-brand-blue" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: ABOUT ME & TIMELINE (With professional division)
         ========================================================================= */}
      <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#020202]/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-16">
            <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">01 / ID_VERIFICATION</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
              Identity Protocol
            </h2>
            <div className="h-[2px] w-16 bg-white mt-4" />
          </div>

          {/* Grid Layout (Bio card left, Separated Timelines right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Biography Profile Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0A0A0A] rounded-none border border-white/10 p-6 space-y-6 sticky top-24">
                
                {/* Visual Avatar Placeholder */}
                <div className="relative aspect-square w-full bg-[#050505] overflow-hidden border border-white/10">
                  <img
                    src="https://picsum.photos/seed/imamfalahi/600/600"
                    alt="Imam Falahi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 filter grayscale"
                  />
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-black border border-white/15">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300">YOGYAKARTA, ID</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-200 uppercase tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-serif italic">
                    "{personalInfo.philosophy}"
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>

                {/* Direct Connect Quick Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 font-mono text-[10px] tracking-widest">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" /> GITHUB
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    <Instagram className="w-4 h-4" /> INSTAGRAM
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" /> EMAIL
                  </a>
                </div>
              </div>
            </div>

            {/* Separated Timelines (Work History & Education History) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* 1. PROFESSIONAL WORK EXPERIENCE */}
              <div className="bg-[#0A0A0A] rounded-none border border-white/10 p-6 sm:p-8 space-y-8">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-100 border-b border-white/10 pb-4 flex items-center gap-2 font-bold">
                  <Briefcase className="w-4 h-4 text-brand-blue" /> System Operational Record (Riwayat Pekerjaan)
                </h3>

                <div className="relative pl-6 border-l border-white/10 space-y-8">
                  {workExperience.map((evt, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Bullet Anchor Point */}
                      <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-none bg-black border border-white group-hover:bg-brand-blue transition-colors" />

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[9px] text-white font-bold bg-white/5 border border-white/15 px-2.5 py-0.5">
                            {evt.year}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                            // OPERATIONS_MISSION
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-slate-100 uppercase tracking-tight">
                          {evt.role}
                        </h4>
                        <p className="font-mono text-[10px] text-slate-400">
                          {evt.company}
                        </p>
                        <p className="font-sans text-xs text-slate-400/90 leading-relaxed pt-1.5 max-w-xl">
                          {evt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. EDUCATION & ACADEMIC ACHIEVEMENTS */}
              <div className="bg-[#0A0A0A] rounded-none border border-white/10 p-6 sm:p-8 space-y-8">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-100 border-b border-white/10 pb-4 flex items-center gap-2 font-bold">
                  <GraduationCap className="w-4 h-4 text-brand-blue" /> Academic & Research Protocol (Riwayat Pendidikan)
                </h3>

                <div className="relative pl-6 border-l border-white/10 space-y-8">
                  {educationHistory.map((evt, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Bullet Anchor Point */}
                      <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-none bg-black border border-white group-hover:bg-brand-blue transition-colors" />

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[9px] text-white font-bold bg-white/5 border border-white/15 px-2.5 py-0.5">
                            {evt.year}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                            // ACADEMIC_DISSERTATION
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-slate-100 uppercase tracking-tight">
                          {evt.role}
                        </h4>
                        <p className="font-mono text-[10px] text-slate-400">
                          {evt.company}
                        </p>
                        <p className="font-sans text-xs text-slate-400/90 leading-relaxed pt-1.5 max-w-xl">
                          {evt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE COMPETENCIES
         ========================================================================= */}
      <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">02 / CORE_METRICS</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
              Cyber & Dev Competencies
            </h2>
            <div className="h-[2px] w-16 bg-white mt-4 mx-auto" />
          </div>

          {/* Grid list container */}
          <SkillSphere />

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE TERMINAL SEC LAB
         ========================================================================= */}
      <section id="lab" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#020202]/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">03 / SECURE_SANDBOX</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
              The Cryptographic Lab
            </h2>
            <p className="text-xs text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
              Run administrative diagnostic commands or crack the decryption key on Imam Falahi's virtual server session.
            </p>
            <div className="h-[2px] w-16 bg-white mt-4 mx-auto" />
          </div>

          {/* Interactive Terminal */}
          <TerminalLab />

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PORTFOLIO OPERATIONS
         ========================================================================= */}
      <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading & Category Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">04 / OPERATIONS_LOG</span>
              <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
                Completed Operations
              </h2>
              <div className="h-[2px] w-16 bg-white mt-4" />
            </div>

            {/* Quick sub-filter for projects */}
            <div className="flex items-center gap-1.5 p-1 bg-black border border-white/10">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-colors ${selectedFilter === 'all' ? 'bg-white text-black font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                All Works
              </button>
              <button
                onClick={() => setSelectedFilter('development')}
                className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-colors ${selectedFilter === 'development' ? 'bg-white text-black font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Dev Operations
              </button>
              <button
                onClick={() => setSelectedFilter('security')}
                className={`px-4 py-1.5 font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-colors ${selectedFilter === 'security' ? 'bg-white text-black font-bold' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Sec Operations
              </button>
            </div>
          </div>

          {/* Grid Layout of Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(proj => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INDUSTRY VERIFICATIONS
         ========================================================================= */}
      <section id="credentials" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#020202]/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">05 / VERIFICATIONS</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
              Industry Credentials
            </h2>
            <div className="h-[2px] w-16 bg-white mt-4 mx-auto" />
          </div>

          {/* Certificate list */}
          <CertificateCarousel />

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ESTABLISH CONNECTION
         ========================================================================= */}
      <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">06 / HANDSHAKE_PROTOCOL</span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-100 uppercase tracking-tighter mt-2">
              Secure Relays
            </h2>
            <p className="text-xs text-slate-400 mt-3 max-w-sm mx-auto leading-relaxed">
              Initiate an end-to-end encrypted dispatch. Ideal for threat disclosure, security auditing, or robust web architecture inquiries.
            </p>
            <div className="h-[2px] w-16 bg-white mt-4 mx-auto" />
          </div>

          {/* Secure Contact Form */}
          <ContactForm />

        </div>
      </section>

      {/* =========================================================================
          FOOTER COMPONENT
         ========================================================================= */}
      <footer className="relative z-10 py-16 px-4 border-t border-white/10 bg-black text-slate-500 text-[10px] font-mono tracking-widest">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-slate-300 font-display font-bold text-xs uppercase tracking-wider">
              {personalInfo.name} &bull; {personalInfo.handle}
            </p>
            <p className="text-[9px] text-slate-600">
              SYSTEM SECURITY ENFORCED &bull; CRAFTED WITH DEVSEC_ENG_V2
            </p>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              // GITHUB
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              // INSTAGRAM
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              // EMAIL
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
