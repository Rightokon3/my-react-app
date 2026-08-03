import type { JSX } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/** Consistent title band for inner pages (Providers, Services, Blog, etc). */
function PageHeader({ title, subtitle }: PageHeaderProps): JSX.Element {
  return (
    <div className="bg-surface-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-primary-dark"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-ink-soft max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default PageHeader;