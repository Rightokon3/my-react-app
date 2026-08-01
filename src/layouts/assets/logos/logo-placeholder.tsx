import type { JSX } from "react";

interface LogoPlaceholderProps {
  className?: string;
}

/** Simple inline SVG logo mark — replace with your real brand mark later. */
function LogoPlaceholder({ className = "h-9 w-auto" }: LogoPlaceholderProps): JSX.Element {
  return (
    <svg viewBox="0 0 160 40" className={className} role="img" aria-label="Radiant Mind Behavioral Health logo">
      <circle cx="20" cy="20" r="16" fill="#1583C7" />
      <path d="M12 22c2-8 6-12 8-12s6 4 8 12" stroke="#EAF5FC" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="42" y="18" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#0E5F94">
        Radiant Mind
      </text>
      <text x="42" y="32" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="9" fill="#5B6472" letterSpacing="1">
        BEHAVIORAL HEALTH
      </text>
    </svg>
  );
}

export default LogoPlaceholder;
