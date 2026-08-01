import type { JSX } from "react";
import { motion } from "framer-motion";
import LogoPlaceholder from "../../assets/logos/logo-placeholder";

function CTA(): JSX.Element {
  return (
    <section className="bg-surface-blue py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5"
      >
        <LogoPlaceholder className="h-12 w-auto" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark">
          Ready to take the next step in your care?
        </h2>
        <a
          href="#appointment"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Book Your Consultation
        </a>
      </motion.div>
    </section>
  );
}

export default CTA;
