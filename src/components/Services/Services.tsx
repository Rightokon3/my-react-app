import type { JSX } from "react";
import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiZap, FiTarget, FiCheckSquare } from "react-icons/fi";
import { aboutPlaceholder1 } from "../../assets/images/placeholders";
import type { ServiceItem } from "../../types";

const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    slug: "medication-management",
    icon: "pill",
    title: "Medication Management",
    description:
      "In-person visits and secure telehealth appointments with providers who can prescribe medication, track your progress, and adjust your plan whenever it's needed.",
  },
  {
    id: "s2",
    slug: "individual-psychotherapy",
    icon: "heart",
    title: "Individual Psychotherapy",
    description:
      "A private, supportive space to work through what's on your mind, with a therapist who builds the plan around your goals rather than a one-size-fits-all script.",
  },
  {
    id: "s3",
    slug: "tms-treatments",
    icon: "zap",
    title: "Advanced TMS Therapy",
    description:
      "A non-invasive, FDA-approved option for depression, anxiety, and OCD that uses magnetic pulses to stimulate targeted brain activity, with minimal downtime.",
  },
  {
    id: "s4",
    slug: "spravato",
    icon: "target",
    title: "Spravato Treatment",
    description:
      "A supervised in-office treatment option for adults with depression that hasn't responded to standard medication approaches.",
  },
  {
    id: "s5",
    slug: "adhd-testing",
    icon: "check",
    title: "ADHD Assessment",
    description:
      "A structured, computer-based evaluation that measures attention and activity levels to support an accurate ADHD diagnosis in teens and adults.",
  },
];

const ICONS: Record<string, JSX.Element> = {
  pill: <FiActivity size={30} strokeWidth={1.5} />,
  heart: <FiHeart size={30} strokeWidth={1.5} />,
  zap: <FiZap size={30} strokeWidth={1.5} />,
  target: <FiTarget size={30} strokeWidth={1.5} />,
  check: <FiCheckSquare size={30} strokeWidth={1.5} />,
};

function Services(): JSX.Element {
  return (
    <section id="services" className="grid lg:grid-cols-2">
      {/* image column — full width on mobile (stacked on top), sticky on desktop */}
      <div className="order-1 lg:order-2 h-64 sm:h-80 lg:h-auto">
        <div className="lg:sticky lg:top-20 h-64 sm:h-80 lg:h-[calc(100vh-5rem)]">
          <img
            src={aboutPlaceholder1}
            alt="Patient in a calm home setting"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* text column */}
      <div className="order-2 lg:order-1 bg-primary px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-10"
        >
          What We Offer
        </motion.h2>

        <div className="flex flex-col gap-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-white max-w-xl scroll-mt-28"
            >
              <span className="mb-3 inline-flex text-white">{ICONS[service.icon]}</span>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/90 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;