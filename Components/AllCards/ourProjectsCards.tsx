import React from "react";
import projectCard from "../../pages/api/ourprojects.json";

interface Product {
  Image: string;
  Title: string;
  BodyText: string;
  Id: number;
  Link1: string;
  Link2: string;
  figma: string;
  vercel: string;
}

export const OurProjectsCards = (props: Product) => {
  const { Image, Title, BodyText, Id, Link1, Link2, figma, vercel } = props;
  return (
    <>
      <div
        className={`flex  flex-col   border border-borderLight  shadow-xl hover:shadow-inner`}
      >
        <img src={Image} className="" alt="..." />
        <h3
          className={`text-center font-medium text-xl pt-5 pb-2 text-midnightash`}
        >
          {Title}
        </h3>
        <p className={` text-start text-base px-4  text-lightash`}>
          {BodyText}
        </p>

        <ul className="list-disc pl-9 pb-5 text-pupple font-medium">
          <li className="">
            <a href={figma} target="_blank">
              {" "}
              {Link1}
            </a>
          </li>
          <li>
            <a href={vercel} target="_blank">
              {" "}
              {Link2}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const OurProjectsCardsMapping = () => {
  return (
    <div className="mx-auto grid gap-6 px-8 sm:grid-cols-3 lg:grid-cols-4 md:px-12 mt-20 sm:mt-24">
      {projectCard.OurprojectsCard.map((item) => {
        return (
          <>
            <div className="" key={item.Id}>
              <OurProjectsCards {...item} />
            </div>
          </>
        );
      })}
    </div>
  );
};
