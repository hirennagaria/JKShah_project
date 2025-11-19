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
      <div className="mx-auto mt-32 max-w-3xl rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">
          We&apos;re curating the viewer for this course.
        </p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
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
    <div className="space-y-8 bg-slate-50 pb-20 pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-primary-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to course overview
          </Link>
          <span className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
            Preview mode
          </span>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
            <div className="relative">
              <div className="aspect-video w-full overflow-hidden bg-slate-900">
                <iframe
                  title={course.title}
                  src={`${course.heroVideo}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary-700">
                    Now playing
                  </p>
                  <h1 className="mt-2 text-lg font-bold text-slate-900">
                    {course.title} · Kick-off immersion
                  </h1>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-950 bg-primary-950 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary-900"
                >
                  <Play className="h-4 w-4" />
                  Resume
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-slate-200 bg-slate-50 p-6 lg:border-l lg:border-t-0">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-950">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {course.category}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                      {course.level} · {course.duration}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Adaptive player with transcripts, AI summaries, and revision flashcards
                  (coming soon). Use the sample timeline to explore the viewer UI.
                </p>
              </div>
              <div className="mt-6 space-y-3 text-xs font-medium uppercase tracking-wide text-slate-600">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
                  <span>Lessons completed</span>
                  <span className="font-bold text-primary-950">12 / {chapters.length}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
                  <span>Total watch time</span>
                  <span className="font-bold text-primary-950">18h 42m</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
                  <span>Mentor credits</span>
                  <span className="font-bold text-primary-950">5 left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap gap-2 rounded-lg border border-slate-200 bg-white p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    activeTab === tab.id
                      ? 'bg-primary-950 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
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
              className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    Session timeline
                  </p>
                  <div className="space-y-3">
                    {chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                            chapter.completed
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {chapter.completed ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <Clock className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            {chapter.title}
                          </p>
                          <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                            {chapter.module}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-primary-700">
                          {chapter.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'resources' && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    Downloadables & references
                  </p>
                  <div className="space-y-3">
                    {course.curriculum.map((module) => (
                      <div
                        key={module.title}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {module.title}
                        </p>
                        <ul className="mt-3 space-y-2 text-xs">
                          {module.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                            >
                              <span className="text-slate-700">{item}</span>
                              <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg border border-primary-950 bg-primary-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-primary-900"
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
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    Smart notes (AI summarised)
                  </p>
                  <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
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
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    Upcoming mentor sessions
                  </p>
                  <div className="space-y-3">
                    {upcomingSessions.map((session) => (
                      <div
                        key={session.title}
                        className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {session.title}
                        </p>
                        <p className="text-xs font-medium uppercase tracking-wide text-primary-700">
                          {session.date}
                        </p>
                        <p className="text-xs text-slate-600">Mentor {session.mentor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="lg:w-[22rem]">
            <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                  <FileText className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900">Raise a query</p>
              </div>
              <p className="text-sm text-slate-600">
                Have a doubt? Leave a timestamped note and mentors respond within 12 hours.
                Mentors panel and live chat will connect here post backend integration.
              </p>
              <textarea
                rows={4}
                placeholder="Type your question with timestamps..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/20"
              />
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
              >
                Submit query
                <MessageCircle className="h-4 w-4" />
              </button>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Mentor SLA</p>
                <p className="mt-2">
                  • Doubt room response within 12 hours <br />
                  • Audit labs get priority routing <br />
                  • Case discussion scheduled on request
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                Coming soon
              </p>
              <p className="mt-2">
                Interactive transcripts, speed controls, note bookmarking, offline
                downloads, and device sync launch alongside backend integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseViewerPage
