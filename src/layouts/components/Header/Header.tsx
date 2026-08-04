import { useState, useEffect, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiPhoneCall,
  FiUser,
  FiFileText,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";
import LogoPlaceholder from "../../assets/logos/logo-placeholder";
import SearchOverlay from "./SearchOverlay";
import type { NavLink as NavLinkType } from "../../types";

const NAV_LINKS: (NavLinkType & { hasDropdown?: boolean })[] = [
  { label: "Home", href: "#home" },
  { label: "Providers", href: "#specialists" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "FAQs", href: "#" },
  { label: "Blog", href: "#news" },
  { label: "Contact", href: "#contact" },
  { label: "Dispensary", href: "#", hasDropdown: true },
];

interface IconButtonProps {
  label: string;
  onClick?: () => void;
  badgeCount?: number;
  children: JSX.Element;
}

/** Filled circular icon button, blue outline — matches the reference header. */
function IconButton({ label, onClick, badgeCount, children }: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
    >
      {children}
      {typeof badgeCount === "number" && (
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-dark text-[10px] font-bold text-white">
          {badgeCount}
        </span>
      )}
    </button>
  );
}

function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [cartCount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  const toggleSearch = (): void => {
    setIsMobileNavOpen(false);
    setIsSearchOpen((open) => !open);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 border-b-[3px] border-primary ${
        isScrolled ? "shadow-card" : "shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3">
        <a href="#home" aria-label="Go to homepage" className="flex-shrink-0">
          <LogoPlaceholder />
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm text-ink font-medium hover:text-primary transition-colors relative group"
            >
              {link.label}
              {link.hasDropdown && <FiChevronDown size={14} aria-hidden />}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <button
            type="button"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
            onClick={toggleSearch}
            className="text-ink hover:text-primary transition-colors"
          >
            <FiSearch size={18} />
          </button>
        </nav>

        {/* Desktop right cluster: stacked pill links, cart, call button */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex flex-col gap-1.5">
            <a
              href="#portal"
              className="flex items-center gap-1.5 rounded-full border border-primary px-3.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap underline underline-offset-2"
            >
              <FiUser size={12} aria-hidden />
              PATIENT PORTAL
            </a>
            <a
              href="#billing"
              className="flex items-center gap-1.5 rounded-full border border-primary px-3.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            >
              <FiFileText size={12} aria-hidden />
              PAY YOUR BILL
            </a>
          </div>
          <IconButton label="View cart" badgeCount={cartCount}>
            <FiShoppingCart size={16} />
          </IconButton>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-white hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            <FiPhoneCall size={16} aria-hidden />
            <span className="text-left leading-tight">
              <span className="block text-[10px] font-medium uppercase">Call Us:</span>
              <span className="block text-sm font-bold">(952) 295-9448</span>
            </span>
          </a>
        </div>

        {/* Mobile / tablet icon row: search, account, message, cart, hamburger */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <IconButton label={isSearchOpen ? "Close search" : "Open search"} onClick={toggleSearch}>
            <FiSearch size={16} />
          </IconButton>
          <IconButton label="Patient portal">
            <FiUser size={16} />
          </IconButton>
          <IconButton label="Pay your bill">
            <FiFileText size={16} />
          </IconButton>
          <IconButton label="View cart" badgeCount={cartCount}>
            <FiShoppingCart size={16} />
          </IconButton>
          <button
            type="button"
            aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileNavOpen}
            onClick={() => {
              setIsSearchOpen(false);
              setIsMobileNavOpen((open) => !open);
            }}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            {isMobileNavOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* search overlay */}
      <AnimatePresence>
        {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>

      {/* mobile slide-out nav */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 top-0 bg-ink/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileNavOpen(false)}
            />
            <motion.nav
              key="drawer"
              aria-label="Mobile"
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-card lg:hidden flex flex-col gap-1 p-6 pt-8 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileNavOpen(false)}
                className="self-end mb-4 h-10 w-10 rounded-full flex items-center justify-center hover:bg-surface-blue"
              >
                <FiX size={22} />
              </button>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="flex items-center gap-1.5 py-3 px-2 text-ink font-medium border-b border-gray-100 hover:text-primary transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <FiChevronDown size={14} aria-hidden />}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsMobileNavOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Book Appointment
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
