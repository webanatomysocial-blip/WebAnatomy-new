import React from "react";
import "../css/Clients-img.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import img1 from "../assets/images/Clients-logos/1.png";
import img2 from "../assets/images/Clients-logos/2.png";
import img3 from "../assets/images/Clients-logos/3.png";
import img4 from "../assets/images/Clients-logos/4.png";
import img5 from "../assets/images/Clients-logos/5.png";
import img6 from "../assets/images/Clients-logos/6.png";
import img7 from "../assets/images/Clients-logos/7.png";
import img8 from "../assets/images/Clients-logos/8.png";
import img9 from "../assets/images/Clients-logos/9.png";
import img10 from "../assets/images/Clients-logos/10.png";
import img11 from "../assets/images/Clients-logos/11.png";
import img12 from "../assets/images/Clients-logos/12.png";
import img13 from "../assets/images/Clients-logos/13.png";
import img14 from "../assets/images/Clients-logos/14.png";
import img15 from "../assets/images/Clients-logos/15.png";
import img16 from "../assets/images/Clients-logos/16.png";
import img17 from "../assets/images/Clients-logos/17.png";
import img18 from "../assets/images/Clients-logos/18.png";
import img19 from "../assets/images/Clients-logos/19.png";
import img20 from "../assets/images/Clients-logos/20.png";
import img21 from "../assets/images/Clients-logos/21.png";
import img22 from "../assets/images/Clients-logos/22.png";
import img23 from "../assets/images/Clients-logos/23.png";
import img24 from "../assets/images/Clients-logos/24.png";
import img25 from "../assets/images/Clients-logos/25.png";
import img26 from "../assets/images/Clients-logos/26.png";
import img27 from "../assets/images/Clients-logos/27.png";
import img28 from "../assets/images/Clients-logos/28.png";
import img29 from "../assets/images/Clients-logos/29.png";
import img30 from "../assets/images/Clients-logos/30.png";
import img31 from "../assets/images/Clients-logos/31.png";
import img32 from "../assets/images/Clients-logos/32.png";
import img33 from "../assets/images/Clients-logos/33.png";
import img34 from "../assets/images/Clients-logos/34.png";
import img35 from "../assets/images/Clients-logos/35.png";
import img36 from "../assets/images/Clients-logos/36.png";
import img37 from "../assets/images/Clients-logos/37.png";
import img38 from "../assets/images/Clients-logos/38.png";
import img39 from "../assets/images/Clients-logos/39.png";
import img40 from "../assets/images/Clients-logos/40.png";
import img41 from "../assets/images/Clients-logos/41.png";
import img42 from "../assets/images/Clients-logos/42.png";
import img43 from "../assets/images/Clients-logos/43.png";
import img44 from "../assets/images/Clients-logos/44.png";
import img45 from "../assets/images/Clients-logos/45.png";
import img46 from "../assets/images/Clients-logos/46.png";
import img47 from "../assets/images/Clients-logos/47.png";
import img48 from "../assets/images/Clients-logos/48.png";
import img49 from "../assets/images/Clients-logos/49.png";
import img50 from "../assets/images/Clients-logos/50.png";
import img51 from "../assets/images/Clients-logos/51.png";
import img52 from "../assets/images/Clients-logos/52.png";
import img53 from "../assets/images/Clients-logos/53.png";
import img54 from "../assets/images/Clients-logos/54.png";
import img55 from "../assets/images/Clients-logos/55.png";
const clientLogos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
];

export default function ClientsImg() {
  // Split logos into rows (chunks) for separate Swipers
  // We want 3 rows presumably, or just chunks of random logos to fill rows
  // Let's create 3 consistent rows
  // Distribute 55 images into 3 rows
  const row1 = clientLogos.slice(0, 19);
  const row2 = clientLogos.slice(19, 38);
  const row3 = clientLogos.slice(38, 55);

  const rows = [
    [...row1, ...row1, ...row1], // Tripled for safety
    [...row2, ...row2, ...row2],
    [...row3, ...row3, ...row3],
  ];

  return (
    <section className="Clients-img-section">
      <div className="Clients-section-head-container">
        <h2 className="head-text-white">Clients</h2>
      </div>

      <div className="clients-rows-container">
        {rows.map((rowLogos, rowIndex) => (
          <div key={rowIndex} className="clients-marquee-row">
            <div
              className={`clients-marquee-track ${
                rowIndex % 2 !== 0 ? "reverse" : "normal"
              }`}
            >
              {rowLogos.map((logo, index) => (
                <div key={index} className="client-slide-marquee">
                  <div className="Clients-img-wrapper">
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="Clients-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
