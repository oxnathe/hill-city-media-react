import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const trustItems = [
  {
    number: "01",
    title: "Creative",
    text: "Ideas that give brands a distinct visual voice.",
  },
  {
    number: "02",
    title: "Strategic",
    text: "Design and media built around real business goals.",
  },
  {
    number: "03",
    title: "Reliable",
    text: "From first concept to final delivery, we show up.",
  },
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.18, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-red-600 blur-[150px]"
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.12, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-400 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="h-[2px] w-12 bg-yellow-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            About Hill City
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.055em]"
            >
              We Make
              <br />

              <span className="relative inline-block">
                Brands
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-[5px] bg-yellow-400 sm:-bottom-3"
                />
              </span>

              <br />

              <span className="text-white">
                Impossible
              </span>

              <br />

              <span className="text-red-500">To Ignore.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 max-w-xl"
            >
              <p className="text-lg leading-relaxed text-white/65 sm:text-xl">
                Hill City is a creative media and production company built
                for brands that want more than just visibility.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/45">
                We combine strategy, design, printing, digital experiences,
                and media production to turn ideas into brands people
                remember.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="/about"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ x: 6 }}
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              More About Hill City

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-red-500">
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </span>
            </motion.a>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 70, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7">
              {/* Yellow corner */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute right-0 top-0 w-1 bg-yellow-400"
              />

              {/* Red corner */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-0 right-0 h-1 bg-red-500"
              />

              {/* Main graphic */}
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#111111] p-6 sm:p-8">
                {/* Decorative grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Creative Media
                  </span>
                </motion.div>

                {/* Central typography */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-5"
                  >
                    <Sparkles
                      size={38}
                      strokeWidth={1.5}
                      className="text-yellow-400"
                    />
                  </motion.div>

                  <h3 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.8] tracking-[-0.06em]">
                    Make
                    <br />
                    <span className="text-red-500">Noise.</span>
                  </h3>

                  <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/40">
                    Strategy. Design. Media. Print. Digital.
                    <br />
                    Everything your brand needs to move forward.
                  </p>
                </div>

                {/* Bottom mark */}
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Hill City
                    </p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                      Elevating Brands
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/40"
                  >
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  </motion.div>
                </div>

                {/* Floating red shape */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-red-600/20 blur-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                }}
                className="group"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-yellow-400">
                    {item.number}
                  </span>

                  <span className="h-px flex-1 bg-white/10 ml-4 transition-all duration-500 group-hover:bg-red-500/60" />
                </div>

                <h4 className="text-lg font-bold uppercase tracking-tight">
                  {item.title}
                </h4>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/40">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}