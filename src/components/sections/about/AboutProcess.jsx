import { motion } from "motion/react";
import {
  MessageCircle,
  Lightbulb,
  Palette,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your audience, your goals, and what you want your brand to achieve.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Create",
    description:
      "Our creative team turns the strategy into ideas, concepts, designs, content, and practical solutions.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We review the work, make the necessary adjustments, and ensure every detail represents your brand properly.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Once everything is ready, we bring the project to life and deliver a finished result built to make an impact.",
    icon: Rocket,
  },
];

export default function AboutProcess() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32">
      {/* Background accents */}
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              How We Work
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            From idea
            <br />
            <span className="text-red-600">to impact.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Great work starts with understanding. Our process keeps creativity
            focused, communication clear, and every project moving forward.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/15 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  {/* Number / icon */}
                  <div className="relative z-10 flex items-center gap-4 lg:block">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-white/20 bg-black transition-all duration-500 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                      <Icon
                        size={27}
                        strokeWidth={1.8}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <span className="text-sm font-black tracking-[0.2em] text-red-600 lg:mt-5 lg:block">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="ml-24 -mt-14 lg:ml-0 lg:mt-7">
                    <h3 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                      {step.title}
                    </h3>

                    <div className="mt-4 h-1 w-10 bg-yellow-400 transition-all duration-500 group-hover:w-16" />

                    <p className="mt-5 text-sm leading-6 text-white/50 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute bottom-0 left-10 top-20 -z-0 h-[calc(100%+2.5rem)] w-px bg-white/10 lg:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border border-white/10 p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:p-10"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
              Our philosophy
            </p>

            <p className="mt-3 max-w-2xl text-xl font-black uppercase leading-tight sm:text-2xl">
              Simple process.{" "}
              <span className="text-red-600">Bold results.</span>
            </p>
          </div>

          <div className="mt-7 h-12 w-12 bg-red-600 lg:mt-0" />
        </motion.div>
      </div>
    </section>
  );
}