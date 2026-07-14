import { Award, ShieldCheck, Calendar, Hash } from 'lucide-react';
import { motion } from 'motion/react';
import { certificatesData } from '../data';

export default function CertificateCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certificatesData.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative bg-[#0A0A0A] rounded-none border border-white/10 hover:border-white/20 overflow-hidden group hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all"
        >
          {/* Accent Border */}
          <div className="h-[2px] w-full bg-brand-blue" />

          <div className="p-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              {/* Badge Icon and Verified Tick */}
              <div className="flex items-center justify-between">
                <div className="p-2 bg-black rounded-none border border-white/10">
                  <Award className="w-5 h-5 text-brand-blue group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="flex items-center gap-1.5 text-[8px] font-mono font-bold text-black bg-white px-2.5 py-0.5 rounded-none uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3 text-black" /> VERIFIED
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-base uppercase tracking-tight text-slate-100 group-hover:text-brand-blue transition-colors leading-tight">
                  {cert.title}
                </h4>
                <p className="font-mono text-[10px] text-slate-400 uppercase mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Verification Metadata */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-1.5 font-mono text-[9px] text-slate-500 tracking-wider">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>ISSUED: {cert.date}</span>
              </div>
              {cert.credentialId && (
                <div className="flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>CRED_ID: {cert.credentialId}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
