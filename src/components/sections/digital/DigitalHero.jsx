import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  MousePointerClick,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const whatsappMessage = encodeURIComponent(
  "Hello Hill City Media, I would like to discuss your Digital Marketing services."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Growth",
    value: "+84%",
    className: "left-[3%] top-[18%] rotate-[-8deg]",
  },
  {
    icon: BarChart3,
    label: "Campaign",
    value: "2.4K",
    className: "right-[3%] top-[28%] rotate-[7deg]",
  },
  {
    icon: MousePointerClick,
    label: "Engagement",
    value: "68%",
    className: "bottom-[15%] left-[8%] rotate-[6deg]",
  },
];

export default function DigitalHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#e50914]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#ffd400]/10 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_72%)]" />
      </div>

      {/* Decorative Grid */}
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
                Digital Marketing
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-montserrat text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              We make brands
              <span className="block text-[#e50914]">
                impossible
              </span>
              <span className="relative inline-block">
                to ignore.
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
              We build digital strategies, create attention-grabbing content,
              and run campaigns that help brands connect with the right
              audience and grow online.
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
                  Start a Campaign
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </a>

              <a
                href="#digital-services"
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
                <Sparkles size={14} className="text-[#ffd400]" />
                Strategy-led campaigns
              </div>

              <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Megaphone size={14} className="text-[#e50914]" />
                Creative content
              </div>

              <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-[#ffd400]" />
                Growth focused
              </div>
            </div>
          </motion.div>

          {/* Digital Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[90px]" />

            {/* Main Dashboard */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto aspect-[0.92] w-[82%] overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/40 sm:p-5"
            >
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e50914]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd400]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <div className="h-2 w-20 rounded-full bg-white/10" />
              </div>

              {/* Dashboard */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#080808] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-poppins text-[10px] uppercase tracking-[0.18em] text-white/35">
                      Campaign Overview
                    </p>

                    <p className="mt-1 font-montserrat text-xl font-bold">
                      Digital Growth
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e50914]/10 text-[#e50914]">
                    <TrendingUp size={17} />
                  </div>
                </div>

                {/* Fake Chart */}
                <div className="relative mt-7 h-36 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-white/5" />
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/5" />
                  <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-white/5" />

                  <svg
                    viewBox="0 0 400 140"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="digitalChartGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#e50914" />
                        <stop offset="100%" stopColor="#ffd400" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 112 C45 105 55 92 90 98 C125 104 130 70 165 77 C200 84 205 58 235 62 C265 66 278 42 310 49 C342 56 350 22 400 18"
                      fill="none"
                      stroke="url(#digitalChartGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-3">
                    <p className="font-poppins text-[9px] uppercase tracking-wider text-white/35">
                      Reach
                    </p>
                    <p className="mt-1 font-montserrat text-lg font-bold">
                      128K
                    </p>
                    <span className="font-poppins text-[9px] text-[#ffd400]">
                      +32.8%
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-3">
                    <p className="font-poppins text-[9px] uppercase tracking-wider text-white/35">
                      Engagement
                    </p>
                    <p className="mt-1 font-montserrat text-lg font-bold">
                      68.4%
                    </p>
                    <span className="font-poppins text-[9px] text-[#e50914]">
                      +18.2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Cards */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl border border-white/10 bg-[#e50914]/10 p-3">
                  <div className="h-5 w-5 rounded-md bg-[#e50914]/30" />
                  <div className="mt-4 h-1.5 w-12 rounded-full bg-white/10" />
                </div>

                <div className="h-20 rounded-xl border border-white/10 bg-[#ffd400]/10 p-3">
                  <div className="h-5 w-5 rounded-md bg-[#ffd400]/30" />
                  <div className="mt-4 h-1.5 w-12 rounded-full bg-white/10" />
                </div>

                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-5 w-5 rounded-md bg-white/10" />
                  <div className="mt-4 h-1.5 w-12 rounded-full bg-white/10" />
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
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

            {/* Play Button */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] right-[4%] z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#e50914] shadow-[0_0_30px_rgba(229,9,20,0.3)]"
            >
              <Play size={19} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}