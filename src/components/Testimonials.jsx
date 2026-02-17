import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import lady from "../assets/images/Testimonials/lady.png";
import "../css/Testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Gaida",
    role: "Managing partner, Floripa",
    image: lady,
    quote:
      "You can throw barely anything at them, I am sure their creative team will make the best out of it.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Founder, Raghav Foundation",
    image: lady,
    quote:
      "The attention to detail and professional approach exceeded our expectations at every stage.",
  },
  {
    id: 3,
    name: "Raghu Boddu",
    role: "Managing Director, ToggleNow",
    image: lady,
    quote:
      "Working with this team has been a transformative experience for our digital presence.",
  },
];

export default function Testimonials() {
  return (
    <main className="hear-from-container">
      <div className="hear-from-text-con">
        <h4 className="head-text-white">Hear from our Partners</h4>
      </div>

      <div className="hear-from-con-carousel">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={"auto"}
          centeredSlides={false}
          loop={true}
          slidesOffsetBefore={0}
          breakpoints={{
            320: {
              spaceBetween: 40,
            },
            768: {
              spaceBetween: 60,
            },
            1024: {
              spaceBetween: 100,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-image-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      objectFit: "cover",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    <span className="quote-icon">“</span>
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-divider"></div>
                  <div className="testimonial-author">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
