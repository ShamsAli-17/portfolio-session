import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    </>
    
  );
}
