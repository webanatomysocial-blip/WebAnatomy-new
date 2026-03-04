import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "../css/Testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "CEO, NexaTech Solutions",
    quote:
      "WebAnatomy didn't just build a website; they engineered a digital experience. Their focus on high-performance engineering and sophisticated design transformed our user engagement metrics overnight.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head of Product, Bloom Media",
    quote:
      "The UI/UX expertise the team brought to our project was unmatched. They have an incredible ability to balance complex functionality with elegant, premium aesthetics. Truly a design-led agency.",
  },
  {
    id: 3,
    name: "Amara Okoro",
    role: "Director of Brand, Zenith Global",
    quote:
      "Working with WebAnatomy on our brand identity design was seamless. They deep-dived into our core values and delivered a visual language that perfectly captures our 'sophisticated' edge.",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <main className="hear-from-container">
      <div className="testimonials-wrapper">
        {/* Left Column */}
        <div className="testimonials-info">
          {/* <div className="testimonials-badge-wrapper">
            <span className="testimonials-badge sub-small-para">Testimonials</span>
          </div> */}
          <h2 className="testimonials-heading">
            Client Experiences <br />
            That Speak for Themselves
          </h2>

          <div className="testimonials-left-bottom">
            <button className="white-bg-btn">Talk to our SMEs<span className="icon-btn">
              <BsArrowRight className="icon-inside-btn-1" />
              <BsArrowRight className="icon-inside-btn-2" />
            </span></button>
            <div className="ratings-container">
              <div className="rating-item">
                <span className="rating-label">Reviewed on <br />Peer Insights</span>
                <div className="rating-stars">★★★★★</div>
              </div>
              <div className="rating-item">
                <span className="rating-label">Gartner <br />Approved</span>
                <div className="rating-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Swiper */}
        <div className="testimonials-carousel">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonialSwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="card-top">
                    <div className="quote-icon">“</div>
                    <p className="para-text">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="testimonial-footer">
                    <div className="author-info">
                      <span className="author-name sub-small-head-white">{testimonial.name}</span>
                      <span className="author-role sub-small-para">{testimonial.role}</span>
                    </div>

                    <div className="nav-buttons">
                      <button
                        className="nav-btn prev-btn"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous testimonial"
                      >
                        <BsArrowLeft />
                      </button>
                      <button
                        className="nav-btn next-btn"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next testimonial"
                      >
                        <BsArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
