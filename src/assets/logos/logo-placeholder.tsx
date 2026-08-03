import type { JSX } from "react";
import logo from "../../assets/Pinnacle_Logo.webp";
import sponser from "../../assets/images/neuro-star-logo-300x116.webp";

interface LogoPlaceholderProps {
  className?: string;
}
interface SponserLogoProps {
  className?: string;
}
function LogoPlaceholder({
  className = "h-9 w-auto",
}: LogoPlaceholderProps): JSX.Element {
  return (
    <img
      src={logo}
      alt="Radiant Mind Behavioral Health"
      className={className}
    />
  );
}

function SponserLogo({
  className = "h-9 w-auto",
}: SponserLogoProps): JSX.Element {
  return (
    <img
      src={sponser}
      alt="Sponsor Logo"
      className={className}
    />
  );
}

export { SponserLogo };
export default LogoPlaceholder;