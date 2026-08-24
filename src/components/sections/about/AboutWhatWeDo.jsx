import { motion } from "motion/react";
import {
  Printer,
  Palette,
  MonitorSmartphone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    number: "01",
    title: "Print",
    description:
      "From business cards and brochures to large-format production, we turn your ideas into tangible experiences that people can see and feel.",
    icon: Printer,
    accent: "red",
  },
  {
    number: "02",
    title: "Brand",
    description:
      "We build identities that communicate who you are, what you stand for, and why your audience should choose you.",
    icon: Palette,
    accent: "yellow",
  },
  {
    number: "03",
    title: "Digital",
    description:
      "We take your brand into the digital world through media production, digital marketing, content, and creative campaigns.",
    icon: MonitorSmartphone,
    accent: "white",
  },
];

export default function AboutWhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32">
      {/* Background accents */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            One creative partner.
            <br />
            <span className="text-red-600">Endless possibilities.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            We bring different creative disciplines together so your brand can
            move from an idea to something real, memorable, and impactful.
          </p>
        </motion.div>

        {/* Three cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className={`group relative min-h-[390px] overflow-hidden border p-7 transition-all duration-500 sm:p-9 ${
                  area.accent === "red"
                    ? "border-white/10 hover:border-red-600"
                    : area.accent === "yellow"
                      ? "border-white/10 hover:border-yellow-400"
                      : "border-white/20 hover:border-white"
                }`}
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-6xl font-black text-white/[0.05] transition-all duration-500 group-hover:text-white/[0.1]">
                  {area.number}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 ${
                    area.accent === "red"
                      ? "bg-red-600 text-white"
                      : area.accent === "yellow"
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-black"
                  }`}
                >
                  <Icon size={25} strokeWidth={2} />
                </div>

                <h3 className="mt-12 text-4xl font-black uppercase tracking-tight">
                  {area.title}
                </h3>

                <div
                  className={`mt-4 h-1 w-12 transition-all duration-500 group-hover:w-20 ${
                    area.accent === "red"
                      ? "bg-red-600"
                      : area.accent === "yellow"
                        ? "bg-yellow-400"
                        : "bg-white"
                  }`}
                />

                <p className="mt-6 text-sm leading-6 text-white/55 sm:text-base">
                  {area.description}
                </p>

                <div className="absolute bottom-7 left-7 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 transition-all duration-300 group-hover:text-white sm:left-9 sm:bottom-9">
                  Explore
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                    area.accent === "red"
                      ? "bg-red-600"
                      : area.accent === "yellow"
                        ? "bg-yellow-400"
                        : "bg-white"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/50">
            From concept to execution, we keep everything connected.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 text-sm font-black uppercase tracking-wide text-white transition-colors duration-300 hover:text-yellow-400"
          >
            View all services
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}