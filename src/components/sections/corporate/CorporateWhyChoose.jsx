import { motion } from "motion/react";
import {
  ArrowUpRight,
  Layers3,
  Palette,
  Sparkles,
  Target,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const whatsappMessage = encodeURIComponent(
  "Hello Hill City Media, I would like to build a strong corporate identity for my brand."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const reasons = [
  {
    number: "01",
    title: "Strategic",
    description:
      "We create identities with purpose, making sure every visual decision supports how your brand wants to be seen.",
    icon: Target,
  },
  {
    number: "02",
    title: "Distinctive",
    description:
      "Your business should not look like everyone else. We build visual systems that give your brand its own personality.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Consistent",
    description:
      "From business cards to social media, your identity stays recognizable and professional across every touchpoint.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Built to Grow",
    description:
      "We create flexible brand systems that can evolve with your business instead of becoming outdated as you grow.",
    icon: Palette,
  },
];

export default function CorporateWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-[#e50914]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-[-80px] h-[320px] w-[320px] rounded-full bg-[#ffd400]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ffd400]" />

            <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#ffd400]">
              Why Hill City
            </span>
          </div>

          <h2 className="font-montserrat text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Your brand deserves more than
            <span className="text-[#e50914]"> a good logo.</span>
          </h2>

          <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-white/50 sm:text-base">
            We look at the bigger picture. Your identity should communicate
            who you are, connect with the right audience, and give your
            business the confidence to show up everywhere.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden bg-[#0d0d0d] p-7 transition-colors duration-300 hover:bg-[#111111] sm:p-9 lg:p-10"
              >
                {/* Number */}
                <span className="absolute right-7 top-7 font-oswald text-sm font-bold tracking-[0.15em] text-white/15 transition-colors duration-300 group-hover:text-[#e50914]/40">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#ffd400] transition-all duration-300 group-hover:border-[#e50914]/30 group-hover:bg-[#e50914]/10">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3 className="mt-7 font-montserrat text-2xl font-extrabold tracking-[-0.025em]">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-md font-poppins text-sm leading-7 text-white/40">
                  {reason.description}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-px w-10 bg-[#e50914] transition-all duration-500 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-7 overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e50914]">
                <Palette size={17} />
              </span>

              <span className="font-poppins text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Make Your Mark
              </span>
            </div>

            <h3 className="mt-5 font-montserrat text-2xl font-black tracking-[-0.025em] sm:text-3xl">
              Let's create a brand people can{" "}
              <span className="text-[#ffd400]">recognize instantly.</span>
            </h3>

            <p className="mt-3 font-poppins text-sm leading-6 text-white/40">
              Tell us where your brand is today and where you want it to go.
              We'll help you build the identity to get there.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#e50914] px-6 py-3.5 font-poppins text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#ff1722] hover:shadow-[0_0_30px_rgba(229,9,20,0.25)]"
          >
            Start a Conversation

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}