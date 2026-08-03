import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { supplementsPlaceholder } from "../../assets/images/placeholders";

/**
 * "Best Quality Supplement Brands" banner — swap `supplementsPlaceholder`
 * for a real product photo once you have one (see assets/images/placeholders.ts).
 */
function SupplementBrandsBanner(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* decorative accent frame peeking out behind the photo */}
          <div className="absolute -left-3 -top-3 -bottom-3 w-2/3 rounded-2xl bg-primary -z-10" />
          <img
            src={supplementsPlaceholder}
            alt="Featured supplement products"
            className="w-full rounded-2xl shadow-card object-cover aspect-[4/3]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 leading-snug">
            The Best Quality Supplement Brands Available
          </h2>
          <p className="text-ink-soft leading-relaxed mb-8 max-w-md">
            We only carry supplements from reputable, quality-tested brands. Every
            product is chosen to support real results, so you can trust what you're
            adding to your care plan.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
          >
            Shop Now
            <FiArrowRight aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SupplementBrandsBanner;