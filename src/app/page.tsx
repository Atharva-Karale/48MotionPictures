import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import ClientLogos from "@/components/sections/client-logos";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}