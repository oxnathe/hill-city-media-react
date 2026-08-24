import { motion } from "motion/react";
import {
  Check,
  Gauge,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Quality",
    description:
      "Clean, sharp and professional results that make your brand look its best.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Precision",
    description:
      "We pay attention to colour, sizing, finishing and the details that matter.",
    icon: Target,
  },
  {
    number: "03",
    title: "Materials",
    description:
      "We help you choose the right paper, stock, finish and format for the job.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Efficiency",
    description:
      "Straightforward communication and a smooth process from artwork to print.",
    icon: Gauge,
  },
];

export default function PrintingWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-24">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--hill-red)]/15 blur-[110px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--hill-yellow)]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[var(--hill-yellow)]" />

              <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Why Hill City
              </span>
            </div>

            <h2 className="font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.02em] sm:text-6xl">
              Good print
              <span className="block text-[var(--hill-red)]">
                feels different.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl font-poppins text-sm leading-7 text-white/50 lg:ml-auto"
          >
            Printing is more than putting ink on paper. The right
            material, finish and attention to detail can change how
            people experience your brand.
          </motion.p>
        </div>

        {/* =====================================================
            REASONS
        ===================================================== */}

        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group relative bg-[#080808] p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-7"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-oswald text-xs font-bold text-white/25">
                    {reason.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)] group-hover:text-white">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="font-oswald text-3xl font-semibold uppercase">
                    {reason.title}
                  </h3>

                  <p className="mt-3 font-poppins text-xs leading-6 text-white/40">
                    {reason.description}
                  </p>
                </div>

                {/* Accent */}
                <div className="mt-7 flex items-center gap-2">
                  <Check
                    size={13}
                    className="text-[var(--hill-yellow)]"
                  />

                  <span className="font-montserrat text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Hill City Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl font-poppins text-xs leading-6 text-white/35">
            From a single business card to a full branded print
            rollout, we approach every job with the same attention
            to detail.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--hill-red)] shadow-[0_0_15px_rgba(229,9,20,0.7)]" />

            <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
              Print With Purpose
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}