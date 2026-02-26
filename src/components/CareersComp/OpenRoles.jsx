import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/CareersComponents/OpenRoles.css";

const roles = [
  {
    title: "Graphic Designer",
    desc: "Craft bold brand identities that speak, stick, and scale with our branding solutions. Stand out from the crowd and leave a lasting impression.",
  },
  {
    title: "UI/UX Designer",
    desc: "Design seamless digital experiences that delight users. You'll work closely with product and engineering to shape intuitive interfaces that drive engagement.",
  },
  {
    title: "Digital Marketer",
    desc: "Build and execute strategies that grow our brand across channels — from SEO and paid ads to content and social, you'll own the full funnel.",
  },
  {
    title: "Sales",
    desc: "Turn conversations into partnerships. Help clients discover how Web Anatomy can transform their digital presence and drive measurable results.",
  },
  {
    title: "Web Developer",
    desc: "Build performant, scalable web experiences with clean code. You'll collaborate on exciting projects that push the boundaries of the modern web.",
  },
  {
    title: "Mobile App Developer",
    desc: "Create polished, high-performance mobile apps for iOS and Android. You'll shape products used by thousands of real users every day.",
  },
];

export default function OpenRoles() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="open-roles-container">
      <h2 className="head-text">Open Roles</h2>
      <p className="para-text open-roles-description">
        We&apos;re always looking for talented people to join our team. Find the
        role that fits you.
      </p>

      <div className="open-roles-list">
        {roles.map((role, i) => (
          <div key={i} className="open-roles-item">
            <div className="open-roles-question" onClick={() => toggle(i)}>
              <span className="head-text open-roles-title">{role.title}</span>
              <span className="icon-wrapper">
                {openIndex === i ? (
                  <CiCircleMinus size={28} />
                ) : (
                  <CiCirclePlus size={28} />
                )}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="open-roles-answer-wrapper"
                >
                  <div className="open-roles-answer">
                    <p className="para-text">{role.desc}</p>
                    <Link to="/contact" className="white-bg-btn open-roles-btn">
                      Apply Now{" "}
                      <span className="icon-btn">
                        <BsArrowRight className="icon-inside-btn-1" />
                        <BsArrowRight className="icon-inside-btn-2" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
