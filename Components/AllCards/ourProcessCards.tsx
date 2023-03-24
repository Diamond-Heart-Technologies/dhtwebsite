import Image from "next/image";
import Link from "next/link";
import Card from "../../pages/api/ourProcess.json";
import styles from "../../styles/componentstyles/ourprocess.module.scss";

interface Product {
  Image: string;
  Title: string;
  BodyText: string;
  Id: number;
}

export const OurProcessCard = (props: Product) => {
  const { Image, Title, BodyText, Id } = props;
  return (
    <>
      {/* <div className="mx-auto grid gap-8 px-8 sm:grid-cols-4 md:px-12"> */}
      <div className="py-6 text-white w-auto h-auto sm:px-6">
        <img src={Image} className="mb-2" alt="..." />
        <h5 className="mb-2 text-lg font-bold">{Title}</h5>
        <p className="text-sm">{BodyText}</p>
      </div>
      {/* </div> */}
    </>
  );
};

export const OurProcessCardMapping = () => {
  return (
    // <div className="container">
    <div className="mx-auto grid gap-6 px-8 sm:grid-cols-3 lg:grid-cols-4 md:px-12 sm:mt-8 lg:mt-10">
      {Card.OurProcessCard.map((item) => {
        return (
          <>
            <div className="" key={item.Id}>
              <OurProcessCard {...item} />
            </div>
          </>
        );
      })}
    </div>
    // </div>
  );
};
