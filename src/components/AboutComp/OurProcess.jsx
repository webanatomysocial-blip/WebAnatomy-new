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
    let ctx = gsap.context(() => {
      // Ensure first card is visible and at its starting position (vw centers)
      // C1: 5vw, C2: 25vw, C3: 45vw, C4: 65vw, C5: 85vw, C6: 105vw, C7: 125vw
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
          markers: false,
          pin: workflowInnerRef.current,
          pinSpacing: false,
        },
      });

      // SVG Mask Logic - Initial State (Hide entire line)
      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Step 1 – Card 2 comes from Card 1 (5vw, 0%) and moves to (25vw, 60%)
      gsap.set(stepCardsRefs.current[1], { left: "5vw", top: "0%" });
      workflowTimeline.to(stepCardsRefs.current[1], {
        left: "25vw",
        top: "60%",
        autoAlpha: 1,
        duration: 1,
      });
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: pathLength * 0.85, duration: 1 },
        "<",
      );

      // Step 2 – Card 3 comes from Card 2 position and moves to (45vw, 0%)
      gsap.set(
        [
          stepCardsRefs.current[2],
          stepCardsRefs.current[3],
          stepCardsRefs.current[4],
          stepCardsRefs.current[5],
          stepCardsRefs.current[6],
        ],
        { left: "25vw", top: "60%" },
      );
      workflowTimeline.to(stepCardsRefs.current[2], {
        left: "45vw",
        top: "0%",
        autoAlpha: 1,
        duration: 1,
      });
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: pathLength * 0.7, duration: 1 },
        "<",
      );

      // Step 3 – Card 4 comes from Card 3 position and moves to (65vw, 60%)
      gsap.set(
        [
          stepCardsRefs.current[3],
          stepCardsRefs.current[4],
          stepCardsRefs.current[5],
          stepCardsRefs.current[6],
        ],
        { left: "45vw", top: "0%" },
      );
      workflowTimeline.to(stepCardsRefs.current[3], {
        left: "65vw",
        top: "60%",
        autoAlpha: 1,
        duration: 1,
      });
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: pathLength * 0.55, duration: 1 },
        "<",
      );

      // Step 4 – Card 5 comes from Card 4 position and moves to (85vw, 0%)
      gsap.set(
        [
          stepCardsRefs.current[4],
          stepCardsRefs.current[5],
          stepCardsRefs.current[6],
        ],
        { left: "65vw", top: "60%" },
      );
      workflowTimeline.to(stepCardsRefs.current[4], {
        left: "85vw",
        top: "0%",
        autoAlpha: 1,
        duration: 1,
      });
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: pathLength * 0.4, duration: 1 },
        "<",
      );

      // Step 5 – Card 6 comes from Card 5 position and moves to (105vw, 60%)
      // Start shifting container
      gsap.set([stepCardsRefs.current[5], stepCardsRefs.current[6]], {
        left: "85vw",
        top: "0%",
      });
      workflowTimeline.to(
        stepCardsRefs.current[5],
        {
          left: "105vw",
          top: "60%",
          autoAlpha: 1,
          duration: 1,
        },
        "move-6",
      );
      workflowTimeline.to(
        workflowInnerRef.current,
        { x: "-20vw", duration: 1 },
        "move-6",
      );
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: pathLength * 0.2, duration: 1 },
        "move-6",
      );

      // Step 6 – Card 7 comes from Card 6 position and moves to (125vw, 0%)
      // Shift container more
      gsap.set(stepCardsRefs.current[6], { left: "105vw", top: "60%" });
      workflowTimeline.to(
        stepCardsRefs.current[6],
        {
          left: "125vw",
          top: "0%",
          autoAlpha: 1,
          duration: 1,
        },
        "move-7",
      );
      workflowTimeline.to(
        workflowInnerRef.current,
        { x: "-45vw", duration: 1 },
        "move-7",
      );
      workflowTimeline.to(
        pathRef.current,
        { strokeDashoffset: 0, duration: 1 },
        "move-7",
      );
    }, workflowSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-workflow-section" ref={workflowSectionRef}>
      <div className="workflow-header">
        <h2 className="head-text workflow-title">Our Process</h2>
        <p className="para-text workflow-desc">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing.
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
            style={{ zIndex: workflowStepsData.length - step.id }}
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
  );
};

export default OurProcess;
