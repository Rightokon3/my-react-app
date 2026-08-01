import { useState, type FormEvent, type JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import OpenStreetMapEmbed from "./OpenStreetMapEmbed";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function ContactSection(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    field: keyof ContactFormData
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Wire this up to your contact-form endpoint.
    setSubmitted(true);
  };

  return (
    <section id="contact-us">
      {/* light blue banner strip */}
      <div className="bg-surface-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-primary"
          >
            Book a Consultation
          </motion.h2>
          <motion.a
            href="#appointment"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            Schedule Consultation
            <FiArrowRight aria-hidden />
          </motion.a>
        </div>
      </div>

      {/* contact form + map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-ink-soft leading-relaxed mb-8 max-w-md">
            Ready to take the first step towards your mental health and wellness goals?
            Schedule a consultation with our team — we&apos;re here to help you find a plan
            that fits.
          </p>

          {submitted ? (
            <p className="text-ink-soft" role="status">
              Thanks for reaching out — we&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="sr-only">First Name</span>
                  <input
                    type="text"
                    required
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    className="w-full border-b border-gray-300 pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors bg-transparent"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Last Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    className="w-full border-b border-gray-300 pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors bg-transparent"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Email Address</span>
                <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full border-b border-gray-300 pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors bg-transparent"
                />
              </label>

              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  required
                  rows={4}
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full border-b border-gray-300 pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors bg-transparent resize-none"
                />
              </label>

              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-dark active:scale-[0.99] transition-all"
              >
                Send Message
                <FiArrowRight aria-hidden />
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <OpenStreetMapEmbed
            latitude={44.9778}
            longitude={-93.265}
            businessName="Radiant Mind Behavioral Health"
            addressLines={["500 Wellness Blvd, Suite 200", "Minneapolis, MN 55401"]}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
