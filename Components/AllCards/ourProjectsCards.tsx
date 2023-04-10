import React from "react";
import projectCard from "../../pages/api/ourprojects.json";
import Image from "next/image";

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
        <picture>
          <img src={Image} alt="ourProjectCArds" width={800} height={500} />
        </picture>
        <h3
          className={`text-center font-medium text-xl pt-5 pb-2 text-midnightash`}
        >
          {Title}
        </h3>
        <p className={` text-start text-base px-4  text-lightash`}>
          {BodyText}
        </p>

        <ul className="list-disc pl-6 pb-5 font-medium">
          <li className="text-purple">
            <a href={figma} target="_blank" className="flex" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-2 h-2 mt-2 mx-1"
              >
                <path
                  // fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {Link1}
            </a>
          </li>
          <li className="text-purple">
            <a href={vercel} target="_blank" className="flex" rel="noreferrer">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-2 h-2 mt-2 mx-1"
              >
                <path
                  // fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
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
