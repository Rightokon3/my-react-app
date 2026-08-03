import heroImg  from "./Group-1177-1.webp";
import doctor1 from "./Dara-Awosika-1-2-1024x328.png";
import promotion from "./WhatsApp-Image-2026-04-03-at-3.39.08-PM-1-819x1024.jpeg";
import about1 from "./20240731_142605-1.webp";
import features from "./PinnacleBH2024-1-1-1-300x232-1.webp";
import special1 from "./Image_fx-1.png";
import medication from "./Image_fx-4.png";
import individual from "./Image_fx-2.png";
import spravato  from "./Image_fx.png";
import adhd from "./PinnacleBH2024_1_-00101_1_1-1.webp";
import doctor2  from  "./Headshot-Olukayode-Awosika-B.webp";
import doctor3  from  "./Mask-group-5.webp";
import supplements from "./Mask-group-2-1.webp";
import news from "./Health.jpeg";
import about2 from "./Image_fx-3.png"

const svgPlaceholder = (label: string, w: number, h: number, bg = "#CFE7F7"): string => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="${bg}"/>
      <text x="50%" y="50%" font-family="Poppins, sans-serif" font-size="${Math.max(14, w / 18)}"
        fill="#0E5F94" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
export const aboutPlaceholder1 = about2;
export const adhdPlaceholder = adhd;
export const spravatoPlaceholder = spravato;
export const individualPlaceholder = individual;
export const medicationPlaceholder = medication;
export const heroPlaceholder = heroImg;
export const aboutPlaceholder = about1;
export const specialPlaceholder = special1;
export const doctorPlaceholderImage = doctor1;
export const doctor1Placeholder = doctor1;
export const doctor2Placeholder = doctor2;
export const doctor3Placeholder = doctor3;
export const supplementsPlaceholder = supplements;
export const newsPlaceholder = news;
export const promotionPlaceholder = promotion;
export const featuresPlaceholder = features;
