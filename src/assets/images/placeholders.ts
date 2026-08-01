/**
 * Lightweight inline SVG placeholders (data URIs).
 * Swap these for real photography later — every component
 * that uses one accepts an `image` prop / import so replacement
 * is a one-line change.
 */

const svgPlaceholder = (label: string, w: number, h: number, bg = "#CFE7F7"): string => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="${bg}"/>
      <text x="50%" y="50%" font-family="Poppins, sans-serif" font-size="${Math.max(14, w / 18)}"
        fill="#0E5F94" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const heroPlaceholder = svgPlaceholder("Hero Image", 1200, 800, "#BFE0F4");
export const aboutPlaceholder = svgPlaceholder("About Image", 900, 700, "#CFE7F7");
export const servicePlaceholder = svgPlaceholder("Service Image", 640, 480, "#D9EEFB");
export const doctorPlaceholder = svgPlaceholder("Doctor Photo", 480, 560, "#E4F2FB");
export const doctor1Placeholder = svgPlaceholder("Specialist 1", 480, 560, "#E4F2FB");
export const doctor2Placeholder = svgPlaceholder("Specialist 2", 480, 560, "#E4F2FB");
export const doctor3Placeholder = svgPlaceholder("Specialist 3", 480, 560, "#E4F2FB");
export const newsPlaceholder = svgPlaceholder("Article Image", 640, 420, "#DCEEFA");
export const bannerPlaceholder = svgPlaceholder("Promotional Banner", 1200, 300, "#FFFFFF");
export const featuredDoctorPlaceholder = svgPlaceholder("Featured Specialist", 700, 900, "#E4F2FB");
