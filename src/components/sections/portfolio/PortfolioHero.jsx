import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#e50914]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#ffd400]/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e50914]" />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#ffd400]">
                Our Work
              </span>
            </div>

            <h1 className="max-w-5xl font-['Montserrat'] text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Work that makes
              <span className="relative ml-3 inline-block text-[#e50914]">
                brands
              </span>
              <br />
              impossible to ignore.
            </h1>

            <p className="mt-8 max-w-2xl font-['Poppins'] text-base leading-8 text-white/60 sm:text-lg">
              From bold identities and commercial printing to digital
              campaigns and media production, explore selected work created
              to help brands stand out, connect and grow.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#featured-work"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-['Poppins'] text-sm font-semibold text-[#080808] transition-all duration-300 hover:bg-[#ffd400]"
              >
                Explore Our Work
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#portfolio-showcase"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-['Poppins'] text-sm font-semibold text-white transition-all duration-300 hover:border-[#e50914] hover:bg-[#e50914]/10"
              >
                View Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]">
              {/* Red shape */}
              <motion.div
                animate={{
                  rotate: [0, 8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#e50914]"
              />

              {/* Yellow shape */}
              <motion.div
                animate={{
                  rotate: [0, -8, 0],
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-[#ffd400]"
              />

              {/* Central artwork */}
              <div className="absolute inset-8 flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#080808]/90 backdrop-blur-sm">
                <div className="relative text-center">
                  <Sparkles
                    size={24}
                    className="mx-auto mb-5 text-[#ffd400]"
                  />

                  <div className="font-['Oswald'] text-7xl font-bold uppercase leading-none tracking-tight text-white sm:text-8xl">
                    HCM
                  </div>

                  <div className="mt-4 font-['Poppins'] text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40">
                    Selected Creative Work
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-2xl"
              >
                <p className="font-['Poppins'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#080808]">
                  Creative
                </p>
                <p className="mt-1 font-['Poppins'] text-xs text-black/50">
                  Built to stand out.
                </p>
              </motion.div>
            </div>

            {/* Decorative number */}
            <div className="absolute -bottom-5 -left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e50914] font-['Oswald'] text-lg font-bold text-white shadow-xl shadow-red-950/30">
              01
            </div>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3"
        >
          <div>
            <p className="font-['Oswald'] text-2xl font-bold text-white">
              Branding
            </p>
            <p className="mt-1 font-['Poppins'] text-xs text-white/40">
              Identity & visual systems
            </p>
          </div>

          <div>
            <p className="font-['Oswald'] text-2xl font-bold text-white">
              Printing
            </p>
            <p className="mt-1 font-['Poppins'] text-xs text-white/40">
              Physical brand experiences
            </p>
          </div>

          <div>
            <p className="font-['Oswald'] text-2xl font-bold text-white">
              Digital + Media
            </p>
            <p className="mt-1 font-['Poppins'] text-xs text-white/40">
              Campaigns, content & motion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}