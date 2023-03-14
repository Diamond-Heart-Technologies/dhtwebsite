import Link from "next/link";
import Image from "next/image";

export default function IniSection() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello</h1>
      </div>

      <div>
        <AboutUs />
      </div>

      <div>
        <OurProcess />
      </div>

      <div>
        <Whatourcustomersaresaying />
      </div>
    </>
  );
}

export const AboutUs = () => {
  return <div></div>;
};
export const OurProcess = () => {
  return <div></div>;
};
export const Whatourcustomersaresaying = () => {
  return <div></div>;
};
