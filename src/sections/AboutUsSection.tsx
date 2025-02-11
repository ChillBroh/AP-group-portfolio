"use client";
import { useState, useEffect, useRef } from "react";
import restaurant6 from "../../public/images/restaurant/restaurant-6.jpg";
import restaurant7 from "../../public/images/restaurant/restaurant-7.jpg";
import restaurant9 from "../../public/images/restaurant/restaurant-9.jpg";
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
      className="mt-10 px-8 sm:px-8 md:px-16 lg:px-36 w-full"
      id="aboutUsSection"
      ref={sectionRef}
    >
      <div className="text-5xl font-bold text-center pb-5 md:pb-10">
        Who We Are
      </div>
      <div
        className={`grid grid-cols-1 cmd:grid-cols-3 gap-6 mb-10 ${
          animate ? "animate-fade-right  " : ""
        } `}
      >
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={restaurant6}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={restaurant7}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src={restaurant9}
            alt="hero icon"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        className={`text-justify ${
          animate ? "animate-fade-up animate-delay-[500ms]" : ""
        } `}
      >
        Our company operates as a dynamic chain, dedicated to delivering
        exceptional services to both the local and international populations of
        Japan. With a commitment to excellence, we cater to a diverse clientele,
        ensuring their unique needs and expectations are met with precision. Our
        extensive network allows us to offer a wide range of solutions, tailored
        to enhance the experience of those residing in or visiting Japan. By
        combining cultural understanding with innovative practices, we strive to
        bridge the gap between global and local perspectives, fostering
        meaningful connections and providing unparalleled value in every aspect
        of our services.
      </div>
      <div className="mt-10 grid grid-cols-1 cmd:grid-cols-2 gap-8">
        {/* Left Column: Details */}
        <div className={`${animate ? "animate-fade-right  " : ""} `}>
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
                At P.A Group Co. Ltd. we strive to create a bridge between
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
                <strong>Our Vision:</strong> We believe in the power of
                collaboration and hard work. Together, we strive to make a
                positive impact in the world.
              </p>
              <p className="mb-6 text-justify">
                <strong>Our Mission:</strong> Our mission is to provide the
                highest quality service and to provide communicative and
                responsive services to clients so as to provide a sense of
                trust.
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
