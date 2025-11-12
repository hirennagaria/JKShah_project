import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  FileText,
  MessageCircle,
  Clock,
  Download,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { getCourseBySlug, courses } from '../data/platform'

const tabs = [
  { id: 'overview', label: 'Lesson Plan' },
  { id: 'resources', label: 'Resources' },
  { id: 'notes', label: 'Class Notes' },
  { id: 'schedule', label: 'Upcoming' },
]

const CourseViewerPage = () => {
  const { slug } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const course = useMemo(
    () => getCourseBySlug(slug) ?? courses[0],
    [slug],
  )

  if (!course) {
    return (
      <div className="mx-auto mt-32 max-w-3xl rounded-3xl border border-white/10 bg-slate-900/50 p-10 text-center">
        <p className="text-lg font-semibold text-slate-100">
          We&apos;re curating the viewer for this course.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
        >
          Explore other courses
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  const chapters = course.curriculum.flatMap((module, moduleIndex) =>
    module.items.map((item, index) => ({
      id: `${moduleIndex}-${index}`,
      title: item,
      module: module.title,
      duration: `${25 + index * 5} min`,
      completed: moduleIndex === 0 && index < 2,
    })),
  )

  const upcomingSessions = [
    {
      title: 'Live Audit Lab: Ind AS 115',
      date: 'Thu · 7:00 PM',
      mentor: 'CA Isha Kapoor',
    },
    {
      title: 'Revision Sprint: Financial Management',
      date: 'Sat · 10:00 AM',
      mentor: 'CA Jitendra Shah',
    },
  ]

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-8 pt-4">
        <div className="flex items-center justify-between">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-primary-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to course overview
          </Link>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-slate-400">
            Preview mode
          </span>
        </div>
        <div className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-950/60 shadow-glow">
          <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
            <div className="relative">
              <div className="aspect-video w-full overflow-hidden rounded-t-[2.75rem] bg-slate-900 lg:rounded-tr-none">
                <iframe
                  title={course.title}
                  src={`${course.heroVideo}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-200">
                    Now playing
                  </p>
                  <h1 className="mt-2 text-lg font-semibold text-slate-50">
                    {course.title} · Kick-off immersion
                  </h1>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-primary-400/60 hover:text-primary-100"
                >
                  <Play className="h-4 w-4 text-primary-300" />
                  Resume
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 bg-slate-950/40 p-6 lg:border-l lg:border-t-0">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary-300" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      {course.category}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {course.level} · {course.duration}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Adaptive player with transcripts, AI summaries, and revision flashcards
                  (coming soon). Use the sample timeline to explore the viewer UI.
                </p>
              </div>
              <div className="mt-6 space-y-4 text-xs uppercase tracking-wide text-slate-400">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Lessons completed</span>
                  <span className="text-primary-200">12 / {chapters.length}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Total watch time</span>
                  <span className="text-primary-200">18h 42m</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Mentor credits</span>
                  <span className="text-primary-200">5 left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-slate-950/40 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'text-slate-300 hover:text-primary-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/40 p-6"
          >
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Session timeline
                </p>
                <div className="space-y-3">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-200">
                        {chapter.completed ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-100">
                          {chapter.title}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          {chapter.module}
                        </p>
                      </div>
                      <span className="text-xs text-primary-200">{chapter.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'resources' && (
              <div className="space-y-3 text-sm text-slate-300">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Downloadables & references
                </p>
                <div className="space-y-3">
                  {course.curriculum.map((module) => (
                    <div key={module.title} className="rounded-2xl border border-white/10 p-4">
                      <p className="text-sm font-semibold text-slate-100">
                        {module.title}
                      </p>
                      <ul className="mt-3 space-y-2 text-xs">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-center justify-between">
                            <span className="text-slate-300">{item}</span>
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-200 transition hover:border-primary-400/60 hover:text-primary-50"
                            >
                              <Download className="h-3.5 w-3.5" />
                              PDF
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'notes' && (
              <div className="space-y-3 text-sm text-slate-300">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Smart notes (AI summarised)
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-slate-300">
                  <p>
                    • Revenue recognition hinges on performance obligations tracked via
                    5-step framework. Document contract identification and transaction
                    price allocation explicitly.
                  </p>
                  <p>
                    • For process costing, use weighted average approach for step
                    processes with spoilage. Ensure joint product allocation is covered.
                  </p>
                  <p>
                    • Ethics case studies – note the independence violations and create a
                    decision matrix referencing CFA Institute guidelines.
                  </p>
                </div>
              </div>
            )}
            {activeTab === 'schedule' && (
              <div className="space-y-3 text-sm text-slate-300">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
                  Upcoming mentor sessions
                </p>
                <div className="space-y-3">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.title}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-slate-100">
                        {session.title}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-primary-200">
                        {session.date}
                      </p>
                      <p className="text-xs text-slate-400">Mentor {session.mentor}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="lg:w-[22rem]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary-300" />
              <p className="text-sm font-semibold text-slate-100">Raise a query</p>
            </div>
            <p className="text-sm text-slate-300">
              Have a doubt? Leave a timestamped note and mentors respond within 12 hours.
              Mentors panel and live chat will connect here post backend integration.
            </p>
            <textarea
              rows={4}
              placeholder="Type your question with timestamps..."
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary-500/60 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
            >
              Submit query
              <MessageCircle className="h-4 w-4" />
            </button>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">Mentor SLA</p>
              <p className="mt-2">
                • Doubt room response within 12 hours <br />
                • Audit labs get priority routing <br />
                • Case discussion scheduled on request
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-primary-200">
              Coming soon
            </p>
            <p className="mt-2">
              Interactive transcripts, speed controls, note bookmarking, offline
              downloads, and device sync launch alongside backend integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseViewerPage

