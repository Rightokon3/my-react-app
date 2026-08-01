import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface TopicCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}

const TOPICS: TopicCard[] = [
  {
    id: "b1",
    eyebrow: "Mood & Mind",
    title: "Understanding Mood Shifts",
    description:
      "A plain-language guide to what's happening in the brain during mood episodes, and how treatment plans are built around it.",
    ctaLabel: "Read The Guide",
  },
  {
    id: "b2",
    eyebrow: "Daily Rhythm",
    title: "The Brain Health Plan",
    description:
      "A practical roadmap covering sleep, structure, nutrition, and the small daily habits that support long-term mental health.",
    ctaLabel: "See The Plan",
  },
  {
    id: "b3",
    eyebrow: "Stress Response",
    title: "Anxiety, Explained",
    description:
      "How the brain's threat-detection system drives anxiety symptoms, and the range of therapy and medication options available.",
    ctaLabel: "Explore Options",
  },
];

function BrainHealthSeries(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-primary font-bold tracking-[0.35em] sm:tracking-[0.5em] text-lg sm:text-2xl mb-2"
      >
        INTEGRATIVE PSYCHIATRY
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-xl sm:text-2xl font-bold text-ink mb-12"
      >
        The Brain Health Series
      </motion.h2>

      <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 text-left">
        {TOPICS.map((topic, i) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-primary font-semibold mb-1">{topic.eyebrow}</p>
            <h3 className="text-lg font-bold text-ink mb-3">{topic.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">{topic.description}</p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
            >
              {topic.ctaLabel}
              <FiArrowRight aria-hidden />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
      >
        See All
        <FiArrowRight aria-hidden />
      </motion.a>
    </section>
  );
}

export default BrainHealthSeries;
