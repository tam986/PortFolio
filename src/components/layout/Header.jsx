import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MobileMenu from '@/components/MobileMenu'
import avatarImg from '@/styles/avatar.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Admin', href: '/admin' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3"
            >
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#FF6B35] to-orange-300 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(255,107,53,0.3)]">
                <img src={avatarImg} className="w-full h-full object-cover rounded-full border-[2px] border-[#0A0F1C]" alt="Logo" />
              </div>
              <span className="text-xl font-black tracking-tight text-white hidden sm:block">Thanh<span className="text-[#FF6B35]">Tam</span></span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 px-2 py-1.5 rounded-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/10 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* CTA or additional action (optional) */}
            <div className="hidden md:block">
              <a href="#contact" className="px-5 py-2.5 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold border border-[#FF6B35]/20 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0)] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]">
                Let's Talk
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isOpen} links={navLinks} onClose={() => setIsOpen(false)} />
    </>
  )
}
