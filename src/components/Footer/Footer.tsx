import type { JSX } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiNavigation } from "react-icons/fi";
import LogoPlaceholder, { SponserLogo } from "../../assets/logos/logo-placeholder";

interface FooterLink {
  label: string;
  to: string;
}

const IMPORTANT_LINKS: FooterLink[] = [
  { label: "Home", to: "/" },
  { label: "Providers", to: "/providers" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "News & Articles", to: "/blog" },
  { label: "Privacy", to: "/privacy" },
];

function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand column */}
        <div className="lg:col-span-2 flex flex-col gap-5">
           <LogoPlaceholder className="w-[280px] h-auto" />

          {/* generic treatment-partner badge — placeholder, not a real brand mark */}
          <div className="flex flex-wrap items-center gap-4">
             <SponserLogo  />
            <div className="border border-white/40 rounded-lg px-4 py-3 max-w-xs">
              <p className="text-sm italic leading-snug">
                &ldquo;We&apos;re proud to be part of a top-rated TMS treatment
                network.&rdquo;
              </p>
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold leading-snug max-w-md">
            An Accurate Diagnosis Can Be One Of The Most Important Steps You&apos;ll
            Take.
          </p>

          <div className="flex gap-3">
            {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* important links */}
        <nav aria-label="Important Links">
          <h3 className="font-bold text-lg mb-4">Important Links</h3>
          <ul className="flex flex-col gap-2.5">
            {IMPORTANT_LINKS.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`text-sm transition-colors ${
                    i === 0 ? "text-surface-blue underline" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 flex-shrink-0" aria-hidden />
              <span>
                500 Wellness Blvd
                <br />
                Suite 200
                <br />
                Minneapolis, MN 55401
              </span>
            </li>
            <li>
              <a
                href="https://www.openstreetmap.org/directions?to=44.9778%2C-93.265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline hover:text-white"
              >
                <FiNavigation size={14} aria-hidden />
                Get Directions
              </a>
            </li>
            <li className="flex items-center gap-2 pt-1">
              <FiPhone className="flex-shrink-0" aria-hidden />
              <a href="tel:+15551234567" className="hover:text-white">
                (952) 295-9448
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* disclaimer — placeholder; replace with your own reviewed clinical/legal copy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <p className="text-[11px] leading-relaxed text-white/60">
          Placeholder disclaimer text: this section is reserved for treatment
          indications, safety information, and any other regulatory or legal
          copy your organization is required to display. It should be reviewed
          and supplied by your clinical and legal teams before this site goes
          live — do not publish with this placeholder in place.
        </p>
      </div>

      <div className="border-t border-white/15 py-5">
        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} Radiant Mind Behavioral Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;