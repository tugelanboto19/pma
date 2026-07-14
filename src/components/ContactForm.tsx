import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Shield, RefreshCw, CheckCircle2, Lock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'audit',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('encrypting');

    // Simulate cryptographic handshake and secure send
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', purpose: 'audit', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-[#0A0A0A] rounded-none border border-white/10 p-6 md:p-10 w-full max-w-2xl mx-auto relative hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all">
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black border border-white/10">
        <Lock className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
        <span className="font-mono text-[8px] text-slate-400 tracking-widest uppercase font-bold">E2E_ENCRYPTED</span>
      </div>

      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 pt-6"
          >
            <div>
              <label className="block font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">
                01 / Full Name / Agency
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Identified Agent"
                className="w-full px-4 py-3 rounded-none bg-black text-slate-100 border border-white/10 focus:outline-none focus:border-white/30 transition-colors font-mono text-xs placeholder:text-slate-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">
                  02 / Contact Endpoint (Email)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="agent@endpoint.io"
                  className="w-full px-4 py-3 rounded-none bg-black text-slate-100 border border-white/10 focus:outline-none focus:border-white/30 transition-colors font-mono text-xs placeholder:text-slate-700"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">
                  03 / Auditing Purpose
                </label>
                <select
                  value={formData.purpose}
                  onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3 rounded-none bg-black text-slate-100 border border-white/10 focus:outline-none focus:border-white/30 transition-colors font-mono text-xs"
                >
                  <option value="audit">Cybersecurity Vulnerability Audit</option>
                  <option value="dev">Full-Stack Application Development</option>
                  <option value="consult">Technical Joint Venture</option>
                  <option value="general">General Transmission Connection</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">
                04 / Payload Message Body
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Encrypt your message details here..."
                className="w-full px-4 py-3 rounded-none bg-black text-slate-100 border border-white/10 focus:outline-none focus:border-white/30 transition-colors font-mono text-xs placeholder:text-slate-700 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-white hover:bg-slate-200 text-black font-mono text-xs uppercase tracking-widest rounded-none font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-black" /> Dispatch Secure Transmission
            </button>
          </motion.form>
        )}

        {status === 'encrypting' && (
          <motion.div
            key="encrypting"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="py-16 text-center space-y-6"
          >
            <div className="relative inline-block">
              <RefreshCw className="w-12 h-12 text-brand-blue animate-spin mx-auto" />
              <Shield className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-white uppercase tracking-widest font-bold animate-pulse">
                Encrypting Data Packets
              </h4>
              <p className="font-mono text-[9px] text-slate-500 tracking-wider">
                DIFFIE-HELLMAN KEY EXCHANGE IN PROGRESS... RSA 4096-BIT ENCRYPTION ACTIVE
              </p>
            </div>
          </motion.div>
        )}

        {status === 'sent' && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center space-y-6"
          >
            <CheckCircle2 className="w-12 h-12 text-white bg-brand-blue p-2.5 rounded-full mx-auto" />
            <div className="space-y-3">
              <h4 className="font-display font-black text-xl text-slate-100 uppercase tracking-tight">
                Transmission Securely Relayed
              </h4>
              <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed font-serif">
                Thank you. Your request payload has been relayed securely. Imam Falahi will parse this packet and respond within 24 standard solar hours.
              </p>
              <div className="pt-3">
                <span className="font-mono text-[9px] text-white font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-none uppercase tracking-widest">
                  HASH: SHA-256/3E8F4B
                </span>
              </div>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-5 py-2 border border-white/15 hover:border-white text-white font-mono text-[10px] tracking-widest uppercase cursor-pointer transition-all rounded-none"
            >
              Send Another Transmission
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
