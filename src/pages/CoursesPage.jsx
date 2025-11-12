import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import {
  Search,
  Filter,
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Sparkles,
  GraduationCap,
} from 'lucide-react'
import { courses, categories, courseBundles } from '../data/platform'
import { Icons } from '../utils/icons'

const levelOptions = ['All levels', 'Beginner', 'Intermediate', 'Advanced']

const CourseCard = ({ course }) => {
  const Icon = Icons[course.badge === 'Ranker Series' ? 'Trophy' : 'Sparkles']
  return (
    <motion.div
      layout
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/5 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
          <Icon className="h-3.5 w-3.5 text-primary-200" />
          {course.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs text-primary-200">
          <span className="uppercase tracking-wide">{course.category}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-200">
            {course.level}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-50">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{course.shortDescription}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-2 rounded-2xl border border-white/5 bg-slate-900/60 px-3 py-2">
            <Clock className="h-3.5 w-3.5 text-primary-300" />
            {course.duration}
          </span>
            <span className="flex items-center gap-2 rounded-2xl border border-white/5 bg-slate-900/60 px-3 py-2">
            <Users className="h-3.5 w-3.5 text-primary-300" />
            {course.students.toLocaleString()} learners
          </span>
          <span className="flex items-center gap-2 rounded-2xl border border-white/5 bg-slate-900/60 px-3 py-2">
            <Star className="h-3.5 w-3.5 text-primary-300" />
            {course.rating.toFixed(1)} rating
          </span>
          <span className="flex items-center gap-2 rounded-2xl border border-white/5 bg-slate-900/60 px-3 py-2">
            <BookOpen className="h-3.5 w-3.5 text-primary-300" />
            {course.lessons}+ lessons
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Starting from
            </p>
            <p className="text-lg font-semibold text-primary-200">
              ₹{course.price.toLocaleString('en-IN')}
            </p>
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:text-primary-50"
          >
            View Program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const CoursesPage = () => {
  const [searchParams] = useSearchParams()
  const trackParam = searchParams.get('track')
  const [query, setQuery] = useState('')
  const [selectedTrack, setSelectedTrack] = useState(trackParam ?? 'All')
  const [selectedLevel, setSelectedLevel] = useState(levelOptions[0])

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery =
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(query.toLowerCase())
      const matchesTrack =
        selectedTrack === 'All' || course.category.toLowerCase().includes(selectedTrack.replace('-', ' '))
      const matchesLevel =
        selectedLevel === 'All levels' || course.level.toLowerCase() === selectedLevel.toLowerCase()
      return matchesQuery && matchesTrack && matchesLevel
    })
  }, [query, selectedTrack, selectedLevel])

  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2.75rem] border border-white/10 bg-slate-900/50 p-10 shadow-glow">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <span className="badge">Curated Commerce Programs</span>
              <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                Discover the right journey for your qualification
              </h1>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Each course blends live cohorts, on-demand capsules, revision sprints,
                mentor feedback, and proctored mocks. Choose a pathway or stack programs
                with multi-course bundles & subscriptions.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-primary-200">
                What&apos;s included?
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary-300" />
                  Live cohorts + AI-indexed recordings
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5 text-primary-300" />
                  Mentor feedback & doubt clinics
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5 text-primary-300" />
                  Revision OS & proctored mock exams
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-300" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by subject, qualification, or mentor"
                className="w-full rounded-full border border-white/10 bg-slate-950/60 py-3 pl-12 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary-500/60 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs uppercase tracking-wide text-slate-400 lg:inline">
                Filter:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTrack('All')}
                  className={clsx(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                    selectedTrack === 'All'
                      ? 'border-primary-500/60 bg-primary-500/10 text-primary-100'
                      : 'border-white/10 text-slate-300 hover:border-primary-400/40 hover:text-primary-100',
                  )}
                >
                  <Filter className="h-4 w-4" />
                  All Tracks
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedTrack(category.id)}
                    className={clsx(
                      'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                      selectedTrack === category.id
                        ? 'border-primary-500/60 bg-primary-500/10 text-primary-100'
                        : 'border-white/10 text-slate-300 hover:border-primary-400/40 hover:text-primary-100',
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <select
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-primary-500/60 focus:outline-none"
              >
                {levelOptions.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <AnimatePresence mode="popLayout">
          {filteredCourses.length ? (
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="rounded-3xl border border-white/10 bg-slate-900/40 p-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-lg font-semibold text-slate-100">
                No courses match your filters yet.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Try removing some filters or explore upcoming cohorts in the dashboard.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-3 text-center">
          <span className="badge">Bundle & Subscription Ready</span>
          <h2 className="section-title mt-4">Multi-course packs for ambitious learners</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {courseBundles.map((bundle) => (
            <div
              key={bundle.id}
              className={clsx(
                'flex h-full flex-col justify-between rounded-3xl border p-6',
                bundle.accent,
              )}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-50">{bundle.name}</h3>
                <p className="text-sm text-slate-300">{bundle.description}</p>
                <div className="text-sm">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Investment
                  </p>
                  <p className="text-2xl font-semibold text-primary-200">
                    {bundle.price}
                  </p>
                  <p className="text-xs text-slate-400">{bundle.frequency}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-primary-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/auth?mode=register"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:text-primary-50"
              >
                Pre-book Bundle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CoursesPage

