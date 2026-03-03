import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { mobileMenuSlide } from '@/animations/motionVariants'

export default function MobileMenu({ isOpen, links, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            key="menu"
            variants={mobileMenuSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong shadow-2xl md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-[#FF6B35] font-bold text-lg">&lt;Portfolio /&gt;</span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.3 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-[#FF6B35]/10 transition-all duration-200 font-medium text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]/40 group-hover:bg-[#FF6B35] transition-colors" />
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <p className="text-xs text-slate-500 text-center">
                Built with React + Vite ✨
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
