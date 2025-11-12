import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

const socials = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

const quickLinks = [
  { label: 'Admissions', to: '/auth?mode=register' },
  { label: 'Find a Course', to: '/courses' },
  { label: 'Learner Dashboard', to: '/dashboard' },
  { label: 'Support Center', to: '/auth?mode=login' },
]

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200">
                <ArrowUpRight className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-semibold text-primary-100">
                  J K Shah Classes Online
                </p>
                <p className="text-sm text-slate-400">
                  Commerce success, now on-demand.
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Building the most trusted pathway for CA, CMA, CFA, and ACCA aspirants
              with immersive content, live mentorship, and AI-enhanced revision
              sprints.
            </p>
            <div className="flex items-center gap-6">
              {socials.map(({ name, icon: Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="text-slate-400 transition hover:text-primary-100"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Quick Links
            </h3>
            <div className="grid gap-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex items-center gap-2 transition hover:text-primary-100"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary-300" />
                <p>
                  HQ: 6th Floor, Commerce Square, Andheri West, Mumbai, Maharashtra
                  400053
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-primary-300" />
                <div>
                  <p>Admissions: +91 93214 90901</p>
                  <p>Support: +91 86578 34512</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-primary-300" />
                <div>
                  <p>admissions@jkshahonline.com</p>
                  <p>support@jkshahonline.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent px-6 py-8 sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3rem] text-primary-200">
              Future of Commerce Learning
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-100">
              Join 180K+ aspirants accelerating their careers with J K Shah Classes.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row lg:mt-0">
            <Link
              to="/auth?mode=register"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              Start Learning Today
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:border-primary-400/60 hover:text-primary-100"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} J K Shah Classes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="transition hover:text-primary-100">
              Terms
            </Link>
            <Link to="#" className="transition hover:text-primary-100">
              Privacy
            </Link>
            <Link to="#" className="transition hover:text-primary-100">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
