import Link from "next/link";
import { useState } from "react";
import React from "react";
import Head from "next/head";
import Navstyle from "../styles/componentstyles/navbar.module.scss";
import navimage from "../public/images/navimage.png";
import Image from "next/image";

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="sticky top-0 z-10">
      <nav className={` w-full bg-gray-800   mob:bg-white`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
          <div>
            <div className="flex items-center justify-between py-3 sm:py-5 sm:block">
              <Link href="#">
                {/* <h2 className="text-2xl text-midnightash font-bold">NEXT JS</h2> */}
                <Image src={navimage} alt="navimage" className="w-[50px]" />
              </Link>
              <div className="sm:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-midnightash"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-midnightash"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 sm:flex sm:space-x-6 sm:space-y-0 lg:pr-[175px] md:gap-3 ">
                <li className="text-dark text-[19px]">
                  <Link href="#ourservices">Services</Link>
                </li>
                <li className="text-dark text-[19px]">
                  <Link href="/blogs">About</Link>
                </li>
                <li className="text-dark text-[19px]">
                  <Link href="/about">Our Process</Link>
                </li>
                <li className="text-dark text-[19px]">
                  <Link href="/contact">Projects</Link>
                </li>
                <li className="text-dark text-[19px]">
                  <Link href="/contact">Testimonials</Link>
                </li>
                <li className="text-dark text-[19px] lg:text-white">
                  <Link href="/contact">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export const mobileNav = () => {
  return (
    <>
      <section
        id="mobile-menu"
        className="top-68 justify-content-center animate-open-menu absolute hidden w-full origin-top flex-col bg-black text-5xl"
      >
        <button className="text-8xl self-end px-6">&times;</button>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Our Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal Info
          </a>
        </nav>
      </section>
      ;
    </>
  );
};
