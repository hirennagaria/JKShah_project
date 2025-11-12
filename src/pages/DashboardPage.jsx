import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Flame,
  Sparkles,
  CalendarCheck,
  Clock,
  Play,
  UserRound,
  ArrowRight,
  Trophy,
  BookOpenCheck,
  Percent,
} from 'lucide-react'
import { dashboardOverview, courses } from '../data/platform'

const DashboardPage = () => {
  const { user, learnings, upcoming } = dashboardOverview

  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-200">
                Welcome back
              </p>
              <h1 className="text-3xl font-semibold text-slate-50">Hey {user.name},</h1>
              <p className="text-sm text-slate-300">
                You&apos;re {user.streak}-days strong on the {user.plan} track. Keep the
                streak alive!
              </p>
            </div>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-6 py-3 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:bg-primary-500/20 hover:text-primary-50"
          >
            Discover a new cohort
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-slate-400">Streak</p>
              <Flame className="h-5 w-5 text-secondary" />
            </div>
            <p className="mt-4 text-3xl font-semibold text-secondary">{user.streak}</p>
            <p className="text-xs text-slate-400">days active</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Mentor credits
              </p>
              <Sparkles className="h-5 w-5 text-primary-300" />
            </div>
            <p className="mt-4 text-3xl font-semibold text-primary-200">
              {user.credits}
            </p>
            <p className="text-xs text-slate-400">credits available</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Learning hours
              </p>
              <Clock className="h-5 w-5 text-ocean" />
            </div>
            <p className="mt-4 text-3xl font-semibold text-ocean">
              {user.completedHours}
            </p>
            <p className="text-xs text-slate-400">hours completed</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Plan enrolled
              </p>
              <UserRound className="h-5 w-5 text-mint" />
            </div>
            <p className="mt-4 text-lg font-semibold text-slate-100">{user.plan}</p>
            <p className="text-xs text-slate-400">Course bundle</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="badge">Your learning journey</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-50">
                Continue where you paused
              </h2>
            </div>
            <Link
              to="/course-viewer/ca-inter-pro"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
            >
              Open viewer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {learnings.map((learning) => {
              const course = courses.find((item) => item.id === learning.courseId)
              return (
                <motion.div
                  key={learning.courseId}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary-200">
                      {course?.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-50">
                      {learning.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      Next lesson: {learning.nextLesson}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                      Mentor {learning.mentor}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <div className="relative h-2 w-40 overflow-hidden rounded-full bg-slate-800">
                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-primary-500"
                        style={{ width: `${learning.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary-200">
                      {learning.progress}% complete
                    </span>
                    <span
                      className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide ${learning.accent}`}
                    >
                      {learning.badge}
                    </span>
                    <Link
                      to={`/course-viewer/${learning.courseId}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                    >
                      Resume
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 text-primary-300" />
              <p className="text-sm font-semibold text-slate-100">Upcoming sessions</p>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              {upcoming.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-slate-100">{event.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-primary-200">
                    {event.date}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">with {event.mentor}</p>
                </div>
              ))}
            </div>
            <Link
              to="/auth?mode=login"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:text-primary-50"
            >
              Sync calendar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3">
              <Percent className="h-5 w-5 text-ocean" />
              <p className="text-sm font-semibold text-slate-100">Performance pulse</p>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Mock tests attempted</span>
                <span className="text-primary-200">12</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Average accuracy</span>
                <span className="text-primary-200">82%</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Revision sprints completed</span>
                <span className="text-primary-200">9</span>
              </div>
            </div>
            <Link
              to="/course-viewer/ca-foundation-fasttrack"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              View analytics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="badge">Unlock elite experiences</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-50">
              Ready for the ranker labs?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Early access to answer writing retreats, placement bootcamps, and peer
              mastermind circles for CA Final and CFA Level III aspirants.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Ranker retreats
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Leadership labs
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Career accelerators
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-primary-300" />
              <span>Guided pathways from AIR mentors</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpenCheck className="h-5 w-5 text-primary-300" />
              <span>Weekly ranker mock debriefs & audits</span>
            </div>
            <div className="flex items-center gap-3">
              <Play className="h-5 w-5 text-primary-300" />
              <span>Interactive case labs and leadership simulations</span>
            </div>
            <Link
              to="/auth?mode=register"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              Upgrade plan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage

