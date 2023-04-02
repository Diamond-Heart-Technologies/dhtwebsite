import React from "react";
import { OurservicesCardMapping } from "../Components/AllCards/ourServicescards";
import { OurProjectsCardsMapping } from "../Components/AllCards/ourProjectsCards";
import Hero from "../Components/hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className=" bg-white" id="ourservices">
          <OurservicesCardMapping />
        </section>
        <section className=" bg-white" id="ourprojects">
          <OurProjectsCardsMapping />
        </section>
      </main>
    </>
  );
}
