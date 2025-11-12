import { useState, useMemo } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Lock,
  UserRound,
  Mail,
  Phone,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const tabs = [
  { id: 'login', label: 'Log in' },
  { id: 'register', label: 'Start learning' },
]

const AuthPage = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const modeFromParams = params.get('mode')
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.id === modeFromParams)?.id ?? 'login',
  )

  const isRegister = useMemo(() => activeTab === 'register', [activeTab])

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
      <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-5xl gap-10 overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/50 shadow-glow lg:grid-cols-[1.1fr_1fr]">
        <div className="relative hidden flex-col justify-between border-r border-white/10 bg-[radial-gradient(circle_at_top,_rgba(74,111,242,0.35),_rgba(15,23,42,0.95))] px-8 py-12 text-slate-100 lg:flex">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-semibold text-primary-100">
                  J K Shah Classes
                </p>
                <p className="text-sm text-slate-300">Your commerce success engine</p>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-slate-50">
              Unlock elite pedagogy across CA, CFA, CMA & ACCA pathways.
            </h2>
            <p className="text-sm text-slate-300">
              Razorpay-enabled checkout, multi-device viewing, live mentorship, and AI
              revision OS – all waiting in your dashboard.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary-200" />
                <span>Secure payments, data, and device sync</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary-200" />
                <span>Ranker mentors & adaptive revision plans</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary-200" />
                <span>Scholarship credits & exclusive labs</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-primary-200">
              Preview experience
            </p>
            <p className="mt-2">
              The backend integration will auto-route logins, Razorpay checkout, and
              course unlocks. Start with sample credentials to explore the flow.
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs">
              <p className="font-semibold text-slate-100">Sample Credentials</p>
              <p className="mt-2 text-slate-300">Email: learner@jkshahonline.com</p>
              <p className="text-slate-300">Password: Learn@2025</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-6 py-10 sm:px-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:text-primary-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex gap-3 rounded-full border border-white/10 bg-slate-950/40 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'text-slate-300 hover:text-primary-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl font-semibold text-slate-50">
                  {isRegister ? 'Create your learning account' : 'Welcome back, achiever'}
                </h1>
                <p className="mt-2 text-sm text-slate-300">
                  {isRegister
                    ? 'Unlock adaptive cohorts, mentorship credits, and Razorpay-powered checkout once backend integration is live.'
                    : 'Sign in with sample credentials to preview the upcoming experience.'}
                </p>
              </div>

              <form className="space-y-4">
                {isRegister && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Full name
                      </label>
                      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                        <UserRound className="h-4 w-4 text-primary-300" />
                        <input
                          type="text"
                          placeholder="Aarav Joshi"
                          className="w-full bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Phone number
                      </label>
                      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                        <Phone className="h-4 w-4 text-primary-300" />
                        <input
                          type="tel"
                          placeholder="+91 90000 12345"
                          className="w-full bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Email address
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                    <Mail className="h-4 w-4 text-primary-300" />
                    <input
                      type="email"
                      placeholder="you@jkshahonline.com"
                      className="w-full bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Password
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4">
                    <Lock className="h-4 w-4 text-primary-300" />
                    <input
                      type="password"
                      placeholder={isRegister ? 'Create a strong password' : 'Enter your password'}
                      className="w-full bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                {isRegister && (
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Qualification goal
                    </label>
                    <select className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-primary-500/60 focus:outline-none">
                      <option>CA Foundation</option>
                      <option>CA Intermediate</option>
                      <option>CA Final</option>
                      <option>CFA Level I</option>
                      <option>CMA</option>
                      <option>ACCA</option>
                    </select>
                  </div>
                )}

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
                >
                  {isRegister ? 'Create account & explore' : 'Log in with sample credentials'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-300">
                <p className="text-xs uppercase tracking-wide text-primary-200">
                  Coming soon
                </p>
                <p>
                  Razorpay integration will power instant payments for single courses,
                  bundles, and subscriptions with GST invoices. Credentials & purchases
                  auto-sync to dashboard and course viewer.
                </p>
                {!isRegister && (
                  <p className="text-xs text-slate-400">
                    Forgot password?{' '}
                    <Link to="#" className="font-semibold text-primary-200">
                      Reset via email
                    </Link>
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

