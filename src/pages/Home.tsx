import type { JSX } from "react";
import Hero from "../components/Hero/Hero";
import StaffAnnouncement from "../components/Hero/StaffAnnouncement";
import FeatureBanner from "../components/Features/FeatureBanner";
import WhyChooseUs from "../components/Features/WhyChooseUs";
import FeatureIcons from "../components/Features/FeatureIcons";
import Services from "../components/Services/Services";
import BrainHealthSeries from "../components/BrainHealthSeries/BrainHealthSeries";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Specialists from "../components/Specialists/Specialists";
import About from "../components/About/About";
import News from "../components/News/News";
import ContactSection from "../components/Contact/ContactSection";

function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <StaffAnnouncement />
      <FeatureBanner />
      <WhyChooseUs />
      <FeatureIcons />
      <Services />
      <BrainHealthSeries />
      <Testimonials />
      <CTA />
      <Specialists />
      <About />
      <News />
      <ContactSection />
    </>
  );
}

export default Home;
