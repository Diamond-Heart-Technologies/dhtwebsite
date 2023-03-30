import styles from "../styles/componentstyles/footer.module.scss";
import logo from "../styles/generalstyles/fonts.module.scss";
import Image from "next/image";
import colors from "../styles/generalstyles/colors.module.scss";
import Link from "next/link";
import { LinkedIn } from "../Components/Icons.js/SocialMediaIcons";
import { WhatsApp } from "../Components/Icons.js/SocialMediaIcons";
import { Instagram } from "../Components/Icons.js/SocialMediaIcons";
import { Facebook } from "../Components/Icons.js/SocialMediaIcons";
import { Twitter } from "../Components/Icons.js/SocialMediaIcons";
import { LinkedIn1 } from "../Components/Icons.js/SocialMediaIcons";
import { WhatsApp1 } from "../Components/Icons.js/SocialMediaIcons";
import { Instagram1 } from "../Components/Icons.js/SocialMediaIcons";
import { Facebook1 } from "../Components/Icons.js/SocialMediaIcons";
import { Twitter1 } from "../Components/Icons.js/SocialMediaIcons";
// import ScrollToTop from "../Components/Icons.js/scrolltoTheTopIcon";

const FooterRectangle = () => {
  return (
    <>
      <div className={`block mod:hidden ${styles.footerBg}`}>
        <div className={`flex flex-row space-x-1 justify-around`}>
          <div className={`mt-96 my-32`}>
            <h1
              className={`mt-20 ${colors.secColor} ${styles.logoText} ${logo.logofontfamily}`}>
              DHT
            </h1>
            <p
              className={`${colors.secColor} ${logo.logofontfamily} ${styles.logoPtext}`}>
              DiamondHeartTechnologies
            </p>
          </div>
          <div className={` sm:mt-72 lg:mt-72 2xl:mt-80 ${colors.secColor}`}>
            <h1 className={`text-xl font-bold mt-24 truncate`}>Quick Links</h1>
            <ul className="truncate">
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
          <div className={`mt-96`}>
            <p className={`mt-16  ${colors.secColor}`}>
              {/* <div className="flex justify-end">
                <ScrollToTop />
              </div> */}
              <a
                href="mailto:diamondhearttechnologies@gmail.com"
                target="_blank">
                {" "}
                diamondhearttechnologies@gmail.com
              </a>
            </p>
            <div className="flex flex-row space-x-7 justify-center mt-2">
              <a
                href="https://www.linkedin.com/showcase/diamond-heart-technologies/"
                target="_blank">
                {" "}
                <LinkedIn />
              </a>
              <a href="https://wa.me/message/S6OAQEBGFWPHP1" target="_blank">
                {" "}
                <WhatsApp />
              </a>

              <a
                href="https://instagram.com/diamondhearttechnologies?igshid=ZDdkNTZiNTM="
                target="_blank">
                <Instagram />
              </a>
              <a
                href="http://www.facebook.com/Diamond-Heart-Technologies-100658196292297/"
                target="_blank">
                <Facebook />
              </a>
              <a href="" target="_blank">
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
      <div
        className={`hidden mod:block overflow-hidden ${styles.footerMobile}`}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className={`text-center mb-16 ${styles.footerText}`}>
          <div className={`mt-96`}>
            <h1
              className={`mt-96  ${colors.secColor} ${logo.logofontfamily} ${styles.logoText} ${styles.logoTextMobile}`}>
              DHT
            </h1>
            <p
              className={`${colors.secColor} ${logo.logofontfamily} ${styles.logoPtextMobile}`}>
              DiamondHeartTechnologies
            </p>
          </div>
          <div className={`${colors.secColor}`}>
            <h1 className={`font-bold mt-12 text-center`}>Quick Links</h1>
            <div className="flex space-x-6 justify-center mt-5">
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
                <li className="mt-2 truncate">
                  <Link
                    className={`nav-link active `}
                    aria-current="page"
                    href="#AboutUs">
                    About Us
                  </Link>
                </li>
              </ul>

              <ul>
                <li className="mt-2 truncate">
                  <Link
                    className={`nav-link active `}
                    aria-current="page"
                    href="#OurProcess">
                    Our Process
                  </Link>
                </li>
                <li className="mt-2 truncate">
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
                <li className="mt-2 truncate">
                  <Link
                    className={`nav-link active`}
                    aria-current="page"
                    href="#ContactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`mt-12`}>
              <p className={`${colors.secColor} ${styles.logoPgmail}`}>
                <a
                  href="mailto:diamondhearttechnologies@gmail.com"
                  target="_blank">
                  {" "}
                  diamondhearttechnologies@gmail.com
                </a>
              </p>
              <div className="flex flex-row space-x-11 justify-center mt-2">
                <a
                  href="https://www.linkedin.com/showcase/diamond-heart-technologies/"
                  target="_blank">
                  {" "}
                  <LinkedIn1 />
                </a>
                <a href="https://wa.me/message/S6OAQEBGFWPHP1" target="_blank">
                  {" "}
                  <WhatsApp1 />
                </a>

                <a
                  href="https://instagram.com/diamondhearttechnologies?igshid=ZDdkNTZiNTM="
                  target="_blank">
                  <Instagram1 />
                </a>
                <a
                  href="http://www.facebook.com/Diamond-Heart-Technologies-100658196292297/"
                  target="_blank">
                  <Facebook1 />
                </a>
                <a href="" target="_blank">
                  <Twitter1 />
                </a>
              </div>
              {/* <div className="flex justify-end mt-2">
                <ScrollToTop />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRectangle;
