import { DestinationGrid } from "@/components/DestinationGrid/DestinationGrid";
import { FinalCta } from "@/components/FinalCta/FinalCta";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { PartnerShowcase } from "@/components/PartnerShowcase/PartnerShowcase";
import { Process } from "@/components/Process/Process";
import { PropertyShowcase } from "@/components/PropertyShowcase/PropertyShowcase";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertyShowcase />
        <DestinationGrid />
        <Services />
        <PartnerShowcase />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
