import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Work } from "../components/Work";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <About />
      <Contact />
    </>
  );
}
