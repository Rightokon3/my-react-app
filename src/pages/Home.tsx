import type { JSX } from "react";
import Hero from "../components/Hero/Hero";
import StaffAnnouncement from "../components/Hero/StaffAnnouncement";
import FeatureBanner from "../components/Features/FeatureBanner";
import WhyChooseUs from "../components/Features/WhyChooseUs";
import FeatureIcons from "../components/Features/FeatureIcons";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ServicesCarousel from "../components/Services/ServiceHighlightsCarousel";
import Specialists from "../components/Specialists/Specialists";
import SupplementBrandsBanner from "../components/Dispensary/SupplementBrandsBanner";
import News from "../components/News/News";
import QuickFactsBand from "../components/QuickFacts/QuickFactsBand";
import Contacts from "../components/Contact/ContactSection";

function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <StaffAnnouncement />
      <FeatureBanner />
      <WhyChooseUs />
      <FeatureIcons />
       <Services />
      <Testimonials />
      <CTA />
      <About />
      <ServicesCarousel />
      <Specialists />
      <SupplementBrandsBanner />
      <News />
      <QuickFactsBand />
      <Contacts />
    </>
  );
}

export default Home;