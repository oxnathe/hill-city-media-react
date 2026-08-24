import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Image,
  Megaphone,
  Video,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const services = [
  {
    number: "01",
    title: "Commercial Video Production",
    description:
      "Professional videos created to showcase your products, services, campaigns, and brand in a way that captures attention.",
    icon: Clapperboard,
    image: "/images/services/videography/commercial.jpg",
  },
  {
    number: "02",
    title: "Event Coverage",
    description:
      "We capture the energy, atmosphere, and important moments of your events so the experience lives beyond the day.",
    icon: Video,
    image: "/images/services/videography/events.jpg",
  },
  {
    number: "03",
    title: "Photography",
    description:
      "Sharp, creative photography for brands, products, people, events, and campaigns that need visuals with personality.",
    icon: Camera,
    image: "/images/services/videography/photography.jpg",
  },
  {
    number: "04",
    title: "Social Media Content",
    description:
      "Short-form videos, reels, and visual content designed to keep your brand active, relevant, and engaging online.",
    icon: Image,
    image: "/images/services/videography/social-content.jpg",
  },
  {
    number: "05",
    title: "Corporate Videos",
    description:
      "Professional corporate content that communicates your company's story, culture, services, and values with confidence.",
    icon: Film,
    image: "/images/services/videography/corporate.jpg",
  },
  {
    number: "06",
    title: "Promotional Videos",
    description:
      "High-impact promotional content built to introduce offers, launch products, promote campaigns, and drive action.",
    icon: Megaphone,
    image: "/images/services/videography/promotional.jpg",
  },
];

function getWhatsAppLink(title) {
  const message = encodeURIComponent(
    `Hello Hill City Media, I would like to get a quote for ${title}.`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

function ServiceImage({ image, title }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
      {!imageError ? (
        <img
          src={image}
          alt={title}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#111111]">
          {/* Decorative glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[70px]" />

          {/* Placeholder content */}
          <div className="relative z-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#ffd400]">
              <Video size={22} strokeWidth={1.5} />
            </div>

            <p className="mt-4 font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Image Coming Soon
            </p>

            <p className="mt-1 font-poppins text-[9px] text-white/25">
              {title}
            </p>
          </div>

          {/* Decorative corner lines */}
          <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-white/10" />
          <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-white/10" />
          <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-white/10" />
          <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/10" />
        </div>
      )}

      {/* Image overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>
  );
}

export default function VideographyServicesOverview() {
  return (
    <section
      id="videography-services"
      className="relative overflow-hidden bg-white py-20 text-[#080808] sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[-100px] top-[20%] h-[300px] w-[300px] rounded-full bg-[#e50914]/5 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-[280px] w-[280px] rounded-full bg-[#ffd400]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e50914]" />

            <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#e50914]">
              What We Do
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            We turn moments into
            <span className="text-[#e50914]"> stories.</span>
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-black/55 sm:text-base">
            From the first frame to the final edit, we create visual content
            that tells your story clearly, captures attention, and gives your
            brand something worth remembering.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-[#f7f7f5] transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/30 hover:shadow-xl hover:shadow-black/5"
              >
                {/* Image */}
                <div className="relative">
                  <ServiceImage
                    image={service.image}
                    title={service.title}
                  />

                  {/* Number */}
                  <span className="absolute left-5 top-5 font-oswald text-sm font-bold tracking-[0.15em] text-white/70">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#ffd400] backdrop-blur-md">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-6 sm:p-7">
                  <h3 className="font-montserrat text-xl font-extrabold tracking-[-0.02em] sm:text-[22px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] font-poppins text-sm leading-6 text-black/50">
                    {service.description}
                  </p>

                  {/* WhatsApp CTA */}
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-[#080808] transition-colors duration-300 group-hover:text-[#e50914]"
                  >
                    Get a Quote

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e50914] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-[24px] border border-black/10 bg-[#080808] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="font-montserrat text-lg font-bold">
              Have a story to tell?
            </p>

            <p className="mt-1 font-poppins text-sm text-white/45">
              Let's turn your idea into something people remember.
            </p>
          </div>

          <a
            href={getWhatsAppLink("a Videography & Media project")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffd400] px-5 py-3 font-poppins text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,212,0,0.2)]"
          >
            Let's Create

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}