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
        className="mod:hidden "
      >
        <Navbar />
      </div>

      <div
        className="sm:hidden "
        style={{
          backgroundImage: `url(${HeroImage2.src})`,
          height: "40vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 40vw",
          backgroundPosition: "center",
          paddingBottom: "600px",
        }}
      >
        <div className="">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Hero;
