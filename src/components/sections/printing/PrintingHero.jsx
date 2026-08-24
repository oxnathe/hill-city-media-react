import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const printItems = [
  "Business Cards",
  "Flyers & Brochures",
  "Posters & Banners",
  "Packaging",
];

export default function PrintingHero() {
  const whatsappNumber = "2348031388328";

  const whatsappMessage = encodeURIComponent(
    "Hello Hill City Media, I would like to start a printing project."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden bg-[#080808] pt-32 text-white lg:pt-40">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Red glow */}
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[var(--hill-red)]/20 blur-[120px]" />

        {/* Yellow glow */}
        <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[var(--hill-yellow)]/10 blur-[110px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                Printing Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl font-oswald text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-[7rem]">
              Print that
              <span className="block text-[var(--hill-red)]">
                gets noticed.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl font-poppins text-sm leading-7 text-white/55 sm:text-base">
              From everyday business materials to bold large-format
              branding, we turn your designs into quality print that
              people can see, touch, and remember.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--hill-red)] px-6 py-4 font-montserrat text-xs font-bold text-white"
              >
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(110deg,#e50914_0%,#e50914_35%,#ffd400_50%,#e50914_65%,#e50914_100%)] bg-[length:250%_100%]"
                  animate={{
                    backgroundPosition: ["100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Start a Printing Project
                </span>

                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                />
              </motion.a>

              <a
                href="#what-we-print"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-montserrat text-xs font-bold text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                See What We Print
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Quality Materials",
                "Sharp Finishing",
                "Brand-Ready Results",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--hill-yellow)] text-black">
                    <Check size={11} strokeWidth={3} />
                  </span>

                  <span className="font-poppins text-[11px] text-white/50">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — PRINT COMPOSITION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto h-[430px] w-full max-w-[500px] sm:h-[500px]"
          >
            {/* Decorative registration marks */}
            <div className="absolute left-2 top-8 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--hill-red)]" />
              <span className="h-[1px] w-10 bg-white/20" />
            </div>

            <div className="absolute bottom-8 right-2 flex items-center gap-2">
              <span className="h-[1px] w-10 bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-[var(--hill-yellow)]" />
            </div>

            {/* Back paper */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-7, -5, -7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[13%] h-[290px] w-[72%] rotate-[-7deg] rounded-[2rem] bg-white/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:h-[340px]"
            >
              <div className="h-full rounded-[1.5rem] border border-black/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-oswald text-xs font-bold tracking-[0.2em] text-black/40">
                    HCM / PRINT
                  </span>

                  <span className="h-3 w-3 rounded-full bg-[var(--hill-red)]" />
                </div>

                <div className="mt-10 h-3 w-24 rounded-full bg-black/10" />
                <div className="mt-3 h-3 w-36 rounded-full bg-black/5" />

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-black/[0.04]" />
                  <div className="h-20 rounded-xl bg-[var(--hill-yellow)]/70" />
                </div>

                <div className="mt-5 h-2 w-full rounded-full bg-black/5" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-black/5" />
              </div>
            </motion.div>

            {/* Main red print */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [5, 7, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] top-[20%] h-[300px] w-[72%] rotate-[5deg] overflow-hidden rounded-[2rem] bg-[var(--hill-red)] p-6 shadow-[0_35px_90px_rgba(229,9,20,0.25)] sm:h-[350px]"
            >
              {/* Print texture */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                    HILL CITY MEDIA
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-white/70"
                  />
                </div>

                <div>
                  <p className="font-oswald text-5xl font-semibold uppercase leading-[0.85] tracking-tight text-white sm:text-6xl">
                    MAKE
                    <br />
                    IT
                    <br />
                    REAL.
                  </p>

                  <div className="mt-6 h-1 w-14 bg-[var(--hill-yellow)]" />
                </div>

                <div className="flex items-end justify-between">
                  <span className="font-poppins text-[9px] text-white/50">
                    PRINT • BRAND • IMPACT
                  </span>

                  <span className="font-oswald text-3xl font-bold text-[var(--hill-yellow)]">
                    01
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating yellow card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-4, -2, -4],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[7%] left-[5%] z-20 w-[190px] rotate-[-4deg] rounded-2xl bg-[var(--hill-yellow)] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:w-[210px]"
            >
              <p className="font-montserrat text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">
                What We Print
              </p>

              <div className="mt-4 space-y-2">
                {printItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />

                    <span className="font-poppins text-[10px] font-semibold text-black/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating red dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] bottom-[12%] h-4 w-4 rounded-full bg-[var(--hill-red)] shadow-[0_0_25px_rgba(229,9,20,0.6)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}