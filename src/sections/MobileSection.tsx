"use client";
import Image from "next/image";
import mobile1 from "../../public/images/mobile/mobile-1.jpg";
import mobile2 from "../../public/images/mobile/mobile-2.jpg";
import mobile3 from "../../public/images/mobile/mobile-3.jpg";
import mobile4 from "../../public/images/mobile/mobile-4.jpg";
import mobile5 from "../../public/images/mobile/mobile-5.jpg";

import { useEffect, useRef, useState } from "react";

const MobileSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className="mt-10 px-4 sm:px-8 md:px-16 lg:px-36 w-full"
      id="mobileSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center mb-10">
        Mobile Services
      </div>
      <div
        className={`grid md:grid-cols-3 gap-4 grid-cols-1 ${
          animate ? "animate-fade-right" : ""
        } `}
      >
        {/* Left Section */}
        <div className="md:col-span-1 col-span-2">
          <Image
            src={mobile1}
            alt="Mobile Connection Services"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={mobile2}
            alt="SIM and WIFI Campaign"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={mobile3}
            alt="Mobile and Credit Card Promotion"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={mobile4}
            alt="Customer Support Services"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={mobile5}
            alt="Customer Support Services"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 text-justify text-sm sm:text-base">
        <p className="mb-4">
          <strong>Organizing Mobile Events:</strong> We assist individuals who
          come to Japan for work and study in obtaining mobile connection
          facilities effortlessly.
        </p>
        <p className="mb-4">
          <strong>SIM and WIFI Connection Campaign:</strong> Our services
          include providing WIFI connection facilities directly to the doorsteps
          of those arriving in Japan for work or study, ensuring seamless
          internet access.
        </p>
        <p className="mb-4">
          <strong>Mobile and Credit Card Promotion Campaign:</strong> We
          simplify the process of acquiring a mobile connection and offer
          support in applying for credit cards, making these essential
          facilities easily accessible to our customers.
        </p>
      </div>

      {/* Other Services Section */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="text-4xl font-bold text-center mb-8" id="otherServices">
          Other Services
        </div>
        <ul className="space-y-4 text-xl sm:text-base">
          <li>
            <strong>P A Group Visa Consulting:</strong> We provide consulting
            service to realize the dream of Japan.
          </li>
          <li>
            <strong>Language Translation:</strong> We provide language
            translation support for those who are currently living in Japan and
            those who are new to Japan.
          </li>
          <li>
            <strong>Import and Export:</strong> We import and export products
            from Japan to Sri Lanka and also from Sri Lanka to Japan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSection;
