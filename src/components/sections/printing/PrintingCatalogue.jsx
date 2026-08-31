import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Image as ImageIcon,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const categories = [
  "All",
  "Business Stationery",
  "Marketing Materials",
  "Large Format",
  "Apparel & Merchandise",
];

const products = [
  {
    id: 1,
    title: "Business Cards",
    category: "Business Stationery",
    description: "Professional business cards designed to make every introduction count.",
    image: "/images/catalogue/business-cards.jpeg",
  },
  {
    id: 2,
    title: "Letterheads",
    category: "Business Stationery",
    description: "Clean and professional letterheads that keep your business communication on brand.",
    image: "/images/catalogue/letterheads.png",
  },
  {
    id: 3,
    title: "Jotters",
    category: "Business Stationery",
    description: "Branded jotters that give your business correspondence a polished finish.",
    image: "/images/catalogue/jotters.png",
  },
  {
    id: 4,
    title: "Brochures",
    category: "Business Stationery",
    description: "Well-designed brochures that present your products, services and story clearly.",
    image: "/images/catalogue/brochures.png",
  },
  {
    id: 5,
    title: "Flyers & Handbills",
    category: "Marketing Materials",
    description: "High-impact flyers created to promote events, products, offers and campaigns.",
    image: "/images/catalogue/handbill.jpg",
  },
  {
    id: 6,
    title: "Posters",
    category: "Marketing Materials",
    description: "Bold promotional posters designed to capture attention from a distance.",
    image: "/images/catalogue/posters.png",
  },
  {
    id: 7,
    title: "Stickers & Labels",
    category: "Marketing Materials",
    description: "Custom stickers and labels for packaging, branding, promotions and products.",
    image: "/images/catalogue/stickers.jpg",
  },
  {
    id: 8,
    title: "Calendars",
    category: "Marketing Materials",
    description: "Branded calendars that keep your business visible throughout the year.",
    image: "/images/catalogue/calendars.jpg",
  },
  {
    id: 9,
    title: "Roll-Up Banners",
    category: "Large Format",
    description: "Portable display banners built for exhibitions, events, offices and promotions.",
    image: "/images/catalogue/roll-up-banners.jpg",
  },
  {
    id: 10,
    title: "Backdrop Banners",
    category: "Large Format",
    description: "Large-format branded backdrops for events, photo walls, launches and activations.",
    image: "/images/catalogue/backdrop-banners.jpg",
  },
  {
    id: 11,
    title: "Vinyl Banners",
    category: "Large Format",
    description: "Durable large-format banners suitable for outdoor and indoor promotions.",
    image: "/images/catalogue/vinyl-banners.png",
  },
  {
    id: 12,
    title: "Signage",
    category: "Large Format",
    description: "Professional signage solutions designed to make your physical space stand out.",
    image: "/images/catalogue/signage.jpg",
  },
  {
    id: 13,
    title: "Branded T-Shirts",
    category: "Apparel & Merchandise",
    description: "Custom branded T-shirts for teams, events, campaigns and promotional activities.",
    image: "/images/catalogue/branded-tshirts.jpg",
  },
  {
    id: 14,
    title: "Branded Polos",
    category: "Apparel & Merchandise",
    description: "Professional branded polos that turn your team into walking brand ambassadors.",
    image: "/images/catalogue/branded-polos.jpg",
  },
  {
    id: 15,
    title: "Branded Mugs",
    category: "Apparel & Merchandise",
    description: "Custom mugs created for corporate gifts, events and promotional campaigns.",
    image: "/images/catalogue/branded-mugs.jpeg",
  },
  {
    id: 16,
    title: "Souvenirs",
    category: "Apparel & Merchandise",
    description: "Thoughtful branded souvenirs designed to keep your business memorable.",
    image: "/images/catalogue/souvenirs.jpg",
  },
];

function ProductImage({ product }) {
  const [hasError, setHasError] = useState(false);

  if (product.image && !hasError) {
    return (
      <img
        src={product.image}
        alt={product.title}
        onError={() => setHasError(true)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#111111]">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e50914]/15 blur-[70px]" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#ffd400]/10 blur-[70px]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:45px_45px]" />
      <div className="relative z-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <ImageIcon
            size={22}
            strokeWidth={1.5}
            className="text-white/30"
          />
        </div>
        <p className="mt-4 font-['Poppins'] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Image Coming Soon
        </p>
        <p className="mt-2 font-['Poppins'] text-[10px] text-white/15">
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default function PrintingCatalogue() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categoryScrollRef = useRef(null);

  const updateScrollButtons = () => {
    const container = categoryScrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scrollCategories = (direction) => {
    const container = categoryScrollRef.current;
    if (!container) return;
    const amount = 190;
    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = categoryScrollRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const getWhatsAppLink = (productTitle) => {
    const message = encodeURIComponent(
      `Hello Hill City Media, I would like to get a quote for ${productTitle}.`
    );
    return `https://wa.me/2348031388328?text=${message}`;
  };

  const generalWhatsAppMessage = encodeURIComponent(
    "Hello Hill City Media, I have a custom printing request and would like to speak with someone."
  );
  const generalWhatsAppLink = `https://wa.me/2348031388328?text=${generalWhatsAppMessage}`;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section
      id="printing-catalogue"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e50914]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#e50914]">
              What We Print
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-3xl font-['Montserrat'] text-4xl font-black leading-[1] tracking-[-0.035em] text-[#080808] sm:text-5xl lg:text-6xl">
                Print it.
                <span className="text-[#ffd400]"> Make it count.</span>
              </h2>
              <p className="mt-6 max-w-2xl font-['Poppins'] text-sm leading-7 text-black/50 sm:text-base">
                From everyday business stationery to large-format displays and
                branded merchandise, we create print materials that make your
                brand impossible to overlook.
              </p>
            </div>

            <div className="hidden shrink-0 lg:block">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03]">
                <Sparkles
                  size={24}
                  className="text-[#ffd400]"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="relative mt-12">
          <div
            ref={categoryScrollRef}
            className="overflow-x-auto pb-2 pr-12 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex min-w-max items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] p-1.5">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full px-5 py-2.5 font-['Poppins'] text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#e50914] text-white shadow-lg shadow-red-950/30"
                        : "text-black/45 hover:bg-black/[0.06] hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MOBILE LEFT ARROW */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: -5 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -5 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => scrollCategories("left")}
                aria-label="Show previous printing categories"
                className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg lg:hidden"
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={2.5}
                  className="text-[#e50914]"
                />
              </motion.button>
            )}
          </AnimatePresence>

          {/* MOBILE RIGHT ARROW */}
          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: 5 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 5 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => scrollCategories("right")}
                aria-label="Show more printing categories"
                className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg lg:hidden"
              >
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={2.5}
                    className="text-[#e50914]"
                  />
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>

          <div className="mt-2 flex items-center justify-end gap-1 lg:hidden">
            <span className="font-['Poppins'] text-[9px] font-medium uppercase tracking-[0.12em] text-black/30">
              Swipe for more
            </span>
            <ArrowRight size={11} className="text-[#e50914]" />
          </div>
        </div>

        {/* PRODUCT GRID */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
                className="group"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#111111] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl">
                  {/* Product image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ProductImage product={product} />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-['Poppins'] text-[8px] font-semibold uppercase tracking-[0.16em] text-[#ffd400] backdrop-blur-md">
                        {product.category}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:border-[#e50914] group-hover:bg-[#e50914] group-hover:opacity-100">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>

                  {/* Product content */}
                  <div className="p-5">
                    <h3 className="font-[#Montserrat] text-lg font-bold tracking-tight text-white">
                      {product.title}
                    </h3>

                    <p className="mt-2 min-h-[72px] font-['Poppins'] text-xs leading-6 text-white/40">
                      {product.description}
                    </p>

                    <a
                      href={getWhatsAppLink(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/quote mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e50914] px-5 py-3 font-['Poppins'] text-xs font-bold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1722]"
                    >
                      <MessageCircle size={15} strokeWidth={2} />
                      <span>Get a Quote</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/quote:-translate-y-0.5 group-hover/quote:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808]"
        >
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#e50914]/15 blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#ffd400]/10 blur-[90px]" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#ffd400]" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffd400]">
                    Need Something Else?
                  </span>
                </div>

                <h3 className="font-['Montserrat'] text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Tell us what you need.
                </h3>

                <p className="mt-3 max-w-xl font-['Poppins'] text-sm leading-6 text-white/40">
                  Have a custom print request or a project that isn't listed?
                  Send us a message and we'll help you figure it out.
                </p>
              </div>

              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#e50914] px-7 py-4 font-['Poppins'] text-sm font-bold text-white shadow-xl shadow-red-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1722] sm:w-auto"
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>Talk to Us</span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-[#e50914] via-[#ffd400] to-[#e50914]" />
        </motion.div>
      </div>
    </section>
  );
}