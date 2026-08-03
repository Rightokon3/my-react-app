import { useState, useEffect, useCallback, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { medicationPlaceholder , individualPlaceholder, adhdPlaceholder, specialPlaceholder ,spravatoPlaceholder} from "../../assets/images/placeholders";

interface HighlightTab {
  id: string;
  label: string;
  image: string;
  description: string;
  telehealth: boolean;
}

const TABS: HighlightTab[] = [
  {
    id: "medication",
    label: "Medication Management",
    image: medicationPlaceholder,
    description:
      "Our providers prescribe, monitor, and adjust medication in-person or through secure telehealth visits.",
    telehealth: true,
  },
  {
    id: "tms",
    label: "Neurostar Advanced TMS Therapy",
    image: specialPlaceholder,
    description:
      "A non-invasive, FDA-approved option for depression, anxiety, and OCD using targeted magnetic stimulation.",
    telehealth: false,
  },
  {
    id: "psychotherapy",
    label: "Individual Psychotherapy",
    image: individualPlaceholder,
    description:
      "One-on-one sessions built around your goals, in a private and supportive setting.",
    telehealth: true,
  },
  {
    id: "spravato",
    label: "Spravato Treatment",
    image: spravatoPlaceholder,
    description:
      "A supervised, in-office option for adults with depression that hasn't responded to standard treatment.",
    telehealth: false,
  },
  {
    id: "adhd",
    label: "Qb Test For ADHD",
    image: adhdPlaceholder,
    description:
      "A structured, computer-based evaluation that supports an accurate ADHD diagnosis in teens and adults.",
    telehealth: true,
  },
];

const AUTO_ROTATE_MS = 4500;

/** Auto-rotating service tab list — click a tab to jump to it and pause rotation briefly. */
function ServiceHighlightsCarousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TABS.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelect = useCallback((index: number): void => {
    setActiveIndex(index);
    setIsPaused(true);
  }, []);

  const active = TABS[activeIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-primary-dark mb-10 text-center"
      >
        Our Services
      </motion.h2>

      <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 items-center">
        {/* vertical tab list */}
        <div
          role="tablist"
          aria-label="Service highlights"
          className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
        >
          {TABS.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(i)}
                className={`flex-shrink-0 text-left rounded-full lg:rounded-xl px-5 py-3 text-sm font-semibold whitespace-nowrap lg:whitespace-normal transition-colors ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface-blue text-ink hover:bg-primary/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* active panel */}
        <div className="relative rounded-xl2 overflow-hidden shadow-card min-h-[320px] sm:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={active.image}
                alt={active.label}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white max-w-lg">
                {active.telehealth && (
                  <span className="inline-flex w-fit items-center rounded-full bg-white/15 border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                    Telehealth Services Available
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{active.label}</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-5">
                  {active.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary hover:bg-surface-blue transition-colors"
                >
                  Learn More
                  <FiArrowRight aria-hidden />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ServiceHighlightsCarousel;