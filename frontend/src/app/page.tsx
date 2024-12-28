"use client";
import AboutUsSection from "@/sections/AboutUsSection";
import HeroSection from "@/sections/HeroSection";
import RestaurentSection from "@/sections/RestaurentSection";
import { FloatButton } from "antd";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <RestaurentSection />
      <FloatButton
        className="mr-10"
        icon={<FaAngleDoubleUp />}
        tooltip={<div>Scroll to Top</div>}
        onClick={scrollToTop}
      />
    </div>
  );
}
