import type { JSX } from "react";
import { motion } from "framer-motion";
import { bannerPlaceholder } from "../../assets/images/placeholders";

function FeatureBanner(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.a
        href="#services"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="block rounded-xl2 overflow-hidden border border-gray-100 shadow-card"
      >
        <img
          src={bannerPlaceholder}
          alt="Featured advanced treatment technology"
          className="w-full h-32 sm:h-40 object-cover"
          loading="lazy"
        />
      </motion.a>
    </section>
  );
}

export default FeatureBanner;
