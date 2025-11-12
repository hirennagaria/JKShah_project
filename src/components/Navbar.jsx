import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, UserRound, ChevronRight } from 'lucide-react'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Course Viewer', to: '/course-viewer/ca-foundation-fasttrack' },
]

const NavItem = ({ label, to, onClick }) => (
  <NavLink
    to={to}
    end={to === '/'}
    onClick={onClick}
    className="group relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-primary-100"
  >
    {({ isActive }) => (
      <>
        <span className={isActive ? 'text-primary-200' : undefined}>{label}</span>
        {isActive && (
          <motion.span
            layoutId="nav-underline"
            className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-primary-400/90"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
            className="ml-auto flex h-full w-[82%] max-w-xs flex-col gap-6 bg-slate-900/95 px-6 py-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Link to="/" onClick={onClose} className="flex items-center gap-2">
                <span className="rounded-full bg-primary-500/20 p-2 text-primary-200">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold text-slate-100">
                  J K Shah Classes
                </p>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-700/70 p-2 text-slate-300 hover:text-white"
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
                  className={`flex items-center justify-between rounded-2xl border border-transparent bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition-all hover:border-primary-500/50 hover:bg-primary-500/10 ${
                    location.pathname === item.to
                      ? 'border-primary-500/60 bg-primary-500/10 text-primary-100'
                      : ''
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-primary-200" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <Link
                to="/auth?mode=register"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
              >
                Start Free Trial
              </Link>
              <Link
                to="/auth?mode=login"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-700/70 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-primary-500/50 hover:text-primary-100"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-4 shadow-[0_20px_45px_-20px_rgba(74,111,242,0.4)] backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-primary-200">
                J K Shah Classes
              </span>
              <span className="text-xs font-medium text-slate-400">
                Commerce Success Engine
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/auth?mode=login"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary-400/60 hover:text-primary-100"
            >
              <UserRound className="h-4 w-4" />
              Log In
            </Link>
            <Link
              to="/auth?mode=register"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              <Sparkles className="h-4 w-4" />
              Start Free Trial
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 p-2 text-slate-200 transition-colors hover:border-primary-500/60 hover:text-primary-100 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default Navbar

