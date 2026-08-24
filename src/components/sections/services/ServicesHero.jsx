import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--hill-red)]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--hill-red)]/10 blur-3xl" />

        <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-[var(--hill-red)]" />

        <div className="absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/40" />

        <div className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-[var(--hill-red)]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                What We Do
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-oswald max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl"
            >
              Creative
              <span className="block text-[var(--hill-red)]">
                Services
              </span>
              <span className="block">Built To Move</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-montserrat mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base"
            >
              From powerful visuals and digital marketing to corporate
              identity and high-quality printing, we create everything your
              brand needs to stand out and move forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                className="font-montserrat group inline-flex items-center justify-center gap-3 bg-[var(--hill-red)] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:brightness-110"
              >
                Start a Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-services"
                className="font-montserrat inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Rotating services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
          >
            <div className="relative aspect-square w-full">
              {/* Outer rings */}
              <div className="absolute inset-[7%] rounded-full border border-white/10" />

              <div className="absolute inset-[18%] rounded-full border border-[var(--hill-red)]/20" />

              {/* Rotating orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[8%]"
              >
                {/* Orbit line */}
                <div className="absolute inset-0 rounded-full border border-white/10" />

                {/* Videography */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-5 py-3 shadow-lg backdrop-blur-md"
                  >
                    <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                      Videography
                    </span>
                  </motion.div>
                </div>

                {/* Digital Marketing */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-5 py-3 shadow-lg backdrop-blur-md"
                  >
                    <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                      Digital Marketing
                    </span>
                  </motion.div>
                </div>

                {/* Printing */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="whitespace-nowrap rounded-full border border-[var(--hill-red)]/50 bg-[var(--hill-red)] px-5 py-3 shadow-lg"
                  >
                    <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                      Printing
                    </span>
                  </motion.div>
                </div>

                {/* Corporate Identity */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-5 py-3 shadow-lg backdrop-blur-md"
                  >
                    <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                      Corporate Identity
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-[38%] w-[38%] items-center justify-center rounded-full bg-[var(--hill-red)] shadow-[0_0_80px_rgba(227,6,19,0.25)]">
                  <div className="absolute inset-2 rounded-full border border-white/20" />

                  <div className="relative z-10 text-center">
                    <span className="font-montserrat block text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-[10px]">
                      Hill City
                    </span>

                    <span className="font-oswald mt-1 block text-xl font-bold uppercase leading-none sm:text-2xl">
                      Media
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbit dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[3%]"
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--hill-red)]" />

                <span className="absolute bottom-[10%] right-[8%] h-1.5 w-1.5 rounded-full bg-white/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--hill-red)]/50 to-transparent" />
    </section>
  );
}