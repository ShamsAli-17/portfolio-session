'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-[70vh] flex items-center bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            About Me
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Hello! I&apos;m <span className="font-semibold text-orange-600">Shams</span>. I&apos;m a MERN Stack Developer and DevOps Engineer with a passion for building modern web applications that are both functional and visually engaging.
          </p>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            I have experience working on more than 10 projects, ranging from dynamic websites to scalable backend systems. I&apos;m constantly exploring new technologies and believe in continuous learning. When I&apos;m not coding, I enjoy mentoring, experimenting with open source, and leveling up my skill set.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.jpg"
            alt="Shams Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-2xl shadow-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
