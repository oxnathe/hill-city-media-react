import { motion } from "motion/react";
import {
  Lightbulb,
  Award,
  Zap,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We don't just make things look good. We think about the idea, the audience, and the message behind every project.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Quality First",
    description:
      "From the smallest design detail to the final printed product, we pay attention to quality from start to finish.",
    icon: Award,
  },
  {
    number: "03",
    title: "Fast Execution",
    description:
      "Ideas should not sit on the shelf. We work with purpose and momentum to move projects from concept to completion.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Client Focused",
    description:
      "We listen first, understand your goals, and build solutions around what your business actually needs.",
    icon: Users,
  },
  {
    number: "05",
    title: "Strategic Approach",
    description:
      "Every creative decision has a purpose. We connect creativity with strategy so your brand can achieve real objectives.",
    icon: Target,
  },
  {
    number: "06",
    title: "Built to Stand Out",
    description:
      "In a crowded market, being ordinary is easy. We create bold work designed to make your brand memorable.",
    icon: Sparkles,
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-black sm:py-28 lg:py-32">
      {/* Decorative background */}
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                Why Hill City
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              More than
              <br />
              <span className="text-red-600">a service.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              Your brand deserves more than someone who simply completes a
              brief. We become a creative partner invested in helping your
              business communicate, compete, and grow.
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[290px] bg-white p-7 transition-colors duration-500 hover:bg-black hover:text-white sm:p-8 lg:p-9"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-black/[0.06] transition-colors duration-500 group-hover:text-white/[0.08]">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center bg-black text-white transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-black">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-10 text-xl font-black uppercase tracking-tight sm:text-2xl">
                  {reason.title}
                </h3>

                <div className="mt-4 h-1 w-10 bg-red-600 transition-all duration-500 group-hover:w-16 group-hover:bg-yellow-400" />

                <p className="mt-5 max-w-sm text-sm leading-6 text-black/55 transition-colors duration-500 group-hover:text-white/55">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-l-4 border-yellow-400 pl-6 sm:pl-8"
        >
          <p className="max-w-4xl text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
            We don't just{" "}
            <span className="text-red-600">deliver projects.</span>
            <br className="hidden sm:block" /> We help{" "}
            <span className="relative inline-block">
              build brands.
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-400" />
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}