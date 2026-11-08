import { Branches } from "@/components/Branches";
import { Experience } from "@/components/Experience";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Offers } from "@/components/Offers";
import { Reviews } from "@/components/Reviews";
import { StickyCta } from "@/components/StickyCta";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <MenuSection />
        <Why />
        <Offers />
        <Experience />
        <Reviews />
        <Branches />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
