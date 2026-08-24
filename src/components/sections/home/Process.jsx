import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    label: "WE LISTEN",
    description:
      "We start by understanding your brand, your audience, your goals, and what you want to achieve.",
  },
  {
    number: "02",
    title: "BUILD",
    label: "WE CREATE",
    description:
      "Ideas become visuals, campaigns, content, identities, and experiences built around your brand.",
  },
  {
    number: "03",
    title: "REFINE",
    label: "WE PERFECT",
    description:
      "We review, sharpen, test, and fine-tune every detail until the work feels right.",
  },
  {
    number: "04",
    title: "LAUNCH",
    label: "WE DELIVER",
    description:
      "Your finished work goes into the world ready to communicate, connect, and make an impact.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-24 text-[#080808] sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* HEADER */}
        <div className="mb-20 max-w-[1100px] lg:mb-24">
          <div className="mb-7 flex items-center gap-3.5">
            <span
              className={`h-0.5 w-12 origin-left bg-[#FFD400] transition-transform duration-700 ${
                visible ? "scale-x-100" : "scale-x-0"
              }`}
            />

            <span className="font-montserrat text-xs font-bold tracking-[0.22em] text-[#E50914]">
              OUR PROCESS
            </span>
          </div>

          <h2
            className={`font-oswald text-[clamp(4rem,10vw,9.375rem)] font-semibold uppercase leading-[0.84] tracking-[-0.035em] transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            WE DON&apos;T JUST
            <br />
            <span className="text-[#E50914]">DELIVER.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-6 pl-0 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pl-[12vw]">
            <p className="font-oswald text-[clamp(2.5rem,5vw,4.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.025em]">
              WE BUILD
              <br />
              <span className="text-[#E50914]">WITH YOU.</span>
            </p>

            <p className="max-w-[310px] font-poppins text-sm leading-7 text-black/55">
              From the first conversation to the final delivery, every step is
              intentional.
            </p>
          </div>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[35px] hidden h-0.5 bg-black/10 lg:block">
            <div
              className="h-full bg-[#FFD400] transition-all duration-700 ease-out"
              style={{
                width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={step.number}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`group relative border-b border-black/10 pb-8 text-left outline-none transition-all duration-300 lg:border-b-0 ${
                    isActive ? "lg:-translate-y-1" : ""
                  }`}
                >
                  {/* Number + dot */}
                  <div className="relative flex h-[55px] items-center justify-between lg:h-[72px]">
                    <span
                      className={`font-oswald text-lg tracking-[0.08em] transition-colors duration-300 ${
                        isActive ? "text-[#E50914]" : "text-black/30"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span
                      className={`grid h-3.5 w-3.5 place-items-center rounded-full border-2 bg-white transition-all duration-300 ${
                        isActive
                          ? "scale-125 border-[#FFD400]"
                          : "border-black/30"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-[#FFD400]" : "bg-transparent"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`mt-2 border-t pt-6 transition-colors duration-300 lg:mt-7 ${
                      isActive ? "border-[#E50914]" : "border-black/10"
                    }`}
                  >
                    <span className="mb-2 block font-montserrat text-[10px] font-bold tracking-[0.2em] text-[#E50914]">
                      {step.label}
                    </span>

                    <h3
                      className={`mb-4 font-oswald text-[clamp(2.2rem,4vw,3.375rem)] font-medium leading-[0.95] tracking-[-0.02em] transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-[#E50914]"
                          : "text-[#080808]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`max-w-[250px] font-poppins text-[13px] leading-7 transition-colors duration-300 ${
                        isActive ? "text-black/75" : "text-black/50"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`absolute bottom-7 right-0 grid h-9 w-9 place-items-center rounded-full text-lg transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 bg-[#E50914] text-white opacity-100"
                        : "translate-x-2 border border-black/15 text-black/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-black/10 pt-7 lg:mt-28 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6">
          <span className="font-oswald text-xs tracking-[0.16em] text-black/35">
            04 / 04
          </span>

          <span className="h-px bg-[#FFD400]" />

          <p className="hidden font-montserrat text-xs font-bold tracking-[0.14em] lg:block">
            GOOD WORK IS A{" "}
            <span className="text-[#E50914]">JOURNEY.</span>
          </p>

          <span className="font-oswald text-xs tracking-[0.16em] text-black/35">
            HCM
          </span>
        </div>
      </div>
    </section>
  );
}