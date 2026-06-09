import { Hero } from "../components/Hero";
import { ClientLogos } from "../components/ClientLogos";
import { About } from "../components/About";
import { VisionMission } from "../components/VisionMission";
import { Services } from "../components/Services";

import { Keunggulan } from "../components/Keunggulan";
import { Work } from "../components/Work";
import { Testimonials } from "../components/Testimonials";
import { CareerPreview } from "../components/CareerPreview";
import { ArticlesPreview } from "../components/ArticlesPreview";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <VisionMission />
      <Services />
      <Keunggulan />
      <Work />
      <Testimonials />
      <CareerPreview />
      <ArticlesPreview />
      <Contact />
    </>
  );
}