import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPhoneCall, FiSearch } from "react-icons/fi";
import type { NavItem } from "../../types/navigation.types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-ink-900/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out panel */}
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-ink-300/20 px-5 py-4">
              <span className="font-display text-lg font-bold text-brand-800">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <FiX size={22} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-ink-300/20 px-5 py-5 space-y-3">
              <a
                href="#search"
                className="flex items-center gap-2 text-sm font-medium text-ink-700"
              >
                <FiSearch size={18} />
                Search the site
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center justify-center gap-2 rounded-full border border-brand-600 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                <FiPhoneCall size={16} />
                Call Us
              </a>
              <a
                href="#appointment"
                onClick={onClose}
                className="block rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
              >
                Schedule Appointment
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
