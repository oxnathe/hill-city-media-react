import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your audience, your goals, and what makes your brand different.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn the strategy into ideas, visuals, content, campaigns, and creative solutions built around your brand.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We review, improve, and fine-tune every detail until the work feels right and communicates exactly what it should.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The final work goes out into the world ready to attract attention, connect with people, and move your brand forward.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-black/50">
                How We Work
              </span>
            </div>

            <h2 className="font-oswald text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              From Idea
              <span className="block text-[var(--hill-red)]">
                To Impact.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat max-w-xl text-sm leading-7 text-black/55 sm:text-base"
          >
            Great creative work starts with understanding. Our process keeps
            every project focused, collaborative, and moving in the right
            direction from the first conversation to final delivery.
          </motion.p>
        </div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[43px] hidden h-px bg-black/10 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                {/* Number */}
                <div className="relative z-10 mb-8 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)] group-hover:text-white">
                  <span className="font-oswald text-2xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-oswald text-3xl font-bold uppercase">
                  {step.title}
                </h3>

                <p className="font-montserrat mt-4 max-w-xs text-sm leading-7 text-black/50">
                  {step.description}
                </p>

                {/* Arrow */}
                <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)] group-hover:text-white">
                  <ArrowDownRight size={17} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-black/10 pt-8"
        >
          <p className="font-oswald max-w-4xl text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl">
            Simple process.
            <span className="text-[var(--hill-red)]"> Serious results.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}