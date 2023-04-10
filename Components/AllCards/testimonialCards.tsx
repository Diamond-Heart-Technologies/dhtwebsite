import Image from "next/image";
import Link from "next/link";
import Card from "../../pages/api/testimonials.json";
// import styles from "../../styles/componentstyles/ourprocess.module.scss";

interface Product {
  Image: string;
  Name: string;
  Title: string;
  BodyText: string;
  Id: number;
}

export const TestimonialsCard = (props: Product) => {
  const { Image, Name, Title, BodyText, Id } = props;
  return (
    <>
      <div className="block max-w-xs rounded-lg bg-white shadow-2xl mb-16 mx-auto">
        <div className="mb-8 flex items-center justify-between pl-6">
          <div className="pt-6">
            <h3 className="text-2xl font-bold max-[374px]:text-lg">{Name}</h3>
            <p className="text-lg max-[374px]:text-sm">{Title}</p>
          </div>
          <picture>
            <img
              className="-mt-16 pl-3 max-[300px]:w-20 max-w-full h-auto"
              src={Image}
              alt=""
            />
          </picture>
        </div>
        <div className="p-6">
          <p className="mb-2 text-lg text-black">{BodyText}</p>
        </div>
      </div>
    </>
  );
};

export const TestimonialsCardMapping = () => {
  return (
    <>
      <div className="mx-auto grid gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3 mt-20 sm:mt-24">
        {Card.TestimonialsCard.map((item) => {
          return (
            <>
              <div className="" key={item.Id}>
                <TestimonialsCard {...item} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
