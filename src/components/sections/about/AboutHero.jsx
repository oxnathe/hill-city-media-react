import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute right-[12%] top-[20%] h-32 w-32 rotate-12 border border-yellow-400/20" />
        <div className="absolute bottom-[15%] left-[10%] h-20 w-20 -rotate-12 border border-red-500/20" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[3px] w-12 bg-yellow-400" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                About Hill City Media
              </span>
            </motion.div>

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              We{" "}
              <span className="text-red-600">create.</span>
              <br />
              We{" "}
              <span className="text-yellow-400">build.</span>
              <br />
              We{" "}
              <span className="text-white">elevate.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            >
              Hill City Media is a creative media and branding company helping
              businesses turn ideas into powerful brands through design,
              printing, digital marketing, media production, and corporate
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center gap-3 border border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Explore Services
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square">
              {/* Main graphic */}
              <div className="absolute inset-8 rotate-3 border-2 border-yellow-400/70" />

              <div className="absolute inset-12 -rotate-3 border border-red-600/70" />

              <div className="absolute inset-16 flex items-center justify-center bg-white">
                <div className="text-center">
                  <p className="text-5xl font-black uppercase leading-none text-black sm:text-6xl">
                    HCM
                  </p>

                  <div className="mx-auto mt-4 h-1 w-20 bg-red-600" />

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-black/60">
                    Print • Brand • Digital
                  </p>
                </div>
              </div>

              {/* Floating labels */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-8 bg-red-600 px-4 py-3 text-xs font-black uppercase tracking-wider text-white shadow-xl"
              >
                Creative
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-0 bg-yellow-400 px-4 py-3 text-xs font-black uppercase tracking-wider text-black shadow-xl"
              >
                Impact
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Discover
        </span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}