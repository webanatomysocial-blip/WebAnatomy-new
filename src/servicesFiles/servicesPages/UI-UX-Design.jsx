import ServicesBanner from "../servicesComponents/ServicesBanner";
import banner from "../servicesImages/UIUXDesignImages/banner.png";
import ServiceHeadTextButton from "../servicesComponents/ServiceHeadTextButton";
import ServiceFeatureCards from "../servicesComponents/ServiceFeatureCards";
import { BiBriefcase } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineDevices } from "react-icons/md";
import ServicesHover from "../servicesComponents/ServicesHover";
import BlogSection from "../../components/BlogSection";

export default function UIUXDesign() {
  const services = [
    {
      id: 1,
      title: "User Experience Design (UX)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <BiBriefcase />,
      link: "#",
    },
    {
      id: 2,
      title: "User Interface Design (UI)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <HiOutlineLightBulb />,
      link: "#",
    },
    {
      id: 3,
      title: "Cross-platform Experience Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineDevices />,
      link: "#",
    },
    {
      id: 4,
      title: "Cross-platform Experience Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineDevices />,
      link: "#",
    },
    {
      id: 5,
      title: "Cross-platform Experience Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineDevices />,
      link: "#",
    },
    {
      id: 6,
      title: "Cross-platform Experience Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <MdOutlineDevices />,
      link: "#",
    },
  ];

  return (
    <>
      <ServicesBanner title="UI/UX Design" backgroundImage={banner} />
      <ServiceHeadTextButton />
      <ServiceFeatureCards services={services} />
      <ServicesHover />
      <BlogSection  />

    </>
  );
}
