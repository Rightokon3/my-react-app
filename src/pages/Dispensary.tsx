import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import PageHeader from "../components/PageHeader/PageHeader";
import SupplementBrandsBanner from "../components/Dispensary/SupplementBrandsBanner";
import { specialPlaceholder } from "../assets/images/placeholders";

interface DispensaryProduct {
  id: string;
  name: string;
  description: string;
  price: string;
}

const PRODUCTS: DispensaryProduct[] = [
  {
    id: "p1",
    name: "Sleep Support Supplement",
    description: "A provider-recommended formula to support healthy sleep patterns.",
    price: "$24.00",
  },
  {
    id: "p2",
    name: "Daily Mood Support",
    description: "A daily supplement often recommended alongside therapy and medication plans.",
    price: "$29.00",
  },
  {
    id: "p3",
    name: "Focus & Attention Blend",
    description: "A supplement formulated to support attention and focus.",
    price: "$27.00",
  },
];

/**
 * Placeholder dispensary page — swap PRODUCTS for your real catalog
 * and wire the cart icon in the header up to real cart state.
 */
function Dispensary(): JSX.Element {
  return (
    <>
      <PageHeader
        title="Dispensary"
        subtitle="Provider-recommended supplements available to patients — this page is a placeholder ready for your real catalog."
      />

      <SupplementBrandsBanner />

      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 scroll-mt-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-card bg-white flex flex-col"
            >
              <img
                src={specialPlaceholder}
                alt={product.name}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-ink mb-2">{product.name}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{product.price}</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase text-white hover:bg-primary-dark transition-colors"
                  >
                    <FiShoppingCart size={14} aria-hidden />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dispensary;