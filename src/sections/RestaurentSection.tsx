"use client";
import Image from "next/image";
import restaurant1 from "../../public/images/restaurant/restaurant-1.png";
import restaurant2 from "../../public/images/restaurant/restaurant-2.png";
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      className="mt-28 px-4 sm:px-8 md:px-16 lg:px-36 w-full"
      id="culinaryExperienceSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center mb-10">
        Culinary Experience
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="md:col-span-1 col-span-2">
          <Image
            src={restaurant1}
            alt="Restaurant Image 1"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <Image
            src={restaurant2}
            alt="Restaurant Image 2"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant2}
            alt="Restaurant Image 3"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant2}
            alt="Restaurant Image 4"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <Image
            src={restaurant2}
            alt="Restaurant Image 5"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam
        quisquam quas aspernatur, quo optio illo nulla officia cupiditate beatae
        nobis eos fuga repudiandae, aut, eum ea voluptates laborum libero
        incidunt maiores dolorum nihil vero porro... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis quibusdam quisquam quas aspernatur,
        quo optio illo nulla officia cupiditate beatae nobis eos fuga
        repudiandae, aut, eum ea voluptates laborum libero incidunt maiores
        dolorum nihil vero porro... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis quibusdam quisquam quas aspernatur, quo optio
        illo nulla officia cupiditate beatae nobis eos fuga repudiandae, aut,
        eum ea voluptates laborum libero incidunt maiores dolorum nihil vero
        porro... Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        quibusdam quisquam quas aspernatur, quo optio illo nulla officia
        cupiditate beatae nobis eos fuga repudiandae, aut, eum ea voluptates
        laborum libero incidunt maiores dolorum nihil vero porro...Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Omnis quibusdam quisquam
        quas aspernatur, quo optio illo nulla officia cupiditate beatae nobis
        eos fuga repudiandae, aut, eum ea voluptates laborum libero incidunt
        maiores dolorum nihil vero porro... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis quibusdam quisquam quas aspernatur,
        quo optio illo nulla officia cupiditate beatae nobis eos fuga
        repudiandae, aut, eum ea voluptates laborum libero incidunt maiores
        dolorum nihil vero porro... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis quibusdam quisquam quas aspernatur, quo optio
        illo nulla officia cupiditate beatae nobis eos fuga repudiandae, aut,
        eum ea voluptates laborum libero incidunt maiores dolorum nihil vero
        porro... Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        quibusdam quisquam quas aspernatur, quo optio illo nulla officia
        cupiditate beatae nobis eos fuga repudiandae, aut, eum ea voluptates
        laborum libero incidunt maiores dolorum nihil vero porro...
      </div>
    </div>
  );
};

export default CulinaryExperienceSection;
