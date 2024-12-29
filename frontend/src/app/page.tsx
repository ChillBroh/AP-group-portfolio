"use client";
import Footer from "@/components/Footer";
import AboutUsSection from "@/sections/AboutUsSection";
import ContactUsSection from "@/sections/ContactUsSection";
import HeroSection from "@/sections/HeroSection";
import MobileSection from "@/sections/MobileSection";
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
      <MobileSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
