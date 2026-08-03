import type { JSX } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";

/** Placeholder checkout page — connect to a real payment provider before launch. */
function Checkout(): JSX.Element {
  return (
    <>
      <PageHeader title="Checkout" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
        <p className="text-ink-soft mb-8">
          Your cart is empty, so there&apos;s nothing to check out yet.
        </p>
        <Link
          to="/dispensary"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Browse the Dispensary
        </Link>
      </div>
    </>
  );
}

export default Checkout;