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
    <div className="space-y-12 bg-slate-50 pb-20 pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary-700">
                Welcome back
              </p>
              <h1 className="text-3xl font-bold text-slate-900">Hey {user.name},</h1>
              <p className="text-sm text-slate-600">
                You&apos;re on a {user.streak}-day streak on the {user.plan} track. Keep it
                up!
              </p>
            </div>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-950 bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
          >
            Discover New Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="rounded-xl border border-slate-200 bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 p-6 shadow-sm"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                Streak
              </p>
              <Flame className="h-5 w-5 text-accent-orange" />
            </div>
            <p className="mt-4 text-3xl font-bold text-accent-orange">{user.streak}</p>
            <p className="text-xs text-slate-600">days active</p>
          </motion.div>
          <motion.div
            className="rounded-xl border border-slate-200 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 p-6 shadow-sm"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                Mentor Credits
              </p>
              <Sparkles className="h-5 w-5 text-accent-purple" />
            </div>
            <p className="mt-4 text-3xl font-bold text-accent-purple">{user.credits}</p>
            <p className="text-xs text-slate-600">credits available</p>
          </motion.div>
          <motion.div
            className="rounded-xl border border-slate-200 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 p-6 shadow-sm"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                Learning Hours
              </p>
              <Clock className="h-5 w-5 text-accent-blue" />
            </div>
            <p className="mt-4 text-3xl font-bold text-accent-blue">
              {user.completedHours}
            </p>
            <p className="text-xs text-slate-600">hours completed</p>
          </motion.div>
          <motion.div
            className="rounded-xl border border-slate-200 bg-gradient-to-br from-accent-green/10 to-accent-green/5 p-6 shadow-sm"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                Plan Enrolled
              </p>
              <UserRound className="h-5 w-5 text-accent-green" />
            </div>
            <p className="mt-4 text-lg font-bold text-slate-900">{user.plan}</p>
            <p className="text-xs text-slate-600">Course bundle</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="badge">Your Learning Journey</span>
                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  Continue Where You Left Off
                </h2>
              </div>
              <Link
                to="/course-viewer/ca-inter-pro"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-950 transition hover:text-primary-800"
              >
                Open Viewer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {learnings.map((learning) => {
                const course = courses.find((item) => item.id === learning.courseId)
                return (
                  <motion.div
                    key={learning.courseId}
                    className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-primary-700">
                        {course?.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">
                        {learning.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Next lesson: {learning.nextLesson}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                        Mentor {learning.mentor}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:items-end">
                      <div className="relative h-2 w-40 overflow-hidden rounded-full bg-slate-200">
                        <motion.span
                          className="absolute inset-y-0 left-0 rounded-full bg-primary-950"
                          initial={{ width: 0 }}
                          animate={{ width: `${learning.progress}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-primary-950">
                        {learning.progress}% complete
                      </span>
                      <span className="rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                        {learning.badge}
                      </span>
                      <Link
                        to={`/course-viewer/${learning.courseId}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary-950 bg-primary-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-900"
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
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-primary-700" />
                <p className="text-sm font-semibold text-slate-900">Upcoming Sessions</p>
              </div>
              <div className="mt-4 space-y-4">
                {upcoming.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">{event.title}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-700">
                      {event.date}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">with {event.mentor}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/auth?mode=login"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-950 hover:text-primary-950"
              >
                Sync Calendar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Percent className="h-5 w-5 text-primary-700" />
                <p className="text-sm font-semibold text-slate-900">Performance Pulse</p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-700">Mock Tests Attempted</span>
                  <span className="text-sm font-semibold text-primary-950">12</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-700">Average Accuracy</span>
                  <span className="text-sm font-semibold text-primary-950">82%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-700">Revision Sprints</span>
                  <span className="text-sm font-semibold text-primary-950">9</span>
                </div>
              </div>
              <Link
                to="/course-viewer/ca-foundation-fasttrack"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
              >
                View Analytics
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="badge">Elite Experiences</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                Ready for Ranker Labs?
              </h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Early access to answer writing retreats, placement bootcamps, and peer
                mastermind circles for CA Final and CFA Level III aspirants.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  Ranker Retreats
                </span>
                <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  Leadership Labs
                </span>
                <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  Career Accelerators
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Trophy className="h-5 w-5 text-primary-700" />
                <span>Guided pathways from AIR mentors</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <BookOpenCheck className="h-5 w-5 text-primary-700" />
                <span>Weekly ranker mock debriefs & audits</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Play className="h-5 w-5 text-primary-700" />
                <span>Interactive case labs and simulations</span>
              </div>
              <Link
                to="/auth?mode=register"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
              >
                Upgrade Plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
