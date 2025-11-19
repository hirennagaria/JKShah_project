import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const socials = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

const quickLinks = [
  { label: 'Admissions', to: '/auth?mode=register' },
  { label: 'Courses', to: '/courses' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Support', to: '/auth?mode=login' },
]

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <img src="/logo.svg" alt="J.K. Shah Classes" className="h-10" />
            <p className="max-w-xs text-sm text-slate-600">
              Building the most trusted pathway for CA, CMA, CFA, and ACCA aspirants
              with immersive content and live mentorship.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ name, icon: Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ y: -2 }}
                  className="text-slate-400 transition hover:text-primary-950"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm text-slate-600 transition hover:text-primary-950"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-700" />
                <p>
                  6th Floor, Commerce Square, Andheri West, Mumbai, Maharashtra 400053
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary-700" />
                <div>
                  <p>+91 93214 90901</p>
                  <p>+91 86578 34512</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary-700" />
                <div>
                  <p>admissions@jkshahonline.com</p>
                  <p>support@jkshahonline.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Newsletter
            </h3>
            <p className="text-sm text-slate-600">
              Get updates on new courses and learning resources.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/20"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} J.K. Shah Classes. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="transition hover:text-primary-950">
              Terms
            </Link>
            <Link to="#" className="transition hover:text-primary-950">
              Privacy
            </Link>
            <Link to="#" className="transition hover:text-primary-950">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
