import React from "react";
import Image from "next/image";
import Cards from "../../styles/componentstyles/OurServicesCards.module.scss";
import OurservicesCardDetails from "../../pages/api/ourServicesCard.json";

interface Product {
  Image: string;
  Title: string;
  BodyText: string;
  Id: number;
}

export const OurservicesCard = (props: Product) => {
  const { Image, Title, BodyText, Id } = props;
  return (
    <>
      <div className="">
        <div
          className={`flex  flex-col items-center rounded-br-[30px] rounded-tl-[30px]  rounded-bl-[10px]  rounded-tr-[10px] border border-borderLight py-6 px-2  ${Cards.ourservicecardsze} `}
        >
          <img src={Image} className="mb-2" alt="..." />
          <h3 className={`text-center font-bold text-xl text-midnightash`}>
            {Title}
          </h3>
          <p className={`mt-2 text-center text-base px-4  text-lightash`}>
            {BodyText}
          </p>
        </div>
      </div>
    </>
  );
};

export const OurservicesCardMapping = () => {
  return (
    <div className="mx-auto grid gap-6 px-8 sm:grid-cols-3 lg:grid-cols-4 md:px-12 mt-20 sm:mt-24">
      {OurservicesCardDetails.OurservicesCard.map((item) => {
        return (
          <>
            <div className="" key={item.Id}>
              <OurservicesCard {...item} />
            </div>
          </>
        );
      })}
    </div>
  );
};
