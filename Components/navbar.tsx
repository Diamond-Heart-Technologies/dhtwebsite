import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import Head from "next/head";
import Navstyle from "../styles/componentstyles/navbar.module.scss";
import navimage from "../public/images/navimage.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed  w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={navimage}
            alt="/"
            width="60"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden sm:flex lg:pr-[178px] md:gap-3">
            <li className="lg:ml-9  ml-6 hover:text-purple text-dark  text-[19px] ">
              <Link href="#Services">Services</Link>
            </li>
            <li className="lg:ml-9  ml-6 hover:text-purple text-dark text-[19px]">
              <Link href="#AboutUs">About</Link>
            </li>
            <li className="lg:ml-9  ml-6 hover:text-purple text-dark text-[19px] truncate">
              <Link href="#OurProcess">Our Process</Link>
            </li>
            <li className="lg:ml-9  ml-6 hover:text-purple text-dark text-[19px]">
              <Link href="#OurProjects">Projects</Link>
            </li>
            <li className="lg:ml-9  ml-6 hover:text-purple text-dark text-[19px]">
              <Link href="#Testimonial">Testimonial</Link>
            </li>
            {/* <li className="ml-10 mr-6   hover:text-purple text-dark text-[19px] lg:text-white">
              <Link href="#">Contacts</Link>
            </li> */}
            <li
              className={
                shadow
                  ? " text-dark ml-6 mr-6   hover:text-purple text-[19px]"
                  : "ml-6  lg:mr-10   hover:text-purple text-dark text-[19px] lg:text-white"
              }>
              <Link href="#ContactUs">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="sm:hidden">
            <AiOutlineMenu
              className="hover:text-purple transition delay-100"
              size={32}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full  h-screen bg-[#9aa1a1da]"
            : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={navimage} width="50" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div> */}
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px]">
                  Services
                </li>
              </Link>
              <Link href="/#AboutUs">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px]">
                  About
                </li>
              </Link>
              <Link href="/#OurProcess">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px] truncate">
                  Our Process
                </li>
              </Link>
              <Link href="/#OurProjects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px]">
                  Projects
                </li>
              </Link>
              <Link href="/Testimonial">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px]">
                  Testimonial
                </li>
              </Link>
              <Link href="/#ContactUs">
                <li
                  onClick={() => setNav(false)}
                  className="py-4  hover:text-purple text-dark  text-[19px]">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
