import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, ChevronRight } from 'lucide-react'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Dashboard', to: '/dashboard' },
]

const NavItem = ({ label, to, onClick }) => (
  <NavLink
    to={to}
    end={to === '/'}
    onClick={onClick}
    className="group relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-primary-950"
  >
    {({ isActive }) => (
      <>
        <span className={isActive ? 'text-primary-950 font-semibold' : undefined}>
          {label}
        </span>
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary-950"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </>
    )}
  </NavLink>
)

const MobileMenu = ({ open, onClose }) => {
  const location = useLocation()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col gap-6 bg-white px-6 py-8 shadow-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={onClose} className="flex items-center gap-3">
                <img src="/logo.svg" alt="J.K. Shah Classes" className="h-10" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? 'bg-primary-50 text-primary-950'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <Link
                to="/auth?mode=register"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
              >
                Get Started
              </Link>
              <Link
                to="/auth?mode=login"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="J.K. Shah Classes" className="h-12" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/auth?mode=login"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-primary-950"
            >
              <User className="h-4 w-4" />
              Log In
            </Link>
            <Link
              to="/auth?mode=register"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-900"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default Navbar
