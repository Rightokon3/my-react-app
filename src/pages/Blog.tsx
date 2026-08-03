import type { JSX } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import News from "../components/News/News";

function Blog(): JSX.Element {
  return (
    <>
      <PageHeader
        title="News & Articles"
        subtitle="Updates, guides, and resources from our clinical team."
      />
      <News />
    </>
  );
}

export default Blog;