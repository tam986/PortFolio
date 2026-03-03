import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer, scaleIn } from '@/animations/motionVariants'
import { ArrowRight, Github } from 'lucide-react'
import avatarImg from '@/styles/avatar.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
      {/* Subtle background glow blobs — solid colors, no gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 blob"
          style={{ background: 'rgba(255, 107, 53, 0.12)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-40 -right-20 w-80 h-80 blob"
          style={{ background: 'rgba(255, 107, 53, 0.1)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 blob"
          style={{ background: 'rgba(255, 255, 255, 0.02)' }}
        />
      </div>

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundColor: '#ffffff',
          maskImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'black\'/%3E%3C/svg%3E")',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'black\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
          <span className="px-4 py-1.5 rounded-full glass border border-[#FF6B35]/40 text-[#FF6B35] text-xs font-semibold tracking-widest uppercase">
            ✦ Available for Work
          </span>
        </motion.div>
         {/* Image */}
        {/* <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-none tracking-tight ">
           <img src={avatarImg} className="w-80 h-80 object-cover rounded-full border-[2px] border-[#0A0F1C]" alt="Logo" />
        </motion.h1> */}

        {/* Name */}
        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-none tracking-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="text-[#FF6B35]">Thanh Tâm</span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mb-4">
          Full-Stack Developer &amp; UI Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful, performant web experiences with modern tech stacks.
          Passionate about clean code, stunning UIs, and solving real problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects" className="flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scaleIn}
          className="mt-20 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-[#FF6B35]/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
