"use client";
import {
  FaUtensils,
  FaGlobe,
  FaWifi,
  FaMobileAlt,
  FaLanguage,
  FaShippingFast,
  // FaUserFriends,
  // FaRegHandshake,
  // FaAward,
} from "react-icons/fa";
import Image from "next/image";
// import CountUp from "react-countup";
import HeroIcon from "../../public/images/heroIcon.png";

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="relative h-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full bg-primary-light"
    >
      {/* Floating Counting Div */}
      {/* <div className="absolute w-2/4 h-auto md:-bottom-20 hidden bottom-1 left-1/2 transform -translate-x-1/2 z-10  md:flex flex-wrap items-center justify-between gap-6 px-6 py-4 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <FaUserFriends className="text-primary-base" size={32} />
          <div className="text-2xl font-bold">
            <CountUp start={0} end={100} duration={2.5} />+
          </div>
          <div className="text-sm">Happy Clients</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaRegHandshake className="text-primary-base" size={32} />
          <div className="text-2xl font-bold">
            <CountUp start={0} end={200} duration={2.5} />+
          </div>
          <div className="text-sm">Partnerships</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaAward className="text-primary-base" size={32} />
          <div className="text-2xl font-bold">
            <CountUp start={0} end={300} duration={2.5} />+
          </div>
          <div className="text-sm">Awards Won</div>
        </div>
      </div> */}

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row p-6 md:p-20">
        {/* Left Column: Icon list */}
        <div className="flex flex-col gap-4 mr-0 md:mr-20 mb-8 md:mb-0">
          <a
            href="#restaurentSection"
            className="flex items-center hover:text-lg gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaUtensils className="text-primary-base" size={24} />
            </div>
            <span>Restaurant Chain</span>
          </a>
          <a
            href="#otherServices"
            className="flex items-center  hover:text-lg gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400 animate-delay-500"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaGlobe className="text-primary-base" size={24} />
            </div>
            <span>PA Group Consulting</span>
          </a>
          <a
            href="#mobileSection"
            className="flex items-center  gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400 animate-delay-[1000ms]"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaWifi className="text-primary-base" size={24} />
            </div>
            <span>SIM / WIFI Connection Campaign</span>
          </a>
          <a
            href="#mobileSection"
            className="flex items-center  gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400 animate-delay-[1500ms]"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaMobileAlt className="text-primary-base" size={24} />
            </div>
            <span>Mobile Credit and Connection Campaign</span>
          </a>
          <a
            href="#otherServices"
            className="flex items-center  hover:text-lg gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400 animate-delay-[2000ms]"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaLanguage className="text-primary-base" size={24} />
            </div>
            <span>Language Translation</span>
          </a>
          <a
            href="#otherServices"
            className="flex items-center  hover:text-lg gap-2 animate-fade-right animate-once animate-ease-linear animate-duration-400 animate-delay-[2500ms]"
          >
            <div className="p-4 bg-white rounded-full shadow-md">
              <FaShippingFast className="text-primary-base" size={24} />
            </div>
            <span>Import and Export</span>
          </a>
        </div>

        <div className="flex pt-8 md:pt-8 flex-col w-full md:w-[500px] animate-fade-down animate-duration-[2600ms] animate-delay-500 mr-0 md:mr-20 mb-8 md:mb-0">
          <div className="text-3xl font-bold pb-4 uppercase">
            Create an environment where foreigners can work comfortably
          </div>
          <div className="pb-4">
            We are a chain of companies that provides services to the local and
            foreign populations of Japan.
          </div>
        </div>

        <div className=" w-full md:w-[500px] animate-fade-left animate-duration-[2600ms] animate-delay-500">
          <Image src={HeroIcon} alt="hero icon" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
