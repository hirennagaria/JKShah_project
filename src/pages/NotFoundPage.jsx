import { Link } from 'react-router-dom'
import { ArrowLeft, Compass, Sparkles } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="mx-auto mt-32 max-w-3xl rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-12 text-center shadow-glow">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-200">
        <Compass className="h-7 w-7" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-slate-50">You&apos;re off course.</h1>
      <p className="mt-3 text-sm text-slate-300">
        The page you&apos;re seeking is still being crafted. Explore the latest cohorts or
        head back to the dashboard.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:text-primary-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <Link
          to="/courses"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
        >
          <Sparkles className="h-4 w-4" />
          Discover courses
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage

