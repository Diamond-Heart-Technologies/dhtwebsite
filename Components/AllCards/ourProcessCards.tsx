import Image from "next/image";
import Link from "next/link";
import Card from "../../pages/api/ourProcess.json";

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
<<<<<<< HEAD
      <div
        className="py-6 text-white w-auto h-auto sm:px-6
      "
      >
        <Image src={Image} className="mb-2" alt="..." />
=======
      <div className="py-6 text-white w-auto h-auto sm:px-6">
        <picture>
          <img src={Image} alt="ourprocessCard" className="mb-2" />
        </picture>

>>>>>>> 95b8da0542defa06f6470c538525b2a9e87e22e2
        <h5 className="mb-2 text-lg font-bold">{Title}</h5>
        <p className="text-sm">{BodyText}</p>
      </div>
    </>
  );
};

export const OurProcessCardMapping = () => {
  return (
    <>
      <div className="mx-auto grid gap-6 px-6 sm:grid-cols-3 lg:grid-cols-4 sm:mt-8 lg:mt-10">
        {Card.OurProcessCard.map((item) => {
          return (
            <>
              <div key={item.Id}>
                <OurProcessCard {...item} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
