import { useState, useEffect, type JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
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

interface SubLink {
  label: string;
  to: string;
}

interface HeaderNavLink {
  label: string;
  to: string;
  submenu?: SubLink[];
}

const NAV_LINKS: HeaderNavLink[] = [
  { label: "Home", to: "/" },
  { label: "Providers", to: "/providers" },
  {
    label: "Services",
    to: "/services",
    submenu: [
      { label: "Medication Management", to: "/services#medication-management" },
      { label: "TMS Treatments", to: "/services#tms-treatments" },
      { label: "Individual Psychotherapy", to: "/services#individual-psychotherapy" },
      { label: "Spravato", to: "/services#spravato" },
      { label: "ADHD Testing", to: "/services#adhd-testing" },
    ],
  },
  { label: "FAQs", to: "/faqs" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  {
    label: "Dispensary",
    to: "/dispensary",
    submenu: [
      { label: "Cart", to: "/cart" },
      { label: "Checkout", to: "/checkout" },
    ],
  },
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
  // which mobile accordion sections are expanded — several can be open at once
  const [openMobileSections, setOpenMobileSections] = useState<Set<string>>(new Set());

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

  const toggleMobileSection = (label: string): void => {
    setOpenMobileSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const closeMobileNav = (): void => {
    setIsMobileNavOpen(false);
    setOpenMobileSections(new Set());
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 border-b-[3px] border-primary ${
        isScrolled ? "shadow-card" : "shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3">
        <Link to="/" aria-label="Go to homepage" className="flex-shrink-0">
          <LogoPlaceholder />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.submenu ? (
              // desktop dropdown — opens on hover (mouse) and on focus (keyboard), no click required
              <div key={link.label} className="relative group">
                <RouterNavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-sm font-medium transition-colors relative ${
                      isActive ? "text-primary" : "text-ink group-hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <FiChevronDown
                        size={14}
                        aria-hidden
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </RouterNavLink>

                {/* invisible bridge so the pointer can travel from link to panel without a gap */}
                <div className="absolute left-0 top-full h-2 w-full" />

                <div
                  className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    focus-within:opacity-100 focus-within:visible focus-within:translate-y-0
                    transition-all duration-200 z-50"
                >
                  <div className="min-w-[220px] rounded-xl bg-white shadow-card border border-gray-100 py-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-5 py-2.5 text-sm text-ink hover:bg-surface-blue hover:text-primary transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <RouterNavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium transition-colors relative group ${
                    isActive ? "text-primary" : "text-ink hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </RouterNavLink>
            )
          )}

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
              onClick={closeMobileNav}
            />
            <motion.nav
              key="drawer"
              aria-label="Mobile"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-card lg:hidden flex flex-col p-0 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-5 pt-6 pb-2">
                <LogoPlaceholder className="h-8 w-auto" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobileNav}
                  className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-surface-blue"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="flex flex-col">
                {NAV_LINKS.map((link) => {
                  if (!link.submenu) {
                    return (
                      <RouterNavLink
                        key={link.label}
                        to={link.to}
                        end={link.to === "/"}
                        onClick={closeMobileNav}
                        className={({ isActive }) =>
                          `px-5 py-3.5 text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors ${
                            isActive ? "text-primary" : "text-ink hover:text-primary"
                          }`
                        }
                      >
                        {link.label}
                      </RouterNavLink>
                    );
                  }

                  const isOpen = openMobileSections.has(link.label);
                  return (
                    <div key={link.label} className="border-b border-gray-100">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleMobileSection(link.label)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                          isOpen ? "bg-primary text-white" : "text-ink hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <FiChevronDown
                          size={16}
                          aria-hidden
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-surface-blue/40"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={closeMobileNav}
                                className="block pl-8 pr-5 py-3 text-sm text-primary hover:underline border-t border-white"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="p-5">
                <Link
                  to="/#appointment"
                  onClick={closeMobileNav}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;