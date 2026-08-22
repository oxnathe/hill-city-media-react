import { motion } from "motion/react";

const brands = [
  {
    name: "MTN",
    logo: "/images/brands/mtn.png",
  },
  {
    name: "FirstBank",
    logo: "/images/brands/firstbank.png",
  },
  {
    name: "Access Bank",
    logo: "/images/brands/accessbank.png",
  },
  {
    name: "Panarottis",
    logo: "/images/brands/panarottis.png",
  },
  {
    name: "Caio Pizza",
    logo: "/images/brands/caio-pizza.png",
  },
];

const duplicatedBrands = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
      {/* Top yellow line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[var(--hill-yellow)]"
      />

      <div className="relative mx-auto max-w-7xl">

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[var(--hill-yellow)]">
                Trusted By
              </span>
            </div>

            <h2 className="font-oswald text-4xl font-semibold uppercase leading-[0.95] md:text-6xl lg:text-7xl">
              Brands we&apos;ve
              <br />
              <span className="text-[var(--hill-red)]">
                worked with.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-poppins text-sm leading-6 text-white/45 md:text-right">
            From major institutions to growing businesses, we help brands
            show up with clarity, creativity and confidence.
          </p>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative overflow-hidden border-y border-white/10 py-10 md:py-12">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#080808] to-transparent md:w-16" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#080808] to-transparent md:w-16" />

          <motion.div
            className="flex w-max items-center gap-5 md:gap-7 lg:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="flex h-32 w-60 shrink-0 items-center justify-center md:h-36 md:w-72 lg:h-40 lg:w-80"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-28 max-w-[260px] object-contain transition-transform duration-300 md:max-h-32 md:max-w-[300px] lg:max-h-36 lg:max-w-[330px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--hill-red)]" />

          <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            Creative. Print. Digital. Media.
          </span>
        </motion.div>
      </div>
    </section>
  );
}