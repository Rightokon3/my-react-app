import { useState, type FormEvent, type JSX } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import type { AppointmentFormData } from "../../types";

const SERVICE_OPTIONS: string[] = [
  "Individual Psychotherapy",
  "Medication Management",
  "TMS Therapy",
  "Spravato Treatment",
  "ADHD Assessment",
];

interface AppointmentFormProps {
  className?: string;
}

function AppointmentForm({ className = "" }: AppointmentFormProps): JSX.Element {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    phoneNumber: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    field: keyof typeof formData
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Wire this up to your booking API / backend.
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`rounded-[2rem] bg-white shadow-card p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <h2 className="text-xl sm:text-2xl font-bold text-primary lg:w-64 lg:flex-shrink-0">
          Book a Consultation
        </h2>

        {submitted ? (
          <p className="text-ink-soft" role="status">
            Thanks — we&apos;ve received your request and will call you shortly to confirm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 grid sm:grid-cols-2 gap-4" noValidate>
            <label className="block">
              <span className="sr-only">Full Name</span>
              <input
                type="text"
                required
                placeholder="Name*"
                value={formData.fullName}
                onChange={handleChange("fullName")}
                className="w-full rounded-full border border-gray-200 px-5 py-3.5 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors"
              />
            </label>

            <label className="block">
              <span className="sr-only">Phone Number</span>
              <input
                type="tel"
                required
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
                className="w-full rounded-full border border-gray-200 px-5 py-3.5 text-sm text-ink placeholder:text-ink-soft focus:border-primary transition-colors"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Choose Service</span>
              <select
                required
                value={formData.service}
                onChange={handleChange("service")}
                className="w-full appearance-none rounded-full border border-gray-200 px-5 py-3.5 pr-10 text-sm text-ink-soft focus:border-primary transition-colors"
              >
                <option value="" disabled>
                  Choose Service*
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <FiChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft"
                aria-hidden
              />
            </label>

            <button
              type="submit"
              className="flex items-center justify-between rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark active:scale-[0.99] transition-all"
            >
              <span className="mx-auto">SUBMIT</span>
              <FiArrowRight aria-hidden />
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default AppointmentForm;
