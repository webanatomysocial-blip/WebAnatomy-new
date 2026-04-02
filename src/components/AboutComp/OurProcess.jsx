import React, { useLayoutEffect, useRef } from "react";
import "../../css/AboutComponents/OurProcess.css";
import ellipse from "../../assets/images/about-page/Ellipse 134.png";
import group from "../../assets/images/about-page/Group 434.png";
import groupBg from "../../assets/images/about-page/Group 423 1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const workflowInnerRef = useRef(null);
  const workflowSectionRef = useRef(null);
  const stepCardsRefs = useRef([]);
  const pathRef = useRef(null);

  const workflowStepsData = [
    {
      id: 1,
      title: "Discover",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "1",
    },
    {
      id: 2,
      title: "Define",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "2",
    },
    {
      id: 3,
      title: "Design",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "3",
    },
    {
      id: 4,
      title: "Engineer",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "4",
    },
    {
      id: 5,
      title: "Refine",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "5",
    },
    {
      id: 6,
      title: "Scale",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "6",
    },
    {
      id: 7,
      title: "Optimize",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "7",
    },
  ];

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1025px)",
      isMobile: "(max-width: 1024px)",
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        // --- DESKTOP ZIGZAG ANIMATION ---
        gsap.set(stepCardsRefs.current[0], {
          autoAlpha: 1,
          left: "5vw",
          top: "0%",
        });

        const workflowTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: workflowSectionRef.current,
            start: "10% 20%",
            end: "bottom bottom",
            scrub: 1,
            pin: workflowInnerRef.current,
            pinSpacing: false,
          },
        });

        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Step 1
        gsap.set(stepCardsRefs.current[1], { left: "5vw", top: "0%" });
        workflowTimeline.to(stepCardsRefs.current[1], {
          left: "25vw",
          top: "60%",
          autoAlpha: 1,
          duration: 1,
        }).to(workflowInnerRef.current, { x: "-5vw", duration: 1 }, "<")
          .to(pathRef.current, { strokeDashoffset: pathLength * 0.85, duration: 1 }, "<");

        // Step 2
        gsap.set(stepCardsRefs.current.slice(2), { left: "25vw", top: "60%" });
        workflowTimeline.to(stepCardsRefs.current[2], {
          left: "45vw",
          top: "0%",
          autoAlpha: 1,
          duration: 1,
        }).to(workflowInnerRef.current, { x: "-12vw", duration: 1 }, "<")
          .to(pathRef.current, { strokeDashoffset: pathLength * 0.7, duration: 1 }, "<");

        // Step 3
        gsap.set(stepCardsRefs.current.slice(3), { left: "45vw", top: "0%" });
        workflowTimeline.to(stepCardsRefs.current[3], {
          left: "65vw",
          top: "60%",
          autoAlpha: 1,
          duration: 1,
        }).to(workflowInnerRef.current, { x: "-20vw", duration: 1 }, "<")
          .to(pathRef.current, { strokeDashoffset: pathLength * 0.55, duration: 1 }, "<");

        // Step 4
        gsap.set(stepCardsRefs.current.slice(4), { left: "65vw", top: "60%" });
        workflowTimeline.to(stepCardsRefs.current[4], {
          left: "85vw",
          top: "0%",
          autoAlpha: 1,
          duration: 1,
        }).to(workflowInnerRef.current, { x: "-28vw", duration: 1 }, "<")
          .to(pathRef.current, { strokeDashoffset: pathLength * 0.4, duration: 1, ease: "power1.inOut" }, "<");

        // Step 5
        gsap.set(stepCardsRefs.current.slice(5), { left: "85vw", top: "0%" });
        workflowTimeline.to(stepCardsRefs.current[5], {
          left: "105vw",
          top: "60%",
          autoAlpha: 1,
          duration: 1,
        }, "move-6").to(workflowInnerRef.current, { x: "-36vw", duration: 1 }, "move-6")
          .to(pathRef.current, { strokeDashoffset: pathLength * 0.2, duration: 1 }, "move-6");

        // Step 6
        gsap.set(stepCardsRefs.current[6], { left: "105vw", top: "60%" });
        workflowTimeline.to(stepCardsRefs.current[6], {
          left: "125vw",
          top: "0%",
          autoAlpha: 1,
          duration: 1,
        }, "move-7").to(workflowInnerRef.current, { x: "-45vw", duration: 1 }, "move-7")
          .to(pathRef.current, { strokeDashoffset: 0, duration: 1 }, "move-7");
      }

      if (isMobile) {
        // --- MOBILE VERTICAL REVEAL ---
        stepCardsRefs.current.forEach((card, index) => {
          gsap.set(card, {
            autoAlpha: 1, // Visibility handled by opacity in GSAP
            opacity: 0,
            y: 50,
            left: "auto",
            top: "auto",
            position: "relative"
          });

          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section className="about-workflow-section" ref={workflowSectionRef}>
        <div className="workflow-header">
          <h2 className="head-text workflow-title">Our Process</h2>
          <p className="para-text workflow-desc">
            Every innovation that happens here is out of a quest to get better
            at what we are already doing.
          </p>
        </div>

        <div className="workflow-steps-inner" ref={workflowInnerRef}>
          <div className="process-side-bg left">
            <img src={ellipse} alt="bg-left" className="side-bg-img" />
          </div>
          <div className="process-side-bg right">
            <img src={groupBg} alt="bg-right" className="side-bg-img" />
          </div>

          <svg className="process-lines-svg" viewBox="0 0 2000 500">
            <defs>
              <mask id="line-mask">
                <path
                  ref={pathRef}
                  d="M 204 110 L 490 410 L 775 110 L 1061 410 L 1347 110 L 1632 410 L 1918 110"
                />
              </mask>
            </defs>
            <path
              className="process-zigzag-line"
              mask="url(#line-mask)"
              d="M 204 110 L 490 410 L 775 110 L 1061 410 L 1347 110 L 1632 410 L 1918 110"
            />
          </svg>

          {workflowStepsData.map((step, index) => (
            <div
              key={step.id}
              className="workflow-step-card"
              style={{ zIndex: workflowStepsData.length + step.id }}
              ref={(el) => (stepCardsRefs.current[index] = el)}
            >
              <div className="workflow-icon-hold">
                <img src={group} alt="icon" className="workflow-icon-bg" />
              </div>

              <h3 className="sub-head-text workflow-card-heading">
                {step.title}
              </h3>
              <p className="para-text workflow-card-text">{step.desc}</p>

              <span className="workflow-bg-number">{step.number}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProcess;