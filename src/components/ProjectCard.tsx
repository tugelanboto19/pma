import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Terminal, Shield, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'security':
        return <Shield className="w-4 h-4 text-brand-blue" />;
      case 'development':
        return <Code className="w-4 h-4 text-white" />;
      default:
        return <Terminal className="w-4 h-4 text-slate-400" />;
    }
  };

  const getCategoryBadgeClass = (category: Project['category']) => {
    switch (category) {
      case 'security':
        return 'bg-brand-blue text-white border border-transparent';
      case 'development':
        return 'bg-white text-black border border-transparent';
      default:
        return 'bg-[#151515] text-slate-300 border border-white/10';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col bg-[#0A0A0A] rounded-none border border-white/10 hover:border-white/20 overflow-hidden transition-colors hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] group"
    >
      {/* Card Image Cover with Hover Scaling */}
      <div className="relative h-48 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 grayscale hover:grayscale-0"
        />
        {/* Absolute Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className={`px-3 py-1 rounded-none text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5 font-bold ${getCategoryBadgeClass(project.category)}`}>
            {getCategoryIcon(project.category)}
            {project.category === 'both' ? 'DevSecOps' : project.category}
          </span>
        </div>
      </div>

      {/* Card Header & Description */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl uppercase tracking-tight text-slate-100 group-hover:text-brand-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs mt-3 leading-relaxed font-serif">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-none bg-black text-slate-400 font-mono text-[9px] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Technical Specs Section */}
        <div className="mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 flex items-center justify-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-slate-400 hover:text-white bg-black rounded-none border border-white/10 hover:border-white/20 cursor-pointer transition-all"
          >
            {isExpanded ? (
              <>Close Mission Details <ChevronUp className="w-3 h-3 text-brand-blue" /></>
            ) : (
              <>Inspect Mission Details <ChevronDown className="w-3 h-3 text-brand-blue" /></>
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-5 pb-1 space-y-4 font-mono text-[10px] text-slate-400 border-t border-white/10 mt-5">
                  <p className="leading-relaxed italic text-slate-350 font-serif">
                    "{project.longDescription}"
                  </p>
                  <div>
                    <h5 className="font-bold text-slate-200 uppercase tracking-widest text-[9px] text-brand-blue">
                      Core Operations Logged:
                    </h5>
                    <ul className="list-disc list-inside mt-2 space-y-1.5 pl-1 text-slate-400">
                      {project.features.map((feat, i) => (
                        <li key={i} className="line-clamp-2">{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-none bg-black hover:bg-white hover:text-black text-[9px] tracking-widest uppercase font-mono font-bold text-slate-300 flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex-1 py-2 rounded-none bg-brand-blue hover:bg-brand-blue/85 text-[9px] tracking-widest uppercase font-mono font-bold text-white flex items-center justify-center gap-2 border border-transparent transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
