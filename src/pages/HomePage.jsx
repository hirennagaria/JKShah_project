import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star, Check, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  categories,
  courses,
  instructors,
  testimonials,
  stats,
  highlights,
} from "../data/platform";
import { Icons } from "../utils/icons";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

const HomePage = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <span className="badge">Trusted by 180K+ learners</span>
                <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Master Commerce with Expert-Led Courses
                </h1>
                <p className="max-w-xl text-lg text-slate-600">
                  Comprehensive courses for CA, CFA, CMA, and ACCA aspirants.
                  Learn from industry experts and achieve your professional
                  goals.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/auth?mode=register"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
                >
                  <Play className="h-4 w-4" />
                  Start Learning
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-950 hover:text-primary-950"
                >
                  Browse Courses
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item, idx) => {
                  const colors = [
                    "text-accent-orange",
                    "text-accent-blue",
                    "text-accent-green",
                    "text-accent-purple",
                  ];
                  return (
                    <motion.div
                      key={item.label}
                      className="space-y-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                      {...fadeIn(idx * 0.1)}
                    >
                      <p
                        className={`text-2xl font-bold ${
                          colors[idx % colors.length]
                        }`}
                      >
                        {item.value}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                        {item.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="grid gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {featuredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-950">
                      {course.badge}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-primary-700">
                      {course.category}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-900">
                      {course.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge">Choose Your Path</span>
            <h2 className="section-title mt-4">Program Categories</h2>
            <p className="mt-3 text-slate-600">
              Comprehensive courses designed for each qualification journey
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => {
              const Icon = Icons[category.icon] ?? Icons.Sparkles;
              const iconColors = [
                "bg-accent-orange/10 text-accent-orange",
                "bg-accent-blue/10 text-accent-blue",
                "bg-accent-green/10 text-accent-green",
                "bg-accent-purple/10 text-accent-purple",
                "bg-accent-pink/10 text-accent-pink",
                "bg-accent-yellow/10 text-accent-yellow",
              ];
              return (
                <motion.div
                  key={category.id}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-primary-300 hover:shadow-md"
                  {...fadeIn(idx * 0.05)}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      iconColors[idx % iconColors.length]
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {category.summary}
                  </p>
                  <Link
                    to={`/courses?track=${category.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-950 transition hover:text-primary-800"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge">Why Choose Us</span>
            <h2 className="section-title mt-4">Built for Success</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, idx) => {
              const Icon = Icons[highlight.icon] ?? Icons.Sparkles;
              const iconColors = [
                "bg-accent-orange/10 text-accent-orange",
                "bg-accent-blue/10 text-accent-blue",
                "bg-accent-green/10 text-accent-green",
                "bg-accent-purple/10 text-accent-purple",
              ];
              return (
                <motion.div
                  key={highlight.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                  {...fadeIn(idx * 0.05)}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      iconColors[idx % iconColors.length]
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge">Expert Mentors</span>
            <h2 className="section-title mt-4">Learn from Industry Leaders</h2>
            <p className="mt-3 text-slate-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {instructors.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
                {...fadeIn(idx * 0.1)}
              >
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-90 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-4 mt-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {mentor.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">{mentor.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge">Success Stories</span>
            <h2 className="section-title mt-4">What Our Students Say</h2>
          </div>
          <div className="mt-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-primary-700">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-slate-600">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{testimonial.course}</span>
                      <span className="flex items-center gap-1 text-accent-yellow">
                        <Star className="h-3.5 w-3.5 fill-accent-yellow text-accent-yellow" />
                        {testimonial.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-purple/20 p-12 text-center text-white shadow-lg"
            {...fadeIn(0.2)}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join thousands of students achieving their professional goals
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/auth?mode=register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-950 transition hover:bg-primary-50"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
