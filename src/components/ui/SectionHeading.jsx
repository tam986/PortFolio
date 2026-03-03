import { Sparkles, Stars, Diamond } from 'lucide-react'

export default function SectionHeading({ label, title, subtitle, icon = 'sparkles' }) {
  const IconComponent = icon === 'stars' ? Stars : icon === 'diamond' ? Diamond : Sparkles;

  return (
    <div className="text-center mb-16 relative">
      <div className="flex flex-col items-center justify-center">
        {/* Decorative graphic to make it more reputable and beautiful */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FF6B35] blur-xl opacity-30 rounded-full scale-150 animate-pulse" />
          <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-tr from-[#FF6B35] to-orange-400 p-[2px] shadow-lg shadow-[#FF6B35]/30">
            <div className="h-full w-full rounded-2xl bg-[#0A0F1C] flex items-center justify-center backdrop-blur-sm">
              <IconComponent className="w-6 h-6 text-[#FF6B35]" />
            </div>
          </div>
        </div>

        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B35] mb-4 block">
          {label}
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
