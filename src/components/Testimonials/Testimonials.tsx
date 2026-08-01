import type { JSX } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiUser } from "react-icons/fi";
import type { TestimonialItem } from "../../types";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "This was one of the best medical experiences I've had. The team was easy to talk to and made me feel truly heard from the very first visit.",
    name: "J. Alvarez",
  },
  {
    id: "t2",
    quote:
      "I've never had a provider follow up so closely. Every question I had between appointments was answered quickly and clearly.",
    name: "R. Chen",
  },
  {
    id: "t3",
    quote:
      "Scheduling was simple and the care plan actually fit my life instead of the other way around. I finally feel like I'm making progress.",
    name: "M. Okafor",
  },
];

function Testimonials(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-10 text-center"
      >
        What Our Patients Say
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-12"
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="h-full rounded-xl2 border border-gray-100 bg-white p-7 shadow-card flex flex-col gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-blue text-primary">
                <FiUser size={20} />
              </span>
              <p className="text-ink-soft leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold text-ink mt-auto">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center">
        <a
          href="#testimonials"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          View All
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
