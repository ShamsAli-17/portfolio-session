'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-orange-600">shams</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I'm a passionate Full-Stack Developer crafting beautiful web experiences with <span className="font-semibold text-gray-800">Next.js</span>, <span className="font-semibold text-gray-800">React</span>, and <span className="font-semibold text-gray-800">Tailwind CSS</span>.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-xl text-lg transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
