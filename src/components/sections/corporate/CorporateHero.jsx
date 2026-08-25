import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Palette,
  Sparkles,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const whatsappMessage = encodeURIComponent(
  "Hello Hill City Media, I would like to start a Corporate Identity project."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function CorporateHero() {
  const scrollToServices = () => {
    document
      .getElementById("corporate-services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#080808] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#e50914]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#ffd400]/10 blur-[130px]" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e50914]" />

              <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#ffd400]">
                Corporate Identity
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl font-montserrat text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Give your brand a
              <span className="block text-[#e50914]">
                recognizable identity.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl font-poppins text-sm leading-7 text-white/55 sm:text-base">
              We build bold, consistent brand identities that help businesses
              look professional, communicate clearly, and stay memorable
              everywhere they show up.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#e50914] px-6 py-3.5 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#ff1722] hover:shadow-[0_0_30px_rgba(229,9,20,0.3)]"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-white/75 transition-all duration-300 hover:border-[#ffd400]/50 hover:text-[#ffd400]"
              >
                Explore Services

                <ArrowDown size={15} />
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e50914]" />

                <span className="font-poppins text-[11px] text-white/45">
                  Strategic branding
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffd400]" />

                <span className="font-poppins text-[11px] text-white/45">
                  Consistent visuals
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e50914]" />

                <span className="font-poppins text-[11px] text-white/45">
                  Built for growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            {/* Main identity board */}
            <div className="relative aspect-square overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/40">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e50914]/20 blur-[90px]" />

              {/* Large H */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat text-[190px] font-black leading-none text-white/[0.035] sm:text-[240px]">
                H
              </div>

              {/* Top label */}
              <div className="absolute left-6 top-6 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e50914]">
                  <Palette size={17} />
                </div>

                <div>
                  <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                    Brand System
                  </p>

                  <p className="font-poppins text-[8px] text-white/30">
                    Identity / Visual
                  </p>
                </div>
              </div>

              {/* Central brand mark */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <motion.div
                  animate={{
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-[30px] bg-[#e50914] shadow-[0_0_60px_rgba(229,9,20,0.25)] sm:h-36 sm:w-36 sm:rounded-[36px]"
                >
                  <span className="font-montserrat text-7xl font-black text-white sm:text-8xl">
                    H
                  </span>
                </motion.div>

                <div className="mt-5 text-center">
                  <p className="font-montserrat text-lg font-black tracking-tight">
                    YOUR BRAND
                  </p>

                  <p className="mt-1 font-poppins text-[9px] uppercase tracking-[0.28em] text-white/35">
                    Built to be remembered
                  </p>
                </div>
              </div>

              {/* Color palette */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="h-8 w-8 rounded-lg bg-[#e50914]" />
                <span className="h-8 w-8 rounded-lg bg-[#ffd400]" />
                <span className="h-8 w-8 rounded-lg bg-white" />
                <span className="h-8 w-8 rounded-lg border border-white/10 bg-[#080808]" />
              </div>

              {/* Spark */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-7 top-24 text-[#ffd400]"
              >
                <Sparkles size={27} />
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute right-6 bottom-6 h-12 w-12 rounded-full border border-[#e50914]/30" />

              <div className="absolute right-9 bottom-9 h-6 w-6 rounded-full bg-[#e50914]/20" />

              {/* Corner accents */}
              <span className="absolute left-5 bottom-5 h-6 w-6 border-b border-l border-white/10" />

              <span className="absolute right-5 top-5 h-6 w-6 border-r border-t border-white/10" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#151515]/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-8"
            >
              <p className="font-poppins text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Brand Principle
              </p>

              <p className="mt-1 font-montserrat text-sm font-bold text-white">
                Consistency wins.
              </p>
            </motion.div>

            {/* Floating number */}
            <div className="absolute -right-2 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ffd400]/20 bg-[#ffd400]/10 backdrop-blur-md sm:-right-5">
              <span className="font-oswald text-xl font-bold text-[#ffd400]">
                01
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <button
        type="button"
        onClick={scrollToServices}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-[#ffd400] sm:flex"
      >
        <span className="font-poppins text-[9px] uppercase tracking-[0.2em]">
          Explore
        </span>

        <ArrowDown size={15} />
      </button>
    </section>
  );
}