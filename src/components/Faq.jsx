import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Faq.css";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can change your plan at any time. Adjust your plan based on your needs as your team grows or your requirements change.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid but not used.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add other information to your invoices. Just let us know what you need and we'll do our best to accommodate your request.",
  },
  {
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to your account settings.",
  },
];

const FAQ = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      suppressHydrationWarning
      className="faq-container"
      style={{ background: props.background, paddingTop: props.paddingTop }}
    >
      <h2 className="head-text">FAQs</h2>
      <p className="para-text faq-description">
        Every innovation that happens here is out of a quest to get better at
        what we are already doing.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="sub-small-head ">{faq.question}</span>
              <span className="icon-wrapper">
                {openIndex === index ? (
                  <CiCircleMinus size={28} />
                ) : (
                  <CiCirclePlus size={28} />
                )}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer">
                    <p className="sub-small-para">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
