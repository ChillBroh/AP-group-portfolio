"use client";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../public/images/logo.png";
import Image from "next/image";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white text-secondary-base py-4">
      <div className="container mx-auto flex  justify-between items-center">
        <p className=" pl-4">
          <Image src={logo} alt="logo" width={70} height={70} />
        </p>
        {/* Desktop Navigation */}
        <div className="hidden cmd:flex flex-row items-center gap-6">
          <nav className="uppercase">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#heroSection"
                  className="hover:text-primary-base hover:underline underline-offset-8"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutUsSection"
                  className="hover:text-primary-base hover:underline underline-offset-8"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#restaurentSection"
                  className="hover:text-primary-base hover:underline underline-offset-8"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#mobileSection"
                  className="hover:text-primary-base hover:underline underline-offset-8"
                >
                  Mobile Section
                </a>
              </li>
              <li>
                <a
                  href="#contactUsSection"
                  className="hover:text-primary-base hover:underline underline-offset-8"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <Button
            className="bg-gradient-to-r from-primary-base to-primary-base1"
            type="primary"
            onClick={() =>
              window.open(
                "mailto:pagroup7773@gmail.com?subject=Want to know more about business!",
                "_self"
              )
            }
          >
            Send a Mail
          </Button>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="flex cmd:hidden pr-4 items-center">
          <FiMenu className="text-2xl cursor-pointer" onClick={toggleDrawer} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        closeIcon={<AiOutlineClose className="text-xl" />}
      >
        <div className="p-4">
          <ul className="flex flex-col space-y-4 uppercase">
            <li>
              <a
                href="#heroSection"
                className="hover:text-primary-base hover:underline underline-offset-8"
                onClick={toggleDrawer}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUsSection"
                className="hover:text-primary-base hover:underline underline-offset-8"
                onClick={toggleDrawer}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#restaurentSection"
                className="hover:text-primary-base hover:underline underline-offset-8"
                onClick={toggleDrawer}
              >
                Restaurant
              </a>
            </li>
            <li>
              <a
                href="#mobileSection"
                className="hover:text-primary-base hover:underline underline-offset-8"
                onClick={toggleDrawer}
              >
                Mobile Section
              </a>
            </li>
            <li>
              <a
                href="#contactUsSection"
                className="hover:text-primary-base hover:underline underline-offset-8"
                onClick={toggleDrawer}
              >
                Contact us
              </a>
            </li>

            <li>
              <Button
                className="bg-gradient-to-r from-primary-base to-primary-base1"
                type="primary"
                onClick={() =>
                  window.open(
                    "mailto:pagroup7773@gmail.com?subject=Want to know more about business!",
                    "_self"
                  )
                }
              >
                Send a Mail
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>
    </header>
  );
}
