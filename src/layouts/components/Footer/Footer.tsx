import type { JSX } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import LogoPlaceholder from "../../assets/logos/logo-placeholder";
import type { FooterLinkGroup } from "../../types";

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Specialists", href: "#specialists" },
      { label: "News", href: "#news" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Medication Management", href: "#services" },
      { label: "Individual Psychotherapy", href: "#services" },
      { label: "TMS Therapy", href: "#services" },
      { label: "ADHD Assessment", href: "#services" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Patient Portal", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

function Footer(): JSX.Element {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <LogoPlaceholder className="h-9 w-auto brightness-0 invert" />
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            Providing cutting-edge mental health treatment plans and psychiatric
            services, with a care team that treats every person as an individual.
          </p>
          <div className="flex gap-3 mt-1">
            {[FiFacebook, FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h3 className="font-semibold mb-4">{group.heading}</h3>
            <ul className="flex flex-col gap-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 flex-shrink-0" aria-hidden />
              <span>123 Wellness Ave, Edina, MN</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="flex-shrink-0" aria-hidden />
              <a href="tel:+15551234567" className="hover:text-white">
                (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="flex-shrink-0" aria-hidden />
              <a href="mailto:hello@example.com" className="hover:text-white">
                hello@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Radiant Mind Behavioral Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
