import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import SkillRadar from '@/components/SkillRadar'
import ProjectCard from '@/components/ProjectCard'
import CategoryFilter from '@/components/CategoryFilter'
import SectionHeading from '@/components/ui/SectionHeading'
import { getProjects, getCategories } from '@/api/projectApi'
import { fadeUp, staggerContainer } from '@/animations/motionVariants'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState(['All'])
  const [activeCategory, setActiveCategory] = useState('All')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data)
      setFiltered(data)
    })
    getCategories().then(setCategories)
  }, [])

  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(projects)
    } else {
      setFiltered(projects.filter((p) => p.category === activeCategory))
    }
  }, [activeCategory, projects])

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              label="What I Know"
              title="Skills & Expertise"
              subtitle="A snapshot of my technical capabilities across frontend, backend, and beyond."
              icon="sparkles"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Radar */}
            <SkillRadar />

            {/* Extra info panel */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: '⚡', title: 'Frontend', desc: 'React, Next.js, TypeScript, Tailwin' },
                { icon: '🔧', title: 'Backend', desc: 'Node.js, MySQL, Laravel Php Framework, PHP' },
                { icon: '☁️', title: 'Cloud & DevOps', desc: 'GitHub Actions, Vercel' },
                { icon: '🎨', title: 'Design', desc: 'Figma, UI/UX principles, Animation, Glassmorphism' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="glass rounded-xl p-5 border border-white/[0.06] hover:border-[#FF6B35]/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: 'rgba(255,107,53,0.05)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              label="Recent Work"
              title="Featured Projects"
              subtitle="A selection of things I've built — from AI tools to polished UIs."
              icon="diamond"
            />
          </motion.div>

          {/* Filter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </motion.div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">No projects in this category.</div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B35] mb-4 block">
              Get In Touch
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Let's Build Something
              <span className="text-[#FF6B35]"> Amazing</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-10 leading-relaxed">
              I'm currently open to full-time roles and freelance projects. If you have something exciting, let's talk!
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-gradient-to-tr from-[#FF6B35] to-orange-400 text-white font-bold text-base hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]"
              >
                Say Hello 👋
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-colors"
              >
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
