import { motion } from "motion/react";

import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hill City understood exactly what we wanted and turned our ideas into visuals that actually represented our brand.",
    name: "Client Name",
    role: "Business Owner",
    service: "Brand Identity",
  },
  {
    quote:
      "From the design to the final production, everything felt professional. The team paid attention to the details that mattered.",
    name: "Client Name",
    role: "Company Director",
    service: "Print & Design",
  },
  {
    quote:
      "Working with Hill City made our brand look more professional and gave us the confidence to show up better in our market.",
    name: "Client Name",
    role: "Founder",
    service: "Digital & Media",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-black md:px-10 lg:px-16 lg:py-32">
      {/* =====================================================
          TOP BRAND LINE
      ===================================================== */}

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute left-0 top-0 h-[4px] w-full bg-[var(--hill-yellow)]"
      />

      {/* =====================================================
          BACKGROUND ACCENT
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[var(--hill-yellow)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[var(--hill-red)]">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-3xl font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              What our
              <br />
              <span className="text-[var(--hill-red)]">
                clients say.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-xl font-poppins text-base leading-7 text-black/55 md:text-lg md:leading-8">
              Great work is more than what people see. It is how a brand makes
              people feel, remember, and respond.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            TESTIMONIAL GRID
        ===================================================== */}

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden border border-black/10 bg-[#f8f8f8] p-7 transition-all duration-300 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8"
            >
              {/* Number */}

              <span className="absolute right-6 top-3 font-oswald text-7xl font-semibold text-black/[0.04] transition-colors duration-300 group-hover:text-[var(--hill-yellow)]/30">
                0{index + 1}
              </span>

              {/* Quote */}

              <div>
                <div className="mb-9 flex h-12 w-12 items-center justify-center bg-[var(--hill-red)] text-white transition-transform duration-300 group-hover:rotate-3">
                  <Quote size={21} strokeWidth={2.5} />
                </div>

                <p className="relative z-10 font-poppins text-lg font-medium leading-8 text-black/80 md:text-xl">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Client */}

              <div className="mt-10">
                <div className="mb-5 h-[2px] w-full bg-black/10 transition-colors duration-300 group-hover:bg-[var(--hill-yellow)]" />

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-montserrat text-sm font-bold uppercase tracking-wide text-black">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 font-poppins text-xs text-black/45">
                      {testimonial.role}
                    </p>
                  </div>

                  <span className="font-oswald text-xs uppercase tracking-wider text-[var(--hill-red)]">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center"
        >
          <div>
            <p className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Ready to build something people remember?
            </p>
          </div>

          {/* =================================================
              START A PROJECT
              SAME VISUAL LANGUAGE AS NAVBAR
          ================================================= */}

          <a
            href="https://wa.me/2348031388328"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex overflow-hidden rounded-full bg-[#080808] px-6 py-3.5 font-montserrat text-xs font-bold text-white"
          >
            {/* Moving red/yellow background */}

            <motion.span
              className="absolute inset-0 z-0 bg-[linear-gradient(110deg,#e50914_0%,#e50914_35%,#ffd400_50%,#e50914_65%,#e50914_100%)] bg-[length:250%_100%]"
              animate={{
                backgroundPosition: ["100% 0%", "0% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Dark idle overlay */}

            <span className="absolute inset-[2px] z-[1] rounded-full bg-[#080808]/85 transition-all duration-500 group-hover:bg-transparent" />

            {/* Hover glow */}

            <span className="absolute inset-0 z-[2] rounded-full opacity-0 shadow-[0_0_25px_rgba(229,9,20,0.45)] transition-opacity duration-300 group-hover:opacity-100" />

            {/* Button content */}

            <span className="relative z-[20] flex items-center gap-2 text-white">
              <span className="text-white transition-colors duration-300 group-hover:text-black">
                Start a Project
              </span>

              <ArrowUpRight
                size={15}
                className="text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}