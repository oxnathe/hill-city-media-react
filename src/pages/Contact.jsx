import SEO from "../components/seo/SEO";

import { motion } from "motion/react";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello Hill City Media, I would like to start a project with you."
  );

  const whatsappLink = `https://wa.me/2348031388328?text=${whatsappMessage}`;

  return (
    <main className="bg-white">
      <SEO
        title="Contact Hill City Media — Start Your Project"
        description="Ready to elevate your brand? Contact Hill City Media to discuss printing, digital marketing, videography, corporate identity and creative media projects."
        path="/contact"
      />

      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
        {/* Decorative glows */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e50914]/10 blur-[100px]" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#ffd400]/10 blur-[100px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(8,8,8,1)_1px,transparent_1px),linear-gradient(90deg,rgba(8,8,8,1)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#e50914]" />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#e50914]">
                Contact
              </span>

              <span className="h-px w-10 bg-[#e50914]" />
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl font-['Montserrat'] text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#080808] sm:text-6xl lg:text-8xl">
              Let&apos;s create

              <span className="block text-[#e50914]">
                something great.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl font-['Poppins'] text-sm leading-7 text-black/50 sm:text-base">
              Have a project in mind? Tell us what you need and let&apos;s
              bring your idea to life.
            </p>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#080808] px-8 py-4 font-['Poppins'] text-sm font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 sm:text-base"
            >
              {/* Moving red/yellow background */}
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(110deg,#e50914_0%,#e50914_35%,#ffd400_50%,#e50914_65%,#e50914_100%)] bg-[length:250%_100%]"
                animate={{
                  backgroundPosition: [
                    "100% 0%",
                    "0% 0%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Dark idle overlay */}
              <span className="absolute inset-[2px] rounded-full bg-[#080808]/85 transition-all duration-500 group-hover:bg-transparent" />

              {/* Hover glow */}
              <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_30px_rgba(229,9,20,0.45)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* WhatsApp Logo */}
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <svg
                  viewBox="0 0 32 32"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.11 17.47c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.94 4.65 4.12.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />

                  <path d="M16.01 3.2a12.75 12.75 0 0 0-10.9 19.37L3.2 28.8l6.39-1.88a12.75 12.75 0 1 0 6.42-23.72Zm0 23.22a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-3.79 1.11 1.13-3.69-.25-.39a10.45 10.45 0 1 1 8.62 4.66Z" />
                </svg>
              </span>

              {/* Visible Text */}
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-black">
                Start a Conversation
              </span>

              {/* Arrow */}
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className="relative z-10 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
              />
            </motion.a>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mx-auto mt-24 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-black/10 pt-8"
          >
            {[
              "Printing",
              "Branding",
              "Digital Marketing",
              "Videography",
            ].map((service, index) => (
              <div
                key={service}
                className="flex items-center gap-6"
              >
                <span className="font-['Poppins'] text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                  {service}
                </span>

                {index < 3 && (
                  <span className="hidden h-1 w-1 rounded-full bg-[#ffd400] sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}