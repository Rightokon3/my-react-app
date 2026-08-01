import { useEffect, useRef, type JSX } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchOverlayProps {
  onClose: () => void;
}

/** Full-width search panel that drops in below the header, matching the reference site's search overlay. */
function SearchOverlay({ onClose }: SearchOverlayProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-x-0 top-full z-40 border-b border-gray-100 bg-white/98 shadow-card"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-center gap-4">
        <label className="flex-1 flex items-center gap-3 border-b-2 border-gray-200 focus-within:border-primary transition-colors pb-2">
          <input
            ref={inputRef}
            type="search"
            placeholder="Search Here..."
            className="flex-1 text-lg text-ink placeholder:text-ink-soft outline-none bg-transparent"
          />
          <FiSearch size={22} className="text-ink-soft flex-shrink-0" aria-hidden />
        </label>
        <button
          type="button"
          aria-label="Close search"
          onClick={onClose}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full hover:bg-surface-blue transition-colors"
        >
          <FiX size={22} className="text-ink" />
        </button>
      </div>
    </motion.div>
  );
}

export default SearchOverlay;
