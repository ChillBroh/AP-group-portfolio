"use client";
import Image from "next/image";
import restaurant1 from "../../public/images/restaurant/restaurant-1.jpg";
import restaurant3 from "../../public/images/restaurant/restaurant-3.jpg";
import restaurant4 from "../../public/images/restaurant/restaurant-4.jpg";
import restaurant5 from "../../public/images/restaurant/restaurant-5.jpg";
import restaurant8 from "../../public/images/restaurant/restaurant-6.jpg";

import { useEffect, useRef, useState } from "react";

const CulinaryExperienceSection = () => {
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
      className="mt-28 px-4 sm:px-8 md:px-16 lg:px-36 w-full"
      id="restaurentSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center mb-10">
        Culinary Experience
      </div>
      <div
        className={`grid md:grid-cols-3 gap-4 grid-cols-1 ${
          animate ? "animate-fade-right" : "animate-fade-left"
        } `}
      >
        {/* Left Section */}
        <div className="md:col-span-1 col-span-2">
          <Image
            src={restaurant1}
            alt="Sri Lankan Restaurant Interior"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={restaurant4}
            alt="Sri Lankan Dish 1"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant3}
            alt="Sri Lankan Dish 2"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant8}
            alt="Sri Lankan Dish 3"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant5}
            alt="Sri Lankan Dish 4"
            className="md:w-full md:h-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 text-justify text-sm sm:text-base">
        <p className="mb-4">
          <strong>The SHACHO&#39; Restaurant & Bar</strong> is a Sri Lankan
          restaurant located in Ibaraki Ken Bando, Japan. We take pride in
          showcasing the rich culinary heritage of Sri Lanka, a country renowned
          for its world-famous Ceylon spices.
        </p>
        <p className="mb-4">
          At The SHACHO, we blend authentic Sri Lankan spices to create an array
          of flavorful dishes. Our mission is to provide high-quality food with
          an unmatched taste, ensuring a delightful dining experience for every
          customer.
        </p>
        <p className="mb-4">
          Designed with an exquisite Sri Lankan ambiance, our restaurant stands
          out as a unique destination in Japan. Whether you are celebrating a
          festival, hosting a special occasion, or throwing a birthday party,
          The SHACHO offers the perfect setting. It is also an ideal venue for
          enjoying games with friends.
        </p>
        <p>
          As part of our restaurant chain, our kitchen car brings the
          distinctive flavors of Sri Lanka to various locations, making it
          easier for everyone to experience our culinary excellence.
        </p>
      </div>
    </div>
  );
};

export default CulinaryExperienceSection;
