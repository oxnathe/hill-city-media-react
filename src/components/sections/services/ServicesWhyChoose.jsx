import { motion } from "motion/react";
import {
  ArrowUpRight,
  Lightbulb,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We don't just execute ideas. We think through the problem, find the opportunity, and create work that gives your brand an edge.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Built Around Your Brand",
    description:
      "Every project is shaped around your identity, audience, goals, and personality. No copy-and-paste solutions.",
    icon: Target,
  },
  {
    number: "03",
    title: "Quality That Shows",
    description:
      "From the first concept to the final delivery, we pay attention to the details that make good work feel exceptional.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Made To Move",
    description:
      "We create work that doesn't just look good. It is designed to communicate, connect, attract attention, and move people to act.",
    icon: Zap,
  },
];

export default function ServicesWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--hill-red)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                Why Hill City
              </span>
            </div>

            <h2 className="font-oswald text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              More Than
              <span className="block text-[var(--hill-red)]">
                Just A Service.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-12"
          >
            <p className="font-montserrat max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Your brand deserves more than someone who simply ticks boxes.
              We combine creativity, strategy, production, and attention to
              detail to make every project count.
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-20 border-t border-white/10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group grid gap-6 border-b border-white/10 py-8 transition-all duration-300 md:grid-cols-[80px_1fr_80px] md:items-center lg:grid-cols-[100px_1fr_100px]"
              >
                {/* Number */}
                <span className="font-oswald text-3xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[var(--hill-red)]">
                  {reason.number}
                </span>

                {/* Content */}
                <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)]">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <h3 className="font-oswald text-2xl font-bold uppercase sm:text-3xl">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="font-montserrat max-w-xl text-sm leading-7 text-white/45">
                    {reason.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden justify-end md:flex">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)]">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}