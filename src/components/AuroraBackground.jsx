import { motion } from 'framer-motion'

const blobs = [
  {
    id: 'blob-1',
    className: 'h-[32rem] w-[32rem] bg-primary-500/30',
    initial: { x: -180, y: -120 },
    animate: { x: -40, y: -60 },
  },
  {
    id: 'blob-2',
    className: 'h-[28rem] w-[28rem] bg-ocean/30',
    initial: { x: 260, y: -160 },
    animate: { x: 120, y: -40 },
  },
  {
    id: 'blob-3',
    className: 'h-[32rem] w-[32rem] bg-secondary/20',
    initial: { x: -120, y: 260 },
    animate: { x: 0, y: 200 },
  },
]

export const AuroraBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-hero-gradient opacity-40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0)_0,_#0f172a_60%)]" />
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.id}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: 18 + index * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
        />
      ))}
    </div>
  )
}

