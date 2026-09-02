import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/site";

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[var(--hill-black)] px-5 pb-8 pt-20 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div>
            <button
              type="button"
              onClick={handleLogoClick}
              className="group relative inline-flex items-center"
              aria-label="Back to top"
            >
              <img
                src="/images/logo.png"
                alt="Hill City Media"
                className="h-12 w-auto object-contain md:h-14"
              />

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[var(--hill-red)] transition-all duration-300 group-hover:w-full" />
            </button>

            <p className="mt-6 max-w-md font-poppins text-white/60">
              We create bold visual experiences that help ambitious
              brands stand out, connect and grow.
            </p>

            <p className="mt-8 font-oswald text-3xl font-bold uppercase leading-none md:text-4xl">
              Elevating{" "}
              <span className="text-[var(--hill-yellow)]">
                brands.
              </span>
            </p>

            <div className="mt-5 h-[3px] w-16 bg-[var(--hill-yellow)]" />
          </div>

          {/* =====================================================
              NAVIGATE
          ===================================================== */}

          <div>
            <h3 className="mb-5 font-montserrat text-sm font-bold uppercase tracking-widest text-[var(--hill-yellow)]">
              Navigate
            </h3>

            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="group inline-flex w-fit items-center gap-1 font-montserrat text-sm text-white/70 transition-colors duration-300 hover:text-[var(--hill-red)]"
                >
                  {item.label}

                  <ArrowUpRight
                    size={14}
                    className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              LET'S TALK
          ===================================================== */}

          <div>
            <h3 className="mb-5 font-montserrat text-sm font-bold uppercase tracking-widest text-[var(--hill-yellow)]">
              Let&apos;s Talk
            </h3>

            {/* =====================================================
                WHATSAPP
            ===================================================== */}

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-poppins text-lg transition-colors duration-300 hover:text-[var(--hill-yellow)]"
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* =====================================================
                INSTAGRAM
            ===================================================== */}

            <a
              href="https://www.instagram.com/hillcitymediaprint/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hill City Media on Instagram"
              className="group mt-5 inline-flex items-center gap-3 font-poppins text-sm text-white/70 transition-colors duration-300 hover:text-[var(--hill-yellow)]"
            >
              {/* Instagram Icon */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--hill-red)] text-white transition-all duration-300 group-hover:bg-[var(--hill-yellow)] group-hover:text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>

              <span>Hillcitymediaprint</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 max-w-sm font-poppins text-sm leading-6 text-white/40">
              Let&apos;s turn your ideas into something people
              remember.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-montserrat text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All
            rights reserved.
          </p>

          <p className="font-poppins text-xs uppercase tracking-[0.18em] text-white/30">
            Creative. Print. Digital. Media.
          </p>
        </div>

        {/* =====================================================
            BRAND COLOR LINE
        ===================================================== */}

        <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-[var(--hill-red)] via-[var(--hill-yellow)] to-[var(--hill-red)]" />
      </div>
    </footer>
  );
}