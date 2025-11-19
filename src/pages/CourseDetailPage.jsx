import { useMemo } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  Clock,
  Users,
  Star,
  Calendar,
  BookText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { courses, instructors, getCourseBySlug } from '../data/platform'

const metricItems = (course) => [
  {
    label: 'Duration',
    value: course.duration,
    icon: Clock,
    bgColor: 'bg-accent-blue/10',
    textColor: 'text-accent-blue',
  },
  {
    label: 'Learners',
    value: `${course.students.toLocaleString()}+`,
    icon: Users,
    bgColor: 'bg-accent-green/10',
    textColor: 'text-accent-green',
  },
  {
    label: 'Lessons',
    value: `${course.lessons}+`,
    icon: BookText,
    bgColor: 'bg-accent-purple/10',
    textColor: 'text-accent-purple',
  },
  {
    label: 'Rating',
    value: `${course.rating.toFixed(1)}/5`,
    icon: Star,
    bgColor: 'bg-accent-yellow/10',
    textColor: 'text-accent-yellow',
  },
]

const CourseDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = useMemo(() => getCourseBySlug(slug), [slug])

  if (!course) {
    return (
      <div className="mx-auto mt-32 max-w-3xl rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">
          We couldn&apos;t find the course you were looking for.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          It might have been moved or is getting prepped for launch.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
        >
          Browse all courses
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  const instructor = instructors.find((mentor) => mentor.id === course.instructorId)
  const relatedCourses = courses
    .filter((item) => item.id !== course.id && item.category === course.category)
    .slice(0, 3)

  return (
    <div className="space-y-12 bg-slate-50 pb-20 pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-primary-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="relative h-80 w-full overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  {course.category}
                </span>
                <span className="rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  {course.level}
                </span>
                <span className="rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  Next batch · {course.nextBatch}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-white/90">
                {course.description}
              </p>
            </div>
          </div>
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2">
                {metricItems(course).map((metric) => (
                  <motion.div
                    key={metric.label}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    whileHover={{ y: -2 }}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${metric.bgColor} ${metric.textColor}`}
                    >
                      <metric.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-slate-900">{metric.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    Key Outcomes
                  </p>
                  <ShieldCheck className="h-5 w-5 text-accent-green" />
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 text-accent-purple" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Cohort Structure
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                      Live + On-demand hybrid
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {course.curriculum.map((module, idx) => (
                    <div
                      key={module.title}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-sm font-semibold text-primary-950">
                        {module.title}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-700" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-48 w-full">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                      Razorpay Ready
                    </span>
                  </div>
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                      Program investment
                    </p>
                    <p className="text-2xl font-bold text-primary-950">
                      ₹{course.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Lock your seat now and unlock early bird scholarships, EMI options,
                    and live cohort bonuses when backend payments go live.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <PlayCircle className="h-4 w-4 text-accent-blue" />
                      <span className="text-sm text-slate-700">
                        Live + On-demand streaming
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <ShieldCheck className="h-4 w-4 text-accent-green" />
                      <span className="text-sm text-slate-700">
                        Doubt clinics & mentorship credits
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <Calendar className="h-4 w-4 text-accent-purple" />
                      <span className="text-sm text-slate-700">
                        Next cohort: {course.nextBatch}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/course-viewer/${course.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-950 bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
                  >
                    Preview Course Viewer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/auth?mode=register"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-950 hover:text-primary-950"
                  >
                    Pre-book with Razorpay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {instructor && (
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                    Lead Mentor
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-slate-900">
                        {instructor.name}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                        {instructor.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{instructor.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {instructor.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge">You might also like</span>
            <h2 className="section-title mt-4">More {course.category} programs</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedCourses.map((related) => (
              <motion.div
                key={related.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium uppercase tracking-wide text-primary-700">
                    {related.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {related.level}
                  </span>
                </div>
                <p className="text-base font-semibold text-slate-900">{related.title}</p>
                <p className="text-sm text-slate-600">{related.shortDescription}</p>
                <Link
                  to={`/courses/${related.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-950 transition hover:text-primary-800"
                >
                  View curriculum
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default CourseDetailPage
