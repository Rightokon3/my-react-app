import type { JSX } from "react";
import { motion } from "framer-motion";
import { doctorPlaceholder } from "../../assets/images/placeholders";

/** Large highlight banner introducing a new staff member — sits directly under the appointment card. */
function StaffAnnouncement(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
      <div className="relative flex items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative z-0 bg-primary text-white rounded-r-[2.5rem] rounded-bl-[3.5rem] pl-6 sm:pl-10 pr-32 sm:pr-56 lg:pr-72 py-8 sm:py-10 max-w-3xl"
        >
          <p className="text-base sm:text-lg font-medium opacity-90 mb-1">
            Welcome our New Psychotherapist
          </p>
          <p className="text-3xl sm:text-5xl font-bold leading-tight mb-1">Dr. Amara Bello</p>
          <p className="text-base sm:text-xl opacity-85">PMHNP-BC, LICSW</p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src={doctorPlaceholder}
          alt="Portrait of Dr. Amara Bello"
          className="absolute right-4 sm:right-10 lg:right-16 -top-8 sm:-top-12 z-10 h-52 sm:h-72 lg:h-80 w-40 sm:w-56 lg:w-64 rounded-2xl object-cover shadow-card"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default StaffAnnouncement;
