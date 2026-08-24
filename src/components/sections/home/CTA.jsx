import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function CTA() {
  const whatsappNumber = "2348031388328";

  const whatsappMessage = encodeURIComponent(
    "Hello Hill City Media, I would like to start a project with you."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-white px-6 py-24 text-black sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Red glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600 blur-[130px]"
        />

        {/* Yellow glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-400 blur-[140px]"
        />

        {/* Large outlined circle */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="absolute right-[-180px] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-black/10 lg:block"
        />

        {/* Inner outlined circle */}
        <motion.div
          initial={{ rotate: 20, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.15 }}
          className="absolute right-[-120px] top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-red-600/20 lg:block"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-[2px] w-12 bg-red-600" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 sm:text-sm">
            Let&apos;s create
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">

          {/* Heading */}
          <div className="max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            >
              Ready to take
              <br />

              <span className="relative inline-block">
                your brand

                <span className="absolute -bottom-2 left-0 h-2 w-full bg-red-600 sm:-bottom-3 sm:h-3" />
              </span>

              <br />

              <span>
                higher<span className="text-yellow-400">?</span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 sm:text-xl"
            >
              Let&apos;s create something people remember. From bold
              identities to powerful campaigns and unforgettable print,
              Hill City Media brings your ideas to life.
            </motion.p>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex h-52 w-52 shrink-0 items-center justify-center overflow-hidden rounded-full bg-red-600 sm:h-60 sm:w-60"
          >
            {/* Moving yellow layer */}
            <motion.span
              className="absolute inset-0 rounded-full bg-yellow-400"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Button content */}
            <span className="relative z-10 flex flex-col items-center gap-3 text-center text-white">
              <MessageCircle
                size={28}
                strokeWidth={2}
                className="transition-colors duration-300 group-hover:text-black"
              />

              <span className="text-sm font-black uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-black">
                Start a
                <br />
                Project
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={2.5}
                className="transition-colors duration-300 group-hover:text-black"
              />
            </span>
          </motion.a>
        </div>

        {/* Bottom brand statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-20"
        >
          {/* Animated brand line */}
          <div className="relative h-[3px] w-full overflow-hidden bg-black/10">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400"
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/50">
              Hill City Media
            </p>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              Elevating brands. Creating impact.
            </p>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          onClick={scrollToTop}
          className="group mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/40 transition-colors duration-300 hover:text-red-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            ↑
          </span>

          Back to top
        </motion.button>
      </div>
    </section>
  );
}