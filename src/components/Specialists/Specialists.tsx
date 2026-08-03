import type { JSX } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  doctor1Placeholder,
  doctor2Placeholder,
  doctor3Placeholder,
} from "../../assets/images/placeholders";
import type { SpecialistItem } from "../../types";

const SPECIALISTS: SpecialistItem[] = [
  { id: "sp1", name: "Dr. A. Whitfield", title: "APRN, PMHNP-BC", image: doctor1Placeholder },
  { id: "sp2", name: "Dr. R. Kanu", title: "MD, FAPA", image: doctor2Placeholder },
  { id: "sp3", name: "Dr. S. Bello", title: "APRN, PMHNP-BC", image: doctor3Placeholder },
];

function Specialists(): JSX.Element {
  return (
    <section id="specialists" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPECIALISTS.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-xl2 overflow-hidden border border-gray-100 shadow-card bg-white"
          >
            <img src={doc.image} alt={`Portrait of ${doc.name}`} className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="p-5 text-center">
              <p className="font-semibold text-ink">{doc.name}</p>
              <p className="text-sm text-ink-soft mb-4">{doc.title}</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                View Profile
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Specialists;