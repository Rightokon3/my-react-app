import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import PageHeader from "../components/PageHeader/PageHeader";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "Do you accept insurance?",
    answer:
      "We work with most major insurance plans. Bring your insurance details to your first visit and our team will help verify your coverage.",
  },
  {
    id: "f2",
    question: "What should I expect at my first appointment?",
    answer:
      "Your first visit is a longer intake session where a provider gets to know your history and goals, so your treatment plan can be built around you.",
  },
  {
    id: "f3",
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes — many services, including medication management follow-ups and therapy sessions, are available through our secure telehealth platform.",
  },
  {
    id: "f4",
    question: "How do I schedule a consultation?",
    answer:
      "Use the booking form on our homepage or contact page, or call our office directly — our team will help find a time that works for you.",
  },
];

function FAQs(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we hear most. Don't see yours? Reach out on our contact page."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex flex-col gap-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-100 shadow-card overflow-hidden"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-semibold text-ink hover:bg-surface-blue transition-colors"
              >
                {faq.question}
                <FiChevronDown
                  className={`flex-shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-5 sm:px-6 pb-5 text-sm text-ink-soft leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default FAQs;