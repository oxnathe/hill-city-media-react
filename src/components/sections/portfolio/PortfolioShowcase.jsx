import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Image as ImageIcon,
  MessageCircle,
} from "lucide-react";

const categories = [
  "All",
  "Branding",
  "Printing",
  "Digital",
  "Videography",
  "Corporate",
];

const projects = [
  {
    id: 1,
    title: "Visual Identity",
    category: "Branding",
    description:
      "A bold visual direction created to give a brand a stronger and more recognizable identity.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Corporate Print Suite",
    category: "Printing",
    description:
      "Professional printed materials designed to keep a brand consistent across physical touchpoints.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Digital Campaign",
    category: "Digital",
    description:
      "Creative digital content designed to attract attention and keep a brand active online.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Media Production",
    category: "Videography",
    description:
      "Visual storytelling and media content created to communicate a brand with energy and clarity.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Corporate Branding",
    category: "Corporate",
    description:
      "A polished corporate identity system designed around professionalism, clarity and consistency.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Campaign Artwork",
    category: "Branding",
    description:
      "Campaign-focused creative direction combining strong typography, composition and brand personality.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  },
];

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#111111]">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e50914]/15 blur-[70px]" />

      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#ffd400]/10 blur-[70px]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:45px_45px]" />

      <div className="relative z-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
          <ImageIcon
            size={20}
            strokeWidth={1.5}
            className="text-white/35"
          />
        </div>

        <p className="mt-4 font-['Poppins'] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Image Coming Soon
        </p>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const whatsappMessage = encodeURIComponent(
    "Hello Hill City Media, I would like to start a project with you."
  );

  const whatsappLink = `https://wa.me/2348031388328?text=${whatsappMessage}`;

  return (
    <section
      id="portfolio-showcase"
      className="bg-[#080808] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ffd400]" />

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#ffd400]">
              Project Showcase
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-['Montserrat'] text-4xl font-black leading-[1] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Explore our
              <span className="text-[#e50914]"> creative world.</span>
            </h2>

            <p className="max-w-md font-['Poppins'] text-sm leading-7 text-white/45">
              Browse our work by service category and discover the different
              ways we help brands look better, communicate better and grow.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-full px-5 py-2.5 font-['Poppins'] text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#e50914] text-white shadow-lg shadow-red-950/30"
                      : "text-white/45 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111]">
                  <ProjectImage project={project} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#e50914] group-hover:bg-[#e50914]">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-['Poppins'] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#ffd400] backdrop-blur-md">
                      {project.category}
                    </span>

                    <h3 className="mt-4 font-['Montserrat'] text-xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 font-['Poppins'] text-xs leading-6 text-white/45">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#e50914]/20 blur-[100px]" />

            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#ffd400]/10 blur-[100px]" />

            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:60px_60px]" />
          </div>

          <div className="relative grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
            {/* CTA content */}
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e50914]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ffd400]">
                  Let's Create
                </span>
              </div>

              <h3 className="font-['Montserrat'] text-3xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Ready to make your brand
                <span className="text-[#e50914]"> impossible to ignore?</span>
              </h3>

              <p className="mt-5 max-w-xl font-['Poppins'] text-sm leading-7 text-white/45 sm:text-base">
                Tell us what you have in mind. Whether it's a brand identity,
                printing project, digital campaign or media production, let's
                turn the idea into something people remember.
              </p>
            </div>

            {/* CTA button */}
            <div className="relative">
              {/* Yellow glow */}
              <div className="absolute inset-0 rounded-full bg-[#ffd400]/20 blur-2xl" />

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#e50914] px-7 py-4 font-['Poppins'] text-sm font-bold text-white shadow-xl shadow-red-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1722] sm:w-auto sm:px-8"
              >
                <MessageCircle
                  size={19}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>Start a Conversation</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#e50914] via-[#ffd400] to-[#e50914]" />
        </motion.div>
      </div>
    </section>
  );
}