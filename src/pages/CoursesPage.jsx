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
} from 'lucide-react'
import { courses, categories, courseBundles } from '../data/platform'

const levelOptions = ['All levels', 'Beginner', 'Intermediate', 'Advanced']

const CourseCard = ({ course }) => {
  return (
    <motion.div
      layout
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
      whileHover={{ y: -4 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                      {course.badge}
                    </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium uppercase tracking-wide text-primary-700">
            {course.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {course.level}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{course.shortDescription}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            {course.students.toLocaleString()}
          </span>
                      <span className="flex items-center gap-2">
                        <Star className="h-3.5 w-3.5 fill-accent-yellow text-accent-yellow" />
                        {course.rating.toFixed(1)}
                      </span>
          <span className="flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessons}+ lessons
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs font-medium text-slate-600">Starting from</p>
            <p className="text-lg font-semibold text-primary-950">
              ₹{course.price.toLocaleString('en-IN')}
            </p>
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-primary-950 px-4 py-2 text-sm font-semibold text-primary-950 transition hover:bg-primary-950 hover:text-white"
          >
            View Details
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
        selectedTrack === 'All' ||
        course.category.toLowerCase().includes(selectedTrack.replace('-', ' '))
      const matchesLevel =
        selectedLevel === 'All levels' ||
        course.level.toLowerCase() === selectedLevel.toLowerCase()
      return matchesQuery && matchesTrack && matchesLevel
    })
  }, [query, selectedTrack, selectedLevel])

  return (
    <div className="space-y-12 pb-20 pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="badge">Explore Courses</span>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Find Your Perfect Course
            </h1>
            <p className="max-w-2xl text-slate-600">
              Comprehensive programs designed for CA, CFA, CMA, and ACCA aspirants
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/20"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-600">Filter:</span>
              <button
                type="button"
                onClick={() => setSelectedTrack('All')}
                className={clsx(
                  'rounded-lg border px-4 py-2 text-sm font-medium transition',
                  selectedTrack === 'All'
                    ? 'border-primary-950 bg-primary-950 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-primary-950 hover:text-primary-950',
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedTrack(category.id)}
                  className={clsx(
                    'rounded-lg border px-4 py-2 text-sm font-medium transition',
                    selectedTrack === category.id
                      ? 'border-primary-950 bg-primary-950 text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-primary-950 hover:text-primary-950',
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <select
              value={selectedLevel}
              onChange={(event) => setSelectedLevel(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/20"
            >
              {levelOptions.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              className="rounded-xl border border-slate-200 bg-white p-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-lg font-semibold text-slate-900">
                No courses found
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Try adjusting your search or filters
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <span className="badge">Special Offers</span>
            <h2 className="section-title mt-4">Course Bundles</h2>
            <p className="mt-3 text-slate-600">
              Save more with our comprehensive course packages
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {courseBundles.map((bundle) => (
              <div
                key={bundle.id}
                className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {bundle.name}
                  </h3>
                  <p className="text-sm text-slate-600">{bundle.description}</p>
                  <div>
                    <p className="text-xs font-medium text-slate-600">Price</p>
                    <p className="text-2xl font-bold text-primary-950">{bundle.price}</p>
                    <p className="text-xs text-slate-500">{bundle.frequency}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-950" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/auth?mode=register"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
                >
                  Get Bundle
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage
