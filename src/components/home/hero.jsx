'use client';

import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0B1531] px-4 sm:px-6 md:px-8"
      aria-labelledby="hero-title"
    >
      {/* Soft radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(251,191,36,0.08),transparent_60%)]"
      />

      {/* Top gold sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
      />

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        {/* Title */}
        <h1
          id="hero-title"
          className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Shams
            </span>
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400" />
          </span>
        </h1>

        {/* Subtitle (expanded description) */}
        <p className="mx-auto mt-5 max-w-3xl text-[15px] sm:text-base md:text-xl lg:text-2xl text-white/85 leading-relaxed sm:leading-7 md:leading-8">
          Professional Web Developer specializing in building fast, accessible, and scalable apps with{' '}
          <span className="font-semibold text-white">Next.js</span>,{' '}
          <span className="font-semibold text-white">React</span>, and{' '}
          <span className="font-semibold text-white">Tailwind CSS</span>. From clean UI/UX to robust API integrations and performance tuning, delivering modern web experiences that convert and scale.
        </p>

        {/* Secondary line for credibility */}
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-white/70">
          4+ years experience • MERN stack • SEO-friendly builds • Pixel-perfect responsive design
        </p>

        {/* CTA group (compact) */}
        <div className="mt-8 mx-auto w-full max-w-xl flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex w-full xs:w-auto items-center justify-center rounded-lg bg-gradient-to-b from-yellow-400 to-amber-500 px-4 sm:px-5 py-2.5 sm:py-3 min-h-10 sm:min-h-11 text-[#0B1531] text-sm sm:text-base font-semibold shadow-[0_6px_20px_rgba(251,191,36,0.28)] transition-all duration-200 hover:from-yellow-400 hover:to-amber-400 hover:shadow-[0_8px_28px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:translate-y-[0.5px]"
            aria-label="Contact Shams"
          >
            Let&apos;s Connect
          </a>

          <a
            href="#projects"
            className="inline-flex w-full xs:w-auto items-center justify-center rounded-lg border border-yellow-300/40 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 min-h-10 sm:min-h-11 text-sm sm:text-base text-white/90 backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            aria-label="View projects"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#071027] to-transparent"
      />
    </section>
  );
};

export default Hero;
