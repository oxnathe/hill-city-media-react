import { motion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  Megaphone,
  Palette,
  Printer,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Videography & Media Production",
    description:
      "Professional video production that captures your story, showcases your brand, and keeps your audience watching.",
    icon: Camera,
    href: "/videography",
    label: "Explore Videography",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns designed to increase your visibility, connect with your audience, and grow your business.",
    icon: Megaphone,
    href: "/digital-marketing",
    label: "Explore Marketing",
  },
  {
    number: "03",
    title: "Corporate Identity",
    description:
      "Distinctive branding and corporate identity systems that give your business a professional and memorable presence.",
    icon: Palette,
    href: "/corporate-identity",
    label: "Explore Branding",
  },
  {
    number: "04",
    title: "Printing Services",
    description:
      "High-quality printing solutions that bring your designs to life, from everyday business materials to large-format branding.",
    icon: Printer,
    href: "/printing-services",
    label: "Explore Printing",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="our-services"
      className="bg-white px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-black/50">
                Our Services
              </span>
            </div>

            <h2 className="font-oswald text-5xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
              Everything Your
              <span className="block text-[var(--hill-red)]">Brand Needs.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat max-w-xl text-sm leading-7 text-black/55 sm:text-base"
          >
            We bring strategy, creativity, production, and execution together
            under one roof. Whether you need a powerful campaign, a stronger
            identity, compelling content, or quality print, we have you
            covered.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden border border-black/10 bg-[#f7f7f7] p-7 transition-all duration-500 hover:border-[var(--hill-red)] sm:p-9 lg:p-10"
              >
                {/* Number */}
                <span className="font-oswald absolute right-7 top-5 text-6xl font-bold text-black/[0.04] transition-colors duration-500 group-hover:text-[var(--hill-red)]/10 sm:right-9">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative mb-12 flex h-14 w-14 items-center justify-center border border-black/10 transition-all duration-500 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-oswald max-w-md text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="font-montserrat mt-5 max-w-lg text-sm leading-7 text-black/55">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    to={service.href}
                    className="font-montserrat group/link mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]"
                  >
                    <span className="border-b border-black/20 pb-1 transition-colors duration-300 group-hover:border-[var(--hill-red)] group-hover:text-[var(--hill-red)]">
                      {service.label}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-[var(--hill-red)]"
                    />
                  </Link>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--hill-red)] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}