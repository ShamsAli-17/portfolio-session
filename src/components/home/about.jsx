'use client';

import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-semibold text-orange-600">Shams</span>. I'm a MERN Stack Developer and DevOps Engineer with a passion for building modern web applications that are both functional and visually engaging.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
            I have experience working on more than 10 projects, ranging from dynamic websites to scalable backend systems. I'm constantly exploring new technologies and believe in continuous learning. When I'm not coding, I enjoy mentoring, experimenting with open source, and leveling up my skill set.
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/profile.jpg" // Make sure this image exists in your public/ folder
            alt="Shams Profile"
            className="w-[350px] h-[350px] rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
