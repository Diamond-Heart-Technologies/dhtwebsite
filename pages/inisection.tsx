import Link from "next/link";
import Image from "next/image";
import ourprocessstyles from "../styles/componentstyles/ourprocess.module.scss";
import { OurProcessCardMapping } from "@/Components/AllCards/ourProcessCards";
import { TestimonialsCardMapping } from "@/Components/AllCards/testimonialCards";

export default function IniSection() {
  return (
    <>
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
  return (
    <>
      <div className="container mx-auto px-8 md:px-12 text-black mt-24">
        <h2 className="text-center text-2xl">About Us</h2>
        <p className="text-left pt-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptates molestiae id distinctio explicabo vitae hic at, commodi
          provident repudiandae eaque ex nulla mollitia cumque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eum natus, unde pariatur
          perspiciatis mollitia voluptates exercitationem numquam nesciunt
          quisquam, consequuntur temporibus, molestias magni? Ea quae officiis
          saepe quam. Voluptates.
        </p>
      </div>
    </>
  );
};

export const OurProcess = () => {
  return (
    <>
      {/* desktop */}
      <div
        className={`mx-auto mt-24 text-white py-8 hidden sm:block ${ourprocessstyles.DesktopBg}`}
      >
        <h2 className="text-center text-2xl sm:mt-16 lg:mt-28">Our Process</h2>
        <OurProcessCardMapping />
      </div>

      {/* mobile */}
      <div
        className={`mx-auto mt-24 text-white py-20 block sm:hidden ${ourprocessstyles.MobileBg}`}
      >
        <h2 className="text-center text-2xl mt-8 sm:mt-16 lg:mt-28">
          Our Process
        </h2>
        <OurProcessCardMapping />
      </div>
    </>
  );
};

export const Whatourcustomersaresaying = () => {
  return (
    <>
      <div className={`container mx-auto mt-24`}>
        <h2 className="text-center text-2xl">What Our Customers Are Saying</h2>
        <TestimonialsCardMapping />
      </div>
    </>
  );
};
