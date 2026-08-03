import type { JSX } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Specialists from "../components/Specialists/Specialists";

function Providers(): JSX.Element {
  return (
    <>
      <PageHeader
        title="Our Providers"
        subtitle="Meet the team behind your care — psychiatric providers and therapists working together on one treatment plan."
      />
      <Specialists />
    </>
  );
}

export default Providers;