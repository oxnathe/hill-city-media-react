import { motion } from "motion/react";

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Brands Supported",
  },
  {
    value: "10+",
    label: "Creative Services",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-black sm:py-24 lg:py-28">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-yellow-400/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                By The Numbers
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Ideas that
              <br />
              <span className="text-red-600">make moves.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-base leading-7 text-black/60 sm:text-lg"
          >
            Every number represents a relationship, a project, an idea, or a
            brand we have helped move forward. And we are only getting started.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-black hover:text-white sm:p-8 lg:p-9"
            >
              <div className="absolute right-0 top-0 h-2 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

              <p className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>

              <div className="mt-5 h-1 w-10 bg-red-600 transition-all duration-500 group-hover:w-16 group-hover:bg-yellow-400" />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-black/50 transition-colors duration-500 group-hover:text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}