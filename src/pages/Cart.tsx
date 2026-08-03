import type { JSX } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../components/PageHeader/PageHeader";

/** Placeholder cart page — wire up to real cart state once checkout is built. */
function Cart(): JSX.Element {
  return (
    <>
      <PageHeader title="Your Cart" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
        <p className="text-ink-soft mb-8">Your cart is empty.</p>
        <Link
          to="/dispensary"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Browse the Dispensary
          <FiArrowRight aria-hidden />
        </Link>
      </div>
    </>
  );
}

export default Cart;