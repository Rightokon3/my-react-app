import type { JSX } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import ServicesSection from "../components/Services/Services";
import BrainHealthSeries from "../components/BrainHealthSeries/BrainHealthSeries";
import ServiceHighlightsCarousel from "../components/Services/ServiceHighlightsCarousel";

function Services(): JSX.Element {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="From medication management to advanced treatment options — care built around your goals."
      />
      <ServicesSection />
      <BrainHealthSeries />
      <ServiceHighlightsCarousel />
    </>
  );
}

export default Services;