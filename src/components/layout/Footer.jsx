export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/[0.05] bg-[#0A0F1C]/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF6B35] to-orange-400 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#FF6B35]/20">
            T
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Thanh<span className="text-[#FF6B35]">Tam</span></span>
        </div>
        
        <p className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Thanh Tâm. Built with React, Vite & TailwindCSS ✨
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#FF6B35] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="text-slate-500 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
