'use client';
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Navbar from "@/components/layout/navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    </>
    
  );
}
