import { motion } from 'framer-motion'

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => {
        const isActive = cat === active
        return (
          <motion.button
            key={cat}
            onClick={() => onChange(cat)}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden ${
              isActive
                ? 'text-white shadow-[0_0_20px_rgba(255,107,53,0.45)]'
                : 'text-slate-400 glass border border-white/10 hover:text-white hover:border-white/30'
            }`}
            style={isActive ? { backgroundColor: '#FF6B35' } : {}}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#FF6B35' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
