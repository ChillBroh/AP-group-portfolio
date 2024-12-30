"use client";
import { useState, useEffect, useRef } from "react";
import aboutUs1 from "../../public/images/aboutus-1.jpg";
import aboutUs2 from "../../public/images/aboutus-2.jpg";
import aboutUs3 from "../../public/images/aboutus-3.jpg";
import ceo from "../../public/images/ceo.png";
import Image from "next/image";

const AboutUsSection = () => {
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
      className="mt-36 px-8 sm:px-8 md:px-16 lg:px-36 w-full"
      id="aboutUsSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center pb-5 md:pb-10">
        Who We Are
      </div>
      <div
        className={`grid grid-cols-1 cmd:grid-cols-3 gap-6 mb-10 ${
          animate ? "animate-fade-right  " : "animate-fade-left "
        } `}
      >
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={aboutUs1}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={aboutUs2}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={aboutUs3}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        className={`text-justify ${
          animate
            ? "animate-fade-up animate-delay-[500ms]"
            : "animate-fade-down"
        } `}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
        explicabo quos ea ab corrupti, eos aperiam reprehenderit beatae sunt
        molestiae vero rerum animi, eaque architecto quas deleniti error.
        Aliquid a deserunt eum fuga quisquam placeat incidunt facere quis
        tempora porro aspernatur veritatis nihil ab, dolor perferendis soluta
        temporibus suscipit, non repellat aliquam quo possimus! Nisi assumenda
        id, soluta esse inventore sapiente ipsum illo numquam rem aspernatur
        molestias, facere ipsam! Amet dolore optio vel, soluta ut saepe
        laboriosam, ad eaque, odio quis repellat esse maxime! Aut odio dolor
        illum incidunt perspiciatis esse optio et, aspernatur at nihil. Magnam
        nobis repudiandae amet.
      </div>
      <div className="mt-10 grid grid-cols-1 cmd:grid-cols-2 gap-8">
        {/* Left Column: Details */}
        <div
          className={`${
            animate ? "animate-fade-right  " : "animate-fade-left"
          } `}
        >
          <p className="text-3xl font-semibold mb-8">Our Personal Details</p>
          <ul className="list-disc pl-6 space-y-8">
            <li>
              <strong>Date of Establishment:</strong> April 30, 2023
            </li>
            <li>
              <strong>Representative:</strong> Chanuka Nowod
            </li>
            <li>
              <strong>Address:</strong> 4294-12 Iwai, Bando City, Ibaraki
              Prefecture, Japan
            </li>
            <li>
              <strong>Business Details:</strong>
              <ul className="list-disc pl-6 mt-5 space-y-2">
                <li>Restaurant operation business</li>
                <li>Mail order agency business</li>
                <li>Foreigner support business</li>
                <li>Contract business</li>
              </ul>
            </li>
            <li>
              <strong>Life Support for Foreigners:</strong>
              <ul className="list-disc pl-6 mt-5 space-y-2">
                <li>Vocational training and Japanese language acquisition</li>
                <li>Cross-cultural exchange through cooking</li>
              </ul>
            </li>
          </ul>
          <div>
            <div className="mt-10">
              <p className="text-3xl font-semibold mb-8">Our Global Reach</p>
              <p className="mb-10 text-justify">
                At PA Group Co. Ltd. we strive to create a bridge between
                cultures and provide essential support for foreigners in Japan.
                With our roots in Sri Lanka, we have expanded to Japan to serve
                diverse communities with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Japanese school and restaurant management in Sri Lanka</li>
                <li>Operating PA International Group globally</li>
                <li>Supporting life and career opportunities for foreigners</li>
              </ul>
            </div>
            <div className="mt-10">
              <p className="text-3xl font-semibold mb-8">
                Our Vision and Mission
              </p>
              <p className="mb-6 text-justify">
                <strong>Our Vision:</strong> To foster a global community where
                cultural exchange and support enable individuals to thrive,
                bridging the gap between diverse cultures.
              </p>
              <p className="mb-6 text-justify">
                <strong>Our Mission:</strong> To provide comprehensive support
                services for foreigners, empowering them through vocational
                training, language acquisition, and opportunities for meaningful
                cross-cultural connections.
              </p>
            </div>
          </div>
        </div>

        <div
          className={` ${animate ? "animate-fade-up " : "animate-fade-right"}`}
        >
          <Image
            src={ceo}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
