import type { JSX } from "react";
import { FiExternalLink, FiNavigation } from "react-icons/fi";

interface OpenStreetMapEmbedProps {
  latitude: number;
  longitude: number;
  zoomOffset?: number;
  businessName: string;
  addressLines: string[];
  className?: string;
}

/**
 * Free OpenStreetMap embed (no API key required) with a floating
 * business-info card, styled after the reference site's map card.
 */
function OpenStreetMapEmbed({
  latitude,
  longitude,
  zoomOffset = 0.01,
  businessName,
  addressLines,
  className = "",
}: OpenStreetMapEmbedProps): JSX.Element {
  const bbox = [
    longitude - zoomOffset,
    latitude - zoomOffset * 0.6,
    longitude + zoomOffset,
    latitude + zoomOffset * 0.6,
  ].join(",");
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;
  const largeMapHref = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`;
  const directionsHref = `https://www.openstreetmap.org/directions?to=${latitude}%2C${longitude}`;

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-card ${className}`}>
      <iframe
        title={`Map showing ${businessName}`}
        src={embedSrc}
        className="h-80 sm:h-[420px] w-full border-0"
        loading="lazy"
      />

      <div className="absolute left-3 top-3 sm:left-5 sm:top-5 max-w-[85%] sm:max-w-xs rounded-xl bg-white shadow-card p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold text-ink leading-snug">{businessName}</p>
            {addressLines.map((line) => (
              <p key={line} className="text-sm text-ink-soft leading-snug">
                {line}
              </p>
            ))}
          </div>
          <a
            href={largeMapHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open full map"
            className="flex-shrink-0 text-ink-soft hover:text-primary transition-colors"
          >
            <FiExternalLink size={16} />
          </a>
        </div>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <FiNavigation size={14} aria-hidden />
          Get Directions
        </a>
      </div>

      <p className="absolute bottom-1 right-1.5 text-[10px] text-ink-soft bg-white/80 px-1.5 py-0.5 rounded">
        © OpenStreetMap contributors
      </p>
    </div>
  );
}

export default OpenStreetMapEmbed;
