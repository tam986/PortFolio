import { motion } from 'framer-motion'
import { ExternalLink, Github, Tag } from 'lucide-react'
import { cardHover } from '@/animations/motionVariants'

export default function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl } = project

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative rounded-2xl overflow-hidden glass border border-white/[0.07] cursor-pointer h-full"
    >
      {/* Color top bar */}
      <div className="h-1 w-full bg-[#FF6B35]" />

      {/* Glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
        style={{
          backgroundColor: 'rgba(255, 107, 53, 0.05)',
          boxShadow: '0 0 40px rgba(255, 107, 53, 0.15)',
        }}
      />

      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center mb-4 shadow-lg">
          <Tag size={20} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#FF6B35] hover:text-white transition-colors"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors ml-auto"
          >
            <Github size={13} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}
