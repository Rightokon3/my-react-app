import type { JSX } from "react";
import { Link } from "react-router-dom";

function NotFound(): JSX.Element {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-primary-dark mb-3">Page Not Found</h1>
      <p className="text-ink-soft mb-6">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;