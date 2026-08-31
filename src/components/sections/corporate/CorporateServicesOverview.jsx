import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Brush,
  FileText,
  Image,
  Package,
  Palette,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const services = [
  {
    number: "01",
    title: "Logo Design",
    description:
      "Distinctive logos designed to give your business a strong visual mark that people can recognize and remember.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "A complete visual identity system that brings your logo, colors, typography, and brand personality together.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "03",
    title: "Brand Guidelines",
    description:
      "Clear brand guidelines that show your team exactly how to use your identity consistently across every platform.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "04",
    title: "Business Stationery",
    description:
      "Professional business cards, letterheads, envelopes, invoices, and other materials designed around your identity.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "05",
    title: "Corporate Profiles",
    description:
      "Polished company profiles and presentation materials that communicate your business professionally to clients and partners.",
    icon: BadgeCheck,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "06",
    title: "CAC Registration",
    description:
      "Professional assistance with CAC business registration so you can formalize your business and take the next step with confidence.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    number: "07",
    title: "Brand Collateral",
    description:
      "Branded visual materials for marketing, packaging, presentations, events, social media, and everyday business use.",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200",
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
          {/* Red glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[70px]" />

          {/* Yellow glow */}
          <div className="absolute bottom-[-50px] right-[-30px] h-32 w-32 rounded-full bg-[#ffd400]/10 blur-[60px]" />

          <div className="relative z-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#ffd400]">
              <Image size={22} strokeWidth={1.5} />
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

export default function CorporateServicesOverview() {
  return (
    <section
      id="corporate-services"
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
            Everything your brand needs to
            <span className="text-[#e50914]"> stand out.</span>
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-black/55 sm:text-base">
            From your first logo to business registration and a complete
            brand system, we help businesses look professional, get
            established, and stay consistent as they grow.
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
              Ready to build a stronger brand?
            </p>

            <p className="mt-1 font-poppins text-sm text-white/45">
              Let's create an identity your customers won't forget.
            </p>
          </div>

          <a
            href={getWhatsAppLink("a Corporate Identity project")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffd400] px-5 py-3 font-poppins text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,212,0,0.2)]"
          >
            Build My Brand

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