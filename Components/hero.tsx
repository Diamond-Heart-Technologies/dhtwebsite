import React from "react";
import Navstyles from "../styles/componentstyles/hero.module.scss";
import { Navbar } from "../Components/navbar";
import Image from "next/image";
import HeroImage from "../public/images/HeroImage.png";
import HeroImage2 from "../public/images/HeroImage2.png";

function Hero() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${HeroImage.src})`,
          height: "60vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className={`mob:hidden object-scale-down   `}
      >
        <Navbar />
      </div>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div
        className="sm:hidden mt-20"
        style={{
          backgroundImage: `url(${HeroImage2.src})`,
          height: "40vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 40vw",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
}

export default Hero;

// const HeroImageStyle = {
//   background: `url(${HeroImage})`,
//   width: "100%",
//   height: "98vh",
//   backgroundRepeat: "no-repeat",
//   objectFit: "contain",
//   // opacity: "0.8",
// };
