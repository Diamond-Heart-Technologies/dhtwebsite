import styles from "../styles/componentstyles/footer.module.scss";
import logo from "../styles/generalstyles/fonts.module.scss";
import Image from "next/image";
import company from "../public/images/company.png";
import LogoMobile from "../public/images/LogoMobile.png";
import colors from "../styles/generalstyles/colors.module.scss";
import Link from "next/link";
import { LinkedIn } from "../Components/Icons.js/SocialMediaIcons";
import { WhatsApp } from "../Components/Icons.js/SocialMediaIcons";
import { Instagram } from "../Components/Icons.js/SocialMediaIcons";
import { Facebook } from "../Components/Icons.js/SocialMediaIcons";
import { Twitter } from "../Components/Icons.js/SocialMediaIcons";
import ScrollToTop from "../Components/Icons.js/scrolltoTheTopIcon";

const FooterRectangle = () => {
  return (
    <>
      <div
        className={`block mod:hidden sm:hidden lg:hidden xl:hidden 2xl:hidden ${styles.footerBg}`}>
        {/* <div className="container"> */}
        <div className={`flex flex-row justify-around`}>
          <div className="mt-96">
            <Image
              className={`mt-40  ${styles.footerWords}`}
              src={company}
              alt={""}
            />
          </div>
          <div className={`mt-96 ${colors.secColor}`}>
            <h1 className={`text-2xl font-bold mt-20`}>Quick Links</h1>
            <ul>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="/">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#Services">
                  Services
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active `}
                  aria-current="page"
                  href="#AboutUs">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active `}
                  aria-current="page"
                  href="#OurProcess">
                  Our Process
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#OurProject">
                  Our Project
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#Testimonial">
                  Testimonial
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={`mt-96 `}>
            <p className={`mt-44 ${colors.secColor}`}>
              <div className="flex justify-end">
                <ScrollToTop />
              </div>
              <a
                href="mailto:diamondhearttechnologies@gmail.com"
                target="_blank">
                {" "}
                diamondhearttechnologies@gmail.com
              </a>
            </p>
            <div className="flex flex-row space-x-7 justify-center mt-2">
              <a href="">
                {" "}
                <LinkedIn />
              </a>
              <a href="">
                {" "}
                <WhatsApp />
              </a>
              <a href="">
                <Instagram />
              </a>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export const FooterRectangleLg = () => {
  return (
    <>
      <div className={`hidden lg:block xl:block 2xl:block ${styles.footerBg}`}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div className="container"> */}
        <div className={`flex flex-row justify-around`}>
          <div className="mt-96">
            <Image
              className={`mt-40  ${styles.footerWords}`}
              src={company}
              alt={""}
            />
          </div>
          <div className={`mt-96 ${colors.secColor}`}>
            <h1 className={`text-2xl font-bold mt-20`}>Quick Links</h1>
            <ul>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="/">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#Services">
                  Services
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active `}
                  aria-current="page"
                  href="#AboutUs">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active `}
                  aria-current="page"
                  href="#OurProcess">
                  Our Process
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#OurProject">
                  Our Project
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#Testimonial">
                  Testimonial
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  href="#ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={`mt-96 `}>
            <p className={`mt-44 ${colors.secColor}`}>
              <div className="flex justify-end">
                <ScrollToTop />
              </div>
              <a
                href="mailto:diamondhearttechnologies@gmail.com"
                target="_blank">
                {" "}
                diamondhearttechnologies@gmail.com
              </a>
            </p>
            <div className="flex flex-row space-x-7 justify-center mt-2">
              <a href="">
                {" "}
                <LinkedIn />
              </a>
              <a href="">
                {" "}
                <WhatsApp />
              </a>
              <a href="">
                <Instagram />
              </a>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

// Mobile Version
export const FooterMobile = () => {
  return (
    <>
      <div className={` hidden mod:block sm:block ${styles.footerMobile}`}>
        <div className="justify-center items-center">
          <div className={``}>
            {/* <h1 className={` ${logo.logofontfamily}  ${colors.secColor}`}>
              DHT
            </h1> */}
            <div className="mt-96">
              <Image className={`mt-96`} src={LogoMobile} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRectangle;
