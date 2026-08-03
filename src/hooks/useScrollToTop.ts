import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page whenever the route changes — unless the
 * new URL includes a hash (e.g. /services#tms-treatments), in which case
 * it scrolls to that element instead, so header nav sub-links land on
 * the right section rather than the top of the page.
 */
function useScrollToTop(): void {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a tick for the new page's content to render before measuring it
      const id = hash.replace("#", "");
      const timeout = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        }
      }, 50);
      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
}

export default useScrollToTop;