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
  },
  {
    label: 'Learners',
    value: `${course.students.toLocaleString()}+`,
    icon: Users,
  },
  {
    label: 'Lessons',
    value: `${course.lessons}+`,
    icon: BookText,
  },
  {
    label: 'Rating',
    value: `${course.rating.toFixed(1)}/5`,
    icon: Star,
  },
]

const CourseDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const course = useMemo(() => getCourseBySlug(slug), [slug])

  if (!course) {
    return (
      <div className="mx-auto mt-32 max-w-3xl rounded-3xl border border-white/10 bg-slate-900/40 p-10 text-center">
        <p className="text-lg font-semibold text-slate-100">
          We couldn&apos;t find the course you were looking for.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          It might have been moved or is getting prepped for launch.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
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
    <div className="space-y-16 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-primary-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
        <div className="mt-6 overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/40 shadow-glow">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-primary-200">
                <span className="rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1">
                  {course.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-slate-200">
                  {course.level}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-slate-200">
                  Next batch · {course.nextBatch}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                {course.description}
              </p>
            </div>
          </div>
          <div className="grid gap-10 p-10 lg:grid-cols-[1fr_0.85fr]">
            <div className="space-y-10">
              <div className="grid gap-4 md:grid-cols-2">
                {metricItems(course).map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300">
                      <metric.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {metric.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-100">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                    Key Outcomes
                  </p>
                  <ShieldCheck className="h-5 w-5 text-primary-300" />
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-4 w-4 text-primary-300" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary-300" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      Cohort Structure
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Live + On-demand hybrid
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {course.curriculum.map((module) => (
                    <div key={module.title} className="rounded-2xl border border-white/10 p-5">
                      <p className="text-sm font-semibold text-primary-200">
                        {module.title}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                className="overflow-hidden rounded-3xl border border-primary-500/20 bg-slate-950/60 shadow-glow"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-slate-200">
                      Razorpay Ready Checkout
                    </div>
                  </div>
                </div>
                <div className="space-y-5 p-6 text-sm text-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Program investment
                    </p>
                    <p className="text-2xl font-semibold text-primary-200">
                      ₹{course.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <p>
                    Lock your seat now and unlock early bird scholarships, EMI options,
                    and live cohort bonuses when backend payments go live.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <PlayCircle className="h-4 w-4 text-primary-300" />
                      <span>Live + On-demand streaming</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <ShieldCheck className="h-4 w-4 text-primary-300" />
                      <span>Doubt clinics & mentorship credits</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <Calendar className="h-4 w-4 text-primary-300" />
                      <span>Next cohort: {course.nextBatch}</span>
                    </div>
                  </div>
                  <Link
                    to={`/course-viewer/${course.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
                  >
                    Preview course viewer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/auth?mode=register"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-primary-100 transition hover:border-primary-400/60 hover:text-primary-50"
                  >
                    Pre-book with Razorpay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {instructor && (
                <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
                  <p className="text-xs uppercase tracking-wide text-primary-200">
                    Lead Mentor
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-slate-100">
                        {instructor.name}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {instructor.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{instructor.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {instructor.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-100"
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
        <section className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className="badge">You might also like</span>
            <h2 className="section-title">More {course.category} programs</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedCourses.map((related) => (
              <div
                key={related.id}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/40 p-6"
              >
                <div className="flex items-center justify-between text-xs text-primary-200">
                  <span className="uppercase tracking-wide">{related.category}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-200">
                    {related.level}
                  </span>
                </div>
                <p className="text-base font-semibold text-slate-50">{related.title}</p>
                <p className="text-sm text-slate-300">{related.shortDescription}</p>
                <Link
                  to={`/courses/${related.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                >
                  View curriculum
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default CourseDetailPage

