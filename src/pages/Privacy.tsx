import type { JSX } from "react";
import PageHeader from "../components/PageHeader/PageHeader";

function Privacy(): JSX.Element {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-ink-soft leading-relaxed">
        <p>
          This page is a placeholder. Replace this section with your organization&apos;s
          actual, legally-reviewed privacy policy — covering what patient data is
          collected, how it&apos;s used and protected, and how patients can exercise
          their rights (including any HIPAA-specific disclosures) — before this site
          goes live.
        </p>
      </div>
    </>
  );
}

export default Privacy;