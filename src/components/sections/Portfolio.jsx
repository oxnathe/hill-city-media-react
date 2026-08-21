import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "PRINT",
    title: "Corporate Print",
    description:
      "Professional print materials designed to make every physical brand touchpoint count.",
    image: "/portfolio/print.jpg",
  },
  {
    number: "02",
    category: "BRAND",
    title: "Brand Identity",
    description:
      "Bold visual identities created to give businesses a stronger and more memorable presence.",
    image: "/portfolio/brand.jpg",
  },
  {
    number: "03",
    category: "DIGITAL",
    title: "Digital Campaign",
    description:
      "Creative digital content designed to capture attention and move brands forward.",
    image: "/portfolio/digital.jpg",
  },
  {
    number: "04",
    category: "MEDIA",
    title: "Media Production",
    description:
      "Visual storytelling that helps brands communicate with clarity, personality and impact.",
    image: "/portfolio/media.jpg",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${index === 0 ? "md:col-span-2" : ""}`}
    >
      {/* PROJECT IMAGE */}
      <div
        className={`relative overflow-hidden rounded-[28px] bg-black ${
          index === 0
            ? "aspect-[16/9] md:aspect-[2/1]"
            : "aspect-[4/3]"
        }`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        />

        {/* DARK HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/40" />

        {/* CATEGORY */}
        <div className="absolute left-5 top-5 md:left-7 md:top-7">
          <span className="rounded-full bg-white px-4 py-2 font-montserrat text-[10px] font-bold tracking-[0.18em] text-black">
            {project.category}
          </span>
        </div>

        {/* PROJECT NUMBER */}
        <div className="absolute right-5 top-5 md:right-7 md:top-7">
          <span className="font-montserrat text-sm font-bold tracking-widest text-white">
            {project.number}
          </span>
        </div>

        {/* YELLOW ARROW */}
        <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-[var(--hill-yellow)] text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-7 md:right-7">
          <ArrowUpRight size={20} strokeWidth={2.3} />
        </div>
      </div>

      {/* PROJECT INFORMATION */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-montserrat text-xl font-bold tracking-tight text-black md:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2 max-w-xl font-montserrat text-sm leading-6 text-black/55 md:text-base">
              {project.description}
            </p>
          </div>

          <ArrowUpRight
            size={22}
            className="mt-1 shrink-0 text-black transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--hill-red)]"
          />
        </div>

        {/* YELLOW INTERACTION LINE */}
        <div className="mt-5 h-[2px] w-full overflow-hidden bg-black/10">
          <div className="h-full w-full origin-left scale-x-0 bg-[var(--hill-yellow)] transition-transform duration-700 group-hover:scale-x-100" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold tracking-[0.22em] text-black/50">
                SELECTED WORK
              </span>
            </div>

            <h2 className="font-oswald text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.04em] text-black">
              Work That
              <br />

              <span className="text-black/15">
                Speaks.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-md md:ml-auto"
          >
            <p className="font-montserrat text-base leading-7 text-black/60 md:text-lg">
              From bold identities to powerful print and digital experiences,
              we create work designed to make brands impossible to overlook.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-black">
                Creativity with purpose
              </span>
            </div>
          </motion.div>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid gap-x-7 gap-y-16 md:mt-24 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* VIEW ALL WORK BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <a
            href="/portfolio"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border-2 border-black bg-white px-7 py-4 font-montserrat text-sm font-bold text-black transition-colors duration-300 hover:border-[var(--hill-red)] hover:text-white"
          >
            {/* RED FILL */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--hill-red)] transition-transform duration-300 group-hover:scale-x-100" />

            {/* TEXT */}
            <span className="relative z-10">
              VIEW ALL WORK
            </span>

            {/* ARROW */}
            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-[var(--hill-yellow)] group-hover:text-black">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* YELLOW BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--hill-yellow)]" />
    </section>
  );
}