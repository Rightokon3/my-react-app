import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiAward, FiClipboard, FiHome } from "react-icons/fi";
import type { FeatureItem } from "../../types";

const FEATURES: FeatureItem[] = [
  { id: "f1", icon: "award", title: "10+ Years Of Experience" },
  { id: "f2", icon: "clipboard", title: "Individualized Treatment Plans" },
  { id: "f3", icon: "home", title: "State-Of-The-Art Facilities" },
];

const ICONS: Record<string, JSX.Element> = {
  award: <FiAward size={28} />,
  clipboard: <FiClipboard size={28} />,
  home: <FiHome size={28} />,
};

function FeatureIcons(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      <div className="grid sm:grid-cols-3 gap-6">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center gap-3 rounded-xl2 border border-gray-100 bg-white p-6 shadow-card"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-blue text-primary">
              {ICONS[feature.icon]}
            </span>
            <p className="font-semibold text-ink">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeatureIcons;
