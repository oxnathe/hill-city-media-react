import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  PenTool,
  Rocket,
  Share2,
  Target,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const services = [
  {
    number: "01",
    title: "Social Media Management",
    description:
      "We manage your social presence with consistent content, engaging conversations, and a strategy built around your audience.",
    icon: Share2,
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "From graphics and short-form content to campaign creatives, we create visuals that make your brand worth stopping for.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Digital Advertising",
    description:
      "Targeted campaigns designed to put your brand in front of the right people and turn attention into meaningful action.",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Social Media Strategy",
    description:
      "We turn your goals into a clear digital strategy that gives every platform, post, and campaign a purpose.",
    icon: Target,
  },
  {
    number: "05",
    title: "Campaign Management",
    description:
      "We plan, launch, monitor, and refine digital campaigns so your marketing stays focused from start to finish.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Brand Growth",
    description:
      "We combine creativity, consistency, and data to help your brand build visibility and grow a stronger digital presence.",
    icon: BarChart3,
  },
];

function getWhatsAppLink(title) {
  const message = encodeURIComponent(
    `Hello Hill City Media, I would like to get a quote for ${title}.`
  );

  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

export default function DigitalServicesOverview() {
  return (
    <section
      id="digital-services"
      className="relative overflow-hidden bg-white py-20 text-[#080808] sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-[-120px] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ffd400]/10 blur-[100px]" />

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
            Digital marketing that
            <span className="text-[#e50914]"> moves.</span>
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-black/55 sm:text-base">
            Your audience is online. Your brand should be too. We combine
            strategy, creativity, and digital execution to help you show up,
            stand out, and stay relevant.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-[#f7f7f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/30 hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#e50914]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="font-oswald text-sm font-bold tracking-[0.15em] text-black/25">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#e50914] shadow-sm transition-all duration-300 group-hover:bg-[#e50914] group-hover:text-white">
                      <Icon size={19} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-12 font-montserrat text-xl font-extrabold tracking-[-0.02em] sm:text-[22px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] font-poppins text-sm leading-6 text-black/50">
                    {service.description}
                  </p>

                  {/* CTA */}
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

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e50914] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-[24px] border border-black/10 bg-[#080808] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="font-montserrat text-lg font-bold">
              Not sure what your brand needs?
            </p>

            <p className="mt-1 font-poppins text-sm text-white/45">
              Tell us where you are and where you want to go.
            </p>
          </div>

          <a
            href={getWhatsAppLink("a Digital Marketing consultation")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffd400] px-5 py-3 font-poppins text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,212,0,0.2)]"
          >
            Let's Talk
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