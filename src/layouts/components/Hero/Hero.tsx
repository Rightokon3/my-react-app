import type { JSX } from "react";
import { motion } from "framer-motion";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { heroPlaceholder } from "../../assets/images/placeholders";

function Hero(): JSX.Element {
  return (
    <section id="home" className="relative pb-24 sm:pb-28 lg:pb-32">
      <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] w-full overflow-hidden">
        <img
          src={heroPlaceholder}
          alt="Therapist and patient in a calm consultation session"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* light sheen (not a dark scrim) so the heading reads in dark ink, matching the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 sm:via-white/50 to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-ink">
              Mental Healthcare, Personalized For You
            </h1>
            <p className="text-base sm:text-lg text-ink-soft">
              Providing cutting-edge mental health treatment plans and psychiatric
              services for patients of every age.
            </p>
          </motion.div>
        </div>
      </div>

      {/* appointment form overlaps the bottom edge of the photo, like the reference layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-20 sm:-mt-24 relative z-20">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
