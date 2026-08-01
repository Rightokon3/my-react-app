import type { JSX } from "react";
import  logo from "../../assets/Pinnacle_Logo.webp";

interface LogoPlaceholderProps {
  className?: string;
}

/** Simple inline SVG logo mark — replace with your real brand mark later. */
function LogoPlaceholder({ className = "h-9 w-auto" }: LogoPlaceholderProps): JSX.Element {
  return (
     <img
      src={logo}
      alt="Radiant Mind Behavioral Health"
      className={className}
    />
  );
}

export default LogoPlaceholder;
