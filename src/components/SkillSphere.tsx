import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Skill } from '../types';
import { skillsData } from '../data';

export default function SkillSphere() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'legal' | 'it' | 'iot' | 'creative'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'legal', label: 'Legal & Administrasi' },
    { id: 'it', label: 'IT & Infrastruktur' },
    { id: 'iot', label: 'IoT & Inovasi Kerja' },
    { id: 'creative', label: 'Digital & Media Kreatif' }
  ] as const;

  const filteredSkills = skillsData.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  );

  const getDynamicIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-brand-blue" />;
    }
    return <Icons.Code className="w-5 h-5 text-brand-blue" />;
  };

  return (
    <div className="w-full">
      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-white text-black font-bold border border-transparent'
                : 'bg-black text-slate-400 border border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of animated skill meters */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map(skill => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0A0A0A] p-5 rounded-none border border-white/10 hover:border-white/20 hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-black rounded-none border border-white/10 group-hover:border-white/20 transition-colors">
                  {getDynamicIcon(skill.iconName)}
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-tight text-slate-200 group-hover:text-white text-sm transition-colors">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress Indicator Bar */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center font-mono text-[9px] tracking-wider text-slate-400">
                  <span>METRIC_SCORE</span>
                  <span className="text-brand-blue group-hover:text-white font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1 bg-black rounded-none overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-brand-blue"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
