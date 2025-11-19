import { useState, useMemo } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  UserRound,
  Mail,
  Phone,
  GraduationCap,
  ArrowRight,
  Check,
} from 'lucide-react'

const tabs = [
  { id: 'login', label: 'Log In' },
  { id: 'register', label: 'Sign Up' },
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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-[1fr_1.2fr]">
          <div className="hidden flex-col justify-between bg-primary-950 p-10 text-white lg:flex">
            <div className="space-y-6">
              <img src="/logo.svg" alt="J.K. Shah Classes" className="h-12" />
              <h2 className="text-3xl font-bold">
                Start Your Commerce Journey Today
              </h2>
              <p className="text-primary-100">
                Join thousands of students achieving their professional goals with
                expert-led courses and comprehensive support.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary-200" />
                  <span>Secure payments with Razorpay</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary-200" />
                  <span>Expert mentors & live sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary-200" />
                  <span>Comprehensive course materials</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-sm">
              <p className="mb-2 font-semibold">Sample Credentials</p>
              <p className="text-primary-100">Email: learner@jkshahonline.com</p>
              <p className="text-primary-100">Password: Learn@2025</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-6 py-10 sm:px-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-primary-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <div className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
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
                  <h1 className="text-2xl font-bold text-slate-900">
                    {isRegister ? 'Create Your Account' : 'Welcome Back'}
                  </h1>
                  <p className="mt-2 text-sm text-slate-600">
                    {isRegister
                      ? 'Sign up to start your learning journey'
                      : 'Sign in to continue your learning'}
                  </p>
                </div>

                <form className="space-y-4">
                  {isRegister && (
                    <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 focus-within:border-primary-950 focus-within:ring-2 focus-within:ring-primary-950/20">
                        <UserRound className="h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 focus-within:border-primary-950 focus-within:ring-2 focus-within:ring-primary-950/20">
                        <Phone className="h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="+91 90000 12345"
                          className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  )}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 focus-within:border-primary-950 focus-within:ring-2 focus-within:ring-primary-950/20">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 focus-within:border-primary-950 focus-within:ring-2 focus-within:ring-primary-950/20">
                      <Lock className="h-4 w-4 text-slate-400" />
                      <input
                        type="password"
                        placeholder={isRegister ? 'Create a password' : 'Enter password'}
                        className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {isRegister && (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Qualification Goal
                      </label>
                      <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/20">
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
                  >
                    {isRegister ? 'Create Account' : 'Log In'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                {!isRegister && (
                  <p className="text-center text-sm text-slate-600">
                    Forgot password?{' '}
                    <Link to="#" className="font-semibold text-primary-950">
                      Reset here
                    </Link>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
