import { motion } from "motion/react";
import {
  ArrowUpRight,
  CreditCard,
  FileText,
  Flag,
  Package,
  Sticker,
  Image as ImageIcon,
} from "lucide-react";

const whatsappNumber = "2348031388328";

const printingServices = [
  {
    number: "01",
    title: "Business Cards",
    description:
      "Professional cards that make every introduction count.",
    message:
      "Hello Hill City Media, I'm interested in Business Cards printing. I'd like to get a quote.",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Flyers & Brochures",
    description:
      "Promotional materials designed to communicate clearly.",
    message:
      "Hello Hill City Media, I'm interested in Flyers & Brochures printing. I'd like to get a quote.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Banners & Posters",
    description:
      "Large-format prints built to get attention.",
    message:
      "Hello Hill City Media, I'm interested in Banners & Posters printing. I'd like to get a quote.",
    icon: Flag,
  },
  {
    number: "04",
    title: "Packaging",
    description:
      "Branded packaging that adds value to your product.",
    message:
      "Hello Hill City Media, I'm interested in Packaging printing. I'd like to get a quote.",
    icon: Package,
  },
  {
    number: "05",
    title: "Stickers & Labels",
    description:
      "Custom labels and stickers for products, packaging and promotions.",
    message:
      "Hello Hill City Media, I'm interested in Stickers & Labels printing. I'd like to get a quote.",
    icon: Sticker,
  },
  {
    number: "06",
    title: "Custom Print",
    description:
      "Have something specific in mind? Let's bring it to print.",
    message:
      "Hello Hill City Media, I have a custom printing project I'd like to discuss and get a quote for.",
    icon: ImageIcon,
  },
];

export default function PrintingServicesOverview() {
  const createWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[var(--hill-red)]" />

              <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                What We Print
              </span>
            </div>

            <h2 className="font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Print it.
              <span className="block text-[var(--hill-red)]">
                Make it real.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-poppins text-sm leading-7 text-black/50 md:text-right">
            From everyday business essentials to large-format
            campaigns, we turn your ideas into physical brand
            experiences.
          </p>
        </motion.div>

        {/* =====================================================
            PRINTING GRID
        ===================================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {printingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] bg-[#111]"
              >
                {/* =================================================
                    PLACEHOLDER VISUAL
                ================================================= */}

                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[var(--hill-red)]/20" />

                  <div className="absolute inset-0 opacity-[0.08]">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white" />

                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[40px] border-[var(--hill-yellow)]" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pb-32">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--hill-yellow)]/40">
                      <Icon
                        size={32}
                        strokeWidth={1.3}
                        className="text-white/40 transition-colors duration-300 group-hover:text-[var(--hill-yellow)]"
                      />
                    </div>
                  </div>
                </div>

                {/* =================================================
                    DARK OVERLAY
                ================================================= */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="absolute left-5 top-5 z-10">
                  <span className="font-oswald text-xs font-bold text-white/50">
                    {service.number}
                  </span>
                </div>

                {/* =================================================
                    TOP ARROW
                ================================================= */}

                <div className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/60 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--hill-red)] group-hover:bg-[var(--hill-red)] group-hover:text-white">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* =================================================
                    CONTENT PANEL
                ================================================= */}

                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/95 to-black/70 p-6 pt-12">
                  <h3 className="font-oswald text-3xl font-semibold uppercase leading-none text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm font-poppins text-xs leading-6 text-white/70">
                    {service.description}
                  </p>

                  {/* =================================================
                      WHATSAPP BUTTON
                  ================================================= */}

                  <a
                    href={createWhatsAppLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--hill-red)] px-5 py-2.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[var(--hill-yellow)] hover:text-black"
                  >
                    Get a Quote

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            CUSTOM PRINT CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-5 rounded-[1.5rem] border border-black/10 bg-[#080808] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--hill-red)] shadow-[0_0_12px_rgba(229,9,20,0.7)]" />

              <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                Need Something Different?
              </span>
            </div>

            <h3 className="mt-3 font-oswald text-2xl font-semibold uppercase leading-none text-white sm:text-3xl">
              We can print that too.
            </h3>

            <p className="mt-2 max-w-md font-poppins text-xs leading-6 text-white/40">
              Tell us what you have in mind and we&apos;ll help you
              find the right printing solution.
            </p>
          </div>

          <a
            href={createWhatsAppLink(
              "Hello Hill City Media, I have a printing project that isn't listed on your website. I'd like to discuss it."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--hill-yellow)] px-6 py-3.5 font-montserrat text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-[var(--hill-red)] hover:text-white"
          >
            Ask About Something Else

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}