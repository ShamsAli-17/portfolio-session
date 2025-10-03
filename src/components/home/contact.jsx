'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Got a project idea or just want to say hello? Fill out the form below or reach out via email!
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p>Email: <a href="mailto:your.email@example.com" className="text-orange-600 hover:underline">your.email@example.com</a></p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
