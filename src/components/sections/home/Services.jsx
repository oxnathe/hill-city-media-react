import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "PRINTING",
    description: "Commercial print, packaging & large format.",
  },
  {
    number: "02",
    title: "CORPORATE IDENTITY",
    description: "Brand identity, logos & corporate materials.",
  },
  {
    number: "03",
    title: "DIGITAL MARKETING",
    description: "Content, campaigns & digital growth.",
  },
  {
    number: "04",
    title: "VIDEOGRAPHY & MEDIA",
    description: "Photography, video & commercial production.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 md:py-24 lg:px-12 lg:py-28"
    >
      {/* =====================================================
          YELLOW TOP LINE
      ====================================================== */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 h-[4px] w-full origin-left bg-[var(--hill-yellow)]"
      />

      <div className="mx-auto max-w-[1450px]">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-12 grid gap-6 md:mb-14 lg:grid-cols-[0.7fr_1.8fr] lg:items-end lg:gap-16">

          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--hill-red)]">
                What We Create
              </span>
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <h2 className="max-w-4xl font-montserrat text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]">
              We turn ideas
              <br />
              into{" "}
              <span className="relative inline-block">
                things
                <span className="absolute -bottom-1 left-0 h-[5px] w-full bg-[var(--hill-yellow)] md:-bottom-2 md:h-[7px]" />
              </span>{" "}
              people remember.
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
                duration: 0.55,
                delay: index * 0.07,
              }}
              className="group"
            >
              <Link
                to="/services"
                className="relative block overflow-hidden rounded-[22px] border border-black/10 bg-[#f7f7f5] p-[2px]"
              >
                {/* =================================================
                    MOVING RED + YELLOW BACKGROUND

                    This is the same idea as Navbar CTA.
                ================================================== */}

                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(110deg,#e50914_0%,#e50914_35%,#ffd400_50%,#e50914_65%,#e50914_100%)] bg-[length:250%_100%]"
                  animate={{
                    backgroundPosition: [
                      "100% 0%",
                      "0% 0%",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* =================================================
                    LIGHT IDLE OVERLAY

                    Keeps the text/background visible before hover.
                ================================================== */}

                <span className="absolute inset-[2px] rounded-[20px] bg-[#f7f7f5] transition-all duration-500 group-hover:bg-transparent" />

                {/* =================================================
                    SERVICE CONTENT
                ================================================== */}

                <div className="relative z-10 grid items-center gap-4 rounded-[20px] px-5 py-5 sm:px-7 md:grid-cols-[65px_1fr_auto] md:px-8 md:py-6 lg:grid-cols-[80px_1fr_1fr_auto] lg:px-10">

                  {/* Number */}

                  <span className="font-oswald text-sm font-bold text-black/40 transition-colors duration-300 group-hover:text-black">
                    {service.number}
                  </span>

                  {/* Title */}

                  <h3 className="font-montserrat text-[clamp(1.8rem,4vw,4.2rem)] font-black uppercase leading-none tracking-[-0.055em] text-black transition-all duration-500 group-hover:translate-x-2 md:group-hover:translate-x-3">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="max-w-sm font-poppins text-sm font-medium leading-5 text-black/55 transition-colors duration-300 group-hover:text-black md:text-[13px]">
                    {service.description}
                  </p>

                  {/* Arrow */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/20 bg-transparent text-black transition-all duration-500 group-hover:rotate-45 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-poppins text-sm font-medium text-black/45">
            Have something different in mind?
          </p>

          {/* =================================================
              SAME START A PROJECT DESIGN AS NAVBAR
          ================================================== */}

          <Link
            to="/contact"
            className="group relative inline-flex w-fit overflow-hidden rounded-full bg-[#080808] px-6 py-3.5 font-montserrat text-xs font-bold text-white"
          >
            {/* Moving RED + YELLOW */}

            <motion.span
              className="absolute inset-0 bg-[linear-gradient(110deg,#e50914_0%,#e50914_35%,#ffd400_50%,#e50914_65%,#e50914_100%)] bg-[length:250%_100%]"
              animate={{
                backgroundPosition: [
                  "100% 0%",
                  "0% 0%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Dark idle overlay */}

            <span className="absolute inset-[2px] rounded-full bg-[#080808]/85 transition-all duration-500 group-hover:bg-transparent" />

            {/* Hover glow */}

            <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_25px_rgba(229,9,20,0.45)] transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}

            <span className="relative z-10 flex items-center gap-2">
              <span className="transition-colors duration-300 group-hover:text-black">
                Start a Project
              </span>

              <ArrowUpRight
                size={15}
                className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}