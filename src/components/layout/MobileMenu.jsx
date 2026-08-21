import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "../../data/site";

export default function MobileMenu({
  open,
  onClose,
}) {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}

          <motion.div
            className="fixed inset-0 z-[60] bg-[var(--hill-black)]/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MOBILE PANEL */}

          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-dvh w-[92%] max-w-[440px] flex-col overflow-y-auto bg-[var(--hill-black)] px-6 pb-7 pt-5 text-white shadow-[-20px_0_80px_rgba(0,0,0,0.35)] sm:px-8"
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 260,
            }}
          >
            {/* ==================================================
                TOP
            ================================================== */}

            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Hill City Media"
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-[var(--hill-red)] transition-transform duration-300 group-hover:scale-100" />

                <X
                  size={20}
                  className="relative z-10"
                />
              </button>
            </div>

            {/* ==================================================
                SMALL LABEL
            ================================================== */}

            <div className="mt-14">
              <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--hill-red)]">
                Navigation
              </p>
            </div>

            {/* ==================================================
                NAVIGATION
            ================================================== */}

            <nav className="mt-5">
              {siteConfig.navigation.map(
                (item, index) => {
                  {/* SERVICES */}

                  if (item.label === "Services") {
                    return (
                      <div key={item.path}>
                        <div className="flex items-center border-b border-white/10">
                          <Link
                            to="/services"
                            onClick={onClose}
                            className="group flex-1 py-5"
                          >
                            <span className="font-oswald text-[42px] font-medium uppercase leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--hill-yellow)] sm:text-5xl">
                              Services
                            </span>
                          </Link>

                          <button
                            type="button"
                            aria-label="Toggle services"
                            onClick={() =>
                              setServicesOpen(
                                (value) => !value
                              )
                            }
                            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-[var(--hill-red)] hover:bg-[var(--hill-red)]"
                          >
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${
                                servicesOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* SERVICE CHILDREN */}

                        <AnimatePresence initial={false}>
                          {servicesOpen && (
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
                              transition={{
                                duration: 0.35,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="border-b border-white/10 py-3">
                                {siteConfig.services.map(
                                  (
                                    service,
                                    serviceIndex
                                  ) => (
                                    <Link
                                      key={
                                        service.path
                                      }
                                      to={
                                        service.path
                                      }
                                      onClick={
                                        onClose
                                      }
                                      className="group flex items-center gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-white/5"
                                    >
                                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--hill-red)] font-oswald text-xs font-bold transition-colors group-hover:bg-[var(--hill-yellow)] group-hover:text-[var(--hill-black)]">
                                        0
                                        {serviceIndex +
                                          1}
                                      </span>

                                      <span className="font-montserrat text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                                        {
                                          service.label
                                        }
                                      </span>

                                      <ArrowUpRight
                                        size={15}
                                        className="ml-auto text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--hill-yellow)]"
                                      />
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  {/* NORMAL ITEMS */}

                  return (
                    <motion.div
                      key={item.path}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.35,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="group flex items-center justify-between border-b border-white/10 py-5"
                      >
                        <span className="font-oswald text-[42px] font-medium uppercase leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--hill-yellow)] sm:text-5xl">
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={22}
                          className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--hill-red)]"
                        />
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </nav>

            {/* ==================================================
                BOTTOM CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-auto pt-10"
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-[var(--hill-red)] px-5 py-5"
              >
                <span className="relative z-10 font-montserrat font-bold">
                  Start a Project
                </span>

                <ArrowUpRight
                  size={21}
                  className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

                <span className="absolute inset-0 translate-y-full bg-[var(--hill-yellow)] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </motion.div>

            {/* FOOTER TEXT */}

            <div className="mt-6 flex items-center justify-between font-montserrat text-[10px] uppercase tracking-[0.15em] text-white/30">
              <span>Hill City Media</span>
              <span>© 2026</span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}