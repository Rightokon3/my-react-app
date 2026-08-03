import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { featuresPlaceholder } from "../../assets/images/placeholders";

function About(): JSX.Element {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src={featuresPlaceholder}
          alt="Practice founder in the clinic"
          className="w-full rounded-xl2 shadow-card object-cover aspect-[3/4] lg:order-1"
          loading="lazy"
        />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:order-2"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-4">
Pinnacle Behavioral Healthcare was founded by Dr. Olukayode Awosika in July 2011
          </h2>
          <p className="text-ink-soft leading-relaxed mb-6">
Exceptional Care by Compassionate People We are dedicated to providing the highest quality mental healthcare services. We offer a full range of psychiatric services, from medication management to treatment options for depression and ADHD diagnostic testing.
          </p>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Contact Us
            <FiArrowRight aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
