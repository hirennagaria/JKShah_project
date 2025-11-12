import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Play,
  Clock,
  Users,
  Star,
  TrendingUp,
  ShieldCheck,
  Check,
  ArrowRight,
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  categories,
  courses,
  instructors,
  testimonials,
  stats,
  highlights,
  partners,
  faqs,
} from '../data/platform'
import { Icons } from '../utils/icons'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay },
})

const HomePage = () => {
  const heroCourses = courses.slice(0, 3)
  const heroStats = stats
  const marqueePartners = [...partners, ...partners]

  return (
    <div className="space-y-24">
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/40 p-8 shadow-glow sm:p-12 lg:p-16">
          <div className="flex flex-col gap-12 lg:flex-row">
            <motion.div
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="badge">Trusted by 180K+ learners</span>
              <h1 className="font-display text-4xl leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Commerce success engine for CA, CFA, CMA & ACCA aspirants.
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Experience immersive cohorts, AI-personalised revision sprints, live
                mentor access, and Razorpay-powered checkout for the most sought-after
                commerce credentials.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/auth?mode=register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
                >
                  <Play className="h-4 w-4" />
                  Start Free Access
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-400/60 hover:text-primary-100"
                >
                  Browse Cohorts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {heroStats.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    {...fadeIn(idx * 0.08)}
                  >
                    <p className={`text-2xl font-semibold ${item.accent}`}>{item.value}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex w-full flex-col gap-4 lg:w-[22rem]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              {heroCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-100">
                      {course.badge}
                    </span>
                  </div>
                  <div className="space-y-3 p-5">
                    <p className="text-xs uppercase tracking-wide text-primary-200">
                      {course.category}
                    </p>
                    <h3 className="text-base font-semibold text-slate-50">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-primary-300" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-primary-300" />
                        {course.students.toLocaleString()} learners
                      </span>
                    </div>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                    >
                      View curriculum
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <span className="badge">Pathways for every milestone</span>
            <h2 className="section-title mt-6">Choose your qualification journey</h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Hybrid cohorts, AI-personalised revision sprints, and mentor-led guidance
              designed for each program.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => {
              const Icon = Icons[category.icon] ?? Icons.Sparkles
              return (
                <motion.div
                  key={category.id}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6"
                  {...fadeIn(idx * 0.05)}
                >
                  <div
                    className={`absolute inset-0 opacity-80 blur-2xl transition group-hover:opacity-100 ${category.accent}`}
                  />
                  <div className="relative space-y-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">{category.summary}</p>
                    </div>
                    <Link
                      to={`/courses?track=${category.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                    >
                      Explore modules
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="badge">Built for serious aspirants</span>
              <h2 className="section-title mt-4">Why India&apos;s toppers choose us</h2>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary-400/60 hover:text-primary-100"
            >
              Compare Program Tracks
              <TrendingUp className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, idx) => {
              const Icon = Icons[highlight.icon] ?? Icons.Sparkles
              return (
                <motion.div
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
                  {...fadeIn(idx * 0.05)}
                >
                  <div className="absolute -right-20 -top-20 h-36 w-36 rounded-full bg-primary-500/10 blur-3xl transition group-hover:bg-primary-500/20" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-50">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="space-y-4 lg:w-2/5">
                <span className="badge">Mentors & Leadership</span>
                <h2 className="section-title mt-6">Led by national ranker mentors</h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Learn from CA & CFA rankers, ex-Big4 partners, and portfolio managers
                  with thousands of mentor hours invested in each cohort.
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary-300" />
                    100% syllabus coverage
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary-300" />
                    9.4 learner NPS
                  </span>
                </div>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                >
                  View mentor-driven tracks
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid flex-1 gap-6 sm:grid-cols-2">
                {instructors.map((mentor, idx) => (
                  <motion.div
                    key={mentor.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
                    {...fadeIn(idx * 0.06)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="h-14 w-14 rounded-2xl object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-base font-semibold text-slate-50">
                            {mentor.name}
                          </p>
                          <p className="text-xs uppercase tracking-wide text-primary-200">
                            {mentor.title}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                        {mentor.experience}
                      </p>
                      <p className="mt-3 text-sm text-slate-300">{mentor.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {mentor.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-2 text-center">
            <span className="badge">Real stories, measurable outcomes</span>
            <h2 className="section-title mt-6">Learners that scaled with us</h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/40 p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-2xl object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-base font-semibold text-slate-50">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-primary-200">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                    <span>{testimonial.course}</span>
                    <span className="flex items-center gap-1 text-primary-200">
                      <Star className="h-3.5 w-3.5" />
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-0">
        <div className="border-y border-white/5 bg-slate-900/50 py-6">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {marqueePartners.map((partner, idx) => (
                <Fragment key={`${partner.name}-${idx}`}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 opacity-70"
                    loading="lazy"
                  />
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <span className="badge">Curated to convert curiosity into ranks</span>
              <h2 className="section-title mt-6">Instant, secure checkout with Razorpay</h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Purchase single modules, academy bundles, or monthly passes. Razorpay
                payment links, EMI, subscriptions, and UPI autopay are ready to plug in
                once backend integration is live.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-primary-300" />
                  <p>Multiple purchase modes: single course, bundles, subscriptions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-primary-300" />
                  <p>Auto-generated GST invoices and corporate billing workflows.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-primary-300" />
                  <p>Secure checkout UI, success states, and failure recovery screens.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-primary-500/20 bg-slate-950/60 p-6 shadow-glow">
              <h3 className="text-lg font-semibold text-slate-50">
                Sample checkout experience
              </h3>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                {heroCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-100">
                        {course.title}
                      </p>
                      <p className="text-xs text-slate-400">{course.category}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary-200">
                      ₹{course.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>
                    ₹
                    {heroCourses
                      .reduce((acc, course) => acc + course.price, 0)
                      .toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Scholarship credits</span>
                  <span>-₹2,500</span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-primary-200">
                  <span>To Pay</span>
                  <span>₹{(heroCourses.reduce((acc, course) => acc + course.price, 0) - 2500).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
              >
                Proceed to Razorpay
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <span className="badge">Have questions?</span>
          <h2 className="section-title mt-6">We&apos;ve got you covered</h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((faq, idx) => (
            <motion.details
              key={faq.question}
              className="group rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-sm text-slate-300"
              {...fadeIn(idx * 0.04)}
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-100">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage

