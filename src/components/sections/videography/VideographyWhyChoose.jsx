import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clapperboard,
  Focus,
  Sparkles,
  Target,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const whatsappMessage = encodeURIComponent(
  "Hello Hill City Media, I would like to discuss a Videography & Media project."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const reasons = [
  {
    number: "01",
    title: "Creative Direction",
    description:
      "Every production starts with a clear creative idea. We shape the visual direction around your brand, audience, and objective.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Professional Quality",
    description:
      "From composition and lighting to filming and editing, we pay attention to the details that make your content feel polished.",
    icon: Focus,
  },
  {
    number: "03",
    title: "Storytelling",
    description:
      "Good visuals get attention. Great stories hold it. We build content with a message people can understand and remember.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Brand Impact",
    description:
      "Your content should do more than look good. We create visuals that strengthen your brand and move people toward action.",
    icon: Target,
  },
];

export default function VideographyWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-140px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#ffd400]/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ffd400]" />

              <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#ffd400]">
                Why Hill City
              </span>
            </div>

            <h2 className="font-montserrat text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem]">
              We don't just
              <span className="block text-[#e50914]">capture.</span>
              <span className="block">We create.</span>
            </h2>

            <p className="mt-6 max-w-lg font-poppins text-sm leading-7 text-white/50 sm:text-base">
              Every frame is an opportunity to communicate something. We bring
              creative thinking, production expertise, and a strong
              understanding of brands to every project.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-poppins text-sm font-semibold transition-all duration-300 hover:border-[#e50914]/50 hover:bg-[#e50914] hover:text-white"
            >
              Plan Your Production
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-7"
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <span className="font-oswald text-sm font-bold tracking-[0.15em] text-white/20">
                      {reason.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e50914]/10 text-[#e50914] transition-all duration-300 group-hover:bg-[#e50914] group-hover:text-white">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="mt-12 font-montserrat text-xl font-extrabold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 font-poppins text-sm leading-6 text-white/45">
                    {reason.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ffd400] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-7 sm:p-10 lg:mt-20"
        >
          <div className="absolute right-[-50px] top-[-80px] h-48 w-48 rounded-full bg-[#e50914]/15 blur-[70px]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#ffd400]">
                Let's create something
              </span>

              <h3 className="mt-3 font-montserrat text-2xl font-black tracking-[-0.025em] sm:text-3xl lg:text-4xl">
                Your brand deserves a story worth
                <span className="text-[#e50914]"> watching.</span>
              </h3>

              <p className="mt-4 max-w-xl font-poppins text-sm leading-6 text-white/45">
                Tell us what you have in mind and we'll help turn the idea
                into powerful visual content.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#e50914] px-6 py-4 font-poppins text-sm font-bold transition-all duration-300 hover:bg-[#ffd400] hover:text-black hover:shadow-[0_0_30px_rgba(229,9,20,0.25)]"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}