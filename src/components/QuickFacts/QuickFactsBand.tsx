import type { JSX } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface QuickFact {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
}

const FACTS: QuickFact[] = [
  {
    id: "location",
    title: "Serving Minneapolis And The Twin Cities Area",
    description:
      "We specialize in treating adults with mental health disorders. Our goal is to help people facing emotional distress reach their greatest potential.",
    ctaLabel: "View Services",
    to: "/services",
  },
  {
    id: "history",
    title: "Helping The Community Since 2015",
    description:
      "Dr. Maya Whitfield founded our practice to give patients access to a genuinely high level of mental healthcare, built around real relationships with providers.",
    ctaLabel: "Read About Us",
    to: "/providers",
  },
  {
    id: "offer",
    title: "10% Off Your First Supplement Order",
    description:
      "We only carry supplements from reputable, quality-tested brands, so you can trust what you're adding to your care plan. Offer code: WELCOME10",
    ctaLabel: "Shop Now",
    to: "/dispensary",
  },
];

/** Three-column quick-facts band — location, history, and a dispensary offer. */
function QuickFactsBand(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {FACTS.map((fact, i) => (
          <motion.div
            key={fact.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="py-8 lg:py-0 lg:px-8 first:pt-0 first:lg:pl-0 last:pb-0 last:lg:pr-0"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 leading-snug">
              {fact.title}
            </h2>
            <p className="text-ink-soft leading-relaxed mb-6">{fact.description}</p>
            <Link
              to={fact.to}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
            >
              {fact.ctaLabel}
              <FiArrowRight aria-hidden />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default QuickFactsBand;