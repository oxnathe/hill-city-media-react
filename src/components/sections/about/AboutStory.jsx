import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-black sm:py-28 lg:py-32">
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 h-40 w-40 bg-yellow-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              {/* Main graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute left-8 top-8 h-24 w-24 border-2 border-yellow-400 sm:left-12 sm:top-12" />

                <div className="absolute bottom-8 right-8 h-24 w-24 border-2 border-red-600 sm:bottom-12 sm:right-12" />

                <div className="relative text-center">
                  <p className="text-7xl font-black uppercase leading-none text-white sm:text-8xl">
                    HILL
                  </p>

                  <p className="text-7xl font-black uppercase leading-none text-red-600 sm:text-8xl">
                    CITY
                  </p>

                  <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400" />

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
                    Media & Creative
                  </p>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-12 bg-yellow-400 px-5 py-3 text-xs font-black uppercase tracking-wider text-black"
              >
                Elevate Brands
              </motion.div>

              <div className="absolute bottom-0 left-0 h-2 w-1/2 bg-red-600" />
              <div className="absolute bottom-0 right-0 h-2 w-1/2 bg-yellow-400" />
            </div>

            {/* Number */}
            <div className="absolute -bottom-7 -right-4 bg-red-600 px-6 py-5 text-white shadow-xl sm:-right-8">
              <p className="text-3xl font-black">01</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
                Our Story
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-12 bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                Who We Are
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
              We turn{" "}
              <span className="text-red-600">ideas</span> into{" "}
              <span className="relative inline-block">
                brands.
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400" />
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-black/65 sm:text-lg">
              <p>
                Hill City Media is a creative media and branding company built
                to help businesses communicate better, look better, and grow
                stronger.
              </p>

              <p>
                From the first idea to the final product, we bring together
                creativity, strategy, technology, and production to create
                solutions that make brands stand out.
              </p>

              <p>
                Whether it is a powerful brand identity, professionally
                produced media, high-quality printing, or a digital campaign,
                our goal is simple:{" "}
                <strong className="text-black">
                  make your brand impossible to ignore.
                </strong>
              </p>
            </div>

            <div className="mt-9">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 border-b-2 border-black pb-2 text-sm font-black uppercase tracking-wide transition-colors duration-300 hover:border-red-600 hover:text-red-600"
              >
                Discover What We Do
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}