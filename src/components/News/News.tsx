import type { JSX } from "react";
import { motion } from "framer-motion";
import { newsPlaceholder } from "../../assets/images/placeholders";
import type { NewsItem } from "../../types";

const NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "How Veterans Can Manage Their Mental Health",
    excerpt:
      "Many veterans face unique mental health challenges after service. Here's what support can look like.",
    image: newsPlaceholder,
    date: "July 2026",
  },
  {
    id: "n2",
    title: "How to Qualify for TMS Through Insurance",
    excerpt:
      "TMS is increasingly covered by insurance providers. Here's what documentation is typically required.",
    image: newsPlaceholder,
    date: "June 2026",
  },
];

function News(): JSX.Element {
  return (
    <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-10 text-center"
      >
        News &amp; Articles
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {NEWS.map((article, i) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-xl2 overflow-hidden border border-gray-100 shadow-card bg-white flex flex-col sm:flex-row"
          >
            <img
              src={article.image}
              alt=""
              className="w-full sm:w-44 h-44 object-cover flex-shrink-0"
              loading="lazy"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xs font-medium text-primary mb-2">{article.date}</p>
              <h3 className="font-semibold text-ink mb-2">{article.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{article.excerpt}</p>
              <a href="#" className="text-sm font-semibold text-primary hover:underline mt-auto">
                Read More
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default News;
