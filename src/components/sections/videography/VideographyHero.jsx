import { motion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const whatsappMessage = encodeURIComponent(
  "Hello Hill City Media, I would like to discuss a Videography & Media project."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const floatingCards = [
  {
    icon: Camera,
    label: "Production",
    value: "Creative",
    className: "left-[2%] top-[20%] rotate-[-7deg]",
  },
  {
    icon: Video,
    label: "Content",
    value: "Motion",
    className: "right-[2%] top-[30%] rotate-[7deg]",
  },
  {
    icon: Sparkles,
    label: "Stories",
    value: "Impact",
    className: "bottom-[13%] left-[7%] rotate-[5deg]",
  },
];

export default function VideographyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-12%] top-[5%] h-[430px] w-[430px] rounded-full bg-[#e50914]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-15%] right-[-8%] h-[500px] w-[500px] rounded-full bg-[#ffd400]/10 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_72%)]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e50914] opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e50914]" />
              </span>

              <span className="font-poppins text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                Videography & Media
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Stories that
              <span className="block text-[#e50914]">
                move
              </span>
              <span className="relative inline-block">
                people.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-[-8px] left-0 h-1.5 bg-[#ffd400]"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl font-poppins text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              We turn ideas, moments, and brands into powerful visual stories
              through video production, photography, creative direction, and
              media content built to make an impact.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#e50914] px-7 py-4 font-poppins text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(229,9,20,0.35)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#ffd400] transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                  Start a Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>

              <a
                href="#videography-services"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 font-poppins text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
              >
                Explore Services
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-poppins text-xs text-white/45">
              <div className="flex items-center gap-2">
                <Camera size={14} className="text-[#ffd400]" />
                Professional production
              </div>

              <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Clapperboard size={14} className="text-[#e50914]" />
                Creative storytelling
              </div>

              <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#ffd400]" />
                Brand-focused visuals
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            {/* Main glow */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[90px]" />

            {/* Main camera frame */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto aspect-[0.88] w-[82%] overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/40 sm:p-5"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e50914]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd400]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e50914]" />
                  <span className="font-poppins text-[8px] uppercase tracking-[0.15em] text-white/35">
                    Recording
                  </span>
                </div>
              </div>

              {/* Video screen */}
              <div className="relative mt-5 aspect-[0.82] overflow-hidden rounded-2xl bg-[#080808]">
                {/* Abstract cinematic scene */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e50914]/30 via-[#111111] to-[#ffd400]/10" />

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[10%] top-[18%] h-[170px] w-[170px] rounded-full bg-[#e50914]/20 blur-[40px]"
                />

                <motion.div
                  animate={{
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[8%] right-[-5%] h-[150px] w-[150px] rounded-full bg-[#ffd400]/15 blur-[35px]"
                />

                {/* Cinematic frame */}
                <div className="absolute inset-5 rounded-xl border border-white/10">
                  <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-[#e50914]" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-oswald text-[9px] uppercase tracking-[0.2em] text-white/40">
                        Hill City Media
                      </p>

                      <p className="mt-1 font-montserrat text-lg font-bold">
                        Your Story.
                      </p>

                      <p className="font-montserrat text-lg font-bold text-[#ffd400]">
                        Our Frame.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Play size={15} fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Camera focus marks */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-white/30" />
                <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-white/30" />
                <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/30" />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/30" />
              </div>

              {/* Timeline */}
              <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-[8px] uppercase tracking-[0.15em] text-white/30">
                    Timeline
                  </span>

                  <span className="font-poppins text-[8px] text-white/30">
                    00:32 / 01:48
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    animate={{
                      width: ["25%", "70%", "25%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#e50914] to-[#ffd400]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, index % 2 === 0 ? -8 : 8, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.5 + index * 0.15,
                    },
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute z-20 hidden rounded-2xl border border-white/10 bg-[#111111]/90 p-3 shadow-xl backdrop-blur-md sm:block ${card.className}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
                      <Icon size={17} className="text-[#ffd400]" />
                    </div>

                    <div>
                      <p className="font-poppins text-[9px] uppercase tracking-wider text-white/35">
                        {card.label}
                      </p>

                      <p className="font-montserrat text-sm font-bold">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Play button */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[7%] right-[4%] z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#e50914] shadow-[0_0_30px_rgba(229,9,20,0.3)]"
            >
              <Play size={19} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}