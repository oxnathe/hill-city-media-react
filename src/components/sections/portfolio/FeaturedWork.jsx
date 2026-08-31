import { motion } from "motion/react";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    title: "Print Campaign",
    category: "Commercial Printing",
    description:
      "High-impact printed materials created to bring a campaign from concept to physical experience.",
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1600",
    size: "large",
  },
  {
    number: "02",
    title: "Brand Identity",
    category: "Corporate Identity",
    description:
      "A complete visual identity designed to give a growing brand a stronger, more confident presence.",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200",
    size: "small",
  },
  {
    number: "03",
    title: "Digital Campaign",
    category: "Digital Marketing",
    description:
      "Creative digital content built to capture attention and keep a brand consistently visible.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    size: "small",
  },
];

function ImagePlaceholder({ title }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e50914]/20 blur-[80px]" />

      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#ffd400]/10 blur-[80px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Placeholder */}
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <ImageIcon
            size={23}
            strokeWidth={1.5}
            className="text-white/40"
          />
        </div>

        <p className="font-['Poppins'] text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
          Image Coming Soon
        </p>

        <p className="mt-2 font-['Poppins'] text-[10px] text-white/20">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e50914]" />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#e50914]">
                Featured Work
              </span>
            </div>

            <h2 className="max-w-3xl font-['Montserrat'] text-4xl font-black leading-[1] tracking-[-0.035em] text-[#080808] sm:text-5xl lg:text-6xl">
              A few things
              <span className="text-[#e50914]"> we've made.</span>
            </h2>
          </div>

          <p className="max-w-md font-['Poppins'] text-sm leading-7 text-black/50">
            A selection of creative work across branding, printing, digital
            marketing and media. More projects are being added as we continue
            to grow.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid gap-6 lg:grid-cols-12">
          {featuredProjects.map((project, index) => {
            const isLarge = project.size === "large";

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`group ${
                  isLarge ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-[2rem] bg-[#080808] ${
                    isLarge
                      ? "aspect-[4/4.2] sm:aspect-[4/3]"
                      : "aspect-[4/3]"
                  }`}
                >
                  {/* Image / placeholder */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder title={project.title} />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-['Oswald'] text-sm font-bold text-white backdrop-blur-md">
                    {project.number}
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#e50914] group-hover:bg-[#e50914]">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles
                        size={13}
                        className="text-[#ffd400]"
                      />

                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-['Montserrat'] text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg font-['Poppins'] text-xs leading-6 text-white/50 sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}