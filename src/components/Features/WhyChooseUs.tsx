import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { aboutPlaceholder } from "../../assets/images/placeholders";

function WhyChooseUs(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src={aboutPlaceholder}
          alt="Consultation room"
          className="w-full rounded-xl2 shadow-card object-cover aspect-[4/3]"
          loading="lazy"
        />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-4">
          Why Choose Pinnacle
          </h2>
          <p className="text-ink-soft leading-relaxed mb-6">
            Accurate diagnosis of mental health disorders can be difficult. We use
            advanced technology and evidence-based techniques to make sure every
            treatment plan starts with a precise understanding of each person&apos;s
            unique needs.
          </p>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Schedule Consultation
            <FiArrowRight aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
