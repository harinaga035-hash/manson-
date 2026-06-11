import { Hero } from "../components/sections/Hero";
import { WhyMSB } from "../components/sections/WhyMSB";
import { Programs } from "../components/sections/Programs";
import { Placements } from "../components/sections/Placements";
import { Faculty } from "../components/sections/Faculty";
import { Awards } from "../components/sections/Awards";
import { Gallery } from "../components/sections/Gallery";
import { AdmissionsCTA } from "../components/sections/AdmissionsCTA";
import { Testimonials } from "../components/sections/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <WhyMSB />
      <Programs />
      <Placements />
      <Faculty />
      <Awards />
      <Gallery />
      <AdmissionsCTA />
      <Testimonials />
    </>
  );
}
