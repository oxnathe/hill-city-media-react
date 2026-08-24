import { motion } from "motion/react";
import SceneCanvas from "../../three/SceneCanvas";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#111111]
        text-white
      "
    >
      {/* =========================================
          BACKGROUND LIGHT
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Soft white center glow */}

        <div
          className="
            absolute
            left-[45%]
            top-[45%]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.06]
            blur-[150px]
          "
        />

        {/* Red glow */}

        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[var(--hill-red)]
            opacity-[0.08]
            blur-[130px]
          "
        />

        {/* Yellow glow */}

        <div
          className="
            absolute
            bottom-[10%]
            right-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[var(--hill-yellow)]
            opacity-[0.06]
            blur-[120px]
          "
        />

        {/* Subtle white top-left glow */}

        <div
          className="
            absolute
            left-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

      </div>


      {/* =========================================
          3D SCENE
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <SceneCanvas />
      </div>


      {/* =========================================
          DARK / LIGHT GRADIENT
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-[#111111]/95
          via-[#111111]/65
          to-transparent
        "
      />


      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          pb-16
          pt-28

          sm:px-6
          sm:pt-28

          md:px-8
          md:pt-28
          md:pb-20

          lg:px-10
        "
      >

        <div className="max-w-3xl">

          {/* =====================================
              EYEBROW
          ====================================== */}

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
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-6 flex items-center gap-3"
          >

            <span className="h-[2px] w-10 bg-[var(--hill-red)]" />

            <span
              className="
                font-montserrat
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-white
              "
            >
              Hill City Media
            </span>

          </motion.div>


          {/* =====================================
              MAIN HEADING
          ====================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              font-oswald
              text-6xl
              font-bold
              uppercase
              leading-[0.86]
              tracking-tight
              text-white

              sm:text-7xl

              md:text-8xl

              lg:text-[110px]
            "
          >

            We elevate

            <br />

            <span className="relative inline-block text-[var(--hill-red)]">

              Brands.

              {/* =================================
                  ANIMATED YELLOW UNDERLINE
              ================================== */}

              <motion.span
                initial={{
                  scaleX: 0,
                  transformOrigin: "left",
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-1
                  w-full
                  origin-left
                  bg-[var(--hill-yellow)]

                  md:-bottom-3
                "
              />

            </span>

          </motion.h1>


          {/* =====================================
              DESCRIPTION
          ====================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              font-poppins
              mt-8
              max-w-xl
              text-base
              leading-7
              text-white

              md:text-lg
            "
          >
            We transform ideas into bold visual experiences through
            printing, branding, media production and digital solutions.
          </motion.p>


          {/* =====================================
              CTA BUTTONS
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              mt-9
              flex
              flex-wrap
              gap-4
            "
          >

            {/* =================================
                START A PROJECT
            ================================== */}

            <a
              href="https://wa.me/2348031388328"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-[var(--hill-red)]
                px-7
                py-4
                font-montserrat
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-white
                shadow-[0_10px_40px_rgba(229,9,20,0.2)]
              "
            >

              {/* Yellow hover layer */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-[var(--hill-yellow)]
                  transition-transform
                  duration-500
                  group-hover:translate-x-0
                "
              />

              {/* Button text */}

              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-300
                  group-hover:text-black
                "
              >
                Start a Project
              </span>

            </a>


            {/* =================================
                EXPLORE OUR SERVICES
            ================================== */}

            <a
              href="#services"
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-white
                px-7
                py-4
                font-montserrat
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-black
              "
            >

              {/* White surface */}

              <span
                className="
                  absolute
                  inset-0
                  bg-white
                "
              />

              {/* Button text */}

              <span
                className="
                  relative
                  z-10
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-[var(--hill-red)]
                "
              >
                Explore Our Services
              </span>

            </a>

          </motion.div>


          {/* =====================================
              PRINT → BRAND → DIGITAL
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              mt-14
              flex
              items-center
              gap-4
            "
          >

            {/* Number */}

            <span
              className="
                font-oswald
                text-xs
                font-semibold
                text-[var(--hill-red)]
              "
            >
              01
            </span>


            {/* Line */}

            <span className="h-px w-10 bg-white/30" />


            {/* PRINT */}

            <span
              className="
                font-montserrat
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Print
            </span>


            {/* Arrow */}

            <span className="text-[var(--hill-yellow)]">
              →
            </span>


            {/* BRAND */}

            <span
              className="
                font-montserrat
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Brand
            </span>


            {/* Arrow */}

            <span className="text-[var(--hill-yellow)]">
              →
            </span>


            {/* DIGITAL */}

            <span
              className="
                font-montserrat
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Digital
            </span>

          </motion.div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BRAND LINE
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-[var(--hill-red)]/50
          to-transparent
        "
      />

    </section>
  );
}