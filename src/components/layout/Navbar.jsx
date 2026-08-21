import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    name: "Printing Services",
    path: "/services/printing",
    number: "01",
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    number: "02",
  },
  {
    name: "Videography & Media",
    path: "/services/videography",
    number: "03",
  },
  {
    name: "Corporate Identity",
    path: "/services/corporate-identity",
    number: "04",
  },
];

export default function Navbar() {
  const location = useLocation();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const servicesPageActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4">
        <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between overflow-visible rounded-full border border-black/10 bg-white px-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobile}
            className="group relative z-10 flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="Hill City Media"
              className="h-9 w-auto object-contain"
            />

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--hill-red)] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-1 lg:flex">

            {/* HOME */}

            <NavLink
              to="/"
              end
              className="group relative rounded-full px-4 py-3 font-montserrat text-sm font-semibold"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "text-black"
                        : "text-black/70 transition-colors group-hover:text-black"
                    }
                  >
                    Home
                  </span>

                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[var(--hill-red)] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              className="group relative rounded-full px-4 py-3 font-montserrat text-sm font-semibold"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "text-black"
                        : "text-black/70 transition-colors group-hover:text-black"
                    }
                  >
                    About
                  </span>

                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[var(--hill-red)] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className="group relative flex items-center gap-1 rounded-full px-4 py-3 font-montserrat text-sm font-semibold"
              >
                {({ isActive }) => {
                  const active =
                    isActive || servicesPageActive;

                  return (
                    <>
                      <span
                        className={
                          active
                            ? "text-black"
                            : "text-black/70 transition-colors group-hover:text-black"
                        }
                      >
                        Services
                      </span>

                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                      <span
                        className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[var(--hill-red)] transition-transform duration-300 ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  );
                }}
              </NavLink>

              {/* =================================================
                  SERVICES DROPDOWN
              ================================================= */}

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute left-1/2 top-full mt-3 w-[310px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
                  >
                    <div className="px-4 pb-3 pt-4">
                      <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--hill-red)]">
                        What We Do
                      </p>

                      <p className="mt-1 font-poppins text-xs text-black/45">
                        Creative solutions for ambitious
                        brands.
                      </p>
                    </div>

                    {services.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={() =>
                          setServicesOpen(false)
                        }
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-black/[0.03]"
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-oswald text-xs font-bold transition-colors ${
                                isActive
                                  ? "bg-[var(--hill-red)] text-white"
                                  : "bg-[var(--hill-yellow)] text-black"
                              }`}
                            >
                              {service.number}
                            </span>

                            <span
                              className={`font-montserrat text-xs font-semibold transition-colors ${
                                isActive
                                  ? "text-[var(--hill-red)]"
                                  : "text-black group-hover:text-[var(--hill-red)]"
                              }`}
                            >
                              {service.name}
                            </span>

                            <ArrowUpRight
                              size={15}
                              className={`ml-auto transition-all duration-300 ${
                                isActive
                                  ? "text-[var(--hill-red)]"
                                  : "text-black/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--hill-red)]"
                              }`}
                            />
                          </>
                        )}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PORTFOLIO */}

            <NavLink
              to="/portfolio"
              className="group relative rounded-full px-4 py-3 font-montserrat text-sm font-semibold"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "text-black"
                        : "text-black/70 transition-colors group-hover:text-black"
                    }
                  >
                    Portfolio
                  </span>

                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[var(--hill-red)] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              className="group relative rounded-full px-4 py-3 font-montserrat text-sm font-semibold"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "text-black"
                        : "text-black/70 transition-colors group-hover:text-black"
                    }
                  >
                    Contact
                  </span>

                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[var(--hill-red)] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </div>

          {/* =================================================
              START A PROJECT
              RED + YELLOW ALWAYS MOVING
          ================================================= */}

          <Link
            to="/contact"
            className="group relative hidden overflow-hidden rounded-full bg-[#080808] px-6 py-3.5 font-montserrat text-xs font-bold text-white lg:flex"
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

            <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_25px_rgba(229,9,20,0.45)] transition-opacity duration-300 group-hover:opacity-100" />

            {/* Button content */}

            <span className="relative z-10 flex items-center gap-2">
              <span className="transition-colors duration-300 group-hover:text-black">
                Start a Project
              </span>

              <ArrowUpRight
                size={15}
                className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
              />
            </span>
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="group relative z-[110] flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black text-white lg:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--hill-red)] transition-transform duration-300 group-hover:scale-y-100" />

            {mobileOpen ? (
              <X
                className="relative z-10"
                size={21}
              />
            ) : (
              <Menu
                className="relative z-10"
                size={21}
              />
            )}
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#080808] lg:hidden"
          >
            {/* Red glow */}

            <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[var(--hill-red)] opacity-20 blur-[100px]" />

            <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-32">

              {/* MOBILE NAVIGATION */}

              <div className="flex flex-col">

                {/* HOME */}

                <NavLink
                  to="/"
                  end
                  onClick={closeMobile}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`font-oswald text-4xl font-semibold uppercase ${
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white"
                        }`}
                      >
                        Home
                      </span>

                      <ArrowUpRight
                        size={24}
                        className={
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white/30"
                        }
                      />
                    </>
                  )}
                </NavLink>

                {/* ABOUT */}

                <NavLink
                  to="/about"
                  onClick={closeMobile}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`font-oswald text-4xl font-semibold uppercase ${
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white"
                        }`}
                      >
                        About
                      </span>

                      <ArrowUpRight
                        size={24}
                        className={
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white/30"
                        }
                      />
                    </>
                  )}
                </NavLink>

                {/* SERVICES */}

                <div className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileServicesOpen(
                        (prev) => !prev
                      )
                    }
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span
                      className={`font-oswald text-4xl font-semibold uppercase ${
                        servicesPageActive
                          ? "text-[var(--hill-red)]"
                          : "text-white"
                      }`}
                    >
                      Services
                    </span>

                    <ChevronDown
                      size={28}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen
                          ? "rotate-180 text-[var(--hill-yellow)]"
                          : servicesPageActive
                          ? "text-[var(--hill-red)]"
                          : "text-white/50"
                      }`}
                    />
                  </button>

                  {/* MOBILE SERVICES */}

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          {services.map((service) => (
                            <NavLink
                              key={service.path}
                              to={service.path}
                              onClick={closeMobile}
                              className="group flex items-center gap-4 py-3"
                            >
                              {({ isActive }) => (
                                <>
                                  <span
                                    className={`font-oswald text-sm ${
                                      isActive
                                        ? "text-[var(--hill-yellow)]"
                                        : "text-[var(--hill-red)]"
                                    }`}
                                  >
                                    {service.number}
                                  </span>

                                  <span
                                    className={`font-montserrat text-sm font-semibold ${
                                      isActive
                                        ? "text-white"
                                        : "text-white/70"
                                    }`}
                                  >
                                    {service.name}
                                  </span>
                                </>
                              )}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* PORTFOLIO */}

                <NavLink
                  to="/portfolio"
                  onClick={closeMobile}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`font-oswald text-4xl font-semibold uppercase ${
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white"
                        }`}
                      >
                        Portfolio
                      </span>

                      <ArrowUpRight
                        size={24}
                        className={
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white/30"
                        }
                      />
                    </>
                  )}
                </NavLink>

                {/* CONTACT */}

                <NavLink
                  to="/contact"
                  onClick={closeMobile}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`font-oswald text-4xl font-semibold uppercase ${
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white"
                        }`}
                      >
                        Contact
                      </span>

                      <ArrowUpRight
                        size={24}
                        className={
                          isActive
                            ? "text-[var(--hill-red)]"
                            : "text-white/30"
                        }
                      />
                    </>
                  )}
                </NavLink>
              </div>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <motion.a
                href="https://wa.me/2348031388328"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="group relative mt-8 flex items-center justify-between overflow-hidden rounded-full bg-[var(--hill-red)] px-6 py-4 font-montserrat text-sm font-bold text-white"
              >
                {/* Moving brand color */}

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

                {/* Content */}

                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Start a Conversation
                </span>

                <ArrowUpRight
                  size={19}
                  className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                />
              </motion.a>

              {/* MOBILE FOOTER */}

              <p className="mt-auto pt-10 font-poppins text-xs text-white/30">
                Creative. Print. Digital. Media.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}